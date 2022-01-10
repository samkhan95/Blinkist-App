import React from 'react';
import { Meta} from '@storybook/react';
import { Banner } from '.';



export default {
    title: 'organisms/Banner',
    component: Banner,
  } as Meta;

export  const primary= ()=> {
    return(
        <Banner/>
    );
}
