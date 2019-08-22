import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import GamesScreen from '../container/GameScreenContainer';
import BetSlipsScreen
  from '../features/tabNavigation/BetSlips/BetSlipsScreen';
import GamesListScreen
  from '../features/tabNavigation/GamesScreen/GamesRightMenu/GamesListScreen';
import NewsScreen
  from '../features/tabNavigation/News/NewsScreen';
import NotificationsScreen
  from '../features/tabNavigation/Notifications/NotificationsScreen';
import Constants from '../utility/app-constant';
import Colors from '../utility/colors-constant';
import STRING_CONSTANTS from '../utility/string-constant';

const GameStack = createStackNavigator(
  {
    Game: GamesScreen,
    GameList: GamesListScreen,
  }, {
    mode: Constants.nav_Mode,
  },
);

GameStack.navigationOptions = {
  tabBarOptions: {
    style: {
      backgroundColor: Colors.topNavigationColor,
    },
    activeTintColor: Colors.tintColor,
  },
  tabBarLabel: STRING_CONSTANTS.GAMES,
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === Constants.platform_iOS
          ? Constants.tabIcon_ios_home
          : Constants.tabIcon_Android_home
      }
    />
  ),
};

const NewsStack = createStackNavigator({
  News: NewsScreen,
});

NewsStack.navigationOptions = {
  tabBarOptions: {
    style: {
      backgroundColor: Colors.topNavigationColor,
    },
    activeTintColor: Colors.tintColor,
  },
  tabBarLabel: STRING_CONSTANTS.NEWS,
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === Constants.platform_iOS
          ? Constants.tabIcon_ios_more
          : Constants.tabIcon_android_more
      }
    />
  ),
};

const NotificationStack = createStackNavigator({
  Notification: NotificationsScreen,
});

NotificationStack.navigationOptions = {
  tabBarOptions: {
    style: {
      backgroundColor: Colors.topNavigationColor,
    },
    activeTintColor: Colors.tintColor,
  },
  tabBarLabel: STRING_CONSTANTS.NOTIFICATIONS,
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === Constants.platform_iOS
          ? Constants.tabIcon_ios_Notification
          : Constants.tabIcon_android_Notification
      }
    />
  )
};

const BetSlipsStack = createStackNavigator({
  BetSlips: BetSlipsScreen,
});

BetSlipsStack.navigationOptions = {
  tabBarOptions: {
    style: {
      backgroundColor: Colors.topNavigationColor,
    },
    activeTintColor: Colors.tintColor,
  },
  tabBarLabel: STRING_CONSTANTS.BETSLIPS,
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === Constants.platform_iOS
          ? Constants.tabIcon_ios_more
          : Constants.tabIcon_android_more
      }
    />
  ),
};

export default createBottomTabNavigator({
  GameStack,
  NewsStack,
  NotificationStack,
  BetSlipsStack,
});
