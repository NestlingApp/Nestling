import { RCAProperty } from "@Data/reatlorca/types";
import { Card, CardBody } from "@nextui-org/card";
import styles from "@Styles/App.module.css";
import { useCopyToClipboard } from "usehooks-ts";
import React from "react";

interface PropertyDetailsCardProps {
  property: RCAProperty;
  mlsNumber: string;
}

const PropertyDetailsCard = ({
  property,
  mlsNumber,
}: PropertyDetailsCardProps) => {
  const [copiedText, copy] = useCopyToClipboard();
  const formattedAddress = property.Address.AddressText.replace("|", " ");

  const handleCopy = (text: string) => () => {
    copy(text)
      .then(() => {
        console.log("Copied!", { text });
      })
      .catch((error) => {
        console.error("Failed to copy!", error);
      });
  };

  return (
    <Card shadow="none" className="w-full h-200">
      <CardBody
        className={`flex flex-col justify-around items-start ${styles.cardBody}`}
      >
        <div>
          <p className="text-2xl font-bold mb-2">{property.Price}</p>
          <div>
            <p className="text-l font-bold mb-2">Address</p>
            <p
              onClick={() => {
                handleCopy(formattedAddress);
              }}
              className="text-m w-1/2"
            >
              {formattedAddress}
            </p>
          </div>
          <p className="text-l font-bold mb-2">MLS® Number</p>
          <p
            onClick={() => {
              handleCopy(mlsNumber);
            }}
            className="text-m w-1/2"
          >
            {mlsNumber}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};

export default PropertyDetailsCard;
