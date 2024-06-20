import React from "react";
import { ICardConfig } from "data/layout/ICardLayout";
import { Box, Card, CardContent, Typography } from "@mui/material";

interface OverviewMetricCardProps {
  data: Record<string, any>;
  config: ICardConfig;
}

export const OverviewMetricCard = ({
  data,
  config,
}: OverviewMetricCardProps) => {
  const spacing = config.keys?.length > 1 ? 2 : 7;
  return (
    <Card sx={{ mb: 2 }} elevation={0} className="w-full">
      <CardContent sx={{ my: spacing }}>
        {config.keys.map((key: string) => {
          return (
            <Box
              key={`overview-${config?.title}-${key}`}
              sx={{ textAlign: "center" }}
            >
              <Typography gutterBottom variant="subtitle2">
                {key}
              </Typography>
              <Typography variant="h4">{data?.[key] || "N/A"}</Typography>
            </Box>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default OverviewMetricCard;
