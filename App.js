import React from 'react';
import {Box, Text, NativeBaseProvider} from 'native-base';
// import SignUp from './screens/SignUp';
// import SignIn from './screens/SignIn';
// import Forgotpassword from './screens/ForgotPassword';
// import SetPassword from './screens/SetPassword';
// import Home from './screens/Home';
import ViewAll from './screens/ViewAll';

const App = () => {
  return (
    <NativeBaseProvider>
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <Forgotpassword /> */}
      {/* <SetPassword /> */}
      {/* <Home /> */}
      <ViewAll />
    </NativeBaseProvider>
  );
};

export default App;
