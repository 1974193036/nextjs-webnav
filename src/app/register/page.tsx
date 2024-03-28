import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { UserAuthForm } from '@/components/user-auth-form'

export default function RegisterPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center -mt-10">
      <Button asChild variant="ghost">
        <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8">
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </Link>
      </Button>

      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Icons.logo className="mx-auto h-6 w-6" />
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Create an account with your email and password
          </p>

          <UserAuthForm type="register" className="py-5" />

          <p className="px-8 text-center text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link
              href="/login"
              className="hover:text-brand font-semibold text-gray-800 underline underline-offset-4"
            >
              Sign in
            </Link>{' '}
            instead.
          </p>
        </div>
      </div>
    </div>
  )
}
