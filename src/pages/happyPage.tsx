import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import Header from '../components/Header/header';
import MainQuote from '../components/common/mainQuote';


export const HappyPage = () => {
    return (
        <>
            <Flex justifyContent='center' alignItems='center' flexDirection='column'>
            <Header isHomePage={false} />
        <Flex h='100vh'>
        <MainQuote quote='No matter where life takes me, find me with a smile' image='happyQuote.png'/>
        </Flex>
</Flex>

</>
    );
};
