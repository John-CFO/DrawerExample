import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Menu } from "react-native-material-menu";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./Screens.tsx/HomeScreen";
import LoginScreen from "./Screens.tsx/LoginScreen";
import NotificationScreen from "./Screens.tsx/NotificationScreen";
import OnboardingScreen from "./Screens.tsx/OnboardingScreen";
import ProfileScreen from "./Screens.tsx/ProfileScreen";
import MaterialMenu from "./components/MaterialMenu";

//////////////////////////////////////////////////////////////////////////

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppDrawerNavigator = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const showMenu = () => setMenuVisible(true);
  const hideMenu = () => setMenuVisible(false);

  const menuComponent = (
    <Menu
      visible={isMenuVisible}
      anchor={
        <TouchableOpacity onPress={showMenu} style={{ marginRight: 10 }}>
          <MaterialIcons name="live-help" size={36} color="black" />
        </TouchableOpacity>
      }
      onRequestClose={hideMenu}
    >
      <MaterialMenu onClose={hideMenu} />
    </Menu>
  );

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: "center",
        drawerStyle: {
          width: 280,
        },
        /*--Help-Button--*/
        headerRight: () => (
          <React.Fragment key={"menu"}>{menuComponent}</React.Fragment>
        ),
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
};
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Inside"
            component={AppDrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
