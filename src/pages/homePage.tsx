import { Flex } from '@chakra-ui/react';
import React from 'react';
import Header from '../components/Header/header';
import MainFeel from '../components/MainFeel/mainFeel';
import ScrollDown from '../icons/scrollDown';

export const HomePage = () => {
    return (
        <Flex h='100vh' flexDirection='column' alignItems='center' position='relative'>
            <Header isHomePage/>
            <MainFeel/>
            <Flex w='100%' justifyContent='center' position='absolute' top='92vh'>
            <ScrollDown />
            </Flex>
        </Flex>

    );
};

