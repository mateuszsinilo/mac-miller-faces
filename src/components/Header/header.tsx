import React, {useState} from 'react';
import {Text, Flex, useColorModeValue} from '@chakra-ui/react'
import ToggleSwitch from '../../icons/toggleSwitch';
import {useColorMode} from '@chakra-ui/color-mode'
import BackIcon from '../../icons/backIcon';
import { useNavigate } from 'react-router-dom'


interface IHeader {
    isHomePage: boolean
}

export const Header = ({isHomePage}: IHeader) => {

    const navigate = useNavigate()

    return (
       <Flex p='40px 64px' justifyContent='space-between' width='100%' alignItems='center' h='80px'>
           {isHomePage ? (<Text>May 11, 2014</Text>) : (<Flex onClick={() => navigate('/')} cursor='pointer' alignItems='center' gridGap='12px'> <BackIcon/> <Text>BACK TO HOMEPAGE </Text> </Flex>)}
           <ToggleSwitch />
       </Flex>

    );
};

export default Header;
