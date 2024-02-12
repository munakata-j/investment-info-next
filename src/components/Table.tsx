import React, {useEffect} from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Button
} from "@nextui-org/react";
import {stockInfoListSampleResponse} from "@/config/config";
import DetailModal from "@/components/ModalComponent";

const colors = ["default", "primary", "secondary", "success", "warning", "danger"];

export default function TableComponent() {
    const [selectedColor, setSelectedColor] = React.useState("default");

    return (
        <div className="flex flex-col gap-3">
            <Table
                color="default"
                selectionMode="multiple"
                defaultSelectedKeys={["2", "3"]}
                aria-label="Example static collection table"
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
                <TableBody>
                    {stockInfoListSampleResponse.data.data.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>{item.code}</TableCell>
                            <TableCell>{item.companyname}</TableCell>
                            <TableCell>{item.marketcode}</TableCell>
                            <TableCell>{item.marketcodename}</TableCell>
                            <TableCell>{item.sector17codename}</TableCell>
                            <TableCell>{item.marketprice.map(val => (val.High))} 円</TableCell>
                            <TableCell>{item.marketprice.map(val => (val.Low))} 円</TableCell>
                            <TableCell>{item.marketprice.map(val => (val.Close))} 円</TableCell>
                            <TableCell>{item.marketprice.map(val => (val.Volume))} 株</TableCell>
                            <TableCell><DetailModal/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
