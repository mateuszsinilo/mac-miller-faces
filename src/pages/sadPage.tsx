import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import Header from '../components/Header/header';
import MainQuote from '../components/common/mainQuote';


export const SadPage = () => {
    return (
        <>
            <Flex justifyContent='center' alignItems='center' flexDirection='column'>
                <Header isHomePage={false}/>
                <Flex h='100vh'>
                <MainQuote quote='When you feel sad, it’s okay. It’s not the end of the world.' image='sadQuote.png' />
                </Flex>
            </Flex>
            <Flex pt='64px'>
            <Flex w='100%' bgColor='red' justifyContent='center'>
                <Text>INSIDE / OUTSIDE</Text>
            </Flex>
            </Flex>
        </>
    );
};
