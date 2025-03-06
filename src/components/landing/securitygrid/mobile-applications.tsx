import { Card } from '@/components/ui/card'
import React from 'react'

const MobileApplications = () => {
  return (

    <Card className=" p-6 relative dark:border-[#dcdcdc33] shadow ">
        
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#7214FF] rounded-full blur-3xl opacity-10" />
        <div className=" absolute top-0 right-0 w-[200px] h-[200px] bg-[#32CAFD] rounded-full blur-3xl opacity-10" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Mobile applications</h3>
        <p className="text-sm text-gray-400">
          From open ideas all email connection. Syncs with the mobile app, email connection, available on iOS and
          Android.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative w-40 h-64">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#162552] to-[#0f1c3f] rounded-xl overflow-hidden">
            <div className="p-3 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-3 bg-red-500 rounded-full"></div>
                <div className="w-6 h-3 bg-yellow-500 rounded-full"></div>
              </div>

              {/* Mock mobile app UI */}
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-[#1a2a5e] p-2 rounded">
                  <div className="w-16 h-2 bg-white/20 rounded"></div>
                  <div className="w-8 h-2 bg-white/20 rounded"></div>
                </div>
                <div className="flex items-center justify-between bg-[#1a2a5e] p-2 rounded">
                  <div className="w-16 h-2 bg-white/20 rounded"></div>
                  <div className="w-8 h-2 bg-white/20 rounded"></div>
                </div>
                <div className="flex items-center justify-between bg-[#1a2a5e] p-2 rounded">
                  <div className="w-16 h-2 bg-white/20 rounded"></div>
                  <div className="w-8 h-2 bg-white/20 rounded"></div>
                </div>
              </div>

              <div className="mt-4 p-2 bg-[#1a2a5e] rounded">
                <div className="w-full h-2 bg-white/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
  )
}

export default MobileApplications