import {Tab, Tabs} from "@nextui-org/tabs";
import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {CompanyInfo, GetStockInfoDetailApiResponse, StockDetailFinancialData} from "@/types/type";
import {Chip} from "@nextui-org/chip";
import {useStockInfoDetailContext} from "@/context/StockInfoDetailContext";
interface Props {
    companyInfo: CompanyInfo,
    stockDetailFinancialData: GetStockInfoDetailApiResponse
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
            content: stockDetailFinancialData.data.data},
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
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-3">
                                            <Chip color="primary">収益性</Chip>
                                            <div className="flex justify-between border-b border-gray-200">
                                                <p className="">売上高</p>
                                                <p className="">{item.content.NetSales} 円</p>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-200">
                                                <p className="">営業利益</p>
                                                <p className="">{item.content.OperatingProfit} 円</p>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-200">
                                                <p className="">純利益</p>
                                                <p className="">{item.content.Profit} 円</p>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-200">
                                                <p className="">営業利益率</p>
                                                <p className="">{item.content.OperatingProfitMargin}</p>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-200">
                                                <p className="">PER</p>
                                                <p className="">{item.content.PER} 円</p>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-200">
                                                <p className="">PBR</p>
                                                <p className="">{item.content.PBR} 円</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <Chip color="success">安全性</Chip>
                                            <div className="flex justify-between border-b border-gray-200">
                                                <p className="">総資産</p>
                                                <p className="">{item.content.TotalAssets} 円</p>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-200">
                                                <p className="">純資産</p>
                                                <p className="">{item.content.Equity} 円</p>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-200">
                                                <p className="">自己資本比率</p>
                                                <p className="">{item.content.EquityToAssetRatio}</p>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-200">
                                                <p className="">現金および同等物</p>
                                                <p className="">{item.content.CashAndEquivalents} 円</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-5">
                                            <Chip color="secondary">キャッシュフロー</Chip>
                                            <div className="flex justify-between border-b border-gray-200">
                                            <p className="">営業活動によるキャッシュフロー</p>
                                                <p className="">{item.content.CashFlowsFromOperatingActivities} 円</p>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-200">
                                                <p className="">投資活動によるキャッシュフロー</p>
                                                <p className="">{item.content.CashFlowsFromInvestingActivities} 円</p>
                                            </div>
                                            <div className="flex justify-between border-b border-gray-200">
                                                <p className="">財務活動によるキャッシュフロー</p>
                                                <p className="">{item.content.CashFlowsFromFinancingActivities} 円</p>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <div className="flex gap-3">
                                        <h3 className="text-sm">参考決算書開示日: </h3>
                                        <h3 className="text-sm">{item.content.DisclosedDate}</h3>
                                    </div>
                                </CardFooter>
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
                                    <div className="flex flex-col gap-5">
                                        <div className="flex justify-between border-b border-gray-200">
                                            <p className="">銘柄名</p>
                                            <p className="">{item.content.companyname}</p>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-200">
                                            <p className="">市場名</p>
                                            <p className="">{item.content.marketcodename} </p>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-200">
                                            <p className="">業種</p>
                                            <p className="">{item.content.sector17codename}</p>
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