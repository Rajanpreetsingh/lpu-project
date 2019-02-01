import { createStackNavigator,createAppContainer } from 'react-navigation'

import MainScreen from './containers/MainScreen'
import SubScreen from './containers/SubScreen'

const AuthStack = createStackNavigator({
    MainScreen: MainScreen,
    SubScreen: SubScreen
},{
    initialRouteName: 'MainScreen',
    headerMode:'none',
    navigationOptions:{
        headerVisible:false
    }
}
)

const App = createAppContainer(AuthStack);

export default App;