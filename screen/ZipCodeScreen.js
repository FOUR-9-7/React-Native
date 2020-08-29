import React from 'react'
import { View, Text, FlatList,StyleSheet,StatusBar,Image } from 'react-native'
import {TouchableHighlight} from 'react-native-gesture-handler'
import {useNavigation} from '@react-navigation/native'

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]


const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code})}>
    <View >
    <Text style={styles.containerStyle}>{place} {code}</Text>
    <Text ></Text>
    </View>
    </TouchableHighlight> 
    )
   
    const _keyExtractor = item => item.code
    export default function ZipCodeScreen(){
     const navigation = useNavigation()
     return (
     <View style={styles.container}>
    <Image
          style={{
            resizeMode: "contain",
            height: 100,
            width: 200,
          }}
          source={require('../rain.png')}
        />
     <FlatList
     data={availableZipItems}
     keyExtractor={_keyExtractor}
     renderItem={({item}) => <ZipItem {...item}   navigation={navigation}/>}
     />
     <StatusBar style="auto" />
     </View>
     );
    
    }

const styles = StyleSheet.create({
    containerStyle:{
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#DDDDDD',
        shadowColor: '#000000',
        shadowOffset: {width :0, height:2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft: 6,
        marginRight: 6,
        marginTop: 6,
        padding: 10,
        },
    ZipPlace: {
        padding: 10,  
        fontSize: 18,  
        height: 44,  
    },
    container: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
        textAlign: "center"
      }
    

})