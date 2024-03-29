import React, { useEffect, useState } from "react";

const DecodedTextArea = ({ decodedPart, decodedTitlePart, textAreaColor }) => {
  const [lineCount, setLineCount] = useState(0);
  const getStringified = (obj) => {
    return JSON.stringify(obj, null, 2);
  };
  const getLineCount = (text) => {
    return getStringified(text)?.split(/\r\n|\r|\n/).length;
  };
  useEffect(() => {
    setLineCount(getLineCount(decodedPart));
  }, [decodedPart]);
  const handleChanges = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <span className={"text-gray-500"}>{decodedTitlePart}</span>
      <textarea
        className={`border border-gray-200
        w-full
        flex flex-col gap-4
        rounded
        overflow-hidden
        p-4 text-${textAreaColor}`}
        name="header"
        id="header"
        rows={lineCount}
        value={getStringified(decodedPart)}
        onChange={handleChanges}
      />
    </>
  );
};

export default DecodedTextArea;
