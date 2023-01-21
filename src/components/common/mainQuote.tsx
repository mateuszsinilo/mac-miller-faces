import { Flex, Image, Text, Button} from '@chakra-ui/react';
import React from 'react';
import ScrollDown from '../../icons/scrollDown';
import {useColorMode} from '@chakra-ui/color-mode'


interface IMainQuote {
    quote: string;
    image: string
}
export const MainQuote = ({quote, image} : IMainQuote) => {

    const { colorMode, setColorMode, toggleColorMode } = useColorMode()

    return (
        <Flex justifyContent='center' paddingX='64px' flexDirection='column'>
        <Flex w='100%' paddingX='40px' position='relative' flexDirection='column'>
           <Flex gridGap='15%'>
               <Image src={`assets/images/${image}`} maxHeight='80%'/>
               <Text textAlign='center' w='53%' fontSize='42px' color='white' fontFamily='Cooper' pt='10%' pr='15%'>{quote}</Text>
           </Flex>
           <Flex position='absolute' w='100%' justifyContent='center' right='0' top='55%' flexDirection='column' alignItems='center' >
               <Text fontSize='72px'>FACES BY MAC MILLER </Text>
               <Text fontSize='26px'>an audiovisual presentation</Text>
           </Flex>
       </Flex>
            <Flex w='100%' justifyContent='center' position='absolute' top='92vh' right='0' alignItems='center'>
                <Flex>
                    <ScrollDown color={colorMode === 'dark' ? '#3478B9' : '#FFC133'}/>
                </Flex>
            </Flex>
            <Flex w='100%' position='absolute' top='65vh' left='70vw'>
                    <Image src='assets/images/faces-miller-circle.png' w='30%'/>
            </Flex>
        </Flex>
    );
};

export default MainQuote;
