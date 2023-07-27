import React from "react";
import Form from "@components/Form";
import { TextInput } from "@components/Inputs";
import Options from "./Options";
import Button from "@components/Button";

export default function AuctionForm() {
  return (
    <Form onSubmit={(data) => console.log(data)}>
      {({ control, setValue }) => (
        <div className="w-full flex justify-between">
          <Options
            values={[23000, 25000, 40000]}
            onClick={(value) => setValue("auction", value)}
          />
          <div className="flex gap-2">
            <TextInput
              name="auction"
              placeholder="اكتب المبلغ"
              control={control}
            />
            <Button className="px-8">
              <p className="text-white text-md">تأكيد</p>
            </Button>
          </div>
        </div>
      )}
    </Form>
  );
}
