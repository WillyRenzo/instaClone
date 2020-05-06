import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image } from 'react-native';
import React from 'react';

import logo from './assets/logo.png';

import Feed from './pages/Feed';
import New from './pages/New';

export default createAppContainer(
    createStackNavigator({
        Feed,
        New,
    }, {
        defaultNavigationOptions:{
            headerTitle: () => <Image style={{ marginHorizontal: 125, marginTop: 15 }}source={logo} />,
            headerBackTitle: null,
            headerTintColor: '#000',
        },
        mode: 'modal'
    })
);