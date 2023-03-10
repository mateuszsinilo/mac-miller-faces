import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Colors } from './colors';
import {mode} from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
});

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    styles: {
        global: (props: any) => ({
            body: {
                backgroundColor: mode( '#3478B9', '#FFC133')(props),
                color: mode('#FFC133', '#3478B9') (props),
                fontFamily: 'Dozer One',
                margin: 0,
                padding: 0
            },

        }),
            a: {
                textDecoration: 'none',
                color: 'white',
            },
            button: {
                border: 0,
            },
            'h1, h2, h3, h4, h5, h6': {
                margin: 0,
            },
            ul: {
                padding: 0,
            },
            medium: {
                color: Colors.brandMain,
            },
            regular: {
                color: Colors.brandMain,
            },
            strong: {
                color: Colors.brandMain,
            },
            _focus: {
                boxShadow: 'none !important',
                outline: 'none !important',
            },
            _focusVisible: {
                boxShadow: 'none !important',
                outline: 'auto !important',
            },
    },
});

export default theme;
