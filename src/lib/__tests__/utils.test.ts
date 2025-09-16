import { describe, expect, it } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("merges class names while keeping the last conflicting value", () => {
    expect(cn("px-2", "px-4", "bg-white", "bg-black")).toBe("px-4 bg-black");
  });

  it("filters falsy values before merging", () => {
    const shouldInclude = true;
    expect(cn("p-2", shouldInclude && "text-white", undefined, null)).toBe(
      "p-2 text-white"
    );
  });
});
