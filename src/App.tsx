import { Container } from '@mui/material';
import React from 'react';
import BookCard from './components/molecules/BookCard';
import Header from './components/organism/Header';
import img from './img.png';
import { StyledEngineProvider } from '@mui/material';

function App() {
  return (
    <div className="App">
    <StyledEngineProvider injectFirst>
      <Container maxWidth={'xl'}>
        <Header/>
      </Container>

    </StyledEngineProvider>
    </div>
  );
}

export default App;
/* <BookCard img={img} title='The Lean Startup' author='Eric Ries' time='13-minute read'/> */