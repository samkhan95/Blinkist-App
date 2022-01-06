import { Story} from '@storybook/react';
import Avatar,{AvatarProps} from ".";

export default {
    title: 'Avatar',
    component: Avatar,
  };


const Template: Story<AvatarProps> = (args) => <Avatar {...args}/>

export const Primary = Template.bind({});
Primary.args = {
   label:'A',

};
