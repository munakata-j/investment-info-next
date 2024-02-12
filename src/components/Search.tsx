import {SearchIcon} from "@nextui-org/shared-icons";
import {Button, Input} from "@nextui-org/react";
import {SearchSelectBoxComponent} from "@/components/SearchSelectBoxComponent";
import {useExternalApi} from "@/hooks/useExternalApi";
import {ChangeEvent, useState} from "react";
import { useImmer } from 'use-immer';
import {useStockInfoListContext} from "@/context/useStockInfoListContext";
import {useSearchParameters} from "@/context/SearchParamsContext";
export interface searchParameter {
    code?: string,
    companyname?: string,
    sector17code?: string,
    page?: number
}
const SearchComponent = () => {
    const {getStockInfoListApi} = useExternalApi()
    const { params, setParams } = useSearchParameters();
    const { dispatch } = useStockInfoListContext();
    const onClickGetStockInfoList = async () => {
        dispatch({
            type: "REQUEST"
        })
        const requestParams = {
            code: params.code ? params.code : "",
            companyname: "",
            sector17code: params.sector17code ? params.sector17code : "",
            page: params.page ? params.page.toString(): ""
        }
        const res = await getStockInfoListApi(requestParams)
        dispatch({
            type: "SUCCESS",
            payload: res
        })
    }

    const onChangeInputCode = (e: ChangeEvent<HTMLInputElement>) => {
        setParams(draft => {
            draft.code = e.target.value
        })
    }

    const onChangeSelectSectorCode = (e: ChangeEvent<HTMLSelectElement>) => {
        setParams(draft => {
            draft.sector17code = e.target.value
        })
    }
    return (
        <>
            <div
                className="flex justify-center items-center">
                <div className="min-w-250">
                    <Input
                        label="銘柄コード"
                        placeholder="銘柄コードを入力してください。"
                        onChange={onChangeInputCode}
                        startContent={
                            <SearchIcon
                                className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"/>
                        }
                        size="md"
                    />
                </div>
                <div className="p-2 min-w-250">
                    <SearchSelectBoxComponent onChangeSelectSectorCode={onChangeSelectSectorCode}/>
                </div>
                <Button onClick={onClickGetStockInfoList}>検索</Button>
            </div>
        </>
    )
}
export default SearchComponent