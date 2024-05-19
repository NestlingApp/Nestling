import { ICardConfig } from "@Data/layout/ICardLayout";
import { Card, CardBody } from "@nextui-org/card";
import styles from "@Styles/App.module.css";
import React from "react";

interface TextCardProps {
  data: Record<string, any>;
  config: ICardConfig;
}

const TextCard = ({ data, config }: TextCardProps) => {
  return (
    <Card shadow="none" className="w-full ">
      <CardBody className={styles.cardBody}>
        <div>
          <p className="text-xl font-bold mb-2">{config.title}</p>
          <div
            style={{ height: "160px" }}
            className="overflow-y-scroll text-wrap"
          >
            {config.keys.map((key: string) => {
              return (
                <div className="text-left">
                  <p className="text-m w-full">{data[key]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TextCard;
