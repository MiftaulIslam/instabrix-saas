"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
// import Logo from '@/components/Logo.png'
import {Sun, Moon} from 'lucide-react'
import { useTheme } from 'next-themes'
const Navigation = () => {
  const theme = useTheme();
  const themeHandler = async ()=>{
    if(theme.theme === 'dark' || theme.resolvedTheme ==='dark'){
      await theme.setTheme('light')
    }else{
      await theme.setTheme('dark')
    }
  }
  return (
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between z-10">
      <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
        <div>
            <Image src={"/Logo.png"} alt={"InstaBrix"} width={50} height={50} />
                
        </div>
        <span className="font-semibold text-foreground">InstaBrix</span>
      </Link>
      <div className="hidden md:flex items-center gap-6">
        {["Home", "About", "Features", "Pricing", "Blog"].map((item) => (
          <Link key={item} href="#" className="text-foreground hover:text-accent-foreground">
            {item}
          </Link>
        ))}
      </div>
      <div className='flex items-center gap-4'>
        
      <Button variant="outline" size="icon"
      onClick={themeHandler}
      >
        {theme.theme === 'dark' || theme.systemTheme ==='dark' ? <Sun size={24} /> : <Moon size={24} />}
      </Button>
      <Button className='shadow' 
      >
        <Link href={'/login'}> Get Started
        </Link>
       </Button>
      </div>
    </nav>
  )
}

export default Navigation