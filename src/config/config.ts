import {CompanyInfo, StockDetailFinancialData} from "@/types/type";

export const stockInfoListSampleResponse = {
    "code": "200",
    "msg": "",
    "data": {
        "data": [
            {
                "code": "23750",
                "companyname": "ギグワークス",
                "id": 529,
                "marketcode": "0112",
                "marketcodename": "スタンダード",
                "marketprice": [
                    {
                        "Date": "2023-11-15",
                        "Code": "23750",
                        "Open": 1030,
                        "High": 1052,
                        "Low": 930,
                        "Close": 963,
                        "UpperLimit": "0",
                        "LowerLimit": "0",
                        "Volume": 4537100,
                        "TurnoverValue": 4515509300,
                        "AdjustmentFactor": 1,
                        "AdjustmentOpen": 1030,
                        "AdjustmentHigh": 1052,
                        "AdjustmentLow": 930,
                        "AdjustmentClose": 963,
                        "AdjustmentVolume": 4537100
                    }
                ],
                "sector17code": "10",
                "sector17codename": "情報通信・サービスその他"
            }
        ],
        "size": 1,
        "page": "1",
        "code": "200",
        "msg": ""
    }
}
export const initialGetStockInfo = {
    getStockInfoList: stockInfoListSampleResponse,
    loading: true,
    error: null,

}
export const sampleDetailStockResponse = {
    "code": "200",
    "msg": "",
    "data": {
        "data": {
            "code": "23750",
            "companyname": "ギグワークス",
            "id": 529,
            "marketcode": "0112",
            "marketcodename": "スタンダード",
            "NetSales": "18451000000",
            "OperatingProfit": "2617000000",
            "Profit": "1762000000",
            "OperatingProfitMargin": "14.18%",
            "Equity": "19222000000",
            "TotalAssets": "24746000000",
            "PER": 9.05,
            "DividendYield": "%",
            "EquityToAssetRatio": "77.68%",
            "PBR": 0.84,
            "ClosePrice": 1204,
            "CashAndEquivalents": "13476000000",
            "CashFlowsFromFinancingActivities": "-474000000",
            "CashFlowsFromInvestingActivities": "-597000000",
            "CashFlowsFromOperatingActivities": "2981000000"
        },
        "code": "200",
        "msg": ""
    }
}
export const sampleCompanyInfo: CompanyInfo =  {
    "code": "23750",
    "companyname": "ギグワークス",
    "id": 529,
    "marketcode": "0112",
    "marketcodename": "スタンダード",
    "marketprice": [
        {
            "Date": "2023-11-15",
            "Code": "23750",
            "Open": 1030,
            "High": 1052,
            "Low": 930,
            "Close": 963,
            "UpperLimit": "0",
            "LowerLimit": "0",
            "Volume": 4537100,
            "TurnoverValue": 4515509300,
            "AdjustmentFactor": 1,
            "AdjustmentOpen": 1030,
            "AdjustmentHigh": 1052,
            "AdjustmentLow": 930,
            "AdjustmentClose": 963,
            "AdjustmentVolume": 4537100
        }
    ],
    "sector17code": "10",
    "sector17codename": "情報通信・サービスその他"
}
export const sampleFinancialData: StockDetailFinancialData =  {
    id: 529, sectorCode: "10", sectorName: "情報通信・サービスその他",
    "code": "23750",
        "companyname": "ギグワークス",
        "marketcode": "0112",
        "marketName": "スタンダード",
        "NetSales": "18451000000",
        "OperatingProfit": "2617000000",
        "Profit": "1762000000",
        "OperatingProfitMargin": "14.18%",
        "Equity": "19222000000",
        "TotalAssets": "24746000000",
        "PER": 9.05,
        "DividendYield": "%",
        "EquityToAssetRatio": "77.68%",
        "PBR": 0.84,
        "ClosePrice": 1204,
        "CashAndEquivalents": "13476000000",
        "CashFlowsFromFinancingActivities": "-474000000",
        "CashFlowsFromInvestingActivities": "-597000000",
        "CashFlowsFromOperatingActivities": "2981000000"
    }

export const sector17map = [
    {
        sector17code: "1",
        sector17name: "食品"
    },
    {
        sector17code: "2",
        sector17name: "エネルギー資源"
    },
    {
        sector17code: "3",
        sector17name: "建設・資源"
    },
    {
        sector17code: "4",
        sector17name: "素材・化学"
    },
    {
        sector17code: "5",
        sector17name: "医薬品"
    },
    {
        sector17code: "6",
        sector17name: "自動車・輸送機"
    },
    {
        sector17code: "7",
        sector17name: "鉄鋼・非鉄"
    },
    {
        sector17code: "8",
        sector17name: "機械"
    },
    {
        sector17code: "9",
        sector17name: "電気・精密"
    },
    {
        sector17code: "10",
        sector17name: "情報通信・サービスその他"
    },
    {
        sector17code: "11",
        sector17name: "電気・ガス"
    },
    {
        sector17code: "12",
        sector17name: "運輸・物流"
    },
    {
        sector17code: "13",
        sector17name: "商社・卸売"
    },
    {
        sector17code: "14",
        sector17name: "小売"
    },
    {
        sector17code: "15",
        sector17name: "銀行"
    },
    {
        sector17code: "16",
        sector17name: "金融(銀行を除く)"
    },
    {
        sector17code: "17",
        sector17name: "不動産"
    },
    {
        sector17code: "99",
        sector17name: "その他"
    },
]