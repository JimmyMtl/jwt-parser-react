import React, { useContext } from "react"
import { JWTContext } from "../../../reducers/JWT/JWTContext.jsx"
import DecodedTextArea from "../../DecodedTextArea/DecodedTextArea.jsx"
import { encodeToken } from "../../../reducers/JWT/JWTActions.jsx"

const Decoded = () => {
    const { token, jwtHeader, jwtPayload, jwtSignature, dispatch } =
        useContext(JWTContext)
    const onChangeHeaders = (decodedTitlePart, value) => {
        let newToken = encodeToken(
            decodedTitlePart === "Headers" ? value : jwtHeader,
            decodedTitlePart === "Payload" ? value : jwtPayload,
            decodedTitlePart === "Signature" ? value : jwtSignature,
        )
        if (newToken !== token) {
            dispatch({
                type: "UPDATE_TOKEN",
                payload: { token: newToken },
            })
        }
    }

    return (
        <div className={"flex flex-col gap-2 md:w-1/3"}>
            <h2>Decoded</h2>
            <div className="flex min-h-full w-full flex-col gap-2">
                <DecodedTextArea
                    decodedPart={jwtHeader}
                    decodedTitlePart={"Headers"}
                    textAreaColor={"red-500"}
                    onChangeEvent={onChangeHeaders}
                />
                <DecodedTextArea
                    decodedPart={jwtPayload}
                    onChangeEvent={onChangeHeaders}
                    decodedTitlePart={"Payload"}
                    textAreaColor={"violet-500"}
                />
                <DecodedTextArea
                    decodedPart={jwtSignature}
                    onChangeEvent={onChangeHeaders}
                    decodedTitlePart={"Signature"}
                    textAreaColor={"blue-500"}
                />
            </div>
        </div>
    )
}

export default Decoded
