import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    buttonText: { control: 'text' },
    icon: { control: 'text' },
    isDisabled: { control: 'boolean' }
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    buttonText: 'Button text',
    isDisabled: false,
  },
};
export const Disabled: Story = {
  args: {
    buttonText: 'Button text',
    isDisabled: true,
  },
};
export const FullWidth: Story = {
  args: {
    buttonText: 'Button text',
    fullWidth: true,
  },
};
/* export const Icon: Story = {
  args: {
    isDisabled: false,
  },
}; */
/* export const Icon: Story = {
  args: {
    buttonText: 'Button text',
    icon: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15 8H21L16 12L18 18L12 14L6 18L8 12L3 8H9L12 2Z" fill="white"/>
      </svg>
    `,
    isDisabled: false,
  },
}; */
export const Icon: Story = {
  render: (args) => ({
    props: args,
    template: `
        <app-button [buttonText]="buttonText" [isDisabled]="isDisabled">
          <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.335 19.9L0 14.565L5.35343 9.21158L6.64593 10.495L3.4925 13.6484H20.9V15.4816H3.4925L6.6275 18.6166L5.335 19.9ZM16.665 10.7884L15.3725 9.50501L18.5075 6.37001H1.1V4.53658H18.5075L15.3541 1.38343L16.6466 0.100006L22 5.45343L16.665 10.7884Z"
        fill="white" />
    </svg>
        </app-button>
    `,
  }),
  args: {
    icon: true,
    isDisabled: false,
    fullWidth:true,
  },
};

