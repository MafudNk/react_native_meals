import React from 'react'
import { Button, ColorPropType, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CategoryGridTile } from '../../components';

import { CATEGORIES } from '../../data/data-dummy';

const CategoriesScreens = (props) => {
    const renderGridItem = (itemData) => {
        return  <CategoryGridTile 
                    title={itemData.item.title} 
                    onSelect={()=> props.navigation.navigate({
                        routeName:'CategoriesMeals',
                        params:{
                            categoryId: itemData.item.id
                        }
                        })}
                    
                    color={itemData.item.color}
                    />
    }
    return (
        // <View style={styles.page}>
        //     <Text>Categories Screen</Text>
        //     <Button title="Go to Meal" onPress={() => {props.navigation.navigate('CategoriesMeals')}} />
        // </View>
        <FlatList data={CATEGORIES} keyExtractor={(item,index) => item.id} numColumns={2} renderItem={renderGridItem} />
    )
}

CategoriesScreens.navigationOptions = {
    headerTitle: 'Meal Categories'
}
export default CategoriesScreens

const styles = StyleSheet.create({
    page: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },

})
