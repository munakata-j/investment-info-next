import {CSVLink} from "react-csv";
interface props {
    csvData: any[]
    onClose: () => void
}
const CsvLinkComponent = ({csvData, onClose}: props) => {
    return (
        <CSVLink
            data={csvData}
            filename="example.csv"
            className="btn btn-primary"
            onClick={onClose}
        >
            Download CSV
        </CSVLink>
    )
}
export default CsvLinkComponent