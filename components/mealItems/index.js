import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const mealItems = (props) => {
    return (
        <View style={styles.container}>
        <View style={styles.mealItems}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow,...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                </View>
                <View style={styles.containerDesc}>
                    <View style={{...styles.mealRow, ... styles.mealDetail}}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default mealItems

const styles = StyleSheet.create({
    container:{
       alignItems:'center',
       paddingVertical:10
    },
    mealItems:{
       height:200,
       width:'90%',
       backgroundColor:'grey',
       borderRadius:10,
       overflow:'hidden',
       marginVertical:10
    },
    containerDesc:{  
    },
    mealRow:{
        flexDirection:'row',
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end'
    },
    mealHeader:{
        height:'90%'
    },
    mealDetail:{
        paddingHorizontal:10,
        justifyContent:'space-between',
    },
    titleContainer:{ 
        backgroundColor:(0,0,0,5),
        paddingVertical:5,
        paddingHorizontal:12,
    },
    title:{
        fontSize:20,
        color:'white',
        textAlign:'center'
    }
})
