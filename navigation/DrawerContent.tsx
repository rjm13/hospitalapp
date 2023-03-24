//contains all of the stlying for the drawer

import React, { useEffect, useState, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Caption, Paragraph, Drawer, Text } from 'react-native-paper';
//import * as Animatable from 'react-native-animatable';
//import { styles } from '../styles';
import useStyles from '../styles';
import { useDrawerStatus } from '@react-navigation/drawer'

import { getUser, getDepartment } from '../src/graphql/queries'
import { API, graphqlOperation, Auth } from "aws-amplify";

import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import uuid from 'react-native-uuid';

import { AppContext } from '../AppContext';

export function DrawerContent({navigation} : any) {

    const { theme } = useContext(AppContext);

    const styles = useStyles(theme);

    const status = useDrawerStatus()

    const [scorecardExpanded, setScorecardExpanded] = useState(false);

    const [didUpdate, setDidUpdate] = useState(false)

    const [hasPending, setHasPending] = useState(false)

    const [isManager, setIsManager] = useState(false)

    useEffect(() => {
        const managerCheck = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();

            if (userInfo.attributes.profile === 'manager') {
                setIsManager(true)
            }
        }
        managerCheck()
    }, [])

    useEffect(() => {
        const countShifts = async () => {

            let countarr = []

            if (status === "open") {
                const userInfo = await Auth.currentAuthenticatedUser();
                const response = await API.graphql(graphqlOperation(
                    getUser, {id: userInfo.attributes.sub}
                ))
                const resp = await API.graphql(graphqlOperation(
                    getDepartment, {id: response.data.getUser.departmentID}
                ))

                for (let i = 0; i < resp.data.getDepartment.shifts.items.length; i++) {
                    if (resp.data.getDepartment.shifts.items[i].status === 'pending') {
                        countarr.push(resp.data.getDepartment.shifts.items[i])
                    }
                }
                
                if (countarr.length > 0) {
                setHasPending(true)
                } else {setHasPending(false)}
            }
        }
        countShifts();
    }, [status])

    return(
        <View style={{ flex:1 , backgroundColor: theme === true ? '#000' : '#fff'}}>
            <DrawerContentScrollView>
                <View style={{marginTop: 30}}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('MyShifts')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    <Text style={styles.itemtext}>
                                        My Shifts
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('CreateTrade')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    <Text style={[styles.itemtext]}>
                                       Trade Shift
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => navigation.navigate('PostedShifts')}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    <Text style={[styles.itemtext]}>
                                        Posted Shifts
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback onPress={() => navigation.navigate('TradeApprovalRequests', {trigger: Math.random()})}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                <View style={istyles.box}>
                                    <Text style={[styles.itemtext]}>
                                        Shift Responses
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                        {isManager === true ? (
                            <View>

                            <View style={{backgroundColor: 'lightgray', height: 1, marginVertical: 10}}/>

                            <TouchableWithoutFeedback onPress={() => navigation.navigate('CreateShift')}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                    <View style={istyles.box}>
                                        <Text style={styles.itemtext}>
                                            Create Open Shift 
                                        </Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => navigation.navigate('ApprovalRequests', {trigger: Math.random()})}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                    <View style={istyles.box}>
                                        <Text style={styles.itemtext}>
                                            Approval Requests
                                        </Text>
                                    </View>
                                    {hasPending === true ? (
                                    <FontAwesome5 name='exclamation-circle' color='tomato' size={20} />
                                    ) : null}
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => navigation.navigate('FilledShifts', {trigger: Math.random()})}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                    <View style={istyles.box}>
                                        <Text style={styles.itemtext}>
                                            Filled Shifts
                                        </Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                    

                            <TouchableWithoutFeedback onPress={() => navigation.navigate('CreateAnnouncement')}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 20}}>
                                    <View style={istyles.box}>
                                        <Text style={[styles.itemtext]}>
                                            Create Announcement
                                        </Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>

                            </View>  
                        ) : null}
                        
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
