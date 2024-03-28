'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter, useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { z } from 'zod'
import { cn } from '@/lib/utils'
import { userAuthSchema } from '@/lib/validate-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { useToast } from '@/components/ui/use-toast'
import { registerApi } from '@/actions'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  type: 'login' | 'register'
}

type FormData = z.infer<typeof userAuthSchema>

export function UserAuthForm({ className, type, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(userAuthSchema)
  })

  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [isGitHubLoading, setIsGitHubLoading] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsLoading(true)

    const { email, password } = data
    if (type === 'login') {
      // const signInResult = await signIn("credentials", {
      //   email: email.toLowerCase(),
      //   password: password,
      //   redirect: false,
      //   callbackUrl: searchParams?.get("from") || "/",
      // })
      // if (signInResult?.error) {
      //   setIsLoading(false);
      //   return toast({
      //     title: "Something went wrong.",
      //     description: signInResult?.error,
      //     variant: "destructive",
      //   })
      // }
      // toast({
      //   title: 'Image uploaded successfully',
      //   description: '1 credit was deducted from your account',
      //   duration: 500000,
      //   className: 'success-toast'
      // })
      // router.refresh()
      // router.push('/')
    } else {
      // const res = await fetch('/api/register', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     email: email.toLowerCase(),
      //     password: password
      //   })
      // })
      // 客户端组件中调用服务器api
      const res = await registerApi({
        email,
        password
      })
      // console.log(res)
      if (res.status === 200) {
        toast({
          title: '注册成功',
          description: 'account created! Redirecting to homepage...',
          className: 'success-toast',
          duration: 2000
        })
        setTimeout(() => {
          router.push('/')
        }, 1500)
      } else {
        const { error } = await res.json()
        toast({
          title: '出现一些错误',
          description: error,
          className: 'error-toast',
          duration: 2000
        })
      }
    }

    setIsLoading(false)
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              {...register('email')}
            />
            {errors?.email && (
              <p className="text-left px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Password
            </Label>
            <Input
              id="password"
              placeholder="password"
              type="password"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={isLoading || isGitHubLoading}
              {...register('password')}
            />
            {errors?.password && (
              <p className="text-left px-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            {type === 'register' ? '注册' : '登录'}
          </Button>
        </div>
      </form>
    </div>
  )
}
