import { Heading, Box, Text, HStack } from "@chakra-ui/react";
import Navmenu from "./Navmenu";

const Header = ({onSelectSection}) => {
    return (  
        <Box textAlign="center" py={10}>
            <HStack spacing={'50px'} justify="center">
                <Heading as="h1" fontSize="50px" color="red.500">
                    Thomas Savasten
                </Heading>
                <Navmenu onSelectSection={onSelectSection}/>
            </HStack>
            <Text as ='b' fontSize ="20px" mt={2}>
                Welcome to my personal website
            </Text>
        </Box>
    );
}
 
export default Header;