"use client";
import React from "react";
import service from "@services/instance";
import Form from "@components/Form";
import { AsyncOptionType } from "@components/Selects/SelectInputs.types";
import Label from "@components/Selects/Label";
import { AsyncSelect, Select } from "@components/Selects";
import filterOptions from "./filterOptions";
import { Category, Property } from "./filter.types";

export default function Filter() {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [category, setCategory] = React.useState<Category | null>(null);
  const [properties, setProperties] = React.useState<Property[]>([]);

  const getCategories = React.useCallback(
    async (
      inputValue: string,
      callback: (options: AsyncOptionType[]) => void
    ): Promise<AsyncOptionType[]> => {
      const response = await service.get("/get_all_cats");
      const { categories: resCategories } = response.data.data;
      setCategories(resCategories);
      const options: AsyncOptionType[] = (
        resCategories as unknown as any[]
      ).map((option) => ({
        label: <Label label={option.name} />,
        stringLabel: option.name,
        value: option.id,
      }));

      callback(filterOptions(inputValue, options));

      return options;
    },
    []
  );

  const getProperties = React.useCallback(async (cat: number) => {
    const response = await service.get("/properties", {
      params: {
        cat,
      },
    });
    setProperties(response.data.data);
  }, []);

  return (
    <main className="flex flex-1 flex-col w-full">
      <div className="container mx-auto">
        <div className="w-full bg-sky-100 p-4 rounded-md">
          <Form
            onSubmit={(data: {
              cat: string | number;
              sub_cat: string | number;
              [key: string]: string | number;
            }) => {
              console.log(data);
            }}
          >
            {({ control }) => (
              <div className="flex flex-col gap-2">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <AsyncSelect
                      className="flex-1"
                      name="cat"
                      label="Categories"
                      placeholder="Select category"
                      control={control}
                      loadOptions={getCategories}
                      changeHandler={(value) =>
                        setCategory(categories.find((opt) => opt.id === value)!)
                      }
                      validationRules={{ required: "this field is required" }}
                    />
                  </div>
                  <div className="flex-1">
                    <Select
                      isDisabled={!category?.children.length}
                      isSearchable
                      name="sub_cat"
                      label="Sub categories"
                      placeholder="Select sub category"
                      control={control}
                      options={
                        category?.children.map((option) => ({
                          label: option.name,
                          value: option.id,
                        })) || []
                      }
                      changeHandler={(value) => {
                        getProperties(value);
                      }}
                      validationRules={{ required: "this field is required" }}
                    />
                  </div>
                </div>
                {properties && properties.length > 0 && (
                  <>
                    <h3 className="font-md mt-4">Properties:</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {properties.map((property) => (
                        <Select
                          key={property.slug}
                          name={property.slug}
                          label={property.name}
                          placeholder={`Select ${property.name}`}
                          control={control}
                          options={
                            property.options.map((option) => ({
                              label: option.name,
                              value: option.id,
                            })) || []
                          }
                        />
                      ))}
                    </div>
                  </>
                )}
                <button>submit</button>
              </div>
            )}
          </Form>
        </div>
      </div>
    </main>
  );
}
