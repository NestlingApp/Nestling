import { ICardConfig } from "@Data/layout/ICardLayout";
import { Card, CardContent } from "@mui/material";
import React from "react";

interface TextCardProps {
  data: Record<string, any>;
  config: ICardConfig;
}

const TextCard = ({ data, config }: TextCardProps) => {
  return (
    <Card sx={{ mb: 2 }} elevation={0} className="w-full ">
      <CardContent>
        <div>
          <p className="text-xl font-bold mb-2">{config.title}</p>
          <div
            style={{ height: "160px" }}
            className="overflow-y-scroll text-wrap"
          >
            {config.keys.map((key: string) => {
              return (
                <div key={`${config.title}-${key}`} className="text-left">
                  <p className="text-m w-full">{data?.[key]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TextCard;
