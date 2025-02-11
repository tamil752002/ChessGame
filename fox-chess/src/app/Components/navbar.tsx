"use client"
import React from 'react'
import Link from "next/link"

const Navbar = () => {

  return (
    <div>

    <header className="flex items-center justify-between p-5 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-600">Fox Chess</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </li>
            <li>
           
                <Link  href="/signin"className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">   Sign In</Link>
               
              
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar