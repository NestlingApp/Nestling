import { Divider, ListItem as MUIListItem, Typography } from "@mui/material";
import React from "react";

interface ListItemProps {
  title?: string;
  value: string;
}

const ListItem = ({ title, value }: ListItemProps) => {
  return (
    <MUIListItem dense className="flex flex-col">
      <div className="flex flex-row justify-between w-full">
        {title && <Typography variant="subtitle2">{title}</Typography>}
        <Typography variant="body1">{value}</Typography>
      </div>
      <Divider />
    </MUIListItem>
  );
};

export default ListItem;
