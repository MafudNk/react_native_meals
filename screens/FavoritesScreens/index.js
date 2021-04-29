import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FavoritesScreens = () => {
    return (
        <View style={styles.page}>
            <Text>Favorite Screens</Text>
        </View>
    )
}

export default FavoritesScreens

const styles = StyleSheet.create({
    page:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
