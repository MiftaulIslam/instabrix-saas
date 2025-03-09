import React from 'react'
import { Mail, Calendar, FileText, FileCheck } from "lucide-react"
import { Button } from '../ui/button'
import SecurityGrids from './securitygrid'
import CtaSection from './cta-section'
const ProtectionSection = () => {
  return (
    <section className='py-16'>
        {/* section header */}
        <div className="text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-semibold text-secondary-foreground">Essential apps that protect your</h2>
      <div className="flex flex-wrap justify-center gap-4 text-lg">
        <Button className="bg-transparent hover:bg-transparent text-foreground ">
          <Mail className="h-5 w-5 text-purple-400" />
          Email
        </Button>
        <Button className="bg-transparent hover:bg-transparent text-foreground">
          <Calendar className="h-5 w-5 text-purple-400" />
          Events
        </Button>
        <Button className="bg-transparent hover:bg-transparent text-foreground">
          <FileText className="h-5 w-5 text-purple-400" />
          Files
        </Button>
        <Button className="bg-transparent hover:bg-transparent text-foreground">
          <FileCheck className="h-5 w-5 text-purple-400" />
          Documents
        </Button>
      </div>
    </div>

    {/* security grids */}
    <SecurityGrids/>
    <CtaSection />
    </section>
  )
}

export default ProtectionSection