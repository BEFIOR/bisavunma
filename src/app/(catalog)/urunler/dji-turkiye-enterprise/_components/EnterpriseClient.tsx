"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SpotlightCard from "@/components/SpotlightCard";
import type { DbProduct } from "@/lib/products";

type Group = { key: string; items: DbProduct[] };

export default function EnterpriseClient({
  groups,
  basePath,
}: {
  groups: Group[];
  basePath: string;
}) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState<string | null>(null);

  const normalized = (s: string) => s.toLocaleLowerCase("tr");

  const filtered = useMemo(() => {
    const query = normalized(q).trim();
    if (!query) return groups;
    return groups
      .map((g) => ({
        key: g.key,
        items: g.items.filter(
          (p) =>
            normalized(p.title).includes(query) ||
            (p.description ? normalized(p.description).includes(query) : false)
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [groups, q]);

  const ids = filtered.map((g) => toId(g.key));
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          );
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: [0.1, 0.25, 0.5, 0.75] }
    );
    ids.forEach((id) => {
      const el = sectionRefs.current[id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex flex-col gap-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Üründe ara..."
          aria-label="Ürünlerde ara"
          className="w-full rounded-xl bg-neutral-900 border border-neutral-800 px-4 py-2.5 text-gray-200 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-600"
        />

        <div className="sticky top-16 z-30">
          <div className="rounded-xl bg-neutral-950/90 backdrop-blur-md border border-neutral-800 px-2 py-2 overflow-x-auto">
            <div className="flex gap-2">
              {filtered.map((g) => {
                const id = toId(g.key);
                const isActive = active === id;
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-colors ${
                      isActive
                        ? "bg-sky-600 text-white"
                        : "bg-neutral-900 text-gray-300 hover:text-white"
                    }`}
                  >
                    {g.key}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {filtered.map((g) => {
        const id = toId(g.key);
        return (
          <div
            key={id}
            id={id}
            ref={(el) => {
              sectionRefs.current[id] = el;
            }}
            className="scroll-mt-28"
          >
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {g.key}
              </h2>
              <div className="h-px flex-1 ml-6 bg-neutral-800" />
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
              {g.items.map((p) => (
                <Link
                  key={p.slug}
                  href={`${basePath}/${p.slug}`}
                  className="group block"
                  aria-label={`${p.title} ürününü incele`}
                >
                  <SpotlightCard className="h-full p-4 hover:shadow-lg transition-shadow">
                    <div className="w-full aspect-[4/3] relative rounded-xl overflow-hidden bg-neutral-950 ring-1 ring-neutral-800">
                      <Image
                        src={p.image ?? "/logo.webp"}
                        alt={p.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center"
                        priority={false}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-white mt-4">
                      {p.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2 mt-2">
                      {p.description}
                    </p>
                    <div className="mt-3 text-sky-400 group-hover:text-sky-300 font-medium">
                      İncele →
                    </div>
                  </SpotlightCard>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function toId(s: string) {
  return s
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-ğüşöçı]/g, "");
}
