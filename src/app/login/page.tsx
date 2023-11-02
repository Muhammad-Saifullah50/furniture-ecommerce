import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const LoginPage = () => {
  return (<>
    <section className='flex flex-col items-center justify-center min-h-[80vh]'>
    <h2 className='font-bold text-gold-primary text-3xl my-4'>Sign in to become a seller</h2>

      <form className='w-1/2 flex flex-col gap-5'>
        <div>
          <Label>Name</Label>
          <Input placeholder='Your name'/>
        </div>
        <div>
          <Label>Email</Label>
          <Input placeholder='Your email address'/>
        </div>
        <div>
          <Label>Password</Label>
          <Input placeholder='Your password'/>
        </div>
        <Button className='bg-gold-primary hover:bg-gold-secondary text-lg' >Login</Button>
      </form>
    </section>

  </>)
}

export default LoginPage
