import React from 'react';
import {Box, Text, NativeBaseProvider} from 'native-base';
// import SignUp from './screens/SignUp';
// import SignIn from './screens/SignIn';
// import Forgotpassword from './screens/ForgotPassword';
// import SetPassword from './screens/SetPassword';
import Home from './screens/Home';

const App = () => {
  return (
    <NativeBaseProvider>
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <Forgotpassword /> */}
      {/* <SetPassword /> */}
      <Home />
    </NativeBaseProvider>
  );
};

export default App;
