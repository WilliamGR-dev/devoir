import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Landing from '../features/oboarding/landing/landing.screen';
import Login from '../features/oboarding/login/login.screen';
import Call from '../features/oboarding/call/call.screen';
import confirmCode from '../features/oboarding/confirmCode/confirmCode.screen';
const Stack = createNativeStackNavigator();

const rootContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#ff3537',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '900',
            textAlign: 'center',
            fontSize: 20,
          },
        }}>
        <Stack.Screen name="landing" component={Landing} />
        <Stack.Screen
          name="login"
          options={{headerShown: true, title: 'Connexion'}}
          component={Login}
        />
        <Stack.Screen
          name="call"
          options={{headerShown: true, title: 'Connexion'}}
          component={Call}
        />
        <Stack.Screen
          name="confirmCode"
          options={{headerShown: true, title: 'Connexion'}}
          component={confirmCode}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default rootContainer;
