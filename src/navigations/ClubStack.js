import React from 'react';
import {SCREEN_NAME} from '@src/utils/Const';
import {createStackNavigator} from '@react-navigation/stack';
import Clubcreen from '@screens/club-tab/ClubScreen';
import ListRoomClubScreen from '@screens/club-tab/ListRoomClubScreen';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createStackNavigator();

const GymStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN_NAME.LIST_ROOM_CLUB_SCREEN}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={SCREEN_NAME.LIST_ROOM_CLUB_SCREEN}
          component={ListRoomClubScreen}
        />
        <Stack.Screen name={SCREEN_NAME.CLUB_SCREEN} component={Clubcreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default GymStack;
