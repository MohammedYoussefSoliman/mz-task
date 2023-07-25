import React from "react";
import { PropertiesProps } from "../filter.types";
import Property from "./Property";

export default function Properties({
  properties,
  control,
  watch,
}: PropertiesProps) {
  return (
    <>
      <h3 className="font-md mt-4">Properties:</h3>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property) => (
          <Property
            key={property.slug}
            property={property}
            control={control}
            watch={watch}
          />
        ))}
      </div>
    </>
  );
}
