import React from 'react'
import { Card } from "@/components/ui/card"
import features from '@/static/features'

const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features().map((feature, index) => (
        <Card key={index} className="group bg-background dark:bg-card shadow border p-6 transition-colors hover:bg-secondary cursor-pointer">
          <div className="w-10 h-10 flex items-center justify-center mb-4 border dark:border-none rounded-md transition-colors group-hover:bg-card">
            <span className="text-foreground">{feature.icon}</span>
          </div>
          <h3 className="text-lg text-secondary-foreground font-semibold mb-2">{feature.title}</h3>
          <p className="text-sm text-muted-foreground">{feature.description}</p>
        </Card>
      ))}
    </div>
  )
}

export default FeatureGrid
