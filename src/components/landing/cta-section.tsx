import React from 'react'
import { Button } from '@/components/ui/button'

const CtaSection = () => {
  return (
    
    //    CTA Section 
        <section className="flex items-center justify-center gap-4">
          <Button className='rounded'>Get Started</Button>
          <Button variant="link" className="text-secondary-foreground">
            Browse all features
          </Button>
        </section>

  )
}

export default CtaSection