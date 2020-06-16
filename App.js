import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hi There!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#36b4a1',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontStyle: 'italic',
        fontSize: 60,
        fontWeight: 'bold',
        textDecorationColor: '#ffcd06',
        textShadowColor: '#ffffff',
        color: '#ffcd06'
    }

});
