import React from "react";
import SimpleRating from "react-star-ratings";

type Props = {
  rate: number;
};

export default function Rating({ rate }: Props) {
  return (
    <>
      <SimpleRating
        rating={rate}
        starDimension="18px"
        starSpacing="2px"
        starRatedColor="orange"
        numberOfStars={6}
      />
    </>
  );
}
