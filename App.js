import {createStackNavigator} from 'react-navigation';
import ShowPage from './components/ShowPage';

const App = createStackNavigator(
  {
    ShowPage: {screen: ShowPage}
  },
  {
    initialRouteName: 'ShowPage',
    headerMode: 'none'
  }
);

export default App;