import React from "react";

import Auctioner from "./Auctioner";

export default function Auctioners() {
  return (
    <div className="w-full flex flex-col gap-4 ">
      <h3 className="text-xl font-bold">المتنافسون</h3>
      <Auctioner />
      <Auctioner />
      <Auctioner />
      <Auctioner />
      <Auctioner />
      <Auctioner />
    </div>
  );
}
