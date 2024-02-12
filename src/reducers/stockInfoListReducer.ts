import {GetStockInfoListApiResponse} from "@/types/type";
import {produce} from "immer";
export type GetStockInfoListState = {
    getStockInfoList: GetStockInfoListApiResponse,
    loading: boolean;
    error: string | null;
}

export type GetStockInfoListAction =
    | { type: 'REQUEST' }
    | { type: 'SUCCESS'; payload: GetStockInfoListApiResponse }
    | { type: 'FAILURE'; payload: string }

export function useGetStockInfoReducer (state: GetStockInfoListState, action: GetStockInfoListAction) {
    return produce(state, draft => {
        switch (action.type) {
            case "REQUEST":
                draft.loading = true;
                draft.error = null;
                break;
            case "SUCCESS":
                draft.loading = false;
                draft.getStockInfoList = action.payload
                break;
            case "FAILURE":
                draft.loading = false;
                draft.error = action.payload;
                break;
        }
    })
}
