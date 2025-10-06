import { cache } from "react";
import { listCategories } from "@/server/repositories/categories";
import { getProduct } from "@/server/repositories/products";
import { getProductBySlug } from "@/lib/products";

// Cached category loader - shared across navbar and other components
export const getCachedCategories = cache(async () => {
  return listCategories();
});

// Cached product loader - shared across page components and generateMetadata
export const getCachedProduct = cache(async (slug: string) => {
  return getProductBySlug(slug);
});

// Cached product with full details - for when we need the complete product data
export const getCachedProductWithDetails = cache(async (slug: string) => {
  return getProduct(slug);
});

// Cache configuration for different data types
export const CACHE_TAGS = {
  CATEGORIES: "categories",
  PRODUCTS: "products",
} as const;

// Cache durations (in seconds)
export const CACHE_DURATIONS = {
  CATEGORIES: 300, // 5 minutes
  PRODUCTS: 600, // 10 minutes
} as const;
