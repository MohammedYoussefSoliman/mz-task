"use client";
import React from "react";
import service from "@services/instance";
import Form from "@components/Form";
import { AsyncOptionType } from "@components/Inputs/Inputs.types";
import Label from "@/components/Inputs/Label/Label";
import { AsyncSelect, Select } from "@components/Inputs";
import filterOptions from "./filterOptions";
import { Category, Property } from "./filter.types";
import Properties from "./components/Properties";

export default function Filter() {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [category, setCategory] = React.useState<Category | null>(null);
  const [properties, setProperties] = React.useState<Property[] | null>(null);
  const subCatSelectRef = React.useRef();

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
        value: option.name,
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
            onSubmit={(data) => {
              console.log(data);
            }}
          >
            {({ control, watch, setValue }) => (
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
                      changeHandler={(value) => {
                        setCategory(
                          categories.find((opt) => opt.name === value)!
                        );
                        setValue("sub_cat", null);
                        setProperties(null);
                      }}
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
                          value: option.name,
                        })) || []
                      }
                      changeHandler={(value) => {
                        const property = category?.children.find(
                          (item) => item.name === value
                        );
                        if (property) {
                          getProperties(property.id);
                        }
                      }}
                      validationRules={{ required: "this field is required" }}
                    />
                  </div>
                </div>
                {properties && properties.length > 0 && (
                  <Properties
                    properties={properties}
                    control={control}
                    watch={watch}
                  />
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
