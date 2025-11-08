"use client";

import { trackButtonClick } from "@/lib/gtag";

interface QuoteButtonProps {
  category: string;
  slug: string;
  className?: string;
}

export default function QuoteButton({
  category,
  slug,
  className = "mt-6 w-full bg-sky-600 hover:bg-sky-500 text-white font-medium py-2.5 rounded-md transition-colors",
}: QuoteButtonProps) {
  const handleClick = () => {
    trackButtonClick("quote_request", `${category}_${slug}`);
  };

  return (
    <button onClick={handleClick} className={className}>
      Teklif Al
    </button>
  );
}
