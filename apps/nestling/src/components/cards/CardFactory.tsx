import React from "react";
import { CardTypes, ICardConfig } from "@Data/layout/ICardLayout";
import { RCAListing } from "@Data/reatlorca/types";
import { getValueFromPath } from "../../helpers/dataHelper";
import OverviewMetricCard from "./OverviewMetricCard";
interface CardFactoryProps {
  config: ICardConfig;
  data: RCAListing;
}
const CardFactory = ({ config, data }: CardFactoryProps) => {
  const cardData = getValueFromPath(data, config.contentPath);

  switch (config.cardType) {
    case CardTypes.OverviewMetric:
      return <OverviewMetricCard data={cardData} config={config} />;
    default:
      return <div>not here</div>;
  }
};

export default CardFactory;
