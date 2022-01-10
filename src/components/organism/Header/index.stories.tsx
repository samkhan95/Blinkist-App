import React from 'react';
import { Meta} from '@storybook/react';
import Header from ".";
import { BrowserRouter } from 'react-router-dom';


export default {
    title: 'organisms/Header',
    component: Header,
  } as Meta;

export  const primary= ()=> {
    return(
        <BrowserRouter>
            <Header/>
        
        </BrowserRouter>
    );
}
