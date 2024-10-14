import { Heading, Box, Text, Flex } from "@chakra-ui/react";
import Navmenu from "./Navmenu";

const Header = ({ onSelectSection, color }) => {
    return (
        <Box height="20vh" textAlign="center" py={10}>
            <Flex 
                direction={["column", "row"]}  // Stack on smaller screens, row on larger
                justify="center" 
                align="center" 
                width="100%" 
                wrap="wrap"  // Allow wrapping if there isn't enough space
                gap="20px"
            >
                <Heading 
                    as="h1" 
                    fontSize={["30px", "50px"]} 
                    color={color} 
                    whiteSpace="nowrap"
                    maxWidth="100%"  // Prevent heading from growing too wide
                    textAlign="center" // Center the text to avoid alignment issues
                >
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
