import React, { useState,useEffect } from 'react'
import { Text, ImageBackground, StyleSheet, View } from 'react-native'
import Forecast from './Forecast';

export default function Weather(props) {

    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0




    })
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=5ac758c9083c8eb305fdb01f21a0a501`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

    return (
        <ImageBackground source={require('../bg2.jpg')} style={styles.backdrop}>
            <View style={{ backgroundColor: '#fffaf070', flex: 0.2 }}>
                <Text style={styles.paragraph}>Zip Code {props.zipCode}{"\n"}
             {props.main}{"\n"}
             </Text>
            </View>



            <Forecast {...forecastInfo} />


        </ImageBackground>


    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'center',

        width: '100%',
        height: '100%',
        padding: 10
    },
    top: {
        flex: 0.3,
        backgroundColor: "grey",

    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },




})