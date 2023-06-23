'use client'

// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import '@uploadthing/react/styles.css'

import { UploadButton } from '@/utils/uploadthing'
import { Center } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Center h="100vh">
        <UploadButton
          endpoint="pdfUploader"
          onClientUploadComplete={res => {
            console.log('Files: ', res)
            alert('Upload Completed')
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`)
          }}
        />
      </Center>
    </main>
  )
}
