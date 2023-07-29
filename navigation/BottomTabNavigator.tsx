import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomTabParamList, HomeParamList, TabTwoParamList } from "../types";

import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ComingSoon from "../screens/ComingSoon";
import { createStackNavigator } from "@react-navigation/stack";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";
import MovieDetailsScreen from "../screens/MovieDetailsScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Coming Soon"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="video-library" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Downloads"
        component={ComingSoon}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="download" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="MovieDetailsScreen"
        component={MovieDetailsScreen}
        options={{ headerTitle: "" }}
      />
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}

// const TabTwoStack = createStackNavigator<TabTwoParamList>();

// function TabTwoNavigator() {
//   return (
//     <TabTwoStack.Navigator>
//       <TabTwoStack.Screen
//         name="TabTwoScreen"
//         component={TabTwoScreen}
//         options={{ headerTitle: "Tab Two Title" }}
//       />
//     </TabTwoStack.Navigator>
//   );
// }
