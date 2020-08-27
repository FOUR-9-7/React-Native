import React,{useState} from 'react'
import { Text, ImageBackground, StyleSheet, View } from 'react-native'
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0




    })
    return (
        <ImageBackground source={require('../bg2.jpg')} style={styles.backdrop}>
           <View style={{ backgroundColor: '#fffaf070', flex: 0.2 }}>
            <Text style={styles.paragraph}>Zip Code {props.zipCode}{"\n"}
            Main Zip Code {props.zipCode}{"\n"}
            Main </Text>
            </View>

      

            <Forecast {...forecastInfo} />

           
        </ImageBackground>


    );
}

const styles = StyleSheet.create({
    backdrop: {
        flexDirection: 'column',
        justifyContent:'center',

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