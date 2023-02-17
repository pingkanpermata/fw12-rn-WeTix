import React from 'react';
import {VStack, HStack, Text, Box, Image, ScrollView} from 'native-base';

import home from '../src/img/hero.png';
import spiderman from '../src/img/spiderman.png';
import john from '../src/img/john.png';
import lion from '../src/img/lion.png';
import tenet from '../src/img/tenet.png';
import widow from '../src/img/widow.png';
import witches from '../src/img/witches.png';

const Home = () => {
  return (
    <ScrollView>
      <VStack>
        <Box>
          <Text>Nearest Cinema, Newest Movie, </Text>
          <Text color="#54C4F4" fontSize="20" fontWeight="bold">
            Find out now!
          </Text>
          <Image alt="home" source={home} w="full" h="sm" />
        </Box>
        <VStack space="2" p="10" bg="#D6D8E7">
          <HStack justifyContent="space-between">
            <Text>Now Showing</Text>
            <Text>view all</Text>
          </HStack>
          <ScrollView horizontal>
            <HStack>
              <Box borderWidth="1" borderColor="white" borderRadius="2">
                <Image alt="movie" source={spiderman} width="40" height="80" />
              </Box>
              <Box borderWidth="1" borderColor="white" borderRadius="2">
                <Image alt="movie" source={john} width="40" height="80" />
              </Box>
              <Box borderWidth="1" borderColor="white" borderRadius="2">
                <Image alt="movie" source={lion} width="40" height="80" />
              </Box>
              <Box borderWidth="1" borderColor="white" borderRadius="2">
                <Image alt="movie" source={tenet} width="40" height="80" />
              </Box>
              <Box borderWidth="1" borderColor="white" borderRadius="2">
                <Image alt="movie" source={widow} width="40" height="80" />
              </Box>
              <Box borderWidth="1" borderColor="white" borderRadius="2">
                <Image alt="movie" source={witches} width="40" height="80" />
              </Box>
            </HStack>
          </ScrollView>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Home;
