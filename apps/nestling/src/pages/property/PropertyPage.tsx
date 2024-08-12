import React from "react";
import Hero from "@Components/Hero";
import { RCAListing } from "data/reatlorca/types";
import SectionCard from "@Components/SectionCard";
import PropertyDetailsCard from "./PropertyDetailsCard";
import PropertySummaryCard from "./PropertySummaryCard";

import { useLoaderData } from "react-router-dom";
import CardLayout from "@Components/CardLayout";
import { Box } from "@mui/material";
import { NListing } from "@Data/nestling/NListing";

interface LoaderDataType {
  listing: NListing;
}
const PropertyPage = () => {
  const { listing } = useLoaderData() as LoaderDataType;

  return (
    <div className="flex flex-col mx-10">
      <Hero listing={listing} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          mt: 3,
        }}
      >
        <div className="max-w-screen-lg w-full">
          <SectionCard className="flex flex-row gap-3" title="Property Summary">
            <PropertyDetailsCard
              property={listing}
              mlsNumber={listing.listing_id}
            />
            <PropertySummaryCard summary={listing.description} />
          </SectionCard>
          <CardLayout data={listing} />
        </div>
      </Box>
    </div>
  );
};

export default PropertyPage;
