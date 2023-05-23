import { Button, Heading } from "@chakra-ui/react";
import {
  BoxSize,
  BreakLine,
  Flex,
  Parag,
  SubHeader,
} from "../../../Styles/styles";
import { LightTheme, MainGreen, MainPink, White } from "../../../Styles/colors";

const CancelTransaction = ({ transaction, deleteTransaction, setOpen }) => {

  return (
    <Flex style={{ width: "100%" }}>
      <Heading style={SubHeader}>Remove Transaction</Heading>
      <BreakLine />
      <Flex>
        <BoxSize>
          <Parag color="black">
            Hey there, seems like you're about to remove the following
            transaction:
          </Parag>
        </BoxSize>
      </Flex>
      <Flex style={{background:LightTheme, borderRadius:'15px'}}>
        <BoxSize style={{background:LightTheme}}>
          <Parag color="black">
            Date:{" "}
            <b>
              {transaction.created_at.substr(
                0,
                transaction.created_at.indexOf("T")
              )}
            </b>
          </Parag>
          <Parag color="black">
            Time:{" "}
            <b>
              {transaction.created_at.substr(
                transaction.created_at.indexOf("T") + 1,
                transaction.created_at.indexOf("T") - 2
              )}
            </b>
          </Parag>

          <Parag color="black">
            Total Cost($):{" "}
            <b>
              {transaction.total_cost_usd ? transaction.total_cost_usd : "0"}
            </b>
          </Parag>
          <Parag color="black">
            Total Emissions: <b>{transaction.co2_amount_in_kg}(KG) CO<sub>2</sub></b>
          </Parag>
          <Parag color="black">
            Project name: <b>{transaction.offset_name}</b>
          </Parag>
        </BoxSize>
       
      </Flex>
      <Flex>
        <BoxSize>
          <Button
            bg={MainPink}
            color={White}
            type="submit"
            colorScheme="pink"
            onClick={() => {
              deleteTransaction(transaction.uuid)
              setOpen(false)
            }}
          >
            Cancel this transaction
          </Button>
        </BoxSize>
        <BoxSize>
          <Button bg={MainGreen} color={White} type="submit" colorScheme="green" onClick={() => setOpen(false)}>
            I don't want to cancel this transaction
          </Button>
        </BoxSize>
      </Flex>
    </Flex>
  );
};

export default CancelTransaction;
