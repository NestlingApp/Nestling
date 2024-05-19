import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React, { ReactNode } from "react";

interface SectionCardProps {
  title: String;
  className?: String;
  children: ReactNode;
}
const SectionCard = ({ title, children, className }: SectionCardProps) => {
  return (
    <Card
      style={{ backgroundColor: "none !important" }}
      className="shadow-none bg-[#F4F4F5]  w-full"
    >
      <CardHeader>
        <p className="text-lg font-bold">{title}</p>
      </CardHeader>
      <CardBody className={`${className}`}>{children}</CardBody>
    </Card>
  );
};

export default SectionCard;
