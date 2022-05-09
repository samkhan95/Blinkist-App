import React from 'react';
import { Meta} from '@storybook/react';
import BookInfo from '.';


export default {
    title: 'molecules/BookInfo',
    component: BookInfo,
  } as Meta;

export  const primary= ()=> {
    return(
        <BookInfo/>
    );
}
