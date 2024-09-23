import React, { useEffect } from 'react';
import { Box, Text } from "@chakra-ui/react";

const Rightside = ({ items, onSwitchHeader }) => {
    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight} = e.target;
        if(scrollTop + clientHeight >= scrollHeight) {
            onSwitchHeader();
        }
    }

    return ( 
        <Box width="50%" overflowY="auto" height="100vh" onScroll={handleScroll}>
            <Box p={4}>
                {items.length > 0 ? (
                    <>
                    {items[0] && <Text mb="2">{items[0]}</Text>}
                    {items[1] && <Text mb="2">{items[1]}</Text>}
                    {items[2] && <Text mb="2">{items[2]}</Text>}
                    </>
                ) : (
                    <Text>No Content Available.</Text>
                )}
            </Box>
        </Box>
    );
}
 
export default Rightside;