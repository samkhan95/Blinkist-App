import React from 'react';
import { Meta, Story} from '@storybook/react';
import Button, { ButtonProps } from '.';



export default {
    title: 'Button',
    component: Button,
    argTypes: {
        variant: {
          options: ["text", "outlined", "contained"],
          control: { type: 'radio' },
        },
        size:{
            options:["small", "medium", "large" ],
            control:{type:'radio'},
        },
        onClick: { action: 'clicked' },
    }
  } as Meta;


const Template: Story<ButtonProps> = (args) => <Button {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    children:'Button',
    size:'medium',
    variant:'contained',

};
export const Large = Template.bind({});
Large.args = {
    children: 'Button',
    size: 'large',
    variant:'outlined'
};

export const Small = Template.bind({});
Small.args = {
    children: 'Button',
    size: 'small',
    variant:'text'
};

