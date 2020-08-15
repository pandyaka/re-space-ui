// my-theme.ts
import { DefaultTheme } from 'styled-components';

const mainTheme: DefaultTheme = {
    borderRadius: '4px',

    colors: {
        pink: '#FF427F',
        blue: '#0779E4',
        gray: '#383838',
        softPink: 'rgba(255, 66, 127, 0.14)'
    },

    font: {
        caption: 'Josefin Sans',
        regular: 'Open Sans'
    },

    breakpoints: {
        sm: '320px',
        md: '768px',
        lg: '1200px',
        xl: '1900px'
    },

    map: {
        colors: {
            bg: '#f7f8f9',
            stroke: '#383838',
            available: 'rgba(255, 66, 127, 0.14)',
            occupied: '#eaeefe'
        },
        sizes: {
            stroke: '1'
        }
    }
};

export { mainTheme };
