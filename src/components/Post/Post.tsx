import React from "react";
import Paper from "@components/Paper";
import PostImage from "./PostImage";
import Seller from "./Seller";
import AuctionForm from "./AuctionForm";
import MessageForm from "./MessageForm";

export default function Post() {
  return (
    <div className="flex flex-col gap-8">
      <Paper className="w-full flex flex-col gap-4" withShadow spacing={0}>
        <PostImage />
        <div className="w-full flex flex-col gap-5 px-6 pb-6">
          <Seller />
          <h2 className="text-xl font-semibold">
            شراء مجموعة من السيارات من موديلات1990
          </h2>
          <AuctionForm />
        </div>
      </Paper>
      <Paper className="w-full flex flex-col gap-4" withShadow>
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">ارسال رسالة الى البائع </h2>
          <p className="text-sm font-light">
            يمكنك في وقت البث المباشر ارسال رسالة الى البائع للاستفسار
          </p>
        </div>
        <MessageForm />
      </Paper>
    </div>
  );
}
