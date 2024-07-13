import React from 'react'
import Link from "next/link"
import Image from 'next/image';

const header = () => {
  return (
    <div>
        <header className="fixed top-0 left-0 right-0 px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground z-50 backdrop-blur-sm">
        <button className="flex items-center justify-center text-2xl font-bold m">
        
                  <Image
            src="/Union.png"
            alt="Favicon"
            width={100}
            height={100}
            layout="fixed"
          />

         
        {/* <span>Gyms Engine</span> */}
        </button>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#landing" className="text-sm font-medium hover:underline underline-offset-4   " prefetch={false}>
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About Us
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Pricing
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact Us
          </Link>
          <Link href="Login" className="inline-flex text-sm font-medium h-8  items-center  rounded-full bg-blue-700 px-5 shadow transition-colors hover:bg-sky-500 text-white-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 " prefetch={false}>
            Login
          </Link>
        </nav>
      </header>
    </div>
  )
}

export default header