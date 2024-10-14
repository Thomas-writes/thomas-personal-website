import React from 'react';
import { Box, Text, Link } from "@chakra-ui/react";

const Rightside = ({ items, color }) => {
    return ( 
        <Box width="100%" height="80vh" overflowY="auto" padding={4}>
            {items.length > 0 ? (
                items.map((item, index) => (
                    <React.Fragment key={index}>
                        {item === 0 && (
                            <Text mb={2} fontSize='30px'>
                                Hello, I am a freshman studying computer science and math at KU. I am currently in the clubs ACM and Entrepreneurship Club. I will graduate with both degrees in May 2028.
                            </Text>
                        )}
                        {item === 1 && (
                            <>
                            <Text pt='60px' fontSize={40} color={color}>
                                Personal Website:
                            </Text>
                            <Text>
                                This website is built with React and uses items from the UI library Chakra UI.
                            </Text>
                            <Text pt='60px' fontSize={40} color={color}>
                                Fitness App:
                            </Text>
                            <Text>
                                This app was created in Flutter using dart. I am still working on it and have stopped for now. It was not as fun as I imagined it would be.
                            </Text>
                            </>
                        )}
                        {item > 1 && (
                            <>
                            <Text pt='100px' fontSize='50px' mb={2}>
                                LinkedIn:{' '}
                                <Link isExternal color={color} href='https://www.linkedin.com/in/thomas-savasten-513787313/'>
                                    Thomas Savasten
                                </Link>
                            </Text>
                            <Text pt='125px' fontSize='50px' mb={2}>
                                Gmail:{' '}
                                <Link isExternal color={color} href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsCRkPhjncpQGHHwlnvZGMtNQvvlrftsXbcVnsFTvbhJstFQXRscQlGrwzBrmHBvMBdjDPjB'>
                                    thomas@savasten.com
                                </Link>
                            </Text>
                            <Text pt='110px' fontSize='50px' mb={2}>
                                Phone: 913-309-6613
                            </Text>
                            </>
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