import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../../data/data-dummy';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import { CustomHeaderButton } from '../../components';

const MealDetailScreens = (props) => {
    const mealId = props.navigation.getParam('mealId');
    
    const selectedMeal = MEALS.find(meal => meal.id === mealId) 

    return (
        <View>
            <Text>Detail</Text>
        </View>
    )
}

MealDetailScreens.navigationOptions = navigationData => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId) 

    return{
        headerTitle : selectedMeal.title,
        headerRight : () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
            <Item title="Favorite" iconName="ios-star" onPress={() => {console.log('Tes')}} />
            <Item title="Favorite" iconName="ios-star-outline" onPress={() => {console.log('Tes')}} />
        </HeaderButtons>
    }

}

export default MealDetailScreens

const styles = StyleSheet.create({})
