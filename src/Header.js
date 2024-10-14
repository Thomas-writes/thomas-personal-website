import { Heading, Box, Text, Flex } from "@chakra-ui/react";
import Navmenu from "./Navmenu";

const Header = ({ onSelectSection, color }) => {
    return (
        <Box height="25vh" textAlign="center" py={10}> {/* Increased height */}
            <Flex direction="row" justify="center" align="center" width="100%" wrap="nowrap" gap="20px"> {/* Reduced gap */}
                <Heading as="h1" fontSize='50px' color={color} whiteSpace="nowrap" flexShrink={0} flexGrow={0} maxWidth="70%">
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
