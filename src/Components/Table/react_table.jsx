/* eslint-disable no-unused-vars */
import { Fragment, useEffect, useMemo, useState } from "react";
import {
  useTable,
  usePagination,
  useGlobalFilter,
  useSortBy,
} from "react-table";
import Cell from "./cell";
import { MainGreen } from "../../Styles/colors";
import TableSearch from "./table_search";
import { Button } from "@chakra-ui/react";
import { BoxSize, Flex, Parag } from "../../Styles/styles";
import {
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaSort,
} from "react-icons/fa";
import { TableHeader, TableRow, TableWrapper } from "./style";
import useWindowDimensions from "../../Utils/useWindowDimensions";

export const transactionsColumns = [
  {
    Header: "Date",
    accessor: "date", // accessor is the "key" in the data
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Project",
    accessor: "offset_name",
  },
  {
    Header: "Total($)",
    accessor: "total_cost_usd",
  },
  {
    Header: `Total CO2(Kg)`,
    accessor: "co2_amount_in_kg",
  },
  {
    Header:'Actions',
    accessor: "delete",
    sortable:false,

  }
];

const CustomTable = ({ data, displayPages, reFetch, deleteTransaction }) => {
  const [loader, setLoader] = useState(false);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    setLoader(false);
    setTableData(data);
  }, [data]);

  const columns = useMemo(() => transactionsColumns, []);

  const { width } = useWindowDimensions();
  // check if we need to flatten the array(incase it has top level headers)
  //if so than flatten, if not just extract the searcable ones
  const columnWidth = ((width - 100) / columns.length) * 0.5;

  const defaultColumn = useMemo(() => {
    return {
      width: columnWidth,
    };
  }, [columnWidth]);

  const {
    getTableProps,
    prepareRow,
    page,
    rows,
    headerGroups,
    getTableBodyProps,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data: data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  useEffect(() => {
    setPageSize(8);
  }, [pageSize, setPageSize]);

  return (
    <>
      <Flex>
        <BoxSize isInvisible={true}>
          <TableSearch
            filter={globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </BoxSize>
        <BoxSize isInvisible={true}>
          {displayPages && (
            <div style={{ textAlign: "right" }}>
              <Button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                colorScheme={"green"}
                bg={MainGreen}
                style={{ padding: "2px 4px" }}
              >
                <FaArrowLeft />
              </Button>{" "}
              <Parag
                color="black"
                style={{ display: "inline", margin: "0 0.5rem" }}
              >
                Page{" "}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
              </Parag>
              <Button
                onClick={() => nextPage()}
                disabled={!canNextPage}
                colorScheme={"green"}
                bg={MainGreen}
                style={{ padding: "2px 4px" }}
              >
                <FaArrowRight />
              </Button>{" "}
            </div>
          )}
        </BoxSize>
        {/* <Select
				value={pageSize}
				style={{ marginBottom: ".5rem", width: "100%" }}
				onChange={(e) => {
					setPageSize(Number(e.target.value));
				}}
			>
				{[10, 20, 30, 40, 50].map((pageSize) => (
					<option key={pageSize} value={pageSize}>
						Show {pageSize}
					</option>
				))}
			</Select> */}
      </Flex>

      <TableWrapper {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, columnIndex) => (
                <TableHeader
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  onClick={() => {
                    column.toggleSortBy(!column.isSortedDesc)
                    console.log(column)
                  }}
                  key={columnIndex}
                  style={{
                    width: columnWidth,
                  }}
                >
                  {column.render("Header")}
                  <span
                    style={{
                      display: "inline-block",
                      marginInlineStart: "0.2rem",
                    }}
                  >
                    {column.Header !== "Actions" ? column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaArrowDown />
                      ) : (
                        <FaArrowUp />
                      )
                    ) : (
                      <FaSort />
                    ) : <Fragment />}
                  </span>
                </TableHeader>
              ))}
            </TableRow>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{<Cell deleteTransaction={deleteTransaction} cell={cell} />}</td>
                  );
                })}
              </TableRow>
            );
          })}
        </tbody>
      </TableWrapper>
    </>
  );
};

export default CustomTable;
