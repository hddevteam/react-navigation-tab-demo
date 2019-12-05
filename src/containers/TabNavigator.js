import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomePicturePage from '../pages/HomePicturePage';
import DownloadPage from '../pages/DownloadPage';
import RemoteControlPage from '../pages/RemoteControlPage';
import DevicesPage from '../pages/DevicesPage';
import SmartScale from '../entity/SmartScale';
import homeIcon from '../resources/labelIcon/photo.png'


export const TabNavigator = createBottomTabNavigator({
    Home: HomePicturePage,
    Download: DownloadPage,
    RemoteControl: RemoteControlPage,
    Devices: DevicesPage
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                if (routeName === 'Home') {
                    return (
                        <Image
                            source={require('../resources/labelIcon/photo.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                                borderRadius: 40 / 2,
                            }}
                        />
                    );
                } else if (routeName === 'Devices') {
                    return (
                        <Image
                            source={require('../resources/labelIcon/photo.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                                borderRadius: 40 / 2,
                            }}
                        />
                    );
                }
            },
        }),
        tabBarOptions: {
            animationEnabled: true,
            upperCaseLabel: false,
            showIcon: true,
            swipeEnabled: false,
            inactiveTintColor: '#000000',
            activeTintColor: '#63B8FF',
            //标题样式
            labelStyle: {
                textAlign: 'center',
                fontSize: SmartScale.IndexTabNavigation_labelStyle_fontSize,
            },
            //图标样式
            iconStyle: {
                alignSelf: 'center',
                width: SmartScale.IndexTabNavigation_iconStyle_width,
                height: SmartScale.IndexTabNavigation_iconStyle_height,

            },
            //标签样式
            tabStyle: {
                flex: 1,
                alignItems: 'stretch',
                justifyContent: SmartScale.IndexTabNavigation_tab,
            },
            //标签栏样式
            style: {
                borderTopWidth: StyleSheet.hairlineWidth,
                borderTopColor: 'rgba(0, 0, 0, .2)',
                backgroundColor: '#f4f4f4', // Default background color in iOS 10
            }
        }
    }
);
