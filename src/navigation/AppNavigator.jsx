import * as React from "react";
import { View, Text } from "react-native";
import {
  createStaticNavigation,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screen/Splash";
import Question from "../screen/Question";
import Score from "../screen/Score";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{contentStyle:{backgroundColor:"#fff"}}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="Score" component={Score} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
