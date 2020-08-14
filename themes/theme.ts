// my-theme.ts
import { DefaultTheme } from 'styled-components';

const mainTheme: DefaultTheme = {
    borderRadius: '4px',

    colors: {
        primary: '#2B2B2B',
        secondary: '#ffd200'
    },

    fontColors: {
        primary: '#4E4E4E',
        secondary: '#FFFFFF',
        dark: '#000'
    },

    font: {
        caption: 'PT Serif Caption',
        subCaption: 'Source Serif Pro',
        regular: 'Lato'
    },

    breakpoints: {
        sm: '320px',
        md: '768px',
        lg: '1000px',
        xl: '1900px'
    }
};

export { mainTheme };
