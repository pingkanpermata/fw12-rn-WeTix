import React from 'react';
import {
  VStack,
  HStack,
  Text,
  Box,
  Image,
  ScrollView,
  Pressable,
  Button,
} from 'native-base';

import {TouchableOpacity} from 'react-native';

import home from '../src/img/hero.png';
import spiderman from '../src/img/spiderman.png';
import john from '../src/img/john.png';
import lion from '../src/img/lion.png';
import tenet from '../src/img/tenet.png';
import widow from '../src/img/widow.png';
import witches from '../src/img/witches.png';

const movie = [
  {
    id: 1,
    title: 'Spider-Man: Homecoming',
    genre: 'Action, Adventure, Sci-Fi',
    image: spiderman,
  },
  {
    id: 2,
    title: 'John Wick 3: Parabellum',
    genre: 'Action, Crime, Thriller',
    image: john,
  },
  {
    id: 3,
    title: 'The Lion King',
    genre: 'Drama, Adventure',
    image: lion,
  },
  {
    id: 4,
    title: 'Tenet',
    genre: 'Action, Sci-Fi, Thriller',
    image: tenet,
  },
  {
    id: 5,
    title: 'Black Widow',
    genre: 'Action, Asventure, Sci-Fi',
    image: widow,
  },
  {
    id: 6,
    title: 'The Witches',
    genre: 'Adenture, Comedy, Family',
    image: witches,
  },
];

const Home = () => {
  const [focus, setFocus] = React.useState(null);

  const toggleFocus = id => {
    // console.log('component click ok');
    if (focus === id) {
      setFocus(null);
    } else {
      setFocus(id);
    }
  };
  return (
    <ScrollView>
      <VStack>
        <Box>
          <Box p="10">
            <Text>Nearest Cinema, Newest Movie, </Text>
            <Text color="#54C4F4" fontSize="20" fontWeight="bold">
              Find out now!
            </Text>
            <Image alt="home" source={home} w="full" h="sm" />
          </Box>
        </Box>
        <VStack space="2" p="10" bg="#D6D8E7">
          <HStack justifyContent="space-between">
            <Text color="#00ABB3">Now Showing</Text>
            <Text color="#00ABB3">view all</Text>
          </HStack>
          <ScrollView height={focus ? '380px' : 'auto'} horizontal>
            <HStack space="3">
              {movie.map(o => (
                <TouchableOpacity onPress={() => toggleFocus(o.id)}>
                  <Box
                    p="2"
                    borderWidth="1"
                    bg={focus === o.id ? 'white' : 'transparent'}
                    borderColor={focus === o.id ? '#dedede' : 'white'}
                    borderRadius="2">
                    <Image
                      alt="movie"
                      source={o.image}
                      width="160px"
                      height="250px"
                      resizeMode="cover"
                    />
                    <Box position="relative">
                      {focus === o.id && (
                        <Box
                          bg="white"
                          width="110%"
                          position="absolute"
                          ml="-2"
                          p="4">
                          <Text
                            textAlign="center"
                            fontSize="12"
                            fontWeight="semibold">
                            {o.title}
                          </Text>
                          <Text mt="1" textAlign="center" fontSize="12">
                            {o.genre}
                          </Text>
                          <Button
                            mt="3"
                            bg="#54C4F4"
                            _pressed={{bg: '#B4E4FA'}}>
                            Press Me
                          </Button>
                        </Box>
                      )}
                    </Box>
                  </Box>
                </TouchableOpacity>
              ))}
            </HStack>
          </ScrollView>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Home;
