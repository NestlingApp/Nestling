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
      className="shadow-none bg-transparent  w-full"
    >
      <CardHeader>
        <p className="text-3xl leading-9 font-bold">{title}</p>
      </CardHeader>
      <CardBody className={`${className}`}>{children}</CardBody>
    </Card>
  );
};

export default SectionCard;
