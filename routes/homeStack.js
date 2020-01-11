import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header'
import React from 'react'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='My Zone Home' navigation={navigation} />
            }
        },
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details from options',
            // headerStyle: { backgroundColor: 'yellow' }
        }
    },
};


const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: 'aqua',
        headerStyle: { backgroundColor: 'blue', height: 80 }
    }
});
export default HomeStack