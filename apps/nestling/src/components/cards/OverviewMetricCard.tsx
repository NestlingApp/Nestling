import React from "react";
import { ICardConfig } from "data/layout/ICardLayout";
import { Card, CardContent } from "@mui/material";

interface OverviewMetricCardProps {
  data: Record<string, any>;
  config: ICardConfig;
}

export const OverviewMetricCard = ({
  data,
  config,
}: OverviewMetricCardProps) => {
  return (
    <Card elevation={0} className="w-full">
      <CardContent className="flex flex-row justify-around items-center">
        {config.keys.map((key: string) => {
          return (
            <div
              key={`overview-${config?.title}-${key}`}
              className="text-center"
            >
              <h2 className="text-lg leading-7 font-bold">{key}</h2>
              <span className="text-4xl leading-10 font-medium">
                {data?.[key]}
              </span>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default OverviewMetricCard;
