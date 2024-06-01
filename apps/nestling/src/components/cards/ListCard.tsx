import ListItem from "@Components/lists/ListItem";
import { ICardConfig } from "@Data/layout/ICardLayout";
import { Card, CardContent } from "@mui/material";
import styles from "@Styles/App.module.css";
import React from "react";

interface ListCardProps {
  data: Record<string, any>;
  title: string;
}

const MultiListCard = ({ data, config }: ListCardProps) => {
  return (
    <Card elevation={0} className="w-full ">
      <CardContent className={styles.cardBody}>
        <div>
          <div className="text-2xl leading-8 font-bold  px-3 py-3 mb-3">
            Utilities
          </div>
          <ListItem title="Heating" value="Electric" />
          <ListItem title="Cooling" value="None" />
          <ListItem title="Water" value="Municipal Water" />
          <ListItem title="Sewer" value="Municipal Sewage System" />
        </div>
      </CardContent>
    </Card>
  );
};

export default MultiListCard;
