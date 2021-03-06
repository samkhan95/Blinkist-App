import React from 'react';
import { Meta} from '@storybook/react';
import BookCard from ".";
import img from './img.png';
import { BrowserRouter } from 'react-router-dom';


export default {
    title: 'molecules/BookCard',
    component: BookCard,
  } as Meta;

export  const primary= ()=> {
    return(
        <BrowserRouter>
            <BookCard image={img} title='The Lean Startup' author='Eric Ries' time='13-minute read'progress={88}/>
        </BrowserRouter>
        
    );
}
