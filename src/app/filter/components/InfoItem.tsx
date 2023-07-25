import React from "react";
import { InfoItemProps } from "../filter.types";

export default function InfoItem({ title, content }: InfoItemProps) {
  return (
    <div className="flex flex-col gap-1 p-3 rounded bg-slate-200">
      <h4 className="text-sm first-letter:uppercase">
        {title.replace(/[-_]/, " ")}:
      </h4>
      <p className="font-semibold text-slate-700">{content}</p>
    </div>
  );
}
