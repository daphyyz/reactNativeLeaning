//import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, StatusBar, Platform, SafeAreaView } from "react-native";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <Button title="Click Me" />
        </SafeAreaView> // iOS only
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "dodgerblue",
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // justifyContent: "center",
        // alignItems: "center",
    },
});
