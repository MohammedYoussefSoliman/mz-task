import React from "react";
import Form from "@components/Form";
import { TextInput } from "@components/Inputs";
import Button from "@components/Button";
import Icon from "@components/Icon";

export default function MessageForm() {
  return (
    <Form>
      {({ control }) => (
        <div className="flex gap-4">
          <TextInput
            name="message"
            control={control}
            placeholder="اكتب سؤالك"
            className="rounded-full bg-indigo-100 overflow-hidden"
          />
          <Button rounded>
            <Icon name="send" />
          </Button>
        </div>
      )}
    </Form>
  );
}
