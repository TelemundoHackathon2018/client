import {createStackNavigator} from 'react-navigation';
import ShowPage from './components/ShowPage';
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';

const App = createStackNavigator(
  {
    ShowPage: {screen: ShowPage},
    LandingPage: {screen: LandingPage},
    ProfilePage: {screen: ProfilePage}
  },
  {
    initialRouteName: 'LandingPage',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default App;