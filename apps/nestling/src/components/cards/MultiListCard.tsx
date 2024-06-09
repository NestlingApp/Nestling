import ListItem from "@Components/lists/ListItem";
import { ICardConfig } from "@Data/layout/ICardLayout";
import styles from "@Styles/App.module.css";
import { Card, CardContent } from "@mui/material";
import React from "react";

interface TextCardProps {
  data: Record<string, any>;
  config: ICardConfig;
}

const MultiListCard = ({ data, config }: TextCardProps) => {
  return (
    <Card elevation={0} className="w-full ">
      <CardContent className={styles.cardBody}>
        <div>
          <div className="text-2xl leading-8 font-bold bg-content2 p-3 mb-3">
            Main Level
          </div>
          <div>
            <ListItem title="Living Room" value="12' x 12'" />
            <ListItem title="Dining Room" value="12' x 12'" />
            <ListItem title="Kitchen" value="12' x 12'" />
            <ListItem title="Master Bedroom" value="12' x 12'" />
            <ListItem title="Bedroom" value="12' x 12'" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MultiListCard;
