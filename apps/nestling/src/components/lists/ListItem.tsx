import { ICardConfig } from "@Data/layout/ICardLayout";
import { Card, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import styles from "@Styles/App.module.css";
import React from "react";

interface ListItemProps {
  title?: string;
  value: string;
}

const ListItem = ({ title, value }: ListItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between my-3 mx-3">
        {title && (
          <p className="text-lg leading-7 font-bold max-w-1/2">{title}</p>
        )}
        <p className="text-xl leading-7 max-w-1/2 text-right">{value}</p>
      </div>
      <Divider />
    </div>
  );
};

export default ListItem;
