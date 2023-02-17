import React from 'react';
import {
  Box,
  Text,
  Image,
  Stack,
  Input,
  Button,
  FormControl,
  WarningOutlineIcon,
  ScrollView,
  Icon,
  Pressable,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import * as Yup from 'yup';
import {Formik} from 'formik';

import logo from '../src/img/wetix.png';

const validationSchema = Yup.object({
  // password: Yup.string()
  //   .password()
  //   .required('Enter password')
  //   .min(8, 'Min length 8 characters')
  //   .minLowercase(1, 'Min lowercase 1')
  //   .minUppercase(1, 'Min uppercase 1')
  //   .minSymbols(1, 'Min symbol 1')
  //   .minNumbers(1, 'Min number 1'),
});

const SetPassword = () => {
  const [show, setShow] = React.useState(false);
  return (
    <ScrollView>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          password: '',
        }}>
        {({handleChange, handleBlur, handleSubmit, errors, values}) => (
          <Stack space="sm" p="10">
            <Stack>
              <Image
                source={logo}
                width="100"
                height="60"
                resizeMode="center"
                alt="logo"
              />
            </Stack>
            <Stack space="2">
              <Text fontSize="20" fontWeight="bold">
                Set Password
              </Text>
              <Text color="#AAA">set your new password</Text>
            </Stack>
            <Stack space="2">
              <Text>Password</Text>
              <Input
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      mr="2"
                      as={<Feather name={show ? 'eye-off' : 'eye'} />}
                    />
                  </Pressable>
                }
                placeholder="write your password"
              />
            </Stack>
            <Stack space="2">
              <Text>Confirm Password</Text>
              <Input
                type={show ? 'text' : 'password'}
                InputRightElement={
                  <Pressable onPress={() => setShow(!show)}>
                    <Icon
                      mr="2"
                      as={<Feather name={show ? 'eye-off' : 'eye'} />}
                    />
                  </Pressable>
                }
                placeholder="write your confirm password"
              />
            </Stack>
            <Stack space="2">
              <Button bg="#54C4F4" _pressed={{bg: '#B4E4FA'}}>
                Submit
              </Button>
            </Stack>
          </Stack>
        )}
      </Formik>
    </ScrollView>
  );
};

export default SetPassword;
