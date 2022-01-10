import React from 'react';
import { Meta} from '@storybook/react';
import { SearchField } from '.';


export default {
    title: 'molecules/SearchField',
    component: SearchField,
  } as Meta;

export  const primary= ()=> {
    return(
        <SearchField/>
    );
}
