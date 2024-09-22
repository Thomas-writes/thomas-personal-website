import { ChakraProvider, Container } from '@chakra-ui/react';
import Header from './Header';

function App() {

  return (
    <ChakraProvider>
      <div className="App">
        <Container p={2}>
          <Header />
        </Container>
        <div className="content">
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
