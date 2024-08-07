/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/iQnjrZzBoip
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
export function Register() {
  return (
    
    <div className="flex min-h-[100dvh] items-center justify-center bg-gradient-to-b from-black to-blue-500 px-4 dark:bg-gray-950">
      
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
      <Link
            href="Landing"
            className=" font-medium underline underline-offset-4 text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-red-500"
            prefetch={false}
          >
            <FontAwesomeIcon icon={faXmark} className="h-8 w-8 text-muted-foreground"/>
          </Link>
        <div className="space-y-2 text-center">
       
          
        
          
        
          <h1 className="text-3xl font-bold">Registration Form</h1>
          <p className="text-gray-500 dark:text-gray-400">Fill the form to register</p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First Name</Label>
            <Input id="first-name" type="first-name" placeholder="Enter your first-name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last Name</Label>
            <Input id="last-name" type="last-name" placeholder="Enter your last-name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Confirm Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          Already have an account?{""}
          <Link
            href="Login"
            className="ms-2 font-medium underline underline-offset-4 text-gray-900 hover:text-gray-700 dark:text-gray-50 dark:hover:text-gray-300"
            prefetch={false}
          >
            Login
          </Link>
          
        </div>
        
      </div>
      
    </div>
  )
}
