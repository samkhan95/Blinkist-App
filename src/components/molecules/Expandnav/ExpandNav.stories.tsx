import { Meta} from '@storybook/react';
import ExpandNav from '.';
import { BrowserRouter } from 'react-router-dom';



export default {
    title: 'molecules/ExpandNav',
    component: ExpandNav,
  } as Meta;

export  const primary= ()=> {
    return(
        <BrowserRouter>
            <ExpandNav/>
        </BrowserRouter>
    );
}
