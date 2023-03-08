//contains all of the stlying for the drawer

import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Caption, Paragraph, Drawer, Text } from 'react-native-paper';
//import * as Animatable from 'react-native-animatable';
import { styles } from '../styles';

import { getUser } from '../src/graphql/queries'
import { API, graphqlOperation, Auth } from "aws-amplify";

import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import uuid from 'react-native-uuid';

import { AppContext } from '../AppContext';

export function DrawerContent({navigation} : any) {

    const [user, setUser] = useState();

    const { userID } = useContext(AppContext);
    const { setUserID } = useContext(AppContext);

    const [CurrentCard, setCurrentCard] = useState(1);

    const [gamesExpanded, setGamesExpanded] = useState(false);

    const [scorecardExpanded, setScorecardExpanded] = useState(false);



    return(
        <View style={{ flex:1 }}>
            <DrawerContentScrollView>
                <View style={{marginTop: 30}}>
                    {/* <View style={styles.userInfoSection} >
                            <View style={{ marginTop: 45 }}>
                                <View style={{alignSelf: 'center', height: 104, width: 104, backgroundColor: '#fff', borderRadius: 52, alignItems: 'center', justifyContent: 'center'}}>
                                    <Avatar.Image
                                        source={{ uri: user?.imageUri || 'https://hieumobile.com/wp-content/uploads/avatar-among-us-2.jpg'}}
                                        size={100}
                                    />
                                </View>
                                
                            <View style={{ alignSelf: 'center' }}>
                                <Text style={styles.title}>
                                    {!!user ? user?.name : 'Player One'}
                                </Text>
                            </View>
                            </View>
                    </View> */}
                    
                        

                    {/* <Drawer.Section style={istyles.drawerSection}> */}
                    <TouchableWithoutFeedback onPress={() => setScorecardExpanded(!scorecardExpanded)}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    {/* <MaterialCommunityIcons name='grid' color='#636363' size={22} /> */}
                                    <Text style={styles.itemtext}>
                                        My Shifts
                                    </Text>
                                </View>
                                {/* <Feather name={scorecardExpanded ? 'chevron-down' : 'chevron-right'} color='#636363' size={20} /> */}
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    {/* <Feather name='user' color='#636363' size={25} /> */}
                                    <Text style={styles.itemtext}>
                                       Trade Shift
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => setScorecardExpanded(!scorecardExpanded)}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    {/* <MaterialCommunityIcons name='grid' color='#636363' size={22} /> */}
                                    <Text style={styles.itemtext}>
                                        Groups
                                    </Text>
                                </View>
                                {/* <Feather name={scorecardExpanded ? 'chevron-down' : 'chevron-right'} color='#636363' size={20} /> */}
                            </View>
                        </TouchableWithoutFeedback>

                        <View style={{backgroundColor: 'lightgray', height: 1, marginVertical: 10}}/>

                        <TouchableWithoutFeedback onPress={() => navigation.navigate('CreateShift')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    {/* <MaterialCommunityIcons name='cards-playing-outline' color='#636363' size={25} /> */}
                                    <Text style={styles.itemtext}>
                                        Create Open Shift 
                                    </Text>
                                </View>
                                {/* <Feather name={gamesExpanded ? 'chevron-down' : 'chevron-right'} color='#636363' size={20} /> */}
                            </View>
                        </TouchableWithoutFeedback>
                

                        <TouchableWithoutFeedback onPress={() => setScorecardExpanded(!scorecardExpanded)}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    {/* <MaterialCommunityIcons name='grid' color='#636363' size={22} /> */}
                                    <Text style={styles.itemtext}>
                                        Create Announcement
                                    </Text>
                                </View>
                                {/* <Feather name={scorecardExpanded ? 'chevron-down' : 'chevron-right'} color='#636363' size={20} /> */}
                            </View>
                        </TouchableWithoutFeedback>
                

                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Help')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    {/* <Feather name='help-circle' color='#636363' size={22} /> */}
                                    <Text style={styles.itemtext}>
                                        Create Event
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                    {/* </Drawer.Section> */}
                </View>
            </DrawerContentScrollView>


            {/* <Drawer.Section style={styles.bottomDrawerSection}>
                {CurrentCard !== null ? (
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Feather
                                name='book'
                                color={color}
                                size={size}
                            />
                        )}
                            label='Current Game'
                            labelStyle={ styles.itemText}
                            onPress={() => navigation.navigate('Scorecard')}
                    />
                ) : null}
            </Drawer.Section> */}
        </View>
    )
}

const istyles = StyleSheet.create({
    box: {
        paddingVertical: 14, 
        paddingHorizontal: 20, 
        flexDirection: 'row', 
        alignItems: 'center'
    },
    expandedbox: {
        paddingVertical: 12, 
        paddingHorizontal: 20, 
        flexDirection: 'row', 
        alignItems: 'center',
        backgroundColor: '#ededed'
    },
    expandedtext: {
        marginLeft: 30,  
        fontSize: 16
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 10,
        //fontFamily: 'chalkboard-bold',
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        //marginBottom: 0,
        //borderTopColor: '#f4f4f4',
        //borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
