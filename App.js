import {createStackNavigator} from 'react-navigation';
import ShowPage from './components/ShowPage';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';

const App = createStackNavigator(
  {
    ShowPage: {screen: ShowPage},
    LandingPage: {screen: LandingPage},
    Profile: {screen: Profile}
  },
  {
    initialRouteName: 'LandingPage',
    headerMode: 'none'
  }
);

export default App;