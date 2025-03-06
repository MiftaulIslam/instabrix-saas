import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'

const EncryptedInbox = () => {
  return (
    <Card className="px-4 md:px-8 py-16 overflow-hidden relative dark:border-[#dcdcdc33] shadow">
    <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-[#7214FF] rounded-full blur-3xl opacity-10" />
   <div className=" absolute bottom-0 right-0 w-[200px] h-[200px] bg-[#32CAFD] rounded-full blur-3xl opacity-10" />
   
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10 items-center">
 <div className="space-y-4">
   <h3 className="text-2xl font-semibold">End-to-end encrypted inbox and messages</h3>
   <p className="text-sm text-gray-400">
     Never miss an email connection. Modern approach consistently at the top of marketing at scale. Keep your
     communications secure and protected.
   </p>
   <Button variant="link" className="text-white p-0">
     Learn More
   </Button>
 </div>

 <div className="space-y-4 hidden sm:inline">
   <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
     <div className="flex items-center gap-2">
       <span>Inbox</span>
       <Badge variant="outline" className="text-xs">
         2
       </Badge>
     </div>
     <div className="flex items-center gap-2">
       <span>Feb 6, 2023</span>
     </div>
   </div>

   {/* Message 1 */}
   <Card className=" border-none p-3">
     <div className="flex gap-3">
       <Avatar>
         <img src="/placeholder.svg?height=40&width=40" alt="Avatar" />
       </Avatar>
       <div className="space-y-1">
         <div className="flex justify-between">
           <h4 className="text-sm font-medium">Notification Present at Inbox</h4>
           <span className="text-xs text-gray-400">Feb 6, 2023</span>
         </div>
         <p className="text-xs text-gray-400">
           Lorem ipsum dolor sit amet consectetur. Your new feature was added to account management area.
         </p>
       </div>
     </div>
   </Card>

   {/* Message 2 */}
   <Card className=" border-none p-3">
     <div className="flex gap-3">
       <Avatar>
         <img src="/placeholder.svg?height=40&width=40" alt="Avatar" />
       </Avatar>
       <div className="space-y-1">
         <div className="flex justify-between">
           <h4 className="text-sm font-medium">Support Ticket</h4>
           <span className="text-xs text-gray-400">Feb 5, 2023</span>
         </div>
         <p className="text-xs text-gray-400">
           Lorem ipsum dolor sit amet consectetur. Your new feature was added to account management area.
         </p>
       </div>
     </div>
   </Card>
 </div>
</div>
</Card>
  )
}

export default EncryptedInbox