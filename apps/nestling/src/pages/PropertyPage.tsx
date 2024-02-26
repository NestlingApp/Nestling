import React, { useState } from "react";
import NavBar from "@Components/Navbar";
import { Spacer } from "@nextui-org/react";
import PropertyCard from "@Components/PropertyCard";
import data from "../assets/data/properties.json";
const PropertyPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const handleOnSubmit = (value: string) => {
    setSearchValue(value);
  };
  console.log("properties", data);
  return (
    <div>
      <NavBar onSubmit={handleOnSubmit} />
      <div className="flex flex-col mx-10">
        <Spacer y={4} x={4} />
        <h1 className=" mb-4 text-4xl font-semibold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white">
          {searchValue}
        </h1>
        <Spacer y={4} x={4} />
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          {data.properties
            .filter(
              (property) =>
                !searchValue ||
                property.Property?.Address?.AddressText.toLocaleLowerCase().includes(
                  searchValue.toLocaleLowerCase()
                )
            )
            .map((property) => (
              <div key={property?.Id}>
                <PropertyCard property={property} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
