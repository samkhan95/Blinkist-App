import React from 'react';
import { Meta} from '@storybook/react';
import { BookList } from '.';
import { BrowserRouter } from 'react-router-dom';



export default {
    title: 'organisms/BookList',
    component: BookList,
  } as Meta;

export  const primary= ()=> {
    return(
            <BrowserRouter>
                <BookList/>
            </BrowserRouter>
    );
}
