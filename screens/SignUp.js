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
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('first name is required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('last name is required'),
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

const SignUp = () => {
  const [show, setShow] = React.useState(false);
  return (
    <ScrollView>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
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
                Sign Up
              </Text>
              <Text color="#AAA">Fill your additional details</Text>
            </Stack>
            <Stack space="2">
              <FormControl isInvalid>
                <FormControl.Label>First Name</FormControl.Label>
                <Input
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  placeholder="write your first name"
                  value={values.firstName}
                />
                {errors.firstName && (
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    {errors.firstName}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>
            </Stack>
            <Stack space="2">
              <FormControl isInvalid>
                <FormControl.Label>Last Name</FormControl.Label>
                <Input
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  placeholder="write your last name"
                  value={values.lastName}
                />
                {errors.lastName && (
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    {errors.lastName}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>
            </Stack>
            <Stack space="2">
              <Text>Phone Number</Text>
              <Input placeholder="write your phone number" />
            </Stack>
            <Stack space="2">
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
            {/* <Stack space="2">
              <FormControl isInvalid>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder="write your password"
                  value={values.password}
                />
                {errors.password && (
                  <FormControl.ErrorMessage
                    leftIcon={<WarningOutlineIcon size="xs" />}>
                    {errors.password}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>
            </Stack> */}
            <Stack space="2">
              <Button bg="#54C4F4" _pressed={{bg: '#B4E4FA'}}>
                Sign Up
              </Button>
              <Text textAlign="center">Already have account ? Sign In</Text>
            </Stack>
          </Stack>
        )}
      </Formik>
    </ScrollView>
  );
};

export default SignUp;
