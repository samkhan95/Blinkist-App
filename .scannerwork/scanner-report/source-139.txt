import React from "react";
import { Meta,Story } from "@storybook/react";
import IconButton, {IconButtonProps} from ".";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default {
    title: 'IconButton',
    component: IconButton,
    argTypes: {
        onClick: { action: 'clicked' },
    }
  } as Meta;


  const Template: Story<IconButtonProps> = (args) => <IconButton {...args}/>

export const Primary = Template.bind({});
Primary.args = {
    children:<ExpandMoreIcon/>
};