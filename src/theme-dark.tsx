import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import { Colors } from './colors';


const themeDark = extendTheme({
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    colors: {
        brandMain: '#FFC133',
        textMain: '#3478B9',
    },
    styles: {
        global: {
            'html, body': {
                margin: 0,
                padding: 0,
                fontFamily: 'Dozer One',
                backgroundColor: Colors.brandMain,
                overflowX: 'hidden',
                color: Colors.textMain,
            },
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
    },
});

export default themeDark;
