import {Button, code, Modal, ModalBody, ModalContent, useDisclosure} from "@nextui-org/react";
import {ModalFooter, ModalHeader} from "@nextui-org/modal";
import {useExternalApi} from "@/hooks/useExternalApi";
import {CSVLink} from 'react-csv';
import {useEffect, useRef, useState} from "react";
import {headerMapping} from "@/config/config";
import CsvLinkComponent from "@/components/CsvLinkComponent";

interface props {
    codes: any[]
}

const ExportCsvComponent = ({codes}: props) => {
    const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
    const {postExportCsv} = useExternalApi()
    const [csvData, setCsvData] = useState<any[]>([]);
    const csvDataRef = useRef<any[]>([])
    const [records, setRecords] = useState<any>()
    const fecthExport = async () => {
        const res = await postExportCsv(codes)
        setRecords(res)
    }

    const onClickGetCsvData = async () => {
        onOpen()

        setCsvData([])
        csvDataRef.current = []
        const res = await postExportCsv(codes)

        // データを整形
        const formattedData = res.data.body.flatMap((group: { records: any[]; }) =>
            group.records.map(record =>
                headerMapping.map(header => record[header.key] || '')
            )
        );

        // ヘッダーを先頭に追加
        const csvHeaders = headerMapping.map(header => header.name);
        const csvDataWithHeaders = [csvHeaders, ...formattedData];

        // CSVデータを設定
        csvDataRef.current = csvDataWithHeaders
        setCsvData(csvDataWithHeaders);
    }

    return (
        <>
            <Button onClick={onClickGetCsvData} color="primary">
                Export CSV
            </Button>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="md"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">

                            </ModalHeader>
                            <ModalBody>
                                選択銘柄をCSVファイルにエクスポートしますか？
                            </ModalBody>
                            <ModalFooter>
                                <CsvLinkComponent csvData={csvData} onClose={onClose}/>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
export default ExportCsvComponent