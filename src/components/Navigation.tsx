import React, {useContext} from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "../pages/Login";
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import {AuthContext} from '../context/AuthContext';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userInfo, splashLoading} = useContext(AuthContext);
  console.log(userInfo.data)

  return (
    <NavigationContainer>
      <Stack.Navigator>
      {splashLoading ? (
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : userInfo.token ? (
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        ) : (
            <>
                <Stack.Screen
                    name="LOGIN"
                    component={Login}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="SIGNUP"
                    component={SignUp}
                    options={{headerShown: false}}
                />
            </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
