import React from 'react';
import { Meta} from '@storybook/react';
import { AddToLib } from '.';


export default {
    title: 'molecules/AddToLib',
    component: AddToLib,
  } as Meta;

export  const primary= ()=> {
    return(
       <AddToLib/>
    );
}
