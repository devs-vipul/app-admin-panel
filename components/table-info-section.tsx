import React from "react";
import { DataTable } from "./data-table/data-table";
import Searchbar from "./searchbar";
import { ColumnDef } from "@tanstack/react-table";
import { ListFilter } from "./list-filter";

interface TableInfoSectionProps<TData> {
  tableTitle?: string;
  columns: ColumnDef<TData, unknown>[];
  data: TData[];
}

const TableInfoSection = <TData,>({
  tableTitle,
  columns,
  data,
}: TableInfoSectionProps<TData>) => {
  return (
    <div className="p-4 w-full flex flex-col gap-4 justify-start">
      {tableTitle && <h3 className="text-sm text-white">{tableTitle}</h3>}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            Showing 1 to {data.length} of {data.length} entries
          </p>
          <div className="flex flex-row gap-4 items-center">
            <Searchbar
              submitButton
              className="p-4"
              inputProps={{
                placeholder: "Search",
                className:
                  "bg-[#1C1C1C] border-[#F2D679] text-white placeholder:text-zinc-500",
              }}
              buttonProps={{
                text: "Go",
                className: "bg-[#F2D679] text-black hover:bg-[#F2D679]/90",
              }}
            />
            <ListFilter />
          </div>
        </div>
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default TableInfoSection;
