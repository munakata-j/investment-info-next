import {Select, SelectItem} from "@nextui-org/react";
import {sector17map} from "@/config/config";
import {ChangeEvent} from "react";
import {searchParameter} from "@/components/Search";

interface props {
    onChangeSelectSectorCode(e: ChangeEvent<HTMLSelectElement>): void,
}

export const SearchSelectBoxComponent = ({onChangeSelectSectorCode}: props) => {
    return (
        <Select
            items={sector17map}
            label="業種"
            placeholder="業種を選択"
            className="max-w-xs text-xs"
            size="md"
            onChange={(e) => onChangeSelectSectorCode(e)}
        >
            {(sector) =>
                <SelectItem key={sector.sector17code}>{sector.sector17name}</SelectItem>}
        </Select>
    )
}