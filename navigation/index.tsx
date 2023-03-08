import { FontAwesome } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import {View} from 'react-native';

import { DrawerContent } from './DrawerContent';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import ConfirmAccount from '../screens/Auth/ConfirmAccount';
import ConfirmPassword from '../screens/Auth/ConfirmPassword';
import Redirect from '../screens/Auth/Redirect';
import SignIn from '../screens/Auth/SignIn';
import SignUp from '../screens/Auth/SignUp';
import Welcome from '../screens/Auth/Welcome';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import Settings from '../screens/Settings';
import Inbox from '../screens/Inbox';
import CreateShift from '../screens/CreateShift';
import SelectDept from '../screens/SetUp/SelectDept'
import SelectHospital from '../screens/SetUp/SelectHospital'
import SelectQuals from '../screens/SetUp/SelectQuals'
import SelectRole from '../screens/SetUp/SelectRole'
import ConfirmSetUp from '../screens/SetUp/ConfirmSetUp'

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

const Drawer = createDrawerNavigator ();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator
          drawerContent={props => <DrawerContent { ...props} />}
          screenOptions={{
            headerShown: false
          }}
          //drawerPosition='left'
          initialRouteName='RootNav'
      >
        <Drawer.Screen
          name='RootNav'
          component={RootNavigator}
      />
      </Drawer.Navigator>
      {/* <RootNavigator /> */}
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator({navigation} : any) {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerStyle: {
          backgroundColor: 'maroon',
        },
        title: '',
        headerTintColor: '#fff',
        header: () =>
        (
          <View style={{ height: 60, backgroundColor: 'maroon', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome 
                  name='ambulance'
                  size={20}
                  color='#fff'
                  backgroundColor='#155843'
                  style={{ paddingHorizontal: 20 }}
                  onPress={() => { navigation.toggleDrawer() }}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome
                  name='calendar'
                  size={18}
                  color={'#fff'}
                  backgroundColor='#155843'
                  style={{ paddingHorizontal: 12 }}
                  //onPress={() => { navigation.navigate('SearchScreen'); setSelectedId(0) }}
              />
              <FontAwesome 
                  name='envelope'
                  size={20}
                  color={'#fff'}
                  backgroundColor='#155843'
                  style={{ paddingHorizontal: 12 }}
                  onPress={() => { navigation.navigate('Inbox')}}
              />
              <FontAwesome 
                  name='gear'
                  size={22}
                  color={'#fff'}
                  backgroundColor='#155843'
                  style={{ paddingHorizontal: 12, marginRight: 10 }}
                  onPress={() => { navigation.navigate('Settings')}}
              />           
        </View>
          </View>
        ), 
      }} 
      initialRouteName="Redirect"
    >
      <Stack.Screen name="Root" component={TopTabNavigator} options={{  }} />
      <Stack.Screen name="SignIn" component={SignIn}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="ConfirmAccount" component={ConfirmAccount}/>
      <Stack.Screen name="ConfirmPassword" component={ConfirmPassword}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
      <Stack.Screen name="Redirect" component={Redirect} options={{ headerShown: false }}/>
      <Stack.Screen name="Welcome" component={Welcome}/>
      <Stack.Screen name="SelectDept" component={SelectDept}/>
      <Stack.Screen name="SelectHospital" component={SelectHospital}/>
      <Stack.Screen name="SelectQuals" component={SelectQuals}/>
      <Stack.Screen name="SelectRole" component={SelectRole}/>
      <Stack.Screen name="ConfirmSetUp" component={ConfirmSetUp}/>
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
      <Stack.Screen name="Inbox" component={Inbox} options={{ headerShown: false }}/>
      <Stack.Screen name="CreateShift" component={CreateShift} options={{ headerShown: false }}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const TopTab = createMaterialTopTabNavigator<RootTabParamList>();

function TopTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <TopTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarLabelStyle: { fontSize: 14, fontWeight: '600' },
        tabBarStyle: { backgroundColor: 'maroon' },
        tabBarContentContainerStyle: {alignItems: 'flex-end'},
        tabBarIndicatorStyle: {backgroundColor: 'white'},
        tabBarAndroidRipple: { borderless: false },
        tabBarPressColor: 'transparent'
        
      }}>
      <TopTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'shifts',
          //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate('Settings')}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}>
          //     <FontAwesome
          //       name="info-circle"
          //       size={25}
          //       color={Colors[colorScheme].text}
          //       style={{ marginRight: 15 }}
          //     />
          //   </Pressable>
          // ),
        })}
      />
      <TopTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'trade',
          //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <TopTab.Screen
        name="TabThree"
        component={TabTwoScreen}
        options={{
          title: 'talk',
          //tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </TopTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
