/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/yOHVYYbvyDW
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
export function Register() {
  return (
    
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-black to-blue-500">
       
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
      
        <h2 className="text-2xl font-bold mb-4 text-center">
          Registration Form
          <br />
          GymsEngine
          </h2>
        <h3 className="text-lg font-medium mb-6 text-center"><i>Fill form to create an account</i></h3>
        <form>
        
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block font-medium mb-2">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-500 dark:border-gray-800"
                placeholder="Enter your first name"
                required
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block font-medium mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-500 dark:border-gray-800"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-500 dark:border-gray-800"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-500 dark:border-gray-800"
              placeholder="Enter a password"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirm-password" className="block font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-500 dark:border-gray-800"
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block font-medium mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-500 dark:border-gray-800"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

function XIcon({ color = 'currentColor', size = 24, ...props }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
