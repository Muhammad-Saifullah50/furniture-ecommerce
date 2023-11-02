'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'


const LoginPage = () => {
  const { data: session } = useSession();
  console.log(session, 'session')

  const username = useRef('')
  const email = useRef('')
  const password = useRef('')


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await signIn('credentials', {
      username: username.current,
      email: email.current,
      password: password.current,
      redirect: true,
      callbackUrl: 'http://localhost:3000'
    })
  }
  return (<>
    <section className='flex flex-col items-center justify-center min-h-[80vh]'>
      <h2 className='font-bold text-gold-primary text-3xl my-4'>Sign in to become a seller</h2>

      <form onSubmit={handleSubmit} className='w-1/2 flex flex-col gap-5'>
        <div>
          <Label>Name</Label>
          <Input placeholder='Your name' onChange={(e) => (username.current = e.target.value)} />
        </div>
        <div>
          <Label>Email</Label>
          <Input placeholder='Your email address'
            onChange={(e) => (email.current = e.target.value)} />
        </div>
        <div>
          <Label>Password</Label>
          <Input placeholder='Your password' onChange={(e) => (password.current = e.target.value)} />
        </div>
        <Button className='bg-gold-primary hover:bg-gold-secondary text-base' >Sign in with credentials</Button>
        <span className='flex justify-center items-center gap-5'>
          <div className='bg-gray-300 w-full h-[2px]' />
          or
          <div className='bg-gray-300 w-full  h-[2px]' />
        </span>
        <Button
          className='bg-white text-base text-black hover:bg-transparent border-black border-[1px] py-2 hover:bg-slate-100 flex gap-5'
          >
          <Image
            src={'/google.svg'}
            width={35}
            height={35}
            alt='google'
          />
          Sign in with Google </Button>
      </form>
    </section>

  </>)
}

export default LoginPage
