import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import {CategoriesScreens, CategoryMealScreens, FavoritesScreens, FiltersScreens, MealDetailScreens} from '../screens';
import { createBottomTabNavigator } from "react-navigation-tabs";

const MealsNavigator = createStackNavigator({
    Categories : { 
        screen : CategoriesScreens,        
    },
    CategoriesMeals : {
        screen : CategoryMealScreens
    },
    // FavoritesScreens : FavoritesScreens,
    // FiltersScreens : FiltersScreens,
    MealDetailScreens : MealDetailScreens
},{
    defaultNavigationOptions:{
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? '#03a5fc' : ''
          },
        headerTintColor: Platform.OS === 'android' ? 'white' : '#03a5fc'
    }
})

const MealsTabNavigator = createBottomTabNavigator({
    Meals : MealsNavigator,
    Favorite : FavoritesScreens
},{
    tabBarOptions:{
         
    }
})

export default createAppContainer(MealsTabNavigator) ;