import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  size?: number;
};

export default function Icon({ name, size }: Props) {
  return (
    <Image
      src={`/icons/${name}.svg`}
      height={size || 24}
      width={size || 24}
      alt={name}
    />
  );
}
