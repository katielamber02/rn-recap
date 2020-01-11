import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Header from '../shared/header';
import About from '../screens/about';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header title='My Zone About' navigation={navigation} />
                // headerTitle: () => <Header  />
            }
        },
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#eee', height: 70 },
    }
});

export default AboutStack;