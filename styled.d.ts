// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        borderRadius: string;

        colors: {
            pink: string;
            blue: string;
            gray: string;
        };

        font: {
            caption: string;
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
