import React from "react";

const Encoded = () => {
  return (
    <div className={"flex flex-col h-3/5 gap-2 w-1/2"}>
      <h2>Encoded</h2>
      <div className="flex flex-col w-full gap-2 h-full">
        <label className={"text-gray-500"} htmlFor="token">
          token
        </label>
        <textarea
          className={"border border-gray-200 w-full h-full rounded"}
          name="token"
          id="token"
        ></textarea>
      </div>
    </div>
  );
};

export default Encoded;
