import { RCAProperty } from "@Data/reatlorca/types";
import { Box, Card, CardContent, Typography } from "@mui/material";
import styles from "@Styles/App.module.css";
import { useCopyToClipboard } from "usehooks-ts";

import { Square2StackIcon } from "@heroicons/react/24/outline";
import React from "react";
import { IconButton } from "@mui/material";
import { NListing } from "@Data/nestling/NListing";

interface PropertyDetailsCardProps {
  property: NListing;
  mlsNumber: string;
}

const PropertyDetailsCard = ({
  property,
  mlsNumber,
}: PropertyDetailsCardProps) => {
  const [copiedText, copy] = useCopyToClipboard();
  const formattedAddress = property?.address.street_address.replace("|", " ");

  const handleCopy = (label: string, text: string) => {
    copy(text)
      .then(() => {
        // openSnackbar(`${label} copied to clipboard`, [2000]);
      })
      .catch((error) => {
        // openSnackbar(`Failed to copy ${label}!`, [2000]);
      });
  };

  return (
    <Card elevation={0} sx={{ width: "100%" }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-start",
          textAlign: "left",
        }}
      >
        <Typography sx={{ fontWeight: 600 }} variant="h6" gutterBottom>
          {property.Price}
        </Typography>
        <div>
          <Typography variant="subtitle2">Address</Typography>
          <div className="flex justify-start items-center  group">
            <Typography
              sx={{ fontWeight: 600, width: "50%" }}
              variant="body1"
              gutterBottom
            >
              {formattedAddress}
            </Typography>
            <IconButton
              onClick={() => {
                console.log("copy clicked");
                handleCopy("Address", formattedAddress);
              }}
              className="bg-transparent opacity-0 group-hover:opacity-100"
            >
              <Square2StackIcon className="h-6 w-6" />
            </IconButton>
          </div>
        </div>
        <Typography variant="subtitle2">MLS® Number</Typography>
        <div className="flex justify-start items-center group">
          <Typography variant="body1">{mlsNumber}</Typography>
          <IconButton
            onClick={() => {
              console.log("copy clicked");
              handleCopy("MLS Number", mlsNumber);
            }}
            className="bg-transparent opacity-0 group-hover:opacity-100"
          >
            <Square2StackIcon className="h-6 w-6" />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyDetailsCard;
