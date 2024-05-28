import { Card, CardBody } from "@nextui-org/card";
import { Chip } from "@nextui-org/react";
import styles from "@Styles/App.module.css";
import React from "react";

interface PropertySummaryCardProps {
  summary: String;
}

const PropertySummaryCard = ({ summary }: PropertySummaryCardProps) => {
  return (
    <Card shadow="none" className="w-full ">
      <CardBody className={styles.cardBody}>
        <div>
          <p className="text-xl font-bold mb-2">Summary</p>
          <div
            style={{ height: "160px" }}
            className="overflow-y-scroll text-wrap"
          >
            <p className="text-m w-full">{summary}</p>
          </div>
          <div className="mt-4">
            <Chip className={styles.chip}>Townhouse</Chip>
            <Chip className={styles.chip}>2-Storey</Chip>
            <Chip className={styles.chip}>Year Build 2010</Chip>
            <Chip className={styles.chip}>Garage</Chip>
            <Chip className={styles.chip}>Mountain View</Chip>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PropertySummaryCard;
