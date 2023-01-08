import { Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';

export const MainFeel = () => {
    return (
        <Flex justifyContent='center' direction='column'>
            <Text fontSize='38px'>HOW DO YOU FEEL TODAY?</Text>
            <Flex>
                <Image src='assets/images/happyFace.png'/>
            </Flex>
        </Flex>
    );
};

export default MainFeel;
