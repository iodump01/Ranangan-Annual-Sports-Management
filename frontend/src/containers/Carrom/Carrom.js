import React, { useContext, Fragment } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import { useTable, useSortBy } from "react-table";
import useRows from "./hooks/useRows";
import useColumns from "./hooks/useColumns";
import "./App.css";

function Carrom() {
  const columns = useColumns();
  const data = useRows();
  const table = useTable({ columns, data }, useSortBy);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    table;

  return (
    <Fragment>
      <div
        className="rounded-lg shadow-xs mb-8 text-gray-700 dark:text-gray-300 container"
        id="container_carrom"
      >
        <table
          {...getTableProps()}
          id="table_carrom"
          className=" items-center font-semibold text-gray-900 dark:text-gray-200  bg-gray-100 dark:bg-gray-800 rounded-lg shadow-xs"
        >
          <thead className="items-center text-gray-600 dark:text-gray-400">
            {headerGroups.map((headerGroup) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                id="tr_carrom"
                className=" items-center text-gray-600 dark:text-gray-400"
              >
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={
                      column.isSorted
                        ? column.isSortedDesc
                          ? "desc"
                          : "asc"
                        : "items-center text-gray-600 dark:text-gray-200"
                    }
                    id="th_carrom"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {
              // Loop over the table rows
              rows.map((row) => {
                // Prepare the row for display
                prepareRow(row);
                return (
                  // Apply the row props
                  <tr {...row.getRowProps()}>
                    {
                      // Loop over the rows cells
                      row.cells.map((cell) => {
                        // Apply the cell props
                        return (
                          <td {...cell.getCellProps()} id="td_carrom">
                            {
                              // Render the cell contents
                              cell.render("Cell")
                            }
                          </td>
                        );
                      })
                    }
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
      <container className="container_bracket">
        {" "}
        <div className="bracket">
          <section className="round quarterfinals">
            <div className="winners">
              <div className="matchups">
                <div className="matchup">
                  <div className=" text-gray-600 dark:text-gray-200 bg-white rounded-lg shadow-md dark:bg-gray-800  participants">
                    <div className="participant winner">
                      <span>Uno</span>
                    </div>
                    <div className="participant">
                      <span>Ocho</span>
                    </div>
                  </div>
                </div>
                <div className="matchup">
                  <div className=" text-gray-600 dark:text-gray-200 bg-white rounded-lg shadow-md dark:bg-gray-800  participants">
                    <div className="participant">
                      <span>Dos</span>
                    </div>
                    <div className="participant winner">
                      <span>Siete</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="connector">
                <div className="merger"></div>
                <div className="line"></div>
              </div>
            </div>
            <div className="winners">
              <div className="matchups">
                <div className="matchup">
                  <div className=" text-gray-600 dark:text-gray-200 bg-white rounded-lg shadow-md dark:bg-gray-800  participants">
                    <div className="participant">
                      <span>Treis</span>
                    </div>
                    <div className="participant winner">
                      <span>Seis</span>
                    </div>
                  </div>
                </div>
                <div className="matchup">
                  <div className=" text-gray-600 dark:text-gray-200 bg-white rounded-lg shadow-md dark:bg-gray-800  participants">
                    <div className="participant">
                      <span>Cuatro</span>
                    </div>
                    <div className="participant winner">
                      <span>Cinco</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="connector">
                <div className="merger"></div>
                <div className="line"></div>
              </div>
            </div>
          </section>
          <section className="round semifinals">
            <div className="winners">
              <div className="matchups">
                <div className="matchup">
                  <div className=" text-gray-600 dark:text-gray-200 bg-white rounded-lg shadow-md dark:bg-gray-800  participants">
                    <div className="participant winner">
                      <span>Uno</span>
                    </div>
                    <div className="participant">
                      <span>Dos</span>
                    </div>
                  </div>
                </div>
                <div className="matchup">
                  <div className=" text-gray-600 dark:text-gray-200 bg-white rounded-lg shadow-md dark:bg-gray-800  participants">
                    <div className="participant winner">
                      <span>Seis</span>
                    </div>
                    <div className="participant">
                      <span>Cinco</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="connector">
                <div className="merger"></div>
                <div className="line"></div>
              </div>
            </div>
          </section>
          <section className="round finals">
            <div className="winners">
              <div className="matchups">
                <div className="matchup">
                  <div className=" text-gray-600 dark:text-gray-200 bg-white rounded-lg shadow-md dark:bg-gray-800  participants">
                    <div className="participant winner">
                      <span>Uno</span>
                    </div>
                    <div className="participant">
                      <span>Seis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </container>
    </Fragment>
  );
}

export default Carrom;
