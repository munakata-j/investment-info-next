import React from "react";
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
                    <TableColumn>業種コード</TableColumn>
                    <TableColumn>業種名</TableColumn>
                    <TableColumn>市場価格</TableColumn>
                    <TableColumn>アクション</TableColumn>
                </TableHeader>
                <TableBody>
                    {stockInfoListSampleResponse.data.data.map(item => (
                        <TableRow key={item.id}>
                            <TableCell>{item.code}</TableCell>
                            <TableCell>{item.companyname}</TableCell>
                            <TableCell>{item.marketcode}</TableCell>
                            <TableCell>{item.marketcodename}</TableCell>
                            <TableCell>{item.sector17code}</TableCell>
                            <TableCell>{item.sector17codename}</TableCell>
                            <TableCell>{item.marketprice.map(val => (val.Close))}</TableCell>
                            <TableCell><Button>詳細</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
