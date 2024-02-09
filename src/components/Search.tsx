import {SearchIcon} from "@nextui-org/shared-icons";
import {Button, Input} from "@nextui-org/react";
import {SearchSelectBoxComponent} from "@/components/SearchSelectBoxComponent";
const SearchComponent = () => {
    return (
        <>
            <div
                className="flex justify-center items-center">
                <div className="min-w-250">
                    <Input
                        label="銘柄コード"
                        placeholder="銘柄コードを入力してください。"
                        startContent={
                            <SearchIcon
                                className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"/>
                        }
                        size="md"
                    />
                </div>
                <div className="p-2 min-w-250">
                    <SearchSelectBoxComponent/>
                </div>
                <Button>検索</Button>
            </div>
        </>
    )
}
export default SearchComponent