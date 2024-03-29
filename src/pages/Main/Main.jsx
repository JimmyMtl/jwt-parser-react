import React from "react";
import Decoded from "../../components/Parts/Decoded/Decoded.jsx";
import Encoded from "../../components/Parts/Encoded/Encoded.jsx";

const Main = () => {
  return (
    <main className={"p-8 flex flex-col gap-4"}>
      <h1 className="text-4xl text-center">JWT Decoder</h1>
      <div className="md:flex md:justify-between">
        <Encoded />
        <Decoded />
      </div>
    </main>
  );
};

export default Main;
