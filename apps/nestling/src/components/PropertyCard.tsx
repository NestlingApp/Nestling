import { Card, CardFooter, CardHeader, Image, Button } from "@nextui-org/react";
import React from "react";

interface PropertyCardProps {
  property: unknown;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  console.log(property);
  // @ts-ignore temp
  const Property = property?.Property || {};
  return (
    <Card
      isFooterBlurred
      className="w-full h-[555px] col-span-12 sm:col-span-7"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">
          Your day your way
        </p>
        <h4 className="text-white/90 font-medium text-xl">
          Your checklist for better sleep
        </h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={Property?.Photo?.[0]?.HighResPath}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt="Breathing app icon"
            className="rounded-full w-10 h-11 bg-black"
            src="/images/breathing-app-icon.jpeg"
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">
              {Property?.Address?.AddressText}
            </p>
            <p className="text-tiny text-white/60">{Property?.Price}</p>
          </div>
        </div>
        <Button radius="full" size="sm">
          Details
        </Button>
      </CardFooter>
    </Card>
  );
};
export default PropertyCard;
