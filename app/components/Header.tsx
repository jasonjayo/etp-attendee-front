"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="w-full bg-white border-gray-200 dark:bg-gray-900 shadow-md"
    >
      {/* Logo */}
      <Navbar.Brand href="#" className="flex items-center space-x-4">
        <Image src="tickets.svg" className="h-8" alt="MasterTicket Logo" />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white text-gray-700">
          MasterTicket
        </span>
      </Navbar.Brand>

      {/* Navbar Menu */}
      <Navbar.Collapse className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse mt-4 md:mt-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <div className="flex flex-col md:flex-row md:space-x-8 text-md py-3 px-4 md:py-0">
          <Link
            href="/browse"
            className="py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500"
          >
            Home
          </Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
