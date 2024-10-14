import { Heading, Box, Text, Flex } from "@chakra-ui/react";
import Navmenu from "./Navmenu";

const Header = ({ onSelectSection, color }) => {
    return (
        <Box height="20vh" textAlign="center" py={10}>
            <Flex direction="row" justify="center" align="center" width="100%" wrap="nowrap" gap="20px">
                <Heading minWidth="300px" maxWidth='100vw'as="h1" fontSize={["30px", "50px"]} color={color} whiteSpace="nowrap"> 
                    Thomas Savasten
                </Heading>
                <Navmenu color={color} onSelectSection={onSelectSection} />
            </Flex>
            <Text as="b" fontSize="20px" mt={2}>
                Welcome to my personal website
            </Text>
        </Box>
    );
};

export default Header;
