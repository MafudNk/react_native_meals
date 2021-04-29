import React from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { MealItem } from '../../components';
import { CATEGORIES, MEALS } from '../../data/data-dummy';

const CategoryMealScreens = (props) => {
    const listMeals = itemData => {
        return (<MealItem 
                    title={itemData.item.title} 
                    onSelectMeal ={ () => {props.navigation.navigate({
                        routeName:'MealDetailScreens',
                        params:{
                            mealId : itemData.item.id
                        }
                    })}  }
                    image={itemData.item.imageUrl}
                    duration={itemData.item.duration}
                    complexity={itemData.item.complexity}
                    affordability={itemData.item.affordability}/>)
    }
 
    const catId = props.navigation.getParam('categoryId'); 
 
    // const selectedData = CATEGORIES.find(cat => cat.id === catId);
    const display = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >=0
    );
    return (
        <View style={styles.page}>
            <FlatList data={display} keyExtractor={(item, index) => item.id} renderItem={listMeals} style={{width:'100%'}} />
        </View>
    )
}

CategoryMealScreens.navigationOptions = navigationData => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    console.log(selectedCategory);
    return{
        headerTitle: selectedCategory.title,
        headerRight: () => <Text>FAV!</Text>
    }

}

export default CategoryMealScreens

const styles = StyleSheet.create({
    page:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
