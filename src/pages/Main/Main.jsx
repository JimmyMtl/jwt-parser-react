import React from "react";
import Decoded from "../../components/Parts/Decoded/Decoded.jsx";
import Encoded from "../../components/Parts/Encoded/Encoded.jsx";
import Headers from "../../components/Parts/Headers/Headers.jsx";

const Main = () => {
  return (
    <main>
      <h1 className="text-4xl text-center">JWT Decoder</h1>
      <div className="flex flex-wrap w-full gap-4 justify-center items-center h-screen min-h-screen">
        <Encoded></Encoded>
        <Decoded></Decoded>
        <Headers></Headers>
      </div>
    </main>
  );
};

export default Main;
