import type { Meta, StoryObj } from '@storybook/angular';
import { BotonTresComponent } from './boton-tres.component';

const meta: Meta<BotonTresComponent> = {
  title: 'Example/BotonTres',
  component: BotonTresComponent,
  tags: ['autodocs'],
  argTypes: {
    buttonText: { control: 'text' },
    iconUrl: { control: 'text' },
    isDisabled: { control: 'boolean' },
    width: { control: 'number' }
  },
  args: {
    buttonText: 'Button Text',
    iconUrl: '/src/assets/icons/succes.svg',
    isDisabled: false,
    width: 100
  },
};

export default meta;

type Story = StoryObj<BotonTresComponent>;

export const Primary: Story = {
  args: {
    buttonText: 'Primary Button',
    iconUrl: '',
    isDisabled: false,
    width: 100
  },
};

export const IconButton: Story = {
  args: {
    buttonText: '',
    iconUrl: '/src/assets/icons/succes.svg', // Cambia esto a la ruta real de tu SVG
    isDisabled: false,
    width: 100
  },
};

export const NoTextNoIcon: Story = {
  args: {
    buttonText: '',
    iconUrl: '',
    isDisabled: false,
    width: 100
  },
};
