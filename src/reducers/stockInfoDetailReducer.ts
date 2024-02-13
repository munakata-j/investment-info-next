import {GetStockInfoDetailApiResponse} from "@/types/type";
import {produce} from "immer";
export type GetStockInfoDetailState = {
    getStockInfoDetail: GetStockInfoDetailApiResponse,
    loading: boolean;
    error: string | null;
}

export type GetStockInfoDetailAction =
    | { type: 'REQUEST' }
    | { type: 'SUCCESS'; payload: GetStockInfoDetailApiResponse }
    | { type: 'FAILURE'; payload: string }

export function useGetStockInfoDetailReducer(state: GetStockInfoDetailState, action: GetStockInfoDetailAction) {
    return produce(state, draft => {
        switch (action.type) {
            case "REQUEST":
                draft.loading = true;
                draft.error = null;
                break;
            case "SUCCESS":
                draft.loading = false;
                draft.getStockInfoDetail = action.payload
                break;
            case "FAILURE":
                draft.loading = false;
                draft.error = action.payload;
                break;
        }
    })
}