import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from '../screens/home';

/* const Tabs = TabNavigator({

}); */

export default StackNavigator({
    Home: { screen: Home },
    /* Meat: { screen: Tabs } */
});