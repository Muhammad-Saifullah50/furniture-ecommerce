'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { SignInSchema } from '@/validations/SignInSchema'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { ZodError } from 'zod'
import { RotatingLines } from 'react-loader-spinner'
import { redirect, useRouter } from 'next/navigation'
import { useToast } from '@/components/ui/use-toast'


const SigninPage = () => {
  // const { toast } = useToast()
  // const username = useRef('')
  // const email = useRef('')
  // const password = useRef('')
  // const router = useRouter()
  // const [error, setError] = useState('')
  // const [loading, setLoading] = useState(false)

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()

  //   try {
  //     setLoading(true)
  //     const validation = SignInSchema.parse({
  //       username: username.current,
  //       email: email.current,
  //       password: password.current,
  //     })

  //     const result = await signIn('credentials', {
  //       username: username.current,
  //       email: email.current,
  //       password: password.current,
  //       redirect: false,
  //       callbackUrl: 'http://localhost:3000/sell'
  //     })

  //     console.log(result)
  //     if (result && result.status === 400 || result && result.status === 500) {
  //       toast({
  //         title: 'Operation failed',
  //         description: 'Something went wrong',
  //         variant: 'destructive',
  //       })
  //     } else {
  //       toast({
  //         title: 'Success',
  //         description: 'Signed in successfully',
  //       })
  //       router.push('/sell')
  //     }

  //   } catch (error) {
  //     if (error instanceof ZodError) {
  //       const errmsg = error.flatten().fieldErrors;
  //       const firstError = Object.keys(errmsg)[0]
  //       const firstErrorValue = errmsg[firstError]
  //       //@ts-ignore
  //       setError(firstErrorValue)

  //       if (Object.keys(errmsg).length === 0) {
  //         setError(error.flatten().formErrors[0])
  //       }
  //     }
  //   } finally {
  //     setLoading(false)
  //   }


  // }
  return (<>
    <section className='flex flex-col items-center justify-center min-h-[80vh]'>
      {/* <h2 className='font-bold text-gold-primary text-3xl my-4 w-1/2 text-center'>Welcome back! Please sign in to continue</h2>

      <form onSubmit={handleSubmit} className='w-1/2 flex flex-col gap-5'>

        {error && (
          <div className='bg-red-100 py-2 text-sm flex flex-col justify-center items-center  border-red-600 border-2'>
            <h6>Authentication Failed</h6>
            <p className='text-red-600'>{error}</p>
          </div>
        )}

        <div>
          <Label>Name</Label>
          <Input placeholder='Your username' onChange={(e) => (username.current = e.target.value)} />
        </div>
        <div>
          <Label>Email</Label>
          <Input placeholder='Your email address' type='email'
            onChange={(e) => (email.current = e.target.value)} />
        </div>
        <div>
          <Label>Password</Label>
          <Input type='password' placeholder='Your password' onChange={(e) => (password.current = e.target.value)} />
        </div>
        <Button
          className='bg-gold-primary hover:bg-gold-secondary flex gap-2 text-base'
          disabled={loading}
        >Sign in with credentials {loading && (<RotatingLines
          strokeColor="white"
          strokeWidth="5"
          animationDuration="1"
          width="24"
          visible={true}
        />)}</Button>
        <span className='flex justify-center items-center gap-5'>
          <div className='bg-gray-300 w-full h-[2px]' />
          or
          <div className='bg-gray-300 w-full  h-[2px]' />
        </span>

      </form>
      <Button
        className='bg-white text-base text-black w-1/2 mt-4 hover:bg-transparent border-black border-[1px] py-2 hover:bg-slate-100 flex gap-5'
        onClick={() => signIn('google')}
      >
        <Image
          src={'/google.svg'}
          width={35}
          height={35}
          alt='google'
        />
        Sign in with Google </Button> */}
    </section>

  </>)
}

export default SigninPage
