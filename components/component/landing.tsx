/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/L074FNg9ThM
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Libre_Franklin } from 'next/font/google'

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
        <button className="flex items-center justify-center text-2xl font-bold">
        
        <img src="/favicon.ico" width="30" height="30" alt=""/>
         
          <span>GymsEngine</span>
        </button>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About Us
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact Us
          </Link>
          <Link href="Login" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Sign Up/Login
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Carousel
              opts={{ align: "center", loop: true, }}
              className="rounded-xl overflow-hidden"
            >
              <CarouselContent>
                <CarouselItem>
                  <img
                    src="/hero1.jpg"
                    width="1920"
                    height="1080"
                    alt="Gym Hero 1"
                    className="w-full h-[400px] md:h-[600px] object-cover"
                    
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/hero3.jpg"
                    width="1920"
                    height="1080"
                    alt="Gym Hero 2"
                    className="w-full h-[400px] md:h-[600px] object-cover"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/hero2.jpg"
                    width="1920"
                    height="1080"
                    alt="Gym Hero 3"
                    className="w-full h-[400px] md:h-[600px] object-cover"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Manage Your Gym with Ease</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  GymsEngine provides a comprehensive suite of tools to help you manage your gym efficiently, from
                  member management to scheduling and reporting.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Member Management</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Easily manage your gym members, track their attendance, and update their information.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Scheduling</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Streamline your gym&apos scheduling with our powerful scheduling tools, including class management and
                    staff scheduling.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Reporting</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Generate detailed reports on your gym&apos performance, including revenue, attendance, and member
                    analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Affordable Pricing for Your Gym</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  GymsEngine offers flexible pricing plans to fit the needs of gyms of all sizes, from small studios to
                  large fitness centers.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                <Card className="flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle>Starter</CardTitle>
                    <CardDescription>Perfect for small gyms and studios.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl font-bold">$29</span>
                      <span className="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <ul className="space-y-1 text-gray-500 dark:text-gray-400">
                      <li>Up to 100 members</li>
                      <li>Basic reporting</li>
                      <li>Limited support</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      prefetch={false}
                    >
                      Sign Up
                    </Link>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col justify-between">
                  <CardHeader>
                    <CardTitle>Pro</CardTitle>
                    <CardDescription>Ideal for medium-sized gyms.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl font-bold">$59</span>
                      <span className="text-gray-500 dark:text-gray-400">/month</span>
                    </div>
                    <ul className="space-y-1 text-gray-500 dark:text-gray-400">
                      <li>Up to 500 members</li>
                      <li>Advanced reporting</li>
                      <li>Priority support</li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      prefetch={false}
                    >
                      Sign Up
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Streamline Your Gym?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Sign up for GymsEngine today and start managing your gym more efficiently.
                </p>
              </div>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900 text-gray-50 dark:bg-gray-50 dark:text-gray-900">
        <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 GymsEngine. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


