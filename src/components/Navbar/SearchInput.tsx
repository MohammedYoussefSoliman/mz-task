import React from "react";
import Image from "next/image";
import Button from "@components/Button";

export default function SearchInput() {
  return (
    <div className="flex flex-col sm:flex-row w-auto md:w-2/3 bg-rose-100 rounded h-10">
      <input
        className="h-full py-2 px-4 flex-1 outline-none bg-transparent"
        type="text"
        placeholder="بحث"
      />
      <Button>
        <Image
          src="/icons/searchIcon.svg"
          width={24}
          height={24}
          alt="search icon"
        />
      </Button>
    </div>
  );
}
