import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HomeScreen from "./Screens/HomeScreen";
import { StatusBar } from "expo-status-bar";
import AuthScreen from "./Screens/AuthScreens/AuthScreen";

const Mainsrc = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#bbf7d0" />
      <SafeAreaView className="flex-1">
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default Mainsrc;
