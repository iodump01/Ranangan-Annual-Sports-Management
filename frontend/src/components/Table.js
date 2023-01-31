import TableBody from "./TableBody";
import TableHead from "./TableHead";
import React from "react";

import { useSortableTable } from "../useSortableTable";

const Table = ({ caption, data, columns }) => {
  const [tableData, handleSorting] = useSortableTable(data, columns);

  return (
    <>
      <table class="table w-full whitespace-no-wrap  text-gray-900 dark:text-gray-200  bg-gray-50 dark:bg-gray-800 rounded-lg shadow-xs">
        <caption>{caption}</caption>
        <TableHead
          {...{ columns, handleSorting }}
          className=" text-gray-900 dark:text-gray-200  bg-gray-50 dark:bg-gray-900"
        />
        <TableBody {...{ columns, tableData }} />
      </table>
    </>
  );
};

export default Table;
