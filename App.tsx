import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ResultsScreen from "./screens/ResultsScreen";

import HomeScreen from "./screens/HomeScreen";
import AllergiesScreen from "./screens/AllergiesScreen";
import LabResultsScreen from "./screens/LabResultsScreen";

export type RootStackParamList = {
  Home: undefined;
  Allergies: undefined;
  LabResults: undefined;
  Results: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Allergies" component={AllergiesScreen} />
        <Stack.Screen name="LabResults" component={LabResultsScreen} /> 
        <Stack.Screen name="Results" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
