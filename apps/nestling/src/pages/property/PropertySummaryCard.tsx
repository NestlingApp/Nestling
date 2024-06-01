import { Card, CardContent, Typography } from "@mui/material";
import { Chip } from "@mui/material";
import React from "react";

interface PropertySummaryCardProps {
  summary: String;
}

const PropertySummaryCard = ({ summary }: PropertySummaryCardProps) => {
  return (
    <Card elevation={0} sx={{ width: "100%" }}>
      <CardContent style={{ textAlign: "left" }}>
        <div>
          <Typography variant="h6" gutterBottom>
            Summary
          </Typography>
          <div
            style={{ height: "160px" }}
            className="overflow-y-scroll text-wrap"
          >
            <p className="text-m w-full">{summary}</p>
          </div>
          <div className="mt-4">
            <Chip className="mb-1 mr-1" color="primary" label="Townhouse" />
            <Chip className="mb-1 mr-1" color="primary" label="2-Storey" />
            <Chip
              className="mb-1 mr-1"
              color="primary"
              label="Year Build 2010"
            />
            <Chip className="mb-1 mr-1" color="primary" label="Garage" />
            <Chip className="mb-1 mr-1" color="primary" label="Mountain View" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertySummaryCard;
