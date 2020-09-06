import { StatusBar } from "expo-status-bar";
import React from "react";
import {
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight,
    TouchableNativeFeedback, // Android only
    View,
    Image,
    SafeAreaView,
} from "react-native";

export default function App() {
    //const handlePress = () => console.log("Text pressed");
    //console.log(require("./assets/icon.png"));
    //console.log(require("https://picsum.photos/200/300"));
    return (
        <SafeAreaView style={styles.container}>
            {/* <Text numberOfLines={1} onPress={() => console.log("Text clicked")}> */}
            {/* <Text numberOfLines={1} onPress={handlePress}> */}
            <Text>Hello React Native</Text>
            {/* <TouchableWithoutFeedback onPress={() => console.log("Image tapped")}> */}
            {/* <TouchableOpacity onPress={() => console.log("Image tapped")}> */}
            <TouchableHighlight onPress={() => console.log("Image tapped")}>
                {/* <TouchableNativeFeedback onpress={() => console.log("Imgae tapped - android only")}> */}
                {/* <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}></View> */}
                <Image
                    blurRadius={0}
                    fadeDuration={1000} // only Android
                    source={{
                        width: 200,
                        height: 300,
                        uri: "https://picsum.photos/200/300",
                    }}
                    // loadingIndicatorSource={require("./assets/splash.png")}
                />
                {/* </TouchableNativeFeedback> */}
            </TouchableHighlight>
            {/* </TouchableOpacity> */}
            {/* </TouchableWithoutFeedback> */}
            {/* <Image source={require("./assets/icon.png")} /> */}
            {/* <StatusBar style="auto" /> */}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "dodgerblue",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
});
