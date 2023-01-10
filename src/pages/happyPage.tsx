import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import Header from '../components/Header/header';
import MainQuote from '../components/common/mainQuote';


export const HappyPage = () => {
    return (
        <>
        <Header isHomePage={false} />
        <MainQuote quote='No matter where life takes me, find me with a smile' image='happyQuote.png'/>
        </>
    );
};
