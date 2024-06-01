import React, { useState } from "react";
import NavBar from "@Components/Navbar";
import { Card, CardBody, CardHeader, Input, Spacer } from "@nextui-org/react";
import PropertyCard from "@Components/PropertyCard";
import data from "../../data/properties.json";
import Hero from "@Components/Hero";
import CardLayout from "@Components/CardLayout";
import { RCAListing, RCAProperty } from "data/reatlorca/types";
import SectionCard from "@Components/SectionCard";
import PropertyDetailsCard from "./PropertyDetailsCard";
import PropertySummaryCard from "./PropertySummaryCard";
import ChatWidget from "@Components/widgets/ChatWidget";

const PropertyPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const handleOnSubmit = (value: string) => {
    setSearchValue(value);
  };
  console.log("properties", data);
  const listings: RCAListing[] = data.properties;
  const listing: RCAListing = listings[1];
  const property = listings[0].Property;

  return (
    <div className="bg-[#F4F4F5]" style={{ backgroundColor: "#F4F4F5" }}>
      <NavBar onSubmit={handleOnSubmit} />
      <div className="flex flex-col mx-10">
        <h1 className="  text-4xl font-semibold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white">
          {searchValue}
        </h1>
      </div>
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
          <CardLayout data={listings} />
        </div>
      </div>
      {/* <div className="flex justify-center content-center">
        <div className="max-w-screen-lg w-full">
          <Card
            className="bg-[#E4E4E7] m-[24px] w-full"
            style={{ backgroundColor: "#E4E4E7" }}
          >
            <CardHeader>
              <p className="text-lg font-bold">Section Header</p>
            </CardHeader>
            <CardBody className="grid">
              <Card className="grid grid-cols-6">1</Card>
              <Card className="grid grid-cols-6">2</Card>
            </CardBody>
          </Card>
        </div>
      </div> */}
      <ChatWidget />
    </div>
  );
};

export default PropertyPage;
