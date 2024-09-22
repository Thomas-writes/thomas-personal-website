import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navmenu from './Navmenu';
import About from './About';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;

  return (
    <ChakraProvider>
      <div className="App">
        <Navmenu />
        <div className="content">
          <About />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
