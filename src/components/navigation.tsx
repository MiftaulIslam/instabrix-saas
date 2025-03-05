import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
// import Logo from '@/components/Logo.png'

const Navigation = () => {
  return (
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
        <div>
            <Image src={"/Logo.png"} alt={"InstaBrix"} width={50} height={50} />
                
        </div>
        <span className="font-semibold">InstaBrix</span>
      </Link>
      <div className="hidden md:flex items-center gap-6">
        {["Home", "About", "Features", "Pricing", "Blog"].map((item) => (
          <Link key={item} href="#" className="text-gray-300 hover:text-[hsl(var(--accent))]">
            {item}
          </Link>
        ))}
      </div>
      <Button className="text-black dark:text-white bg-[hsl(var(--accent))] hover:bg-transparent hover:border hover:border-[hsl(var(--accent))]">Get Started</Button>
    </nav>
  )
}

export default Navigation