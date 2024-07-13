import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 px-4 lg:px-6 h-14 flex items-center bg-primary text-primary-foreground z-50 backdrop-blur-sm">
      <div className="flex items-center justify-between w-full">
        <button className="flex items-center justify-center text-2xl font-bold">
          <Image
            src="/favicon.ico"
            alt="Favicon"
            width={30}
            height={30}
            layout="fixed"
          />
          <span className="ml-2">Gyms Engine</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-auto gap-4 sm:gap-6">
          <Link href="#landing" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
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
          <Link href="Register" className="inline-flex text-sm font-medium h-8 items-center rounded-md bg-blue-700 px-5 shadow transition-colors hover:bg-sky-500 text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" prefetch={false}>
            Sign Up
          </Link>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          &#9776; {/* This represents the hamburger menu icon */}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-primary-foreground text-primary mt-4 rounded-lg shadow-lg p-4">
          <Link href="#landing" className="block text-sm font-medium py-2 hover:underline" onClick={() => setIsOpen(false)} prefetch={false}>
            Home
          </Link>
          <Link href="#about" className="block text-sm font-medium py-2 hover:underline" onClick={() => setIsOpen(false)} prefetch={false}>
            About Us
          </Link>
          <Link href="#pricing" className="block text-sm font-medium py-2 hover:underline" onClick={() => setIsOpen(false)} prefetch={false}>
            Pricing
          </Link>
          <Link href="#contact" className="block text-sm font-medium py-2 hover:underline" onClick={() => setIsOpen(false)} prefetch={false}>
            Contact Us
          </Link>
          <Link href="Register" className="block text-sm font-medium py-2 bg-blue-700 rounded-md text-white text-center mt-4" onClick={() => setIsOpen(false)} prefetch={false}>
            Sign Up
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
