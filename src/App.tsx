import './App.css';
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Theme/Theme';
import { Entrepreneurship } from './components/Pages/Enterpreneurship  page';
import Home from './components/Pages/Home/Home';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import { BookDetailsView } from './components/Pages/BookDetailsView';
import Header from './components/organism/Header';
import { Box, Container } from '@mui/material';



function App() {
  return (
        <ThemeProvider theme={theme}>
          <BrowserRouter>
          <Routes>
                  <Route>
                  <Route path="/" element={<Home />} />
                  <Route path="Entrepreneurship" element={<Entrepreneurship />} />
                  <Route path="Entrepreneurship/BookDetailsView" element={<BookDetailsView />} />
                  </Route>

          </Routes>
          </BrowserRouter>
        </ThemeProvider>
  );
}

export default App;



{/* <Box sx={{display:'flex',justifyContent:'center'}}>
<Header/>

</Box> */}