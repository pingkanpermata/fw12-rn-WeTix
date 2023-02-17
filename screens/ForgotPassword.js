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
  email: Yup.string()
    .email('Invalid email address')
    .required('email address is required'),
  // password: Yup.string()
  //   .password()
  //   .required('Enter password')
  //   .min(8, 'Min length 8 characters')
  //   .minLowercase(1, 'Min lowercase 1')
  //   .minUppercase(1, 'Min uppercase 1')
  //   .minSymbols(1, 'Min symbol 1')
  //   .minNumbers(1, 'Min number 1'),
});

const ForgotPassword = () => {
  return (
    <ScrollView>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          email: '',
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
                Forgot Password
              </Text>
              <Text color="#AAA">we'll send a link to your email shortly</Text>
            </Stack>
            <Stack space="2" mt="5">
              <FormControl isInvalid>
                <FormControl.Label>Email</FormControl.Label>
                <Input
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="write your email"
                  value={values.email}
                />
                {errors.email && (
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    {errors.email}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>
            </Stack>
            <Stack space="4">
              <Button bg="#54C4F4" _pressed={{bg: '#B4E4FA'}}>
                Send
              </Button>
            </Stack>
          </Stack>
        )}
      </Formik>
    </ScrollView>
  );
};

export default ForgotPassword;
