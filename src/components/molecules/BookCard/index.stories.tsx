import React from 'react';
import { Meta} from '@storybook/react';
import BookCard from ".";
import img from './img.png';


export default {
    title: 'BookCard',
    component: BookCard,
  } as Meta;

export  const primary= ()=> {
    return(
        <BookCard img={img} title='The Lean Startup' author='Eric Ries' time='13-minute read'/>
    );
}
