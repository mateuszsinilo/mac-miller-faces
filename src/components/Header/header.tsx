import React, {useState} from 'react';
import {Text, Flex, useColorModeValue, Box} from '@chakra-ui/react'
import ToggleSwitch from '../../icons/toggleSwitch';
import {useColorMode} from '@chakra-ui/color-mode'
import BackIcon from '../../icons/backIcon';
import { useNavigate } from 'react-router-dom'
import ToggleSwitchMode from '../../icons/toggleSwitchMode';


interface IHeader {
    isHomePage: boolean
}

export const Header = ({isHomePage}: IHeader) => {

    const navigate = useNavigate()
    const { colorMode, setColorMode, toggleColorMode } = useColorMode()

    return (
       <Flex p='40px 64px' justifyContent='space-between' width='100%' alignItems='center' h='80px'>
           {isHomePage ? (<Text>May 11, 2014</Text>) : (<Flex onClick={() => navigate('/')} cursor='pointer' alignItems='center' gridGap='12px'> <BackIcon color={colorMode === 'dark' ? '#3478B9' : '#FFC133'}/> <Text>BACK TO HOMEPAGE </Text> </Flex>)}
           <Box onClick={toggleColorMode} cursor='pointer'>
               {colorMode === 'dark' ? <ToggleSwitchMode />  : <ToggleSwitch/>}
           </Box>
       </Flex>

    );
};

export default Header;
