import React from 'react';
import { ThemeProvider } from '@emotion/react';
import Header from '../../organism/Header';
import Footer from '../../organism/Footer';
import theme from '../../../Theme';
import BookState from '../../organism/StateOfBook';

const Home = () => {
    return (
        <div data-testid="homepage">
            <ThemeProvider theme={theme}>
                <Header/>
                <BookState/>
                <Footer/>
            </ThemeProvider>
        </div>
    );
};

export default Home;