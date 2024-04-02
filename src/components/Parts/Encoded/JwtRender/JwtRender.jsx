import React, { useContext } from "react"
import { JWTContext } from "../../../../reducers/JWT/JWTContext.jsx"

const JwtRender = ({ isEditMode, setIsEditMode }) => {
    const { token } = useContext(JWTContext)
    const [header, payload, signature] = token.split(".")
    const onClick = () => {
        setIsEditMode(true)
    }

    return (
        <div
            className={`h-full min-h-[40dvh] w-full cursor-text break-words  p-4 ${isEditMode ? "hidden" : ""}`}
            onClick={onClick}
        >
            <span className={"text-red-500"}>{header}</span>.
            <span className={"text-violet-500"}>{payload}</span>.
            <span className={"text-blue-500"}>{signature}</span>
        </div>
    )
}

export default JwtRender
