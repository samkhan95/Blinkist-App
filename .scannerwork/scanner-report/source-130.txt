import React from 'react';
import { Meta} from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { EBooks } from '.';



export default {
    title: 'organisms/EBooks',
    component: EBooks,
  } as Meta;

export  const primary= ()=> {
    return(
            <BrowserRouter>
                <EBooks/>
            </BrowserRouter>
    );
}
