import {Button, Modal, ModalBody, ModalContent, useDisclosure} from "@nextui-org/react"
import {ModalFooter, ModalHeader} from "@nextui-org/modal";
import {sampleCompanyInfo, sampleDetailStockResponse, sampleFinancialData} from "@/config/config";
import {CardComponent} from "@/components/CardComponent";

const DetailModal = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const sampleData = sampleDetailStockResponse.data.data
    return (
        <div className="flex flex-col gap-2">
            <Button onPress={onOpen}>詳細</Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="outside"
                size="2xl"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <h3 className="text-medium">{sampleData.companyname}</h3>
                                <p className="text-sm opacity-50">{sampleData.code}</p>
                            </ModalHeader>
                            <ModalBody>
                                <CardComponent companyInfo={sampleCompanyInfo} stockDetailFinancialData={sampleFinancialData}/>
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