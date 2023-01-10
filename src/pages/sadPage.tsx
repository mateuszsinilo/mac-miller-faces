import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import Header from '../components/Header/header';
import MainQuote from '../components/common/mainQuote';


export const SadPage = () => {
    return (
        <>
        <Header isHomePage={false}/>
                <MainQuote quote='When you feel sad, it’s okay. It’s not the end of the world.' image='sadQuote.png' />

        </>
    );
};
