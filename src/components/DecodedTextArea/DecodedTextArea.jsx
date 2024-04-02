import React, { useEffect, useState } from "react"

const DecodedTextArea = ({
    decodedPart,
    decodedTitlePart,
    textAreaColor,
    onChangeEvent,
}) => {
    const [lineCount, setLineCount] = useState(0)
    const [decodedPartState, setDecodedPartState] = useState(decodedPart)
    const getStringified = (obj) => {
        return JSON.stringify(obj, null, 2)
    }
    const getLineCount = (text) => {
        return getStringified(text)?.split(/\r\n|\r|\n/).length
    }
    useEffect(() => {
        setLineCount(getLineCount(decodedPart))
        setDecodedPartState(decodedPart)
    }, [decodedPart])
    const onChange = (e) => {
        setDecodedPartState(JSON.parse(e.target.value))
        onChangeEvent(decodedTitlePart, JSON.parse(e.target.value))
    }

    return (
        <>
            <span className={"text-gray-500"}>{decodedTitlePart}</span>
            <textarea
                className={`flex w-full
        flex-col
        gap-4 overflow-hidden rounded
        border
        border-gray-200
        p-4 text-${textAreaColor}`}
                name="header"
                id="header"
                rows={lineCount}
                value={getStringified(decodedPartState)}
                onChange={onChange}
            />
        </>
    )
}

export default DecodedTextArea
