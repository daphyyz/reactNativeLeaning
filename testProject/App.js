import React from "react";
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TextInput,
    Dimensions,
    Platform,
    ScrollView,
} from "react-native";
import { AppLoading } from "expo";
import ToDo from "./ToDo";
import "react-native-get-random-values";
import { v1 as uuidv1 } from "uuid";
import { render } from "react-dom";

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
    state = {
        newToDo: "",
        loadedToDos: false,
    };
    componentDidMount = () => {
        this._loadToDos();
    };
    render() {
        const { newToDo, loadedToDos } = this.state;
        if (!loadedToDos) {
            return <AppLoading />;
        }
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <Text style={styles.title}>Kawai To Do!!</Text>
                <View style={styles.card}>
                    <TextInput
                        style={styles.input}
                        placeholder={"New To Do!"}
                        value={newToDo}
                        onChangeText={this._controlNewToDo}
                        placeholderTextColor={"#555"}
                        returnKeyType={"done"}
                        autoCorrect={false}
                        onSubmitEditing={this._addTodo}
                    />
                    <ScrollView contentContainerStyle={styles.toDos}>
                        <ToDo text={"Hello I'm a Todo!!!!!!!!"} />
                    </ScrollView>
                </View>
            </View>
        );
    }
    _controlNewToDo = text => {
        this.setState({
            newToDo: text,
        });
    };
    _loadToDos = () => {
        this.setState({
            loadedToDos: true,
        });
    };
    _addTodo = () => {
        const { newToDo } = this.state;
        if (newToDo !== "") {
            // this.setState({
            //     newToDo: "",
            // });
            this.setState(prevState => {
                //toDos: prevState.toDos + newToDo
                const ID = uuidv1();
                const newToDoObject = {
                    [ID]: {
                        id: ID,
                        isCompleted: false,
                        text: newToDo,
                        createdAt: Date.now(),
                    },
                };
                const newState = {
                    ...prevState,
                    newToDo: "",
                    toDos: {
                        ...prevState.toDos,
                        ...newToDoObject,
                    },
                };
                return { ...newState };
            });
            const toDos = {
                3333: {
                    id: 3333,
                    text: "buy something",
                    isCompleted: false,
                    date: 12314124,
                },
                4444: {
                    id: 4444,
                    text: "buy something",
                    isCompleted: false,
                    date: 12314124,
                },
            };
        }
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F23657",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 30,
        marginTop: 50,
        fontWeight: "200",
        marginBottom: 30,
    },
    card: {
        backgroundColor: "white",
        flex: 1,
        width: width - 25,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        /**
         * for iOS
         * shadowRadius, shadowOpacity
         * for Android
         * elevation
         */
        ...Platform.select({
            ios: {
                shadowColor: "rgb(50, 50, 50)",
                shadowOpacity: 0.5,
                shadowRadius: 5,
                shadowOffset: {
                    height: -1,
                    width: 0,
                },
            },
            android: {
                elevation: 5,
            },
            web: {
                shadowColor: "rgb(50, 50, 50)",
                shadowOpacity: 0.5,
                shadowRadius: 5,
                shadowOffset: {
                    height: -1,
                    width: 0,
                },
            },
        }),
    },
    input: {
        padding: 20,
        borderBottomColor: "#bbb",
        borderBottomWidth: 1,
        fontSize: 25,
    },
    toDos: {
        alignItems: "center",
    },
});
