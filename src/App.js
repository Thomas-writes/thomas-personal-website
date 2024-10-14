import { ChakraProvider, Container, Flex } from '@chakra-ui/react';
import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import Leftside from './Left';
import Rightside from './Right';


const RightsideContainer = React.forwardRef((props, ref) => (
    <div ref={ref} style={{ width: '50%', height: '80vh', overflowY: 'scroll' }}>
        {props.children}
    </div>
));

function App() {
    const sectionNames = ["About", "Projects", "Contact"];
    const sectionColors = ["red.300", "teal.300", "green.200"];
    const rightIndex = [
        [0],
        [1],
        [2]
    ];

    /*
    Gets current screen state and allows it to be updated
    Section - stores referances to each section
    Right side - used to store the scrolling position
    */
    const [currentHeaderIndex, setCurrentIndex] = useState(0);
    const sectionRefs = useRef([]);
    const rightsideRef = useRef(null);
    const isScrolling = useRef(false);

    /*
    Used for updating the screen when a sections is selected from the navmenu
    Timeout allows the section titles to update correctly
    */
    const onSelectSection = (index) => {
        sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
        setCurrentIndex(index); 
        isScrolling.current = true;

        setTimeout(() => {
            isScrolling.current = false;
        }, 1020);
    };

    /*
    scrollPosition is the amount of pixels that has been scrolled
    container height is the height of each container on the right side
    Math.floor rounds it down so Index updates accurately
    */
    
    const handleScroll = () => {
        if (isScrolling.current) return;
        const scrollPosition = rightsideRef.current.scrollTop;
        const containerHeight = rightsideRef.current.clientHeight;
        const newIndex = Math.floor(scrollPosition / containerHeight);
        if (newIndex !== currentHeaderIndex && newIndex < sectionNames.length) {
            setCurrentIndex(newIndex);
        }
    };

    useEffect(() => {
        const container = rightsideRef.current;
        container.addEventListener('scroll', handleScroll);
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [currentHeaderIndex]);
    

    
    return (
        <ChakraProvider>
            <div className="App">
                <Container>
                    <Header color={sectionColors[currentHeaderIndex]} onSelectSection={onSelectSection} />
                </Container>
                <Flex height="80vh">
                    <Leftside header={sectionNames[currentHeaderIndex]} color={sectionColors[currentHeaderIndex]} index={currentHeaderIndex} />
                    <RightsideContainer ref={rightsideRef}>
                        {sectionNames.map((section, index) => (
                            <div key={index} ref={el => sectionRefs.current[index] = el} style={{ height: '80vh', padding: '20px', borderBottom: '1px solid #ccc', boxSizing: 'border-box' }}>
                                <Rightside items={rightIndex[index]} color={sectionColors[currentHeaderIndex]} />
                            </div>
                        ))}
                    </RightsideContainer>
                </Flex>
            </div>
        </ChakraProvider>
    );
}

export default App;
