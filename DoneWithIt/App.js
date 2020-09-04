import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
    const handlePress = () => console.log("Text pressd");

    return (
        <SafeAreaView style={styles.container}>
            {/* <Text numberOfLines={1} onPress={() => console.log("Text clicked")}> */}
            <Text numberOfLines={1} onPress={handlePress}>
                Hello React NativeHello React NativeHello React NativeHello React NativeHello React
                NativeHello React NativeHello React NativeHello React NativeHello React Native
            </Text>
            {/* <StatusBar style="auto" /> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "dodgerblue",
        // alignItems: "center",
        // justifyContent: "center",
    },
});
