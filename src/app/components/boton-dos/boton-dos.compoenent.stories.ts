import type { Meta, StoryObj } from '@storybook/angular';
import { BotonDosComponent } from './boton-dos.component';

const meta: Meta<BotonDosComponent> = {
  title: 'Example/BotonDos',
  component: BotonDosComponent,
  tags: ['autodocs'],
  argTypes: {
    buttonText: { control: 'text' },
    icon: { control: 'text' },
    isDisabled: { control: 'boolean' },
    width: { control: 'number' }
  },
  args: {
    buttonText: 'Button Text',
    icon: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15 8H21L16 12L18 18L12 14L6 18L8 12L3 8H9L12 2Z" fill="white"/>
      </svg>
    `,
    isDisabled: false,
    width: 100
  },
};

export default meta;

type Story = StoryObj<BotonDosComponent>;

export const Primary: Story = {
  args: {
    buttonText: 'Primary Button',
    icon: '', // Cambiado de null a cadena vacía
    isDisabled: false,
    width: 100
  },
};

export const IconButton: Story = {
  args: {
    buttonText: '',
    icon: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15 8H21L16 12L18 18L12 14L6 18L8 12L3 8H9L12 2Z" fill="white"/>
      </svg>
    `,
    isDisabled: false,
    width: 100
  },
};

export const NoTextNoIcon: Story = {
  args: {
    buttonText: '',
    icon: '',
    isDisabled: false,
    width: 100
  },
};
