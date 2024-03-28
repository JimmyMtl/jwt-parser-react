import React, { createRef, useContext, useRef } from "react";
import { JWTContext } from "../../../../reducers/JWT/JWTContext.jsx";

const JwtRender = ({ isEditMode, setIsEditMode, refBrother }) => {
  const { token } = useContext(JWTContext);
  const [header, payload, signature] = token.split(".");
  const onClick = () => {
    setIsEditMode(true);
  };
  return (
    <div
      className={`w-full break-words p-4 cursor-text h-full ${isEditMode ? "hidden" : ""}`}
      onClick={onClick}
    >
      <span className={"text-red-500"}>{header}</span>.
      <span className={"text-violet-500"}>{payload}</span>.
      <span className={"text-blue-500"}>{signature}</span>
    </div>
  );
};

export default JwtRender;
