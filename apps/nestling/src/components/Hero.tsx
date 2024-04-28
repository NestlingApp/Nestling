import { Card, CardFooter, CardHeader, Image, Button } from "@nextui-org/react";
import React from "react";

interface HeroProps {
  property: unknown;
}

const Hero = ({ property }: HeroProps) => {
  console.log("property", property);

  return (
    <div
      className="flex justify-center content-center w-full h-[450px] bg-[#3F3F45]"
      style={{ backgroundColor: "#3F3F45" }}
    >
      <div className="flex max-w-screen-lg">
        <div className="flex content-center flex-wrap mr-1 ">
          <Card className="m-2 w-[500px] h-[315px]">
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full object-cover"
              src={property?.Photo?.[0]?.HighResPath}
            />
          </Card>
        </div>
        <div className="flex w-[500px] content-center flex-wrap justify-center ml-1 flex-col">
          <div className="flex m-1 ">
            <Card className="m-1 w-[250px] h-[150px]">
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={property?.Photo?.[0]?.HighResPath}
              />
            </Card>
            <Card className="m-1 w-[250px] h-[150px]">
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={property?.Photo?.[0]?.HighResPath}
              />
            </Card>
          </div>
          <div className="flex m-1">
            <Card className="m-1 w-[250px] h-[150px]">
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={property?.Photo?.[0]?.HighResPath}
              />
            </Card>
            <Card className="m-1 w-[250px] h-[150px]">
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={property?.Photo?.[0]?.HighResPath}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
