import React from "react";

const Decoded = () => {
  return (
    <div className={"flex flex-col gap-2 h-3/5 w-1/3"}>
      <h2>Decoded</h2>
      <div className="flex flex-col w-full gap-2 h-full">
        <span className={"text-gray-500"}>Payload</span>
        <div className={"border border-gray-200 w-full h-full rounded"}></div>
      </div>
    </div>
  );
};

export default Decoded;
