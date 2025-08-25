import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import AllergiesScreen from "./screens/AllergiesScreen";
import LabResultsScreen from "./screens/LabResultsScreen";
import ResultsScreen from "./screens/ResultsScreen";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Allergies: undefined;
  LabResults: undefined;
  Results: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isLoggedIn ? (
          <Stack.Screen name="Login">
            {() => <LoginScreen setIsLoggedIn={setIsLoggedIn} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Allergies" component={AllergiesScreen} />
            <Stack.Screen name="LabResults" component={LabResultsScreen} />
            <Stack.Screen name="Results" component={ResultsScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
