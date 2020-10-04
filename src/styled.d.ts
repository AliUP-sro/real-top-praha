import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            blue: string,
            darkBlue: string,
            red: string,
            darkRed: string
        }
    }
}