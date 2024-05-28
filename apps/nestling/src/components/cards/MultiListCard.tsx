import ListItem from "@Components/lists/ListItem";
import { ICardConfig } from "@Data/layout/ICardLayout";
import { Card, CardBody } from "@nextui-org/card";
import styles from "@Styles/App.module.css";
import React from "react";

interface TextCardProps {
  data: Record<string, any>;
  config: ICardConfig;
}

const MultiListCard = ({ data, config }: TextCardProps) => {
  return (
    <Card shadow="none" className="w-full ">
      <CardBody className={styles.cardBody}>
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
      </CardBody>
    </Card>
  );
};

export default MultiListCard;
