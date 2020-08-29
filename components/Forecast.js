import React from 'react'
import { View,Text,StyleSheet } from 'react-native'


export default function Forecast(props) {
    return (
        <View style={styles.top}>
            <Text style={styles.paragraph} >{props.name}</Text>
            <Text style={styles.mid} >{props.main}</Text>
            <Text style={styles.med}>{props.description}</Text>
            <Text style={styles.med}>{props.temp}°C</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    top: {
        flex: 0.4,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: '#b0e0e650',
        borderRadius: 30,
        marginTop: 12,
    padding: 12,



    },
    mid: {
        margin: 5,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        


    },
    med: {
        margin: 5,
        fontSize: 20,
        textAlign: 'center',
        color: 'white',


    },
    paragraph: {
        margin: 15,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'white',
        fontSize: 30,

    },





})