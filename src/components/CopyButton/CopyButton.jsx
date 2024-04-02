import React from "react"
import { MdOutlineContentCopy } from "react-icons/md"
import { toast } from "sonner"

const CopyButton = ({ isEditMode, refBrother }) => {
    if (isEditMode) {
        return null
    }
    const copyToClipboard = () => {
        const text = refBrother.current?.innerText
        navigator.clipboard.writeText(text)
        toast.success("Token copied to clipboard.")
    }
    return (
        <button
            onClick={copyToClipboard}
            className={
                "absolute bottom-4 right-4 flex h-8 w-8 place-content-center place-items-center rounded border border-gray-300 bg-white text-gray-300 transition-colors hover:border-gray-500 hover:bg-gray-100 hover:text-gray-500"
            }
        >
            <MdOutlineContentCopy />
        </button>
    )
}

export default CopyButton
