import { RCAProperty } from "@Data/reatlorca/types";
import { Card, CardBody } from "@nextui-org/card";
import styles from "@Styles/App.module.css";
import { useCopyToClipboard } from "usehooks-ts";
import { useSnackbar } from "react-simple-snackbar";
import { Square2StackIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Button } from "@nextui-org/react";
import { Typography } from "@mui/material";

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
  const [openSnackbar] = useSnackbar();
  const handleCopy = (label: string, text: string) => {
    console.log("ee");
    copy(text)
      .then(() => {
        console.log("Copied!", { text });
        openSnackbar(`${label} copied to clipboard`, [2000]);
      })
      .catch((error) => {
        openSnackbar(`Failed to copy ${label}!`, [2000]);
      });
  };

  return (
    <Card shadow="none" className="w-full h-200">
      <CardBody
        className={`flex flex-col justify-around items-start ${styles.cardBody}`}
      >
        <div>
          <Typography className="text-2xl font-bold mb-2">
            {property.Price}
          </Typography>
          <div>
            <Typography className="text-xl leading-7 font-bold mb-2">
              Address
            </Typography>
            <div className="flex justify-start group">
              <p className="text-lg w-1/2">{formattedAddress}</p>
              <Button
                onClick={() => {
                  console.log("copy clicked");
                  handleCopy("Address", formattedAddress);
                }}
                className="bg-transparent opacity-0 group-hover:opacity-100"
                isIconOnly
              >
                <Square2StackIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>
          <p className="text-xl leading-7 font-bold mt-4">MLS® Number</p>
          <div className="flex justify-start items-center group">
            <p className="text-m  ">{mlsNumber}</p>
            <Button
              onClick={() => {
                console.log("copy clicked");
                handleCopy("MLS Number", mlsNumber);
              }}
              className="bg-transparent opacity-0 group-hover:opacity-100"
              isIconOnly
            >
              <Square2StackIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PropertyDetailsCard;
