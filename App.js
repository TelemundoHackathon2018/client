import {createStackNavigator} from 'react-navigation';
import HelloWorld from './components/HelloWorld';

const App = createStackNavigator(
  {
    HelloWorld: {screen: HelloWorld}
  },
  {
    initialRouteName: 'HelloWorld',
    headerMode: 'none'
  }
);

export default App;