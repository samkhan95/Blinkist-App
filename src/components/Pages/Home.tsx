import React from 'react';
import { StyledEngineProvider } from '@mui/material';
import { BookList } from '../organism/BookList';
import Footer from '../organism/Footer';
import Header from '../organism/Header';
import { Box, Container } from '@mui/material';

const Home = () => {
    return (
        <div>
            <StyledEngineProvider injectFirst>
                <Container maxWidth={'lg'}>
                    <Header/>
                    <BookList/>
                </Container>
                <Box sx={{bgcolor:'#F1F6F4',width:"100%"}}>
                    <Footer/>
                </Box>
            </StyledEngineProvider>
        </div>
    );
};

export default Home;