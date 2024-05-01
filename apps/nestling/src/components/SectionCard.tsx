import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React from "react";

interface SectionCardProps {
  title: String;
}
const SectionCard = ({ title }: SectionCardProps) => {
  return (
    <Card
      className="bg-[#E4E4E7]  w-full"
      style={{ backgroundColor: "#E4E4E7" }}
    >
      <CardHeader>
        <p className="text-lg font-bold">{title}</p>
      </CardHeader>
      <CardBody className="grid">
        <Card className="grid grid-cols-6">1</Card>
        <Card className="grid grid-cols-6">2</Card>
      </CardBody>
    </Card>
  );
};

export default SectionCard;
