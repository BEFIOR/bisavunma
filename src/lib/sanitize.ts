const PLACEHOLDER_PREFIX = "__HTML_PLACEHOLDER__";

const allowedTags: Record<string, { selfClosing?: boolean; allowAttrs?: string[] }> = {
  br: { selfClosing: true },
  p: {},
  ul: {},
  ol: {},
  li: {},
  strong: {},
  em: {},
  b: {},
  i: {},
  h1: {},
  h2: {},
  h3: {},
  h4: {},
  h5: {},
  h6: {},
  a: { allowAttrs: ["href"] },
};

const SAFE_PROTOCOLS = new Set(["http:", "https:", "mailto:", "tel:"]);

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function decodeBasicEntities(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/gi, "'");
}

function encodeAttribute(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&#39;");
}

function sanitiseHref(rawHref: string | undefined): string | null {
  if (!rawHref) return null;
  const href = decodeBasicEntities(rawHref.trim());
  if (!href) return null;
  if (href.startsWith("/")) return encodeAttribute(href);
  if (href.startsWith("#")) return encodeAttribute(href);
  try {
    const url = new URL(href);
    if (SAFE_PROTOCOLS.has(url.protocol)) {
      return encodeAttribute(url.href);
    }
  } catch {
    // Not a valid absolute URL, ignore
  }
  return null;
}

type PlaceholderMap = Map<string, string>;

function normaliseTag(
  rawTag: string,
  placeholders: PlaceholderMap,
  counter: { value: number }
): string {
  const isClosing = /^<\s*\//.test(rawTag);
  const nameMatch = rawTag.match(/^<\s*\/?\s*([a-zA-Z0-9]+)/);
  if (!nameMatch) return "";
  const tagName = nameMatch[1].toLowerCase();
  const config = allowedTags[tagName];
  if (!config) return "";

  let replacement: string;

  if (config.selfClosing) {
    replacement = `<${tagName} />`;
  } else if (isClosing) {
    replacement = `</${tagName}>`;
  } else {
    let attrs = "";
    if (tagName === "a" && config.allowAttrs?.includes("href")) {
      const hrefMatch = rawTag.match(/href\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+))/i);
      const hrefValue = hrefMatch?.[1] ?? hrefMatch?.[2] ?? hrefMatch?.[3];
      const safeHref = sanitiseHref(hrefValue);
      if (safeHref) {
        attrs = ` href="${safeHref}"`;
      }
    }
    replacement = `<${tagName}${attrs}>`;
  }

  const key = `${PLACEHOLDER_PREFIX}${counter.value++}__`;
  placeholders.set(key, replacement);
  return key;
}

const tagRegex = /<\s*\/?\s*[A-Za-z][^>]*>/g;
const dangerousBlockTags = /<\s*(script|style)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi;

export function sanitizeHtml(input: string | null | undefined): string {
  if (!input) return "";

  const withoutDangerousBlocks = input.replace(dangerousBlockTags, "");

  const placeholders: PlaceholderMap = new Map();
  const counter = { value: 0 };

  const stripped = withoutDangerousBlocks.replace(tagRegex, (tag) =>
    normaliseTag(tag, placeholders, counter)
  );
  let escaped = escapeHtml(stripped);

  for (const [placeholder, value] of placeholders.entries()) {
    escaped = escaped.replaceAll(placeholder, value);
  }

  return escaped;
}

export default sanitizeHtml;
