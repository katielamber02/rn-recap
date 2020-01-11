import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'My Zone from options',
            // headerStyle: { backgroundColor: 'blue' }
        }
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
export default createAppContainer(HomeStack);