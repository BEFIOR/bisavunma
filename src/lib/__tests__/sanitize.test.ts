import { describe, expect, it } from "vitest";
import { sanitizeHtml } from "@/lib/sanitize";

describe("sanitizeHtml", () => {
  it("removes disallowed tags like script", () => {
    const result = sanitizeHtml("Hello <script>alert('x')</script>world");
    expect(result).toBe("Hello world");
  });

  it("preserves basic formatting tags", () => {
    const result = sanitizeHtml("<p>Test <strong>bold</strong></p>");
    expect(result).toBe("<p>Test <strong>bold</strong></p>");
  });

  it("strips attributes except safe href on anchor", () => {
    const result = sanitizeHtml('<a href="javascript:alert(1)" onclick="run()">link</a>');
    expect(result).toBe("<a>link</a>");

    const safeLink = sanitizeHtml('<a href="https://example.com" target="_blank">safe</a>');
    expect(safeLink).toBe('<a href="https://example.com/">safe</a>');
  });

  it("escapes special characters outside of allowed tags", () => {
    const result = sanitizeHtml('<p>5 > 3 & 2 < 4</p>');
    expect(result).toBe("<p>5 &gt; 3 &amp; 2 &lt; 4</p>");
  });

  it("allows relative and hash hrefs", () => {
    const result = sanitizeHtml('<a href="/docs">docs</a> and <a href="#top">top</a>');
    expect(result).toBe('<a href="/docs">docs</a> and <a href="#top">top</a>');
  });
});
