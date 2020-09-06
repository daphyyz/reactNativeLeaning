import React from "react";
import { Text, View, Image } from "react-native";

export default function App() {
    return (
        <View
            style={{
                backgroundColor: "#fff",
                flex: 1,
                //flexDirection: "row", // horizontal
                justifyContent: "flex-end", // main
                alignItems: "center", // secondary
            }}
        >
            <Image
                source={require("./assets/background.jpg")}
                style={{ width: "100%", height: "100%" }}
            />
            <View
                style={{
                    width: "100%",
                    //height: 50,
                    position: "absolute",
                    flex: 1,
                    top: 50,
                    justifyContent: "center", // main
                    alignItems: "center", // secondary
                }}
            >
                <Image
                    source={require("./assets/logo-red.png")}
                    style={{ width: 80, height: 80 }}
                />
                <Text>Set What You Don't Need</Text>
            </View>
            <View
                style={{
                    backgroundColor: "tomato",
                    width: "100%",
                    height: 100,
                    flex: 1,
                    position: "absolute",
                }}
            >
                <View
                    style={{
                        backgroundColor: "tomato",
                        width: "100%",
                        height: 50,
                        flex: 1,
                    }}
                ></View>
                <View
                    style={{
                        backgroundColor: "lightgreen",
                        width: "100%",
                        height: 50,
                        flex: 1,
                    }}
                ></View>
            </View>
        </View>
    );
}
