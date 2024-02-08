import {Select, SelectItem} from "@nextui-org/react";
import {sector17map} from "@/config/config";

export const SearchSelectBoxComponent = () => {
    return (
        <Select
            items={sector17map}
            label="業種"
            placeholder="業種を選択"
            className="max-w-xs text-xs"
            size="md"
        >
            {(sector) =>
                <SelectItem key={sector.sector17code}>{sector.sector17name}</SelectItem>}
        </Select>
    )
}