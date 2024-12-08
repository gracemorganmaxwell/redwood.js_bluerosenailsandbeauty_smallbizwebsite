import React from 'react'
import { toast } from '@redwoodjs/web/toast'

const CopyBtn = ({ textToCopy }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        toast.success('👌 Copied to clipboard! 😁')
      })
      .catch((err) => {
        console.error('Failed to copy: ', err)
        toast.error('👀 Failed to copy text. 😳 Please try again.')
      })
  }

  return (
    <button
      onClick={handleCopy}
      className="ml-0 sm:ml-2 px-3 py-1 rounded-md border border-darkBlue shadow-md bg-white text-darkBlue font-bold
      transition duration-300 hover:bg-darkBlue hover:text-white disabled:opacity-50"
      title="Copy to clipboard"
    >
      Copy
    </button>
  )
}

export default CopyBtn
