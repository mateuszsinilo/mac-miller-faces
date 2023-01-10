import React from 'react';
import { Flex, Text, Image, Link } from '@chakra-ui/react';

export interface IMainFeelFaces {
    image: string
    labelFace: string
    page: string
}

export const MainFeelFaces = ({image, labelFace, page} : IMainFeelFaces) => {
    return (
        <>
    <Flex alignItems='center' direction='column' p='12px' w='25%' >
        <Link href={page}>
        <Image src={`assets/images/${image}`} _hover={{opacity: '0.6', transition: '.5s ease-out'}}/>
        </Link>
            <Text fontSize='28px' pt='16px' textTransform='uppercase'>{labelFace}</Text>
    </Flex>
        </>
    );
};
