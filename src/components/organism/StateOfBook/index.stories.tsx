import React from 'react';
import { Meta} from '@storybook/react';
import BookState from '.';
import { BrowserRouter } from 'react-router-dom';



export default {
    title: 'organisms/StateOfBook',
    component: BookState,
  } as Meta;

export  const primary= ()=> {
    return(
        <BrowserRouter>
            <BookState/>
        
        </BrowserRouter>
    );
}
