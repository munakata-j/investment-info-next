import {SearchIcon} from "@nextui-org/shared-icons";
import {Button, Input} from "@nextui-org/react";
import {SearchSelectBoxComponent} from "@/components/SearchSelectBoxComponent";
import {useExternalApi} from "@/hooks/useExternalApi";
import {ChangeEvent, useState} from "react";
import { useImmer } from 'use-immer';
export interface searchParameter {
    code?: string,
    companyname?: string,
    sector17code?: string,
    page?: number
}
const SearchComponent = () => {
    const {getStockInfoListApi} = useExternalApi()
    const [paramsImmer, setParamasImmer] = useImmer<searchParameter>({})
    const onClickGetStockInfoList = async () => {
        const requestParams = {
            code: paramsImmer.code ? paramsImmer.code : "",
            companyname: "",
            sector17code: paramsImmer.sector17code ? paramsImmer.sector17code : "",
            page: paramsImmer.page ? paramsImmer.page.toString(): ""
        }
        const res = await getStockInfoListApi(requestParams)
        console.log("<<<<<<<<<<<<<< res -> ", res)
    }

    const onChangeInputCode = (e: ChangeEvent<HTMLInputElement>) => {
        setParamasImmer(draft => {
            draft.code = e.target.value
        })
    }

    const onChangeSelectSectorCode = (e: ChangeEvent<HTMLSelectElement>) => {
        setParamasImmer(draft => {
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