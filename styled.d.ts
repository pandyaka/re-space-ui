// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;

        colors: {
            primary: string;
            secondary: string;
        };

        fontColors: {
            primary: string;
            secondary: string;
            dark: string;
        };

        font: {
            caption: string;
            subCaption: string;
            regular: string;
        };

        breakpoints: {
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    }
}
