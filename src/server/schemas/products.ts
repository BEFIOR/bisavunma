import { z } from "zod";

export const ProductBaseSchema = z.object({
  title: z.string().min(2).max(191),
  description: z.string().max(10_000).optional().or(z.literal("")).transform(v => (v === "" ? undefined : v)),
  image: z.string().url().optional().or(z.literal("")).transform(v => (v === "" ? undefined : v)),
});

export const ProductCreateSchema = ProductBaseSchema.extend({
  // Accept empty string and normalize to undefined so slug can be auto-generated from title
  slug: z
    .string()
    .min(2)
    .max(191)
    .regex(/^[a-z0-9-]+$/)
    .optional()
    .or(z.literal(""))
    .transform((v) => (v === "" ? undefined : v)),
  categoryId: z.coerce.number().int().positive().optional(),
});

export const ProductUpdateSchema = ProductBaseSchema.extend({
  slug: z.string().min(2).max(191).regex(/^[a-z0-9-]+$/),
  categoryId: z.coerce.number().int().positive().optional(),
});

export type ProductCreateInput = z.infer<typeof ProductCreateSchema>;
export type ProductUpdateInput = z.infer<typeof ProductUpdateSchema>;
