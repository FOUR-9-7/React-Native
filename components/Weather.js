import React, { useState, useEffect } from 'react'
import { Text, ImageBackground, StyleSheet, View } from 'react-native'
import Forecast from './Forecast';

export default function Weather(props) {

    const [forecastInfo, setForecastInfo] = useState({
        name: '-',
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
                        name: json.name,
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,



                    });
                })
                .catch((error) => {
                    console.warn(error);
                });
        }
    }, [props.zipCode])

    return (
        <ImageBackground source={require('../bg2.jpg')} style={styles.backdrop}>
            <View>
                
                <Text style={styles.paragraph}>Zip Code is {props.zipCode}
                
                </Text>
                
            </View>
<Forecast {...forecastInfo}></Forecast>




        </ImageBackground>


    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        width: '100%',
        height: '100%',
    
    },
    paragraph: {
        
        margin: 24,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      
    },





})