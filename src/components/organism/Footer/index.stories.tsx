import React from 'react';
import { Meta} from '@storybook/react';
import Footer from ".";


export default {
    title: 'organisms/Footer',
    component: Footer,
  } as Meta;

export  const primary= ()=> {
    return(
        <Footer></Footer>
    );
}
