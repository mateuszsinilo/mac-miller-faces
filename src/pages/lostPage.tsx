import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import Header from '../components/Header/header';
import MainQuote from '../components/common/mainQuote';


export const LostPage = () => {
    return (
        <>
        <Header isHomePage={false}/>
        <MainQuote quote='I just like to sing for people who have lost love.' image='lostQuote.png'/>
        </>
);
};
