"use client";

import { useEffect } from "react";
import { trackProductView } from "@/lib/gtag";

interface ProductTrackingProps {
  productName: string;
  category: string;
}

export default function ProductTracking({
  productName,
  category,
}: ProductTrackingProps) {
  useEffect(() => {
    // Ürün sayfası yüklendiğinde tracking yap
    trackProductView(productName, category);
  }, [productName, category]);

  return null; // Bu component görsel bir şey render etmez
}
