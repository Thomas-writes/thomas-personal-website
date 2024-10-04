import { Box, VStack, Text, Center} from "@chakra-ui/react";

const Leftside = ({ header, color}) => {
    return ( 
        <Box bg={color} height="80vh" width="50%"  p={4}>
            <VStack spacing={100}>
                <Center fontSize="50px">{header} </Center>
            </VStack>
        </Box>
    );
}
 
export default Leftside;