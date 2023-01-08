import React from 'react';
import {Text, Flex} from '@chakra-ui/react'
import ToggleSwitch from '../../icons/toggleSwitch';

export const Header = () => {
    return (
       <Flex p='40px 64px' justifyContent='space-between' width='100%' alignItems='center'>
            <Text>May 11, 2014</Text>
           <ToggleSwitch />
       </Flex>
    );
};

export default Header;
