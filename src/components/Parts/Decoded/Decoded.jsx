import React, { useContext } from "react";
import { JWTContext } from "../../../reducers/JWT/JWTContext.jsx";
import style from "./Decoded.module.scss";

const Decoded = () => {
  const { jwtHeader, jwtPayload, jwtSignature } = useContext(JWTContext);

  return (
    <div className={"flex flex-col gap-2 md:w-1/3"}>
      <h2>Decoded</h2>
      <div className="flex flex-col w-full gap-2 h-full">
        <div className={style.decodedPart}>
          <span className={"text-gray-500"}>Payload</span>
          <pre className={"text-red-500"}>
            {JSON.stringify(jwtPayload, null, 2)}
          </pre>
        </div>
        <div className={style.decodedPart}>
          <span>Headers</span>
          <pre className={"text-violet-500"}>
            {JSON.stringify(jwtHeader, null, 2)}
          </pre>
        </div>
        <div className={style.decodedPart}>
          <span>Signature</span>
          <pre className={"text-blue-500"}>
            {JSON.stringify(jwtSignature, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Decoded;
