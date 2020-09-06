import React from "react";
import { View } from "react-native";

export default function App() {
    return (
        <View
            style={{
                backgroundColor: "#fff",
                flex: 1,
                flexDirection: "row", // horizontal
                justifyContent: "center", // main
                alignItems: "center", // secondary
            }}
        >
            <View
                style={{
                    backgroundColor: "dodgerblue",
                    // flexBasis: 100, // width or height is
                    // flexGrow: 1, // =flex:1 flex is a shorthand for flexGorw or flexShrink
                    flexShrink: 1, // flex: -1
                    width: 400,
                    height: 100,
                }}
            />
            <View style={{ backgroundColor: "gold", width: 100, height: 100 }} />
            <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
        </View>
    );
}
