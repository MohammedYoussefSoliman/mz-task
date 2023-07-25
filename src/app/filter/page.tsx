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
import InfoItem from "./components/InfoItem";

export default function Filter() {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [category, setCategory] = React.useState<Category | null>(null);
  const [loadingProperties, setLoadingProperties] =
    React.useState<boolean>(false);
  const [properties, setProperties] = React.useState<Property[] | null>(null);
  const [data, setData] = React.useState<any>();

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
    setLoadingProperties(true);
    const response = await service.get("/properties", {
      params: {
        cat,
      },
    });
    setProperties(response.data.data);
    setLoadingProperties(false);
  }, []);

  return (
    <main className="flex flex-1 flex-col w-full">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-4 bg-sky-100 p-4 rounded-md">
          <Form
            onSubmit={(data) => {
              let readyData = {};
              Object.keys(data).forEach((k) => {
                if (data[k] && data[k] !== "other") {
                  let otherObj = {};
                  if (k.includes("other")) {
                    k = k.replace("_other", "");
                    otherObj = { [k]: data[`${k}_other`] };
                  }
                  readyData = { ...readyData, [k]: data[k], ...otherObj };
                }
              });
              setData(readyData);
            }}
          >
            {({ control, watch, setValue }) => (
              <div className="flex flex-col gap-2">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <AsyncSelect
                      className="flex-1"
                      name="category"
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
                      name="sub_category"
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
                {loadingProperties && <div>Loading properties...</div>}
                {!loadingProperties && properties && properties.length > 0 && (
                  <Properties
                    properties={properties}
                    control={control}
                    watch={watch}
                  />
                )}
                <div className="place-self-center mt-4">
                  <button className="rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    submit
                  </button>
                </div>
              </div>
            )}
          </Form>
          {data && (
            <>
              <h3 className="font-lg first-letter:uppercase">you selected:</h3>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.keys(data).map((k) => (
                  <InfoItem key={k} title={k} content={data[k]} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
