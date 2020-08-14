// my-theme.ts
import { DefaultTheme } from 'styled-components';

const mainTheme: DefaultTheme = {
    borderRadius: '4px',

    colors: {
        pink: '#FF427F',
        blue: '#0779E4',
        gray: '#494949'
    },

    font: {
        caption: 'Josefin Sans',
        regular: 'Open Sans'
    },

    breakpoints: {
        sm: '320px',
        md: '768px',
        lg: '1000px',
        xl: '1900px'
    }
};

export { mainTheme };
