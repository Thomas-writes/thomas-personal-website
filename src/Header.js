import { Heading, Box, Text, HStack } from "@chakra-ui/react";
import Navmenu from "./Navmenu";

const Header = ({ onSelectSection, color }) => {
    return (
        <Box height="20vh" textAlign="center" py={10}>
            <HStack>
                <Heading mr="2vw" as="h1" fontSize='50px' color={color} whiteSpace="nowrap" maxWidth="100%">
                    Thomas Savasten
                </Heading>
                <Navmenu color={color} onSelectSection={onSelectSection} />
            </HStack>
            <Text as="b" fontSize="20px" mt={2}>
                Welcome to my personal website
            </Text>
        </Box>
    );
};

export default Header;
