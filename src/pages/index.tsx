import { Inter } from "next/font/google";
import TableComponent from "@/components/Table";
import SearchComponent from "@/components/Search";
import ExportCsvComponent from "@/components/ExportCsvComponent";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-between p-24"
    >
      <SearchComponent/>
      <div className="flex flex-col items-center justify-between">
        <div className="w-full flex justify-end p-2">
          <ExportCsvComponent/>
        </div>
        <TableComponent/>
      </div>
    </main>
  );
}
