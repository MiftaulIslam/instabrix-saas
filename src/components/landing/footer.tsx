import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    
      <footer className="px-4 py-16 border-t border-primary">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Newsletter */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6 text-foreground">
              <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-bold">InstaBrix</span>
            </div>
            <div className="p-6 rounded-lg  ">
              <h3 className="text-lg font-medium mb-4 text-foreground">Subscribe to our newsletter</h3>
              <div className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  // className="border-[#dcdcdc33] focus:border-0"
                />
                <Button className="w-full">Subscribe</Button>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-foreground">Pages</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                  Blog post
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                  Pricing single
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-foreground">Features</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                  Careers single
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                  Request a demo
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                  Login
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Utility Pages */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-foreground">Utility Pages</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                  Style guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                  Password protected
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                  404 Not found
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                  Licenses
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground underline-offset-4 hover:underline hover:text-foreground">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Social */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-8">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 ">
            Copyright © InstaBrix - 2025
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook size={20} />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter size={20} />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </footer>
  )
}

export default Footer