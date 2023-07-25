import React from "react";
import service from "@services/instance";
import { Select, TextInput } from "@components/Inputs";
import { PropertyProps, Property } from "../filter.types";

export default function Property({ property, control, watch }: PropertyProps) {
  const [subProperties, setSubProperties] = React.useState<Property[] | null>(
    null
  );

  const propertyValue = watch(property.slug);

  const getProperties = React.useCallback(async (id: number) => {
    const response = await service.get(`/get-options-child/${id}`);
    setSubProperties(response.data.data);
  }, []);

  React.useEffect(() => {
    getProperties(property.id);
  }, [property, getProperties]);

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
                value: option.name,
              })),
              { label: "other", value: "other" },
            ] || []
          }
        />

        {propertyValue === "other" && (
          <TextInput
            label="other option"
            name={`${property.slug}_other`}
            control={control}
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
                options={
                  [
                    ...sub.options.map((option) => ({
                      label: option.name,
                      value: option.name,
                    })),
                    { label: "other", value: "other" },
                  ] || []
                }
              />
              {subPropertyValue === "other" && (
                <TextInput
                  label="other option"
                  name={`${sub.slug}_other`}
                  control={control}
                />
              )}
            </>
          );
        })}
    </div>
  );
}
