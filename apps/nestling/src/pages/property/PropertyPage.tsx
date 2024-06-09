import React from "react";
import { Spacer } from "@nextui-org/react";

import Hero from "@Components/Hero";
import { RCAListing } from "data/reatlorca/types";
import SectionCard from "@Components/SectionCard";
import PropertyDetailsCard from "./PropertyDetailsCard";
import PropertySummaryCard from "./PropertySummaryCard";

import { useLoaderData } from "react-router-dom";
import CardLayout from "@Components/CardLayout";

interface LoaderDataType {
  listing: RCAListing;
}
const PropertyPage = () => {
  const { listing } = useLoaderData() as LoaderDataType;
  const property = listing.Property;
  return (
    <div className="flex flex-col mx-10">
      <Hero property={property} />
      <Spacer y={6} x={4} />
      <div className="flex justify-center content-center">
        <div className="max-w-screen-lg w-full">
          <SectionCard className="flex flex-row gap-3" title="Property Details">
            <PropertyDetailsCard
              property={property}
              mlsNumber={listing.MlsNumber}
            />
            <PropertySummaryCard summary={listing.PublicRemarks} />
          </SectionCard>
          <CardLayout data={listing} />
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
