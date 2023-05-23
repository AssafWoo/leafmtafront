import React, { useState } from "react";
import ModalWindow from "../Modal/modal_window";
import { Text } from "@chakra-ui/react";
import TransactionSummary from "../Summaries/TransactionSummary/TransactionSummary";
import CancelTransaction from "../Summaries/TransactionSummary/CancelTransaction";

const CellDesign = {
  background: "#212e44 !important",
  color: "#212e44 !important",
  fontSize: ".9rem",
  cursor: "pointer",
  padding: ".5rem",
  textAlign: "center",
  whiteSpace: "nowrap",
  width: "80%",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

const Cell = ({ cell, width, deleteTransaction }) => {
  const [open, setOpen] = useState(false);
  const renderCell = (rowData) => {
    return (
      <>
        <Text
          style={CellDesign}
          onClick={() => {
            setOpen(true);
          }}
        >
          {rowData.value}
        </Text>
        {}
        {open && (
          <ModalWindow
            setOpen={setOpen}
            open={open}
            content={
              rowData.column.Header !== "Actions" ? (
                <TransactionSummary transaction={rowData.row.original} />
              ) : (
                <CancelTransaction
                  deleteTransaction={deleteTransaction}
                  transaction={rowData.row.original}
                  setOpen={setOpen}
                />
              )
            }
          />
        )}
      </>
    );
  };

  return renderCell(cell);
};

export default React.memo(Cell);
