import React, {useContext, useEffect, useState} from 'react';
import { View, 
        StyleSheet, 
        Text, 
        Dimensions, 
        Switch, 
        ScrollView, 
        TouchableWithoutFeedback, 
        TouchableOpacity, 
        ActivityIndicator
    } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {StatusBar} from 'expo-status-bar';
import {AppContext} from '../AppContext';

import useStyles from '../styles';

import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import { updateUser } from '../src/graphql/mutations';
import { getUser } from '../src/graphql/queries';

import { Modal, Portal, Provider } from 'react-native-paper';

const Settings = ({navigation} : any) => {

    const { setTheme, setMilitaryTime } = useContext(AppContext);
    const { theme, militaryTime, userID } = useContext(AppContext);

    const styles = useStyles(theme);

    const [userInfo, setUserInfo] = useState()

//theme switch
    const [isSwitchOn, setIsSwitchOn] = useState<boolean>(theme);
    const [is24SwitchOn, setIs24SwitchOn] = useState<boolean>(militaryTime);


    const onToggleSwitch = async () => {

        if (theme === true) {
            setIsSwitchOn(false);
            setTheme(false);
            await API.graphql(
                graphqlOperation(
                    updateUser, {input: {
                        id: userID,
                        Setting1: false,
            }}))
        } else {
            setIsSwitchOn(true);
            setTheme(true);
            await API.graphql(
                graphqlOperation(
                    updateUser, {input: {
                        id: userID,
                        Setting1: true,
            }}))
        }
    }  

    const onToggle24Switch = async () => {

        if (militaryTime === true) {
            setIs24SwitchOn(false);
            setMilitaryTime(false);
            await API.graphql(
                graphqlOperation(
                    updateUser, {input: {
                        id: userID,
                        Setting4: false,
            }}))
        } else {
            setIs24SwitchOn(true);
            setMilitaryTime(true);
            await API.graphql(
                graphqlOperation(
                    updateUser, {input: {
                        id: userID,
                        Setting4: true,
            }}))
        }
    }  

    const [quals, setQuals] = useState([{}]);

    //get the user info
    useEffect(() => {
        const fetchUser = async () => {
            let qualsarr = [];
            const response = await API.graphql(graphqlOperation(
                getUser, {id: userID}
            ))
            setUserInfo(response.data.getUser);
            
            for (let i =0; i < response.data.getUser.quals.items.length; i++) {
                qualsarr.push(response.data.getUser.quals.items[i].qual)
            }
            setQuals(qualsarr);
        }
        fetchUser();
    }, [])

    const [signingout, setSigningout] = useState(false)

    //sign out function
    async function SignOut() {
        setSigningout(true);
        try {
            await Auth.signOut()
            .then(() => navigation.replace('SignIn'))
            setSigningout(false)
        } catch (error) {
            console.log('error signing out: ', error);
            alert("error signing out")
            setSigningout(false)
        }
    }

    const [visible, setVisible] = useState(false);
    const showModal = () => {setVisible(true);}
    const hideModal = () => setVisible(false);

    const containerStyle = {
        backgroundColor: theme === true ? '#000' : '#fff', 
        borderRadius: 15,
        paddingVertical: 40
    };

    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <View style={{ alignItems: 'center'}}>
                        <Text style={[styles.settingsitem, {paddingVertical: 16}]}>
                            Are you sure you want to log out?
                        </Text>
                        <View style={{}}>
                            {signingout ? (
                                <ActivityIndicator size="small" color="maroon"/>
                            ) : (
                               <TouchableOpacity onPress={SignOut}>
                                    <View style={styles.buttonlayout} >
                                        <Text style={styles.buttontext}>Log Out</Text> 
                                    </View>
                                </TouchableOpacity> 
                            )}
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
                            color={theme === true ? '#fff' : '#000'}
                            size={20}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={[styles.title, { marginHorizontal: 40, marginVertical: 20, }]}>
                    Settings
                </Text>
                <View style={{width: 50}}/>
            </View>

            <View style={{ marginHorizontal: 20, marginVertical: 20}}>
                <Text style={styles.paragraph}>
                    App Settings
                </Text>
            </View>

            <View>
                <View style={styles.optionsitem}>
                    <View style={istyles.subblock}>
                        <Text style={styles.settingsitem}>
                            Dark Mode
                        </Text>
                    </View>
                    
                    <Switch
                        trackColor={{ false: 'gray', true: '#800000a5' }}
                        thumbColor={isSwitchOn === true ? 'maroon' : isSwitchOn === false ? "#474747" : "#474747"}
                        ios_backgroundColor="maroon"
                        onValueChange={onToggleSwitch}
                        value={isSwitchOn}
                    />
                </View>
            </View>

            <View>
                <View style={styles.optionsitem}>
                    <View style={istyles.subblock}>
                        <Text style={styles.settingsitem}>
                            24-hour Time
                        </Text>
                    </View>
                    
                    <Switch
                        trackColor={{ false: 'gray', true: '#800000a5' }}
                        thumbColor={is24SwitchOn === true ? 'maroon' : is24SwitchOn === false ? "#474747" : "#474747"}
                        ios_backgroundColor="maroon"
                        onValueChange={onToggle24Switch}
                        value={is24SwitchOn}
                    />
                </View>
            </View>

            <View style={{alignSelf: 'center', backgroundColor: 'black', height: 1, width: Dimensions.get('window').width - 80}}/>
            
            <View style={{ marginHorizontal: 20, marginVertical: 20}}>
                <Text style={styles.paragraph}>
                    My Information
                </Text>
            </View>

            <View >
                <View style={styles.optionsitem}>
                    <View style={[istyles.subblock, {width: '100%', flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <Text style={styles.settingsitem}>
                                Name
                            </Text>
                            <Text style={[styles.infotext, {textTransform: 'capitalize'}]}>
                                {userInfo?.firstName + ' ' + userInfo?.lastName}
                            </Text>
                    </View>
                </View>
            </View>

            <View >
                <View style={styles.optionsitem}>
                    <View style={[istyles.subblock, {width: '100%', flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <Text style={styles.settingsitem}>
                                System
                            </Text>
                            <Text style={styles.infotext}>
                                {userInfo?.system?.name}
                            </Text>
                    </View>
                </View>
            </View>

            <View >
                <View style={styles.optionsitem}>
                    <View style={[istyles.subblock, {width: '100%', flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <Text style={styles.settingsitem}>
                                Hospital
                            </Text>
                            <Text style={styles.infotext}>
                                {userInfo?.hosp?.name}
                            </Text>
                    </View>
                </View>
            </View>

            <View >
                <View style={styles.optionsitem}>
                    <View style={[istyles.subblock, {width: '100%', flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <Text style={styles.settingsitem}>
                                Department
                            </Text>
                            <Text style={styles.infotext}>
                                {userInfo?.department?.name}
                            </Text>
                    </View>
                </View>
            </View>

            <View >
                <View style={styles.optionsitem}>
                    <View style={[istyles.subblock, {width: '100%', flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <Text style={styles.settingsitem}>
                                Role
                            </Text>
                            <Text style={styles.infotext}>
                                {userInfo?.primaryRole?.title}
                            </Text>
                    </View>
                </View>
            </View>

            <View >
                <View style={styles.optionsitem}>
                    <View style={[istyles.subblock, {width: '100%', flexDirection: 'column', justifyContent: 'space-between'}]}>
                            <Text style={[styles.settingsitem, { marginBottom:10}]}>
                                Qualifications
                            </Text>
                            <ScrollView contentContainerStyle={{}} style={{ }}>
                                {quals.map(({abbreviation, title, id} : any, index : any) => {
                                
                                return (
                                    <Text key={id} style={[styles.infotext]}>
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

            <View >
                <View style={styles.optionsitem}>
                    <View style={istyles.subblock}>
                        <TouchableWithoutFeedback onPress={showModal}>
                            <Text style={styles.settingsitem}>
                                Sign Out
                            </Text>
                        </TouchableWithoutFeedback>
                        
                    </View>
                </View>
            </View>
            <StatusBar style={theme === true ? 'light' : "dark"} backgroundColor='transparent'/>
        </ScrollView>
        </View>
        </Provider>
    );
}

const istyles = StyleSheet.create({

    subblock: {
        width: '75%',
    },

});

export default Settings;