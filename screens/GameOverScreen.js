import React from "react";
import {View, StyleSheet, Button, Image, Text} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={1000}
                    source={require("../assets/success.png")}
                    // source={{
                    //     uri: 'https://i.ytimg.com/vi/z0pPhTLvzu4/sddefault.jpg'
                    // }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.resultContainer} >
                <BodyText style={styles.resultText}>
                    Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
            </View>
            <MainButton onPress={props.onRestart} >NEW GAME</MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30
    },
    highlight: {
        color: colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
})

export default GameOverScreen;
