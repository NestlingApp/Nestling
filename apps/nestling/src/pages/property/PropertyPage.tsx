import React from "react";
import Hero from "@Components/Hero";
import { RCAListing } from "data/reatlorca/types";
import SectionCard from "@Components/SectionCard";
import PropertyDetailsCard from "./PropertyDetailsCard";
import PropertySummaryCard from "./PropertySummaryCard";

import { useLoaderData } from "react-router-dom";
import CardLayout from "@Components/CardLayout";
import { Box } from "@mui/material";

interface LoaderDataType {
  listing: RCAListing;
}
const PropertyPage = () => {
  const { listing } = useLoaderData() as LoaderDataType;
  const property = listing.Property;
  return (
    <div className="flex flex-col mx-10">
      <Hero property={property} />
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
              property={property}
              mlsNumber={listing.MlsNumber}
            />
            <PropertySummaryCard summary={listing.PublicRemarks} />
          </SectionCard>
          <CardLayout data={listing} />
        </div>
      </Box>
    </div>
  );
};

export default PropertyPage;
