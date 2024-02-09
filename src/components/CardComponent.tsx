import {Tab, Tabs} from "@nextui-org/tabs";
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import {CompanyInfo, StockDetailFinancialData} from "@/types/type";
import {Chip} from "@nextui-org/chip";
interface Props {
    companyInfo: CompanyInfo,
    stockDetailFinancialData: StockDetailFinancialData
}
export function CardComponent({companyInfo, stockDetailFinancialData}: Props) {
    let tabs = [
        {
            id: "companyInfo",
            label: "銘柄概要",
            content: companyInfo },
        {
            id: "stockDetailFinancialData",
            label: "参考指標",
            content: stockDetailFinancialData},
        {
            id: "chart",
            label: "チャート",
            content: ""
        }
    ];

    return (
        <div className="flex w-full flex-col">
            <Tabs aria-label="Dynamic tabs" items={tabs}>
                {(item: any) => (
                    <Tab key={item.id} title={item.label}>
                        {item.id === "chart" ? (
                            <Card>
                                <CardBody>
                                    Next soon....
                                </CardBody>
                            </Card>
                        ): item.id === "stockDetailFinancialData" ?(
                            <Card>
                                <CardHeader>
                                    <div className="flex flex-col">
                                        <h3 className="text-medium">{item.content.companyname}</h3>
                                        <h4 className="opacity-50 text-sm">{item.content.code}</h4>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-col gap-3">
                                            <Chip color="primary">収益性</Chip>
                                            <div className="flex gap-20 border-b border-gray-200">
                                                <p className="">売上高</p>
                                                <p className="">{item.content.NetSales} 円</p>
                                            </div>
                                            <div className="flex gap-20 border-b border-gray-200">
                                                <p className="">営業利益</p>
                                                <p className="">{item.content.OperatingProfit} 円</p>
                                            </div>
                                            <div className="flex gap-20 border-b border-gray-200">
                                                <p className="">純利益</p>
                                                <p className="">{item.content.Profit} 円</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <Chip color="success">安全性</Chip>
                                            <div className="flex gap-20 border-b border-gray-200">
                                                <p className="">売上高</p>
                                                <p className="">{item.content.NetSales} 円</p>
                                            </div>
                                            <div className="flex gap-20 border-b border-gray-200">
                                                <p className="">営業利益</p>
                                                <p className="">{item.content.OperatingProfit} 円</p>
                                            </div>
                                            <div className="flex gap-20 border-b border-gray-200">
                                                <p className="">純利益</p>
                                                <p className="">{item.content.Profit} 円</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <Chip color="success">安全性</Chip>
                                            <div className="flex gap-20 border-b border-gray-200">
                                                <p className="">売上高</p>
                                                <p className="">{item.content.NetSales} 円</p>
                                            </div>
                                            <div className="flex gap-20 border-b border-gray-200">
                                                <p className="">営業利益</p>
                                                <p className="">{item.content.OperatingProfit} 円</p>
                                            </div>
                                            <div className="flex gap-20 border-b border-gray-200">
                                                <p className="">純利益</p>
                                                <p className="">{item.content.Profit} 円</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <Chip color="success">安全性</Chip>
                                            <div className="flex gap-20 border-b border-gray-200">
                                                <p className="">売上高</p>
                                                <p className="">{item.content.NetSales} 円</p>
                                            </div>
                                            <div className="flex gap-20 border-b border-gray-200">
                                                <p className="">営業利益</p>
                                                <p className="">{item.content.OperatingProfit} 円</p>
                                            </div>
                                            <div className="flex gap-20 border-b border-gray-200">
                                                <p className="">純利益</p>
                                                <p className="">{item.content.Profit} 円</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        ) : (
                            <Card>
                                <CardHeader>
                                    <div className="flex flex-col">
                                        <h3 className="text-medium">{item.content.companyname}</h3>
                                        <h4 className="opacity-50 text-sm">{item.content.code}</h4>
                                    </div>
                                </CardHeader>
                                <CardBody>
                                    <div className="gap-3">
                                        <div className="flex gap-2">
                                            <p className="">銘柄名</p>
                                            <p className="">{item.content.companyname}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="">営業利益</p>
                                            <p className="text-default-400 text-small">{item.content.OperatingProfit} 円</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <p className="">純利益</p>
                                            <p className="">{item.content.Profit} 円</p>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        )}
                    </Tab>
                )}
            </Tabs>
        </div>
    );
}