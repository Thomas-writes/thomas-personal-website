import React from 'react';
import { Box, Text } from "@chakra-ui/react";

const Rightside = ({ items, color }) => {
    return ( 
        <Box width="100%" height="80vh" overflowY="auto" padding={4}>
            {items.length > 0 ? (
                items.map((item, index) => (
                    <React.Fragment key={index}>
                        {item === 0 && (
                            <Text mb={2}>
                                Hello, I am a freshman studying computer science and math at KU. I am currently in the clubs ACM and Entrepreneurship Club.
                            </Text>
                        )}
                        {item === 1 && (
                            <>
                            <Text fontSize={40} color={color}>
                                Personal Website:
                            </Text>
                            <Text>
                                This website is built with React and uses items from the UI library Chakra UI.
                            </Text>
                            <Text fontSize={40} color={color}>
                                Fitness App:
                            </Text>
                            <Text>
                                This app was created in Flutter using dart. I am still working on it and plan on finishing it before 2025.
                            </Text>
                            </>
                        )}
                        {item > 1 && (
                            <Text mb={2}>Hi</Text>
                        )}
                    </React.Fragment>
                ))
            ) : (
                <Text>No Content Available.</Text>
            )}
        </Box>
    );
}

export default Rightside;