import React, { useContext, useEffect, useState } from "react";
import { JWTContext } from "../../../reducers/JWT/JWTContext.jsx";
import style from "./Decoded.module.scss";
import DecodedTextArea from "../../DecodedTextArea/DecodedTextArea.jsx";

const Decoded = () => {
  const { jwtHeader, jwtPayload, jwtSignature } = useContext(JWTContext);

  return (
    <div className={"flex flex-col gap-2 md:w-1/3"}>
      <h2>Decoded</h2>
      <div className="flex flex-col w-full gap-2 min-h-full">
        <DecodedTextArea
          decodedPart={jwtHeader}
          decodedTitlePart={"Headers"}
          textAreaColor={"red-500"}
        />
        <DecodedTextArea
          decodedPart={jwtPayload}
          decodedTitlePart={"Payload"}
          textAreaColor={"violet-500"}
        />
        <DecodedTextArea
          decodedPart={jwtSignature}
          decodedTitlePart={"Signature"}
          textAreaColor={"blue-500"}
        />
      </div>
    </div>
  );
};

export default Decoded;
