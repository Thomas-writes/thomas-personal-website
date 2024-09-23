import { ChakraProvider, Container, Flex } from '@chakra-ui/react';
import React, {useState} from 'react';
import Header from './Header';
import Leftside from './Left';
import Rightside from './Right';


function App() {
  const sectionNames = ["About", "Projects", "Contact",];

  const information = [
    ["I am Thomas Savasten"],
    ["Website Portfolio", "Mobile App"],
    ["LinkedIn", "Email", "Phone"]
  ];

  const [currentHeaderIndex, setCurrentIndex] = useState(0);

  const handleSwitchHeader = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sectionNames.length);
  };

  const onSelectSection = (index) => {
    setCurrentIndex(index);
  };

  return (
    <ChakraProvider>
      <div className="App">
        <Container p={2}>
          <Header onSelectSection={onSelectSection} />
        </Container>
        <div className="content">
          <Flex height = "100vh">
            <Leftside header={sectionNames[currentHeaderIndex]} />
            <Rightside
              items={information[currentHeaderIndex]}
              onSwitchHeader={handleSwitchHeader}
            />
          </Flex>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
