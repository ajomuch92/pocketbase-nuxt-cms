import type { RecordListOptions, RecordOptions } from 'pocketbase'

import type { ZodType } from 'zod'
import pb from '../data'

export class BaseService<T extends Record<string, unknown>> {
  constructor(private readonly collectionName: string, private readonly schema: ZodType) {
  }

  async getAll({ page, perPage, options}: { page?: number, perPage?: number, options?: RecordListOptions }) {
    return await pb.collection(this.collectionName).getList<T>(page, perPage, options)
  }

  async getById(id: string, options?: RecordOptions) {
    return await pb.collection(this.collectionName).getOne<T>(id, options)
  }

  async create(data: T | FormData) {
    return await pb.collection(this.collectionName).create(data)
  }

  async update(id: string, data: Partial<T> | FormData) {
    return await pb.collection(this.collectionName).update(id, data)
  }

  async delete(id: string) {
    return await pb.collection(this.collectionName).delete(id)
  }

  validate(data: unknown) {
    if (!this.schema) {
      throw new Error('Schema not set for validation')
    }
    return this.schema.safeParse(data)
  }
}
