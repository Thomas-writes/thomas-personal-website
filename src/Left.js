import { Box, VStack, Text} from "@chakra-ui/react";

const Leftside = ({ header }) => {
    return ( 
        <Box width="50%" bg='gray.200' p={4}>
            <VStack spacing={4}>
                <Text fontSize="xl">{header}</Text>
            </VStack>
        </Box>
    );
}
 
export default Leftside;