import React from "react";
import service from "@services/instance";
import { Select, TextInput } from "@components/Inputs";
import { PropertyProps, Property } from "../filter.types";

export default function Property({ property, control, watch }: PropertyProps) {
  const [subProperties, setSubProperties] = React.useState<Property[]>([]);

  const propertyValue = watch(property.slug);

  const getProperties = React.useCallback(
    async (id: number) => {
      const response = await service.get(`/get-options-child/${id}`);
      const propertyName = response.data.data[0]?.name;
      const foundProperty = subProperties.find(
        (item) => item.name === propertyName
      );
      if (foundProperty) {
        const updatedSubProperties = subProperties.filter(
          (property) => property.name !== propertyName
        );
        setSubProperties([...updatedSubProperties, ...response.data.data]);
      } else {
        setSubProperties((prevState) => [...prevState, ...response.data.data]);
      }
    },
    [subProperties]
  );

  return (
    <div className="flex flex-col gap-2 border rounded-md border-sky-500 p-5">
      <div className="flex flex-col gap-1">
        <Select
          name={property.slug}
          label={property.name}
          placeholder={`Select ${property.name}`}
          control={control}
          options={
            [
              ...property.options.map((option) => ({
                label: option.name,
                value: option.id,
              })),
              { label: "other", value: "other" },
            ] || []
          }
          changeHandler={({ value }) => {
            if (value !== "other") {
              getProperties(value);
            }
          }}
        />

        {propertyValue?.value === "other" && (
          <TextInput
            label="other option"
            name={`${property.slug}_other`}
            control={control}
            className="[&>input]:bg-white [&>input]:w-3/4"
          />
        )}
      </div>
      {subProperties &&
        subProperties.map((sub) => {
          const subPropertyValue = watch(sub.slug);
          return (
            <>
              <Select
                key={sub.slug}
                name={sub.slug}
                label={sub.name}
                placeholder={`Select ${sub.name}`}
                control={control}
                changeHandler={({ value }) => {
                  if (value !== "other") {
                    getProperties(value);
                  }
                }}
                options={
                  [
                    ...sub.options.map((option) => ({
                      label: option.name,
                      value: option.id,
                    })),
                    { label: "other", value: "other" },
                  ] || []
                }
              />
              {subPropertyValue?.value === "other" && (
                <TextInput
                  label="other option"
                  name={`${sub.slug}_${property.name}_other`}
                  control={control}
                  className="[&>input]:bg-white [&>input]:w-3/4"
                />
              )}
            </>
          );
        })}
    </div>
  );
}
