import { CategoriesSchema, CommentsSchema, MediaSchema, PagesSchema, PostsSchema, SettingsSchema, TagsSchema, UsersSchema, type Categories, type Comments, type Media, type Pages, type Posts, type Settings, type Tags, type Users } from '../models/pocketbase'

import { BaseService } from './base-service'

export const userServices = new BaseService<Users>('users', UsersSchema)
export const categoriesService = new BaseService<Categories>('categories', CategoriesSchema)
export const commentsService = new BaseService<Comments>('comments', CommentsSchema)
export const mediaService = new BaseService<Media>('media', MediaSchema)
export const pagesService = new BaseService<Pages>('pages', PagesSchema)
export const postsService = new BaseService<Posts>('posts', PostsSchema)
export const settingsService = new BaseService<Settings>('settings', SettingsSchema)
export const tagsService = new BaseService<Tags>('tags', TagsSchema)
