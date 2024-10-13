import { Box, VStack, Center, Image } from "@chakra-ui/react";

const Leftside = ({ header, color, index }) => {
    return ( 
        <Box bg={color} height="80vh" width="50%"  p={4}>
            <VStack spacing={1}>
                <Center fontSize="50px">{header} </Center>
                    {
                    index === 0 ? 
                    <Image src='/imgs/1x1 Headshot.jpg'
                    alt='Thomas Savasten' 
                    boxSize='500px'
                    objectFit='cover' 
                     />
                    : null
                    }

            </VStack>
        </Box>
    );
}
 
export default Leftside;