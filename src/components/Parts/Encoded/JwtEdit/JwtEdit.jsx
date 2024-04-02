import React, { forwardRef, useContext, useEffect } from "react"
import { JWTContext } from "../../../../reducers/JWT/JWTContext.jsx"

const JwtEdit = forwardRef(({ isEditMode, setIsEditMode }, ref) => {
    const { token, dispatch } = useContext(JWTContext)
    const handleChange = (e) => {
        dispatch({
            type: "UPDATE_TOKEN",
            payload: {
                token: e.target.value,
            },
        })
    }
    const handleOutsideClick = (e) => {
        if (e.target.id !== "token") {
            setIsEditMode(false)
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick)
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        }
    })
    useEffect(() => {
        if (isEditMode) {
            ref?.current.focus()
        }
    }, [isEditMode])
    const onFocus = (e) =>
        e.currentTarget.setSelectionRange(
            e.currentTarget.value.length,
            e.currentTarget.value.length,
        )

    return (
        <textarea
            onClick={() => setIsEditMode(true)}
            onFocus={onFocus}
            ref={ref}
            className={`h-full min-h-[40dvh] w-full break-words rounded border-none p-4 ${isEditMode ? "" : "hidden"}`}
            name="token"
            id="token"
            value={token}
            onChange={handleChange}
        ></textarea>
    )
})
export default JwtEdit
