import React, {useContext, useEffect, useState} from 'react';
import { View, StyleSheet, Text, Dimensions, Switch, ScrollView, TouchableWithoutFeedback, TouchableOpacity, ActivityIndicator } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//import { Switch } from 'react-native-paper';
//import ToggleSwitch from 'toggle-switch-react-native'

import {AppContext} from '../AppContext';

import Colors from '../constants/Colors'

import {styles} from '../styles';

import { useRoute } from '@react-navigation/native';

import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import { updateUser } from '../src/graphql/mutations';
import { getUser } from '../src/graphql/queries';

import { StatusBar } from 'expo-status-bar';

import { Modal, Portal, Provider } from 'react-native-paper';
import uuid from 'react-native-uuid';

const Settings = ({navigation} : any) => {

    const { setTheme } = useContext(AppContext);
    const { theme } = useContext(AppContext);

    const [userInfo, setUserInfo] = useState()

//theme switch
    const [isSwitchOn, setIsSwitchOn] = useState<boolean>(theme);

    const onToggleSwitch = () => {
        if (theme === true) {
            setIsSwitchOn(false); setTheme(false);
        } else if (theme === false) {
            setIsSwitchOn(true); setTheme(true);
        }
    }  

    const [switchColor, setSwitchColor] = useState('#363636')
    const [trackColor, setTrackColor] = useState('gray')

    useEffect(() => {
        if (theme === true) {
            setSwitchColor('maroon');
            setTrackColor('gray')
        }
    }, [theme]);

    const [quals, setQuals] = useState([{}]);

    //get the user info
    useEffect(() => {
        const fetchUser = async () => {
            let qualsarr = [];
            const userAtts = await Auth.currentAuthenticatedUser();
            const response = await API.graphql(graphqlOperation(
                getUser, {id: userAtts.attributes.sub}
            ))
            console.log(response.data.getUser)
            setUserInfo(response.data.getUser);
            
            for (let i =0; i < response.data.getUser.quals.items.length; i++) {
                qualsarr.push(response.data.getUser.quals.items[i].qual)
            }
            setQuals(qualsarr);

        }
        fetchUser();
    }, [])

    //sign out function
    async function SignOut() {
        try {
            await Auth.signOut()
            .then(() => navigation.replace('SignIn'))
        } catch (error) {
            console.log('error signing out: ', error);
            alert("error signing out")
        }
    }

    const [visible, setVisible] = useState(false);
    const showModal = () => {
        setVisible(true);
    }
    const hideModal = () => setVisible(false);

    const containerStyle = {
        backgroundColor: '#363636', 
        borderRadius: 15,
        paddingVertical: 40
    };

    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <View style={{ alignItems: 'center'}}>
                        <Text style={{
                            fontSize: 16,
                            paddingVertical: 16,
                            color: '#fff'
                        }}>
                            Are you sure you want to log out?
                        </Text>
                        
                        <View style={{}}>
                            <TouchableOpacity onPress={SignOut}>
                                <View style={styles.buttonlayout} >
                                    {/* {isUploading ? (
                                        <ActivityIndicator size="small" color="#00ffff"/>
                                    ) :  */}
                                        <Text style={styles.buttontext}>Log Out</Text> 
                                    {/* }  */}
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </Portal>

        <View style={styles.container}>
        <ScrollView>
            <View style={{width:Dimensions.get('window').width, justifyContent: 'space-between', flexDirection: 'row', marginTop: 30, marginLeft: 20, alignItems: 'center'}}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View style={{padding: 30, margin:-30}}>
                        <FontAwesome5 
                            name='chevron-left'
                            color='#000'
                            size={20}
                        />
                    </View>
                    </TouchableWithoutFeedback>
                <Text style={[styles.title, { marginHorizontal: 40, marginVertical: 20,}]}>
                    Settings
                </Text>
                <View />
            </View>

            <View style={{ marginHorizontal: 20, marginVertical: 20}}>
                <Text style={styles.paragraph}>
                    App Settings
                </Text>
            </View>

            <View style={istyles.optionslist}>
                <View style={istyles.optionsitem}>
                    <View style={istyles.subblock}>
                        <Text style={{fontSize: 16, color: '#000'}}>
                            Dark Mode
                        </Text>
                    </View>
                    
                    <Switch
                        trackColor={{ false: trackColor, true: trackColor }}
                        thumbColor={isSwitchOn ? switchColor : "#474747"}
                        ios_backgroundColor="maroon"
                        onValueChange={onToggleSwitch}
                        value={isSwitchOn}
                    />
                </View>
            </View>

            <View style={{alignSelf: 'center', backgroundColor: 'black', height: 1, width: Dimensions.get('window').width - 80}}/>
            
            <View style={{ marginHorizontal: 20, marginVertical: 20}}>
                <Text style={styles.paragraph}>
                    My Information
                </Text>
            </View>

            <View style={istyles.optionslist}>
                <View style={istyles.optionsitem}>
                    <View style={[istyles.subblock, {width: '100%', flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <Text style={{fontSize: 16, color: '#000', }}>
                                System
                            </Text>
                            <Text style={styles.infotext}>
                                {userInfo?.system?.name}
                            </Text>
                    </View>
                </View>
            </View>

            <View style={istyles.optionslist}>
                <View style={istyles.optionsitem}>
                    <View style={[istyles.subblock, {width: '100%', flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <Text style={{fontSize: 16, color: '#000', }}>
                                Hospital
                            </Text>
                            <Text style={styles.infotext}>
                                {userInfo?.hospital?.items[0].hospital.name}
                            </Text>
                    </View>
                </View>
            </View>

            <View style={istyles.optionslist}>
                <View style={istyles.optionsitem}>
                    <View style={[istyles.subblock, {width: '100%', flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <Text style={{fontSize: 16, color: '#000', }}>
                                Department
                            </Text>
                            <Text style={styles.infotext}>
                                {userInfo?.department?.name}
                            </Text>
                    </View>
                </View>
            </View>

            <View style={istyles.optionslist}>
                <View style={istyles.optionsitem}>
                    <View style={[istyles.subblock, {width: '100%', flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <Text style={{fontSize: 16, color: '#000', }}>
                                Role
                            </Text>
                            <Text style={styles.infotext}>
                                {userInfo?.primaryRole?.title}
                            </Text>
                    </View>
                </View>
            </View>

            <View style={istyles.optionslist}>
                <View style={istyles.optionsitem}>
                    <View style={[istyles.subblock, {width: '100%', flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <Text style={{fontSize: 16, color: '#000', marginRight: 40 }}>
                                Qualifications
                            </Text>
                            <ScrollView contentContainerStyle={{}} style={{width: 180,  }}>
                                {quals.map(({abbreviation, title, id} : any, index : any) => {
                                
                                return (
                                    <Text style={[styles.infotext, {flexWrap: 'wrap'}]}>
                                        {title}
                                    </Text>
                                )})}
                            </ScrollView>
                            
                            
                    </View>
                </View>
            </View>

            <View style={{alignSelf: 'center', backgroundColor: 'black', height: 1, width: Dimensions.get('window').width - 80}}/>
            
            <View style={{ marginHorizontal: 20, marginVertical: 20}}>
                <Text style={styles.paragraph}>
                    Options
                </Text>
            </View>

            <View style={istyles.optionslist}>
                <View style={istyles.optionsitem}>
                    <View style={istyles.subblock}>
                        <TouchableWithoutFeedback onPress={showModal}>
                            <Text style={{fontSize: 16, color: '#000', }}>
                                Sign Out
                            </Text>
                        </TouchableWithoutFeedback>
                        
                    </View>
                </View>
            </View>
        </ScrollView>
        </View>
        </Provider>
    );
}

const istyles = StyleSheet.create({
    container: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      backgroundColor: '#363636a5'
    },
    headertop: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginHorizontal: 40,
        marginVertical: 20,
    },
    header: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subblock: {
        width: '75%',
    },
    optionslist: {

    },
    optionsitem: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginLeft: 40,
        marginRight: 40,
        marginBottom: 30,
    },
    paragraph: {
        fontSize: 16,
        color: '#ffffff'
    },
    subparagraph: {
        fontSize: 12,
        color: '#ffffffa5'
    },
});

export default Settings;