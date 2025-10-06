import categoriesData from "@/data/categories.json";

export interface Category {
  id: number;
  slug: string;
  title: string;
  parentId: number | null;
  position: number;
}

/**
 * Get static categories data for SSG
 * This avoids Prisma queries during build time
 */
export function getStaticCategories(): Category[] {
  return categoriesData as Category[];
}

/**
 * Get categories with optional filtering
 */
export function getCategories(options?: {
  parentId?: number | null;
  sortBy?: 'position' | 'title';
  order?: 'asc' | 'desc';
}): Category[] {
  let categories = [...categoriesData] as Category[];

  // Filter by parentId if specified
  if (options?.parentId !== undefined) {
    categories = categories.filter(cat => cat.parentId === options.parentId);
  }

  // Sort categories
  const sortBy = options?.sortBy || 'position';
  const order = options?.order || 'asc';
  
  categories.sort((a, b) => {
    let comparison = 0;
    
    if (sortBy === 'position') {
      comparison = a.position - b.position;
    } else if (sortBy === 'title') {
      comparison = a.title.localeCompare(b.title, 'tr');
    }
    
    return order === 'desc' ? -comparison : comparison;
  });

  return categories;
}

/**
 * Get category by slug
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categoriesData.find(cat => cat.slug === slug) as Category | undefined;
}

/**
 * Get category by ID
 */
export function getCategoryById(id: number): Category | undefined {
  return categoriesData.find(cat => cat.id === id) as Category | undefined;
}
