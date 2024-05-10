export type ICardConfig = {
    id:string,
    size: number;
    contentPath: string;
    keys: string[];
    cardType:  ICardTypes;
    title:string;
}

 export const CardTypes = {
    OverviewMetric: "OVERVIEW_METRIC",
} as const;

export type ICardTypes =  typeof CardTypes[keyof typeof CardTypes];