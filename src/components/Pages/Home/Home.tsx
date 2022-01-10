import React from 'react';
import { ThemeProvider } from '@emotion/react';
import Header from '../../organism/Header';
import { BookList } from '../../organism/BookList';
import Footer from '../../organism/Footer';
import theme from '../../../Theme/Theme';
import BookState from '../../organism/StateOfBook';

const Home = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Header/>
                <BookState/>
                <Footer/>
            </ThemeProvider>
        </div>
    );
};

export default Home;