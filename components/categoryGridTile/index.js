import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Platform, TouchableNativeFeedback } from 'react-native'


const categoryGridTile = (props) => {
    
    let TouchableCmp = TouchableOpacity;
    
    if (Platform.OS === 'android') {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
        <TouchableCmp 
                style={{flex:1}} 
                onPress={props.onSelect}>
                <View 
                style={{...styles.container,...{ backgroundColor:props.color }}}>
                    <Text>{props.title}</Text>
                </View>
                </TouchableCmp>
        </View>
    )
}

export default categoryGridTile

const styles = StyleSheet.create({
    container:{
        flex:1,
        borderRadius:8,
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowOffset:{width:0, height:2},
        shadowRadius: 10,
        padding:15,
        justifyContent: 'flex-end',
        alignItems:'flex-end'
    },
    gridItem:{
        flex:1,
        margin:15,
        height:150 ,
        borderRadius:10,
        overflow:'hidden',
        elevation: 5,
    }
})
