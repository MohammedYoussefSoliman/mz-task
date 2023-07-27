import React from "react";
import Paper from "@components/Paper";

import SearchDate from "./SearchDate";
import AuctionResults from "./AuctionResults";
import Auctioners from "./Auctioners";
import AuctionDetails from "./AuctionDetails";

export default function Info() {
  return (
    <div className="w-full flex flex-col gap-8">
      <Paper className="w-full flex flex-col gap-2" spacing={2} withShadow>
        <SearchDate />
        <AuctionResults />
      </Paper>
      <Paper className="w-full flex flex-col gap-4" withShadow>
        <Auctioners />
      </Paper>
      <Paper className="w-full flex flex-col gap-4" withShadow>
        <AuctionDetails label="القيمة الابتدائية" value="5000" />
        <AuctionDetails label="القيمة التقريبية" value="5000" />
        <AuctionDetails label="العربون" value="5000" />
        <AuctionDetails label="سعر الشراء الفورى" value="5000" />
        <AuctionDetails label="قيمة ذيادة المزاد" value="5000" />
      </Paper>
    </div>
  );
}
