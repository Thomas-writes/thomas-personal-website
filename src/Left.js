import { Box, VStack, Center, Image, HStack } from "@chakra-ui/react";

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
                    borderRadius='full'
                     />
                    : index === 1 ?
                    <VStack>
                        <HStack>
                            <Image src='/imgs/reactlogo.png'
                            alt='React' 
                            boxSize='100px'
                            mr='50px'
                            />
                            <Image 
                            display='flex'
                            maxH={20}
                            src='/imgs/chakrauilogo.png'
                            alt='Chakra UI' 
                            objectFit='cover' 
                            />
                        </HStack>
                        <HStack>
                            <Image 
                            mt='40px'
                            display='flex'
                            maxH='60px'
                            src='/imgs/flutter logo.png'
                            alt='Flutter' 
                            objectFit='cover' 
                            />
                            <Image 
                            mt='40px'
                            display='flex'
                            maxH='100px'
                            src='/imgs/dartlogo.png'
                            alt='Dart' 
                            objectFit='cover' 
                            />
                        </HStack>
                    </VStack>
                    :
                    <VStack>
                        <Image 
                        src='/imgs/linkedinlogo.png'
                        alt='LinkedIn' 
                        boxSize='200px'
                        objectFit='cover' 
                        />
                        <Image 
                        src='/imgs/gmaillogo.svg'
                        alt='Gmail' 
                        boxSize='150px'
                        objectFit='cover' 
                        />
                        <Image 
                        mt='30px'
                        display='flex'
                        src='/imgs/phoneicon.png'
                        alt='Gmail' 
                        maxH='150px'
                        />
                    </VStack>
                    }

            </VStack>
        </Box>
    );
}
 
export default Leftside;