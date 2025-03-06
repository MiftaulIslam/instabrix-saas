import { Card } from '@/components/ui/card'
import React from 'react'

import { FileText, Image, FileCode, FileArchive } from "lucide-react"
const FileSharing = () => {
  
    const files = [
        {
          icon: <FileText className="h-4 w-4 text-purple-400" />,
          name: "Documents",
          type: "Files",
          size: "10.5 MB",
        },
        {
          icon: <Image className="h-4 w-4 text-green-400" />,
          name: "Team photos",
          type: "Images",
          size: "25.0 MB",
        },
        {
          icon: <FileCode className="h-4 w-4 text-blue-400" />,
          name: "Source codes",
          type: "Code",
          size: "15.0 MB",
        },
        {
          icon: <FileArchive className="h-4 w-4 text-yellow-400" />,
          name: "App archives",
          type: "ZIP",
          size: "35.0 MB",
        },
      ]
    return <Card className="relative dark:border-[#dcdcdc33] shadow  p-6">
        
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[#7214FF] rounded-full blur-3xl opacity-10" />
        <div className=" absolute top-0 right-0 w-[200px] h-[200px] bg-[#32CAFD] rounded-full blur-3xl opacity-10" />
    <div className="space-y-4 relative z-10">
      <h3 className="text-xl font-semibold">Upload, share, and preview any file</h3>
      <p className="text-sm text-gray-400">
        Keep all directories of all media, preserve backups, organize media files and share with team.
      </p>

      <div className="space-y-3 mt-6">
        {files.map((file, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-[#162552] w-8 h-8 rounded-md flex items-center justify-center">{file.icon}</div>
              <div>
                <p className="text-sm font-medium">{file.name}</p>
                <p className="text-xs text-gray-400">{file.type}</p>
              </div>
            </div>
            <span className="text-xs text-gray-400">{file.size}</span>
          </div>
        ))}
      </div>
    </div>
  </Card>
}

export default FileSharing