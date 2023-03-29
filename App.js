// import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import { View, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "@rneui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import theme from "./theme.js";
import styles from "./styles.js";
import LocationRequest from "./components/LocationRequest";

export default function App() {
  const [userLocation, setUserLocation] = useState("");
  const [eventName, setEventName] = useState("");
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar />
        <NavBar />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: "#c9c9c9",
              },
              headerTitleAlign: "center",
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home">
              {(props) => (
                <LandingPage {...props} setEventName={setEventName} />
              )}
            </Stack.Screen>
            <Stack.Screen name="Location">
              {(props) => (
                <LocationRequest
                  userLocation={userLocation}
                  setUserLocation={setUserLocation}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

// N.B to set style add this attribute: style={styles.xxxx}

// Set StatusBar colour - done through a direct prop, not style: <StatusBar backgroundColor="#2403fc" />
