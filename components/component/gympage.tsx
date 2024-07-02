/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/SXIxNW7XjwM
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
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image';


export function Gympage() {
  const [isAddMemberModalOpen, setIsAddMemberModalOpen] = useState(false)
  const [isViewAllMembersModalOpen, setIsViewAllMembersModalOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isEntryRecordModalOpen, setIsEntryRecordModalOpen] = useState(false)
  const [members, setMembers] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      phone: "555-1234",
      membership: "basic",
      joinedDate: "2022-01-01",
      paidDate: "2022-01-01",
      expiryDate: "2023-01-01",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      email: "janedoe@example.com",
      phone: "555-5678",
      membership: "premium",
      joinedDate: "2021-06-15",
      paidDate: "2022-06-15",
      expiryDate: "2023-06-15",
    },
    {
      id: 3,
      firstName: "Bob",
      lastName: "Smith",
      email: "bobsmith@example.com",
      phone: "555-9012",
      membership: "family",
      joinedDate: "2020-11-01",
      paidDate: "2021-11-01",
      expiryDate: "2022-11-01",
    },
  ])
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [membership, setMembership] = useState("basic")
  const [joinedDate, setJoinedDate] = useState(new Date().toISOString().slice(0, 10))
  const [paidDate, setPaidDate] = useState(new Date().toISOString().slice(0, 10))
  const [expiryDate, setExpiryDate] = useState(
    new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().slice(0, 10),
  )
  const handleEvent = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const newMember = {
      id: members.length + 1,
      firstName,
      lastName,
      email,
      phone,
      membership,
      joinedDate,
      paidDate,
      expiryDate,
    }
    setMembers([...members, newMember])
    setIsAddMemberModalOpen(false)
    setFirstName("")
    setLastName("")
    setEmail("")
    setPhone("")
    setMembership("basic")
    setJoinedDate(new Date().toISOString().slice(0, 10))
    setPaidDate(new Date().toISOString().slice(0, 10))
    setExpiryDate(new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().slice(0, 10))
  }
  const handleLogout = () => {
    window.location.href = "/login"
  }
  const handleRefresh = () => {
    window.location.reload()
  }
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-950">
      <header className="flex h-16 items-center border-b bg-blue-900 px-6 dark:border-gray-800 dark:bg-blue-950">
        <div className="flex items-center gap-6">
          <Link href="gympage" className="flex items-center gap-2 font-bold text-white text-xl" prefetch={false}>
            <DumbbellIcon className="h-8 w-8 text-white" />
            <span>Gym Management</span>
          </Link>
          <nav className="ml-auto flex gap-6 sm:gap-8 text-white">
            <Link
              href="Addmember"
              className="flex items-center gap-2 text-sm font-bold hover:bg-blue-800 dark:hover:bg-blue-900 rounded-md px-2 py-1 transition-colors"
              onClick={() => setIsAddMemberModalOpen(true)}
              prefetch={false}
            >
              <PlusIcon className="h-6 w-6 text-white" />
              Add Member
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-sm font-bold hover:bg-blue-800 dark:hover:bg-blue-900 rounded-md px-2 py-1 transition-colors"
              prefetch={false}
            >
              <WalletIcon className="h-6 w-6 text-white" />
              Payment
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 text-sm font-bold hover:bg-blue-800 dark:hover:bg-blue-900 rounded-md px-2 py-1 transition-colors"
              onClick={() => setIsEntryRecordModalOpen(true)}
              prefetch={false}
            >
              <BookIcon className="h-6 w-6 text-white" />
              Entry Record
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="icon" onClick={handleRefresh} className="mr-4">
            <RefreshCwIcon className="h-6 w-6 text-white" />
            <span className="sr-only">Refresh</span>
          </Button>
          <DropdownMenu open={isProfileMenuOpen} onOpenChange={setIsProfileMenuOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
              <Image
              src="/profile.jpg"
              alt="Avatar"
              width={40}
              height={40}
              className="rounded-full"
               />

              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Admin</DropdownMenuLabel>
              <DropdownMenuItem>
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <UserIcon className="h-4 w-4" />
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="bg-gradient-to-b from-black to-blue-950">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                  <InfoIcon className="h-4 w-4" />
                  About
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button onClick={handleLogout} className="flex items-center gap-2">
                  <LogOutIcon className="h-4 w-4" />
                  Logout
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex-1 p-6 md:p-10 bg-gradient-to-b from-black to-blue-500">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
              <UsersIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
              <div className="text-4xl font-bold">{members.length}</div>
              <div className="text-gray-500 dark:text-gray-400">Total Members</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
              <CalendarIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
              <div className="text-4xl font-bold">15</div>
              <div className="text-gray-500 dark:text-gray-400">Payment Due</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
              <WalletIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
              <div className="text-4xl font-bold">$25,000</div>
              <div className="text-gray-500 dark:text-gray-400">Total Revenue</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center gap-2 p-6">
              <BookIcon className="h-12 w-12 text-gray-900 dark:text-gray-50" />
              <div className="text-4xl font-bold">1,234</div>
              <div className="text-gray-500 dark:text-gray-400">Total Entries</div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Member Management</CardTitle>
              <CardDescription>
                Manage member accounts, including adding new members, updating information, and deleting accounts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="font-bold">Active Members</div>
                <Button variant="outline" size="sm" onClick={() => setIsViewAllMembersModalOpen(true)}>
                  View All
                </Button>
              </div>
              <Separator className="my-4" />
              <div className="grid gap-4">
                {members.slice(0, 3).map((member) => (
                  <div key={member.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>
                          {member.firstName[0]}
                          {member.lastName[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-bold">
                          {member.firstName} {member.lastName}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{member.email}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon">
                        <PencilIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="outline" size="icon">
                        <TrashIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
            <Link
                href="Addmember"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Add New Member
              </Link>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Payment Tracking</CardTitle>
              <CardDescription>View payment due dates, paid dates, and expiry dates for each member.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="font-bold">Upcoming Payments</div>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
              <Separator className="my-4" />
              <div className="grid gap-4">
                {members
                  .filter((member) => new Date(member.expiryDate) < new Date())
                  .slice(0, 3)
                  .map((member) => (
                    <div key={member.id} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar>
                          <AvatarImage src="/placeholder-user.jpg" />
                          <AvatarFallback>
                            {member.firstName[0]}
                            {member.lastName[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-bold">
                            {member.firstName} {member.lastName}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Due: {member.expiryDate}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">Paid: {member.paidDate}</div>
                        </div>
                      </div>
                      {new Date(member.expiryDate) < new Date() ? (
                        <Badge
                          variant="outline"
                          className="bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                        >
                          Expired
                        </Badge>
                      ) : new Date(member.paidDate) < new Date(member.expiryDate) ? (
                        <Badge
                          variant="outline"
                          className="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
                        >
                          Pending
                        </Badge>
                      ) : (
                        <Badge
                          variant="outline"
                          className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                        >
                          Paid
                        </Badge>
                      )}
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function BookIcon({ color = 'currentColor', size = 24, ...props }) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function CalendarIcon({ color = 'currentColor', size = 24, ...props }) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function DumbbellIcon({ color = 'currentColor', size = 24, ...props }) {
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
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
    </svg>
  )
}


function InfoIcon({ color = 'currentColor', size = 24, ...props }) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function LogOutIcon({ color = 'currentColor', size = 24, ...props }) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function PencilIcon({ color = 'currentColor', size = 24, ...props }) {
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
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}


function PlusIcon({ color = 'currentColor', size = 24, ...props }) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function RefreshCwIcon({ color = 'currentColor', size = 24, ...props }) {
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
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  )
}


function TrashIcon({ color = 'currentColor', size = 24, ...props }) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}


function UserIcon({ color = 'currentColor', size = 24, ...props }) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function UsersIcon({ color = 'currentColor', size = 24, ...props }) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function WalletIcon({ color = 'currentColor', size = 24, ...props }) {
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
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}
