import { FontAwesome, Octicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useEffect, useState, useContext} from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import {View, Image, TouchableWithoutFeedback} from 'react-native';

import { DrawerContent } from './DrawerContent';
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
import MyShifts from '../screens/MyShifts'
import ApprovalRequests from '../screens/ApprovalRequests'
import ShiftApproval from '../screens/ShiftApproval'
import FilledShifts from '../screens/FilledShifts'
import EditShift from '../screens/EditShift'
import ViewMessage from '../screens/ViewMessage'
import CreateAnnouncement from '../screens/CreateAnnouncement'
import Announcements from '../screens/Announcements'
import CreateTrade from '../screens/CreateTrade'
import PostedShifts from '../screens/PostedShifts'
import TradeModalScreen from '../screens/TradeModalScreen'
import TradeApprovalRequests from '../screens/TradeApprovalRequests'
import TradeShiftApproval from '../screens/TradeShiftApproval'
import ManagerTradeShiftApproval from '../screens/ManagerTradeShiftApproval'
import Training from '../screens/Training'


import { AppContext } from '../AppContext';

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

  const [hasMessages, setHasMessages] = useState(false)

  const { theme } = useContext(AppContext);

  useEffect(() => {
    setHasMessages(false)
  }, [])

  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerStyle: {
          backgroundColor: theme === true ? '#000' : 'maroon',
        },
        title: '',
        headerTintColor: '#fff',
        header: () =>
        (
          <View style={{ height: 60, backgroundColor: theme === true ? '#000' : 'maroon', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableWithoutFeedback onPress={() => { navigation.toggleDrawer()}} style={{}}>
                <Image 
                  source={require('../assets/images/IconWhite.png')}
                  style={{height: 30, width: 32, marginTop: 0, marginLeft: 20, }}
              />
              </TouchableWithoutFeedback>
              
              {/* <FontAwesome 
                  name='ambulance'
                  size={20}
                  color='#fff'
                  backgroundColor='#155843'
                  style={{ paddingHorizontal: 20 }}
                  onPress={() => { navigation.toggleDrawer() }}
              /> */}
            </View>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <FontAwesome
                  name='calendar'
                  size={20}
                  color={'gray'}
                  backgroundColor='#155843'
                  style={{ paddingHorizontal: 12 }}
                  onPress={() => { alert('Calendar not set up yet') }}
              />
              <FontAwesome 
                  name='envelope-o'
                  size={21}
                  color={hasMessages === true ? 'gold' : '#fff'}
                  backgroundColor='#155843'
                  style={{ paddingHorizontal: 12 }}
                  onPress={() => { navigation.navigate('Inbox')}}
              />
              <Octicons 
                  name='gear'
                  size={20}
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
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
      <Stack.Screen name="ConfirmAccount" component={ConfirmAccount} options={{ headerShown: false }}/>
      <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} options={{ headerShown: false }}/>
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }}/>
      <Stack.Screen name="Redirect" component={Redirect} options={{ headerShown: false }}/>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }}/>
      <Stack.Screen name="SelectDept" component={SelectDept}options={{ headerShown: false }} />
      <Stack.Screen name="SelectHospital" component={SelectHospital} options={{ headerShown: false }}/>
      <Stack.Screen name="SelectQuals" component={SelectQuals} options={{ headerShown: false }}/>
      <Stack.Screen name="SelectRole" component={SelectRole} options={{ headerShown: false }}/>
      <Stack.Screen name="ConfirmSetUp" component={ConfirmSetUp} options={{ headerShown: false }}/>
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
      <Stack.Screen name="Inbox" component={Inbox} options={{ headerShown: false }}/>
      <Stack.Screen name="ViewMessage" component={ViewMessage} options={{ headerShown: false }} />
      <Stack.Screen name="CreateShift" component={CreateShift} options={{ headerShown: false }}/>
      <Stack.Screen name="CreateTrade" component={CreateTrade} options={{ headerShown: false }}/>
      <Stack.Screen name="MyShifts" component={MyShifts} options={{ headerShown: false }}/>
      <Stack.Screen name="ApprovalRequests" component={ApprovalRequests} options={{ headerShown: false }}/>
      <Stack.Screen name="FilledShifts" component={FilledShifts} options={{ headerShown: false }}/>
      <Stack.Screen name="PostedShifts" component={PostedShifts} options={{ headerShown: false }}/>
      <Stack.Screen name="CreateAnnouncement" component={CreateAnnouncement} options={{ headerShown: false }}/>
      <Stack.Screen name="TradeModalScreen" component={TradeModalScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="TradeApprovalRequests" component={TradeApprovalRequests} options={{ headerShown: false }}/>
      <Stack.Screen name="TradeShiftApproval" component={TradeShiftApproval} options={{ headerShown: false }}/>
      <Stack.Screen name="ManagerTradeShiftApproval" component={ManagerTradeShiftApproval} options={{ headerShown: false }}/>
      <Stack.Screen name="Training" component={Training} options={{ headerShown: false }}/>
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ShiftApproval" component={ShiftApproval} options={{ headerShown: false }} />
        <Stack.Screen name="EditShift" component={EditShift} options={{ headerShown: false }} />
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

  const { theme } = useContext(AppContext);

  return (
    <TopTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: '#fff',
        tabBarLabelStyle: { fontSize: 14, fontWeight: '600' },
        tabBarStyle: { backgroundColor: theme === true ? '#000' : 'maroon' },
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
        component={Announcements}
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
