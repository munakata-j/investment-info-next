export interface GetStockInfoListApiResponse {
    code: string;
    msg: string;
    data: {
        data: CompanyInfo[];
        size: number;
        page: string;
        code: string;
        msg: string;
    };
}

export interface CompanyInfo {
    code: string;
    companyname: string;
    id: number;
    marketcode: string;
    marketcodename: string;
    marketprice: MarketPrice[];
    sector17code: string;
    sector17codename: string;
}

export interface MarketPrice {
    Date: string;
    Code: string;
    Open: number;
    High: number;
    Low: number;
    Close: number;
    UpperLimit: string;
    LowerLimit: string;
    Volume: number;
    TurnoverValue: number;
    AdjustmentFactor: number;
    AdjustmentOpen: number;
    AdjustmentHigh: number;
    AdjustmentLow: number;
    AdjustmentClose: number;
    AdjustmentVolume: number;
}
