import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useReducer, useState} from "react";
import {
    GetStockInfoListAction,
    GetStockInfoListState,
    useGetStockInfoReducer
} from "@/reducers/stockInfoListReducer";
const  initialGetStockInfoList: GetStockInfoListState = {
    error: "", getStockInfoList: {
        code: "",
        msg: "",
        data: {
            data: [],
            size: 0,
            page: "",
            code: "",
            msg: ""
        }
    }, loading: false
}
const StockInfoListContext = createContext<{getStockInfoList: GetStockInfoListState; dispatch: React.Dispatch<GetStockInfoListAction>; totalPage: number; setTotalPage: Dispatch<SetStateAction<number>>} | undefined>(undefined)

interface StockInfoListContextProviderProps {
    children: ReactNode;
}
export const StockInfoListContextProvider: React.FC<StockInfoListContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(useGetStockInfoReducer, initialGetStockInfoList);
    const [totalPage, setTotalPage] = useState(state.getStockInfoList.data.size)

    return (
        <StockInfoListContext.Provider value={{ getStockInfoList: state, dispatch, totalPage, setTotalPage }}>
            {children}
        </StockInfoListContext.Provider>
    );
}

export const useStockInfoListContext = () => {
    const context = useContext(StockInfoListContext);
    if (context === undefined) {
        throw new Error('useStockInfoListContext must be used within a StockInfoListContextProvider');
    }
    return context;
}