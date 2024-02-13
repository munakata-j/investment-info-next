import {createContext, ReactNode, useContext, useReducer} from "react";
import {
    GetStockInfoDetailAction,
    GetStockInfoDetailState,
    useGetStockInfoDetailReducer
} from "@/reducers/stockInfoDetailReducer";

interface StockInfoListContextProviderProps {
    children: ReactNode;
}

const initialState: GetStockInfoDetailState = {
    error: "", getStockInfoDetail: {
        code: "",
        msg: "",
        data: {
            data: {
                code: "",
                companyname: "",
                sectorCode: "",
                sectorName: "",
                marketName: "",
                NetSales: "",
                OperatingProfit: "",
                Profit: "",
                OperatingProfitMargin: "",
                Equity: "",
                TotalAssets: "",
                PER: 0,
                DividendYield: "",
                EquityToAssetRatio: "",
                PBR: 0,
                ClosePrice: 0,
                CashAndEquivalents: "",
                CashFlowsFromFinancingActivities: "",
                CashFlowsFromInvestingActivities: "",
                CashFlowsFromOperatingActivities: "",
                DisclosedDate: ""
            },
            code: "",
            msg: ""
        }
    }, loading: false

}
const StockInfoDetailContext = createContext<{
    getStockInfoDetail: GetStockInfoDetailState; stockInfoDetailDispatch: React.Dispatch<GetStockInfoDetailAction>;
} | undefined>(undefined)

export const StockInfoDetailContextProvider: React.FC<StockInfoListContextProviderProps> = ({children}) => {
    const [state, stockInfoDetailDispatch] = useReducer(useGetStockInfoDetailReducer, initialState)
    return (
        <StockInfoDetailContext.Provider value={{getStockInfoDetail: state, stockInfoDetailDispatch}}>
            {children}
        </StockInfoDetailContext.Provider>
    )
}
export const useStockInfoDetailContext = () => {
    const context = useContext(StockInfoDetailContext);
    if (context === undefined) {
        throw new Error('useStockInfoListContext must be used within a StockInfoDetailContext');
    }
    return context;
}
