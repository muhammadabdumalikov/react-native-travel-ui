import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as Font from "expo-font";

import Home from "./src/components/Home";
import Details from "./src/components/Details";
import Liked from "./src/components/Liked";
import Profile from "./src/components/Profile";
import color from "./assets/colors/colorsData";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, MaterialCommunityIcons } from "react-native-vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: color.orange,
                tabBarrInactiveTintColor: color.gray,
                tabBarStyle: styles.tabBar,
                tabBarShowLabel: false,
                paddingTop: 20,
                headerShown: false
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={32} color={color} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Liked"
                component={Liked}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="heart" size={32} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="user" size={32} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen
                    name="TabNavigator"
                    component={TabNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: color.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});
