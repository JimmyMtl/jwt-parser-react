import React, { useRef, useState } from "react"
import JwtRender from "./JwtRender/JwtRender.jsx"
import JwtEdit from "./JwtEdit/JwtEdit.jsx"
import CopyButton from "../../CopyButton/CopyButton.jsx"

const Encoded = () => {
    const [isEditMode, setIsEditMode] = useState(false)
    const ref = useRef(null)
    return (
        <div className={"flex flex-col gap-2 md:w-2/3"}>
            <h2>Encoded</h2>
            <label className={"text-gray-500"} htmlFor="token">
                token
            </label>
            <div className="relative flex max-h-[75dvh] min-h-[40dvh] w-full flex-col gap-2 rounded border border-gray-200">
                <CopyButton isEditMode={isEditMode} refBrother={ref} />
                <JwtEdit
                    ref={ref}
                    isEditMode={isEditMode}
                    setIsEditMode={setIsEditMode}
                />
                <JwtRender
                    isEditMode={isEditMode}
                    setIsEditMode={setIsEditMode}
                />
            </div>
        </div>
    )
}

export default Encoded
