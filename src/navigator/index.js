import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../screens/dashboard';
import Routes from './route';
import ReduxThunkDemoScreen from '../screens/reduxthunkdemo'

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Routes.Dashboard} component={DashboardScreen} />
        <Stack.Screen
          name={Routes.ReduxThunkDemo}
          component={ReduxThunkDemoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;