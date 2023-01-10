import { Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { IMainFeelFaces, MainFeelFaces } from './mainFeelFaces';

const Faces: IMainFeelFaces[] = [
    {image: 'happyFace.png', labelFace: 'happy', page: 'happy'},
    {image: 'lostFace.png', labelFace: 'lost', page: 'lost' },
    {image: 'sadFace.png', labelFace: 'sad', page: 'sad'}
]

export const MainFeel = () => {
    return (
        <Flex justifyContent='center' direction='column' alignItems='center'>
            <Text fontSize={['16px', '20px', '38px', '38px']} pt='24px'>HOW DO YOU FEEL TODAY?</Text>
            <Flex width='100%' justifyContent='space-between' alignItems='flex-end' p='30px 60px' direction={['column', 'column', 'row', 'row']}>
                {Faces.map((face) => <MainFeelFaces image={face.image} labelFace={face.labelFace} page={face.page}/>)}
            </Flex>
        </Flex>
    );
};

export default MainFeel;
