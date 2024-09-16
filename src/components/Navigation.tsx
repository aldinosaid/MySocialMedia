import React, {useContext} from 'react';
import {Alert, Button, Text, Touchable, TouchableOpacity, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "../pages/Login";
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import CreatePost from '../pages/Post/CreatePost';
import SinglePost from '../pages/Post/SinglePost';
import {AuthContext} from '../context/AuthContext';
import SplashScreen from '../screens/SplashScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userInfo, splashLoading} = useContext(AuthContext);

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
          <>
            <Stack.Screen name="HOME" component={Home} options={{headerShown: false}}/>
            <Stack.Screen
                name="CREATEPOST"
                component={CreatePost}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SINGLEPOST"
                component={SinglePost}
                options={{headerShown: false}}
            />
          </>
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
