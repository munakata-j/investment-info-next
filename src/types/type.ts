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
export interface GetStockInfoDetailApiResponse  {
    code: string;
    msg: string;
    data: {
        data: {
            code: string;
            companyname: string;
            sectorCode: string;
            sectorName: string;
            marketName: string;
            NetSales: string;
            OperatingProfit: string;
            Profit: string;
            OperatingProfitMargin: string;
            Equity: string;
            TotalAssets: string;
            PER: number;
            DividendYield: string;
            EquityToAssetRatio: string;
            PBR: number;
            ClosePrice: number;
            CashAndEquivalents: string;
            CashFlowsFromFinancingActivities: string;
            CashFlowsFromInvestingActivities: string;
            CashFlowsFromOperatingActivities: string;
        };
        code: string;
        msg: string;
    };
}
export interface StockDetailFinancialData {
    id: number,
    code: string;
    companyname: string;
    sectorCode: string;
    sectorName: string;
    marketcode: string,
    marketName: string;
    NetSales: string;
    OperatingProfit: string;
    Profit: string;
    OperatingProfitMargin: string;
    Equity: string;
    TotalAssets: string;
    PER: number;
    DividendYield: string;
    EquityToAssetRatio: string;
    PBR: number;
    ClosePrice: number;
    CashAndEquivalents: string;
    CashFlowsFromFinancingActivities: string;
    CashFlowsFromInvestingActivities: string;
    CashFlowsFromOperatingActivities: string;
}

