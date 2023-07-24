import React from "react";
import { ErrorProps } from "./SelectInputs.types";

export default function Error({ error }: ErrorProps) {
  return (
    <p className="m-0 xs:text-xs md:text-sm first-letter:uppercase text-red-600 font-medium">
      {error}
    </p>
  );
}
