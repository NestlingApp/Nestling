import { Card, CardContent } from "@mui/material";
import { Chip } from "@mui/material";
import React from "react";

interface PropertySummaryCardProps {
  summary: String;
}

const PropertySummaryCard = ({ summary }: PropertySummaryCardProps) => {
  return (
    <Card elevation={0} className="w-full ">
      <CardContent className={"p-5 text-left"}>
        <div>
          <p className="text-xl font-bold mb-2">Summary</p>
          <div
            style={{ height: "160px" }}
            className="overflow-y-scroll text-wrap"
          >
            <p className="text-m w-full">{summary}</p>
          </div>
          <div className="mt-4 text-left">
            <Chip className="m-1" label="Townhouse" />
            <Chip className="m-1" label="2-Storey" />
            <Chip className="m-1" label="Year Build 2010" />
            <Chip className="m-1" label="Garage" />
            <Chip className="m-1" label="Mountain View" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertySummaryCard;
