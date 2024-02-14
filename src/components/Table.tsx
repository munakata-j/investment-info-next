import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination, Spinner
} from "@nextui-org/react";
import DetailModal from "@/components/ModalComponent";
import {useStockInfoListContext} from "@/context/useStockInfoListContext";
import {useExternalApi} from "@/hooks/useExternalApi";
import {useSearchParameters} from "@/context/SearchParamsContext";
import ExportCsvComponent from "@/components/ExportCsvComponent";
import { Selection } from "@react-types/shared";

export default function TableComponent() {
    const {getStockInfoList, dispatch} = useStockInfoListContext();
    const [pageNum, setPageNum] = useState(parseInt(getStockInfoList.getStockInfoList.data.page))
    const {getStockInfoListApi} = useExternalApi()
    const {params, setParams} = useSearchParameters();
    const isInitialMount = useRef(true);
    const [codesArray, setCodesArray] = useState<(any)[]>([])

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        } else {
            fetchData();
        }
    }, [pageNum]);
    const fetchData = async () => {
        dispatch({
            type: "REQUEST"
        })
        const requestParams = {
            code: params.code ? params.code : "",
            companyname: "",
            sector17code: params.sector17code ? params.sector17code : "",
            page: params.page ? params.page.toString() : ""
        }
        const res = await getStockInfoListApi(requestParams)
        dispatch({
            type: "SUCCESS",
            payload: res
        })

    }

    const handleOnChangePage = (num: number) => {
        setParams(draft => {
            draft.page = num
        })
        setPageNum(num)
    }
    const handleSelectionChange = (keys: Selection ): any => {
        if(keys === "all"){
            const allArray: any = getStockInfoList.getStockInfoList.data.data.map(item =>(item.code))
            setCodesArray(allArray)
            return;
        }
        // const keysArray: (string | number)[] = Array.from(keys);
        const keysArray: (string | number)[] = getStockInfoList.getStockInfoList.data.data
            .filter(item => keys.has(item.id.toString()))
            .map(item => item.code);
        setCodesArray(keysArray);
    };


    return (
        <div className="flex flex-col items-center justify-between">
            <div className="w-full flex justify-end p-2">
                <ExportCsvComponent codes={codesArray}/>
            </div>
            <div className="flex flex-col gap-3">
                <Table
                    color="default"
                    selectionMode="multiple"
                    aria-label="Example static collection table"
                    onSelectionChange={handleSelectionChange}
                    bottomContent={
                        <div className="flex w-full justify-center">
                            <Pagination
                                isCompact
                                showControls
                                showShadow
                                color="primary"
                                page={parseInt(getStockInfoList.getStockInfoList.data.page)}
                                total={getStockInfoList.getStockInfoList.data.size ? Math.ceil(getStockInfoList.getStockInfoList.data.size) / 10 : 10}
                                onChange={handleOnChangePage}
                            />
                        </div>
                    }
                >
                    <TableHeader>
                        <TableColumn>銘柄コード</TableColumn>
                        <TableColumn>銘柄名</TableColumn>
                        <TableColumn>市場コード</TableColumn>
                        <TableColumn>市場名</TableColumn>
                        <TableColumn>業種名</TableColumn>
                        <TableColumn>高値</TableColumn>
                        <TableColumn>安値</TableColumn>
                        <TableColumn>終値</TableColumn>
                        <TableColumn>取引量</TableColumn>
                        <TableColumn>アクション</TableColumn>
                    </TableHeader>
                    <TableBody
                        loadingContent={<Spinner label="Loading..."/>}
                    >
                        {getStockInfoList.getStockInfoList.data.data.map(item => (
                            <TableRow key={item?.id}>
                                <TableCell>{item?.code}</TableCell>
                                <TableCell>{item?.companyname}</TableCell>
                                <TableCell>{item?.marketcode}</TableCell>
                                <TableCell>{item?.marketcodename}</TableCell>
                                <TableCell>{item?.sector17codename}</TableCell>
                                <TableCell>{item?.marketprice?.map(val => (val?.High))} 円</TableCell>
                                <TableCell>{item?.marketprice?.map(val => (val?.Low))} 円</TableCell>
                                <TableCell>{item?.marketprice?.map(val => (val?.Close))} 円</TableCell>
                                <TableCell>{item?.marketprice?.map(val => (val?.Volume))} 株</TableCell>
                                <TableCell><DetailModal item={item}/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
