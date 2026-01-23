import { z } from 'zod'

// Schema for collection: users
export const UsersSchema = z.object({
  id: z.string(),
  created: z.date(),
  updated: z.date(),
  email: z.email(),
  emailVisibility: z.boolean().optional().nullable(),
  verified: z.boolean().optional().nullable(),
  name: z.string().max(255).optional().nullable(),
  avatar: z.url().optional().nullable(),
  bio: z.string().max(500).optional().nullable()
})

export type Users = z.infer<typeof UsersSchema>

// Schema for collection: tags
export const TagsSchema = z.object({
  id: z.string(),
  created: z.date(),
  updated: z.date(),
  name: z.string(),
  slug: z.string().optional().nullable()
})

export type Tags = z.infer<typeof TagsSchema>

// Schema for collection: categories
export const CategoriesSchema = z.object({
  id: z.string(),
  created: z.date(),
  updated: z.date(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  parentId: z.string().optional().nullable()
})

export type Categories = z.infer<typeof CategoriesSchema>

// Schema for collection: pages
export const PagesSchema = z.object({
  id: z.string(),
  created: z.date(),
  updated: z.date(),
  title: z.string(),
  slug: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  status: z.enum(['draft', 'published', 'not published']).optional().nullable(),
  publishedAt: z.date().optional().nullable()
})

export type Pages = z.infer<typeof PagesSchema>

// Schema for collection: media
export const MediaSchema = z.object({
  id: z.string(),
  created: z.date(),
  updated: z.date(),
  file: z.url().optional().nullable(),
  alt: z.string().optional().nullable(),
  title: z.string().optional().nullable(),
  caption: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  uploadedBy: z.string().optional().nullable(),
  type: z.enum(['image', 'video', 'audio']).optional().nullable()
})

export type Media = z.infer<typeof MediaSchema>

// Schema for collection: posts
export const PostsSchema = z.object({
  id: z.string(),
  created: z.date(),
  updated: z.date(),
  title: z.string(),
  slug: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  pageId: z.string().optional().nullable(),
  status: z.enum(['draft', 'scheduled', 'published']).optional().nullable(),
  thumbnail: z.url().optional().nullable(),
  allowComments: z.boolean().optional().nullable(),
  userId: z.string().optional().nullable(),
  categories: z.array(z.string()).optional().nullable(),
  tags: z.array(z.string()).optional().nullable(),
  publishedAt: z.date().optional().nullable()
})

export type Posts = z.infer<typeof PostsSchema>

// Schema for collection: comments
export const CommentsSchema = z.object({
  id: z.string(),
  created: z.date(),
  updated: z.date(),
  postId: z.string().optional().nullable(),
  authorName: z.string().optional().nullable(),
  authorEmail: z.email().optional().nullable(),
  content: z.string().optional().nullable(),
  userId: z.string().optional().nullable(),
  status: z.enum(['pending', 'approved', 'trash', 'spam']).optional().nullable(),
  parentId: z.string().optional().nullable()
})

export type Comments = z.infer<typeof CommentsSchema>

// Schema for collection: settings
export const SettingsSchema = z.object({
  id: z.string(),
  created: z.date(),
  updated: z.date(),
  siteName: z.string().optional().nullable(),
  siteDescription: z.string().optional().nullable(),
  logo: z.url().optional().nullable(),
  homePage: z.string().optional().nullable(),
  blogPage: z.string().optional().nullable()
})

export type Settings = z.infer<typeof SettingsSchema>
