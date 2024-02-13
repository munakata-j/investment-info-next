import {Button, Modal, ModalBody, ModalContent, useDisclosure} from "@nextui-org/react"
import {ModalFooter, ModalHeader} from "@nextui-org/modal";
import {CardComponent} from "@/components/CardComponent";
import {useStockInfoDetailContext} from "@/context/StockInfoDetailContext";
import {useExternalApi} from "@/hooks/useExternalApi";
import {CompanyInfo} from "@/types/type";

interface props {
    item: CompanyInfo
}
const DetailModal = ({item} :props) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {getStockInfoDetailApi} = useExternalApi()
    const {getStockInfoDetail, stockInfoDetailDispatch} = useStockInfoDetailContext();
    const handleOnClick = async () => {
        const res = await getStockInfoDetailApi(item.code)
        stockInfoDetailDispatch({
            type: "SUCCESS",
            payload: res
        })
    }
    return (
        <div className="flex flex-col gap-2">
            <Button onPress={onOpen} onClick={handleOnClick}>詳細</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="outside"
                size="xl"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <h3 className="text-medium">{item.companyname}</h3>
                                <p className="text-sm opacity-50">{item.code}</p>
                            </ModalHeader>
                            <ModalBody>
                            <CardComponent
                                    companyInfo={item}
                                    stockDetailFinancialData={getStockInfoDetail.getStockInfoDetail}
                                />
                            </ModalBody>
                            <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}
export default DetailModal