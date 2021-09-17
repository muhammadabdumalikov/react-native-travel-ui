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
import { Platform } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
    Entypo,
    MaterialCommunityIcons,
    Ionicons,
} from "react-native-vector-icons";

const Stack = createNativeStackNavigator();
const Tab =
    Platform.OS === "android"
        ? createMaterialBottomTabNavigator()
        : createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            shifting={true}
            // barStyle={{ backgroundColor: "white"}}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: color.orange,
                tabBarrInactiveTintColor: color.gray,
                tabBarStyle: styles.tabBar,
                tabBarShowLabel: false,
                headerShown: false,
                shifting: true,
                tabBarLabel: Platform.OS === "android" ? false : true,
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarColor: "red",
                    tabBarBackground: "red",
                    tabBarIcon: ({ color }) =>
                        Platform.OS === "android" ? (
                            <Ionicons
                                name="home-outline"
                                size={32}
                                color={color}
                            />
                        ) : (
                            <Entypo name="heart" size={32} color={color} />
                        ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Liked"
                component={Liked}
                options={{
                    tabBarIcon: ({ color }) =>
                        Platform.OS === "android" ? (
                            <Ionicons
                                name="heart-outline"
                                size={32}
                                color={color}
                            />
                        ) : (
                            <Entypo name="heart" size={32} color={color} />
                        ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) =>
                        Platform.OS === "android" ? (
                            <Ionicons
                                name="person-circle-outline"
                                size={32}
                                color={color}
                            />
                        ) : (
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
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
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
