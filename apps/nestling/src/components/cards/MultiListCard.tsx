import ListItem from "@Components/lists/ListItem";
import { ICardConfig } from "@Data/layout/ICardLayout";
import { Card, CardContent, List, Typography } from "@mui/material";
import React from "react";

interface TextCardProps {
  data: Record<string, any>;
  config: ICardConfig;
}

const MultiListCard = ({ data, config }: TextCardProps) => {
  return (
    <Card sx={{ mb: 2 }} elevation={0} className="w-full ">
      <CardContent>
        <div>
          <Typography textAlign="left" variant="h6" gutterBottom>
            Main Level
          </Typography>
          <div>
            <List dense>
              <ListItem title="Living Room" value="12' x 12'" />
              <ListItem title="Dining Room" value="12' x 12'" />
              <ListItem title="Kitchen" value="12' x 12'" />
              <ListItem title="Master Bedroom" value="12' x 12'" />
              <ListItem title="Bedroom" value="12' x 12'" />
            </List>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MultiListCard;
