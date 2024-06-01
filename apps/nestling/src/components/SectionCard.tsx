import { Card, CardContent, CardHeader } from "@mui/material";
import React, { ReactNode } from "react";

interface SectionCardProps {
  title: String;
  className?: String;
  children: ReactNode;
}
const SectionCard = ({ title, children, className }: SectionCardProps) => {
  return (
    <Card
      elevation={0}
      // sx={{ backgroundColor: "transparent" }}
      className="shadow-none !bg-transparent  w-full"
    >
      <CardHeader
        // style={{ textAlign: "left" }}
        className="text-3xl leading-9 font-bold text-left bg-transparent"
        title={title}
      />
      <CardContent sx={{ display: "flex", gap: 3 }}>{children}</CardContent>
    </Card>
  );
};

export default SectionCard;
