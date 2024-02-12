import React, {useEffect, useState} from "react";
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
import {useImmer} from "use-immer";
import {searchParameter} from "@/components/Search";
import {useExternalApi} from "@/hooks/useExternalApi";
import {useSearchParameters} from "@/context/SearchParamsContext";

export default function TableComponent() {
    const { getStockInfoList, dispatch } = useStockInfoListContext();
    const [pageNum, setPageNum] = useState(parseInt(getStockInfoList.getStockInfoList.data.page))
    const {getStockInfoListApi} = useExternalApi()
    const { params, setParams } = useSearchParameters();

    useEffect(() => {
        fetchData()
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
    return (
        <div className="flex flex-col gap-3">
            <Table
                color="default"
                selectionMode="multiple"
                defaultSelectedKeys={["2", "3"]}
                aria-label="Example static collection table"
                bottomContent={
                        <div className="flex w-full justify-center">
                            <Pagination
                                isCompact
                                showControls
                                showShadow
                                color="primary"
                                page={parseInt(getStockInfoList.getStockInfoList.data.page)}
                                total={10}
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
                    loadingContent={<Spinner label="Loading..." />}
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
                            <TableCell><DetailModal/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
