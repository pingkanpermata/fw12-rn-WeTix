import React from 'react';
import {Box, Text, View, Image, Button, FlatList, Select} from 'native-base';

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

const ViewAll = () => {
  const [selected, setSelected] = React.useState('');
  const {selected: citySelected, setSelected: citySetSelected} = React.useState('');
  return (
    <>
      <Select
        selectedValue={selected}
        placeholder="select"
        onValueChange={setSelected}>
        <Select.Item label="Hello" value="1" />
        <Select.Item label="World" value="2" />
      </Select>
      <Select
        selectedValue={citySelected}
        placeholder="Select city"
        onValueChange={citySetSelected}>
        <Select.Item label="tangerang" value="1" />
        <Select.Item label="bekasi" value="2" />
        <Select.Item label="bekasi" value="2" />
        <Select.Item label="bekasi" value="2" />
        <Select.Item label="bekasi" value="2" />
      </Select>

      <FlatList
        numColumns={2}
        data={movie}
        renderItem={({item}) => {
          return (
            <Box p="2" borderRadius="2">
              <Image
                alt="movie"
                source={item.image}
                width="160px"
                height="250px"
                resizeMode="cover"
              />
            </Box>
          );
        }}
      />
    </>
  );
};

export default ViewAll;
