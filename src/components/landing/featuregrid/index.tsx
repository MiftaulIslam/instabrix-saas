import React from 'react'
import { Card } from "@/components/ui/card"
import features from '@/static/features'
const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features().map((feature, index) => (
        <Card key={index} className=" border-none p-6 transition-colors hover:bg-secondary cursor-pointer">
          <div className="w-10 h-10 rounded-md flex items-center justify-center mb-4">{feature.icon}</div>
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-sm text-gray-400">{feature.description}</p>
        </Card>
      ))}
    </div>
  )
}

export default FeatureGrid