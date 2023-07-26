import React from "react";
import Image from "next/image";
import Container from "@components/Container";

import SearchInput from "./SearchInput";

export default function TopSearch() {
  return (
    <div className="w-full my-1">
      <Container>
        <div className="flex justify-between w-full items-center">
          <SearchInput />
          <Image src="/images/logo.png" width={110} height={35} alt="logo" />
        </div>
      </Container>
    </div>
  );
}
