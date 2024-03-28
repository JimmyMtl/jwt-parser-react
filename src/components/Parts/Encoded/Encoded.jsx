import React, { useContext, useEffect, useState } from "react";
import { JWTContext } from "../../../reducers/JWT/JWTContext.jsx";

const Encoded = () => {
  const { token, dispatch } = useContext(JWTContext);
  useEffect(() => {}, [token]);
  // const [token, setToken] = useState("");

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_TOKEN",
      payload: {
        token: e.target.value,
      },
    });
  };

  return (
    <div className={"flex flex-col gap-2 md:w-1/2"}>
      <h2>Encoded</h2>
      <div className="flex flex-col w-full gap-2 h-full">
        <label className={"text-gray-500"} htmlFor="token">
          token
        </label>
        <textarea
          className={"border border-gray-200 w-full min-h-full rounded p-4"}
          name="token"
          id="token"
          value={token}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
};

export default Encoded;
