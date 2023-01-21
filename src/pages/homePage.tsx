import { Flex } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header/header';
import MainFeel from '../components/MainFeel/mainFeel';
import ScrollDown from '../icons/scrollDown';
import {useColorMode} from '@chakra-ui/color-mode'

export const HomePage = () => {

    const { colorMode, setColorMode, toggleColorMode } = useColorMode()

    return (
        <Flex h='100vh' flexDirection='column' alignItems='center' position='relative'>
            <Header isHomePage/>
            <MainFeel/>
            <Flex w='100%' justifyContent='center' position='absolute' top='92vh'>
                <ScrollDown color={colorMode === 'dark' ? '#3478B9' : '#FFC133'}/>
            </Flex>
        </Flex>

    );
};

