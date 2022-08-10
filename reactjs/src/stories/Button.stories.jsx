import React from 'react';

import Button from '../paskaita11/components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'onClick' },
    numberOfButtons: { type: 'number', defaultValue: 1 },
  },
};
// Statiniai
// export const Primary = () => <Button title='Primary' />;
// export const Danger = () => <Button variant='danger' title='Danger' />;

// Dinaminiai

const Template = ({ numberOfButtons, ...args }) => {
  let array = [];
  for (let i = 0; i < numberOfButtons; i++) {
    array.push([]);
  }
  return array.map((i) => <Button {...args} style={{ margin: '.25rem' }} />);
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'Press me',
  size: 'sm',
  variant: 'primary',
};

export const Danger = Template.bind({});
Danger.args = {
  title: 'Press me',
  size: 'sm',
  variant: 'danger',
};

export const Large = Template.bind({});
Large.args = {
  title: 'Press me',
  size: 'lg',
};

export const LongText = Template.bind({});
LongText.args = {
  title:
    'VeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongTextVeryLongText',
  size: 'sm',
};
