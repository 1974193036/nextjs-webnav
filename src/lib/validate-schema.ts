import { z } from 'zod'

export const userAuthSchema = z.object({
  email: z.string().email('请输入邮箱'),
  password: z.string().min(6, '最少输入6个字符')
})
