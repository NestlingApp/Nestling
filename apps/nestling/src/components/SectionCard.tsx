import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface SectionCardProps {
  title: String;
  className?: String;
  children: ReactNode;
}
const SectionCard = ({ title, children }: SectionCardProps) => {
  return (
    <Card elevation={0} className="shadow-none !bg-transparent  w-full">
      <Typography sx={{ ml: 2, textAlign: "left" }} variant="h4" gutterBottom>
        {title}
      </Typography>

      <CardContent sx={{ display: "flex", gap: 3 }}>{children}</CardContent>
    </Card>
  );
};

export default SectionCard;
