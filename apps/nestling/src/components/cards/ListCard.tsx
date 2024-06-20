import ListItem from "@Components/lists/ListItem";
import { Card, CardContent, List, Typography } from "@mui/material";
import React from "react";

interface ListCardProps {
  data: Record<string, any>;
  title: string;
}

const MultiListCard = ({ data, config }: ListCardProps) => {
  return (
    <Card sx={{ mb: 2 }} elevation={0} className="w-full ">
      <CardContent>
        <Typography textAlign="left" variant="h6" gutterBottom>
          Utilities
        </Typography>
        <List dense>
          <ListItem title="Heating" value="Electric" />
          <ListItem title="Cooling" value="None" />
          <ListItem title="Water" value="Municipal Water" />
          <ListItem title="Sewer" value="Municipal Sewage System" />
        </List>
      </CardContent>
    </Card>
  );
};

export default MultiListCard;
