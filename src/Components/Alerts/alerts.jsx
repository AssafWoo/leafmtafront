import { Alert, AlertIcon } from "@chakra-ui/alert";
import { MainBlue } from "../../Styles/colors";


const SuccesfullMessage = ({message, type}) => {

    if(type === 'error') {
        return (
            <Alert status="error" variant="solid" borderRadius="15px" mb=".5rem">
                <AlertIcon />
                There was an error processing your request
            </Alert>
        )
    }
    return(
        <Alert status="success" variant="solid" borderRadius="15px" mb=".5rem" bg={MainBlue}>
            <AlertIcon />
            {message}. Fire on!
        </Alert>
    )
}

export default SuccesfullMessage;