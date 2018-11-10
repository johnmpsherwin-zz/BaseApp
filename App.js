import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Discover from './components/Discover';
import Detail from './components/Detail';
import Friends from './components/Friends';
import Profile from './components/Profile';

const DiscoverNavigationStack = new createStackNavigator(
  {
    Discover: Discover,
    Detail: Detail
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#FFF"
      },
      headerTitleStyle: {
        fontFamily: "Avenir",
            color: "#232445"
      }
    }
  }
)

const FriendsNavigationStack = new createStackNavigator(
  {
    Friends: Friends
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#FFF"
      },
      headerTitleStyle: {
        fontFamily: "Avenir",
            color: "#232445"
      }
    }
  }
)

const ProfileNavigationStack = new createStackNavigator(
  {
    Profile: Profile
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#FFF"
      },
      headerTitleStyle: {
        fontFamily: "Avenir",
            color: "#232445"
      }
    }
  }
)

const TabBar = new createBottomTabNavigator(
  {
    Discover: {
      screen: DiscoverNavigationStack,
    },
    Friends: {
      screen: FriendsNavigationStack
    },
    Profile: {
      screen: ProfileNavigationStack,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Discover') {
          iconName = "compass";
        } else if (routeName === 'Friends') {
          iconName = "users";
        } else if (routeName === 'Profile') {
          iconName = "headphones";
        }
        return <Icon name={iconName} size={horizontal ? 20 : 22} color={tintColor} style={{marginTop: 3}} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: "#3545E2",
      inactiveTintColor: "#232445",
      labelStyle: {
        fontFamily: "Avenir"
      }
    }
  }
);

export default class App extends Component {
  render() {
    return (
      <TabBar />
    );
  }
}

