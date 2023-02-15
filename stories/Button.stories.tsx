import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src/Button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'click' },
    children: {
      defaultValue: 'Default text',
    },
    variant: {
      defaultValue: 'primary',
    },
  },
};
export default meta;
const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: 'I am secondary',
  onClick: action('secondary click '),
};
