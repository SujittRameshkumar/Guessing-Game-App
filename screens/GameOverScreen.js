import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import Colors from '../constants/colors';
import Card from '../components/Card';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={styles.gameOver}>
                <Card style={styles.gameOverCard}>
                    <Text style={styles.bigText}>Game Over!</Text>
                </Card>
            </View>

            <View style ={styles.gameInfo}>
                <Text style = {styles.infoText}>Number of rounds: {props.roundsNumber}</Text>
                <Text style = {styles.infoText}>Number was:{props.userNumber} </Text>
            </View>

            <View style={styles.button}>
                <Card>
                    <Button
                        color={Colors.green}
                        title="Play Again"
                        onPress={props.onRestart}
                    />
                </Card>

            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    button: {
        width: '80%'
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gameOverCard: {
        padding: 60,
        borderWidth: 1,
        borderColor: Colors.red,
        borderRadius: 100,
        backgroundColor: Colors.red
    },
    bigText: {
        fontSize: 40,
        color: 'white'
    },
    gameOver: {
        paddingBottom: 90
    },
    gameInfo: {
        paddingBottom: 70
    },
    infoText:{
        fontSize: 25
    }

});

export default GameOverScreen;