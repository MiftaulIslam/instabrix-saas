import React from 'react'
import EncryptedInbox from './encrypted-inbox'
import MobileApplications from './mobile-applications'
import FileSharing from './file-sharing'

const SecurityGrids = () => {
  return (<div className="grid grid-cols-6 grid-rows-4 gap-4 p-6">
    {/* Encrypted Inbox (Centered) */}
    <div className="col-span-6 md:col-span-4 md:col-start-2 row-span-4 md:row-span-2 rounded-2xl">
      <EncryptedInbox />
    </div>
  
    {/* Mobile Applications (Bottom-left) */}
    <div className="col-span-6 md:col-span-3 row-span-4 md:row-span-2 rounded-2xl">
      <MobileApplications />
    </div>
  
    {/* File Sharing (Bottom-right) */}
    <div className="col-span-6 md:col-span-3 row-span-4 md:row-span-2  rounded-2xl">
      <FileSharing />
    </div>
  </div>
  

  )
}

export default SecurityGrids