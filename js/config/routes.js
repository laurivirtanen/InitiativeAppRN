import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from '../screens/home';
import LoadingScreen from '../screens/loading';

/* const Tabs = TabNavigator({

}); */

export default StackNavigator({
    Home: { screen: LoadingScreen },
    Main: { screen: Home }
});