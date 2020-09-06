import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert, SafeAreaView } from "react-native";

export default function App() {
    //const handlePress = () => console.log("Text pressed");
    //console.log(require("./assets/icon.png"));
    //console.log(require("https://picsum.photos/200/300"));
    return (
        <SafeAreaView style={[styles.container, containerStyle]}>
            <Button
                //color="orange"
                title="Click Me"
                //onPress={() => console.log("Button clicked!")}
                //onPress={() => alert("Button tapped")}
                onPress={
                    () =>
                        Alert.alert("New Title", "The Message", [
                            { text: "Yes", onPress: () => console.log("Yes") },
                            { test: "No", onPress: () => console.log("No") },
                        ])
                    //Alert.prompt("New Title", "The Message", text => console.log(text)) // iOS only!
                }
            />
        </SafeAreaView>
    );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "dodgerblue",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
});
