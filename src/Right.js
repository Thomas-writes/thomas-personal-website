import React from 'react';
import { Box, Text } from "@chakra-ui/react";

const Rightside = ({ items }) => {
    return ( 
        <Box width="100%" height="80vh" overflowY="auto" padding={4}>
            {items.length > 0 ? (
                items.map((item, index) => (
                    <Text key={index} mb={2}>
                        {
                        item === "Website Portfolio" ? 
                        'Special Item: ' + item 
                        : item}
                    </Text>
                ))
            ) : (
                <Text>No Content Available.</Text>
            )}
        </Box>
    );
}

export default Rightside;
