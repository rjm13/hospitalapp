import React, {useState, useContext, useEffect} from 'react';
import {
    View, 
    Text, 
    Dimensions, 
    TouchableOpacity,
    TextInput,
    ActivityIndicator
} from 'react-native';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { updateUser } from '../../src/graphql/mutations';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import { AppContext } from '../../AppContext';
import {styles} from '../../styles'


const Welcome = ({navigation} : any) => {

    const [ready, setReady] = useState(false);

    const [processing, setProcessing] = useState(false);

    const SCREEN_HEIGHT = Dimensions.get('window').height

    //const { systemID } = useContext(AppContext);
    const [systemID, setSystemID] = useState('')

    //cognito attribute zoneinfo is the placeholder value for the hospital system id. It is set at signup 
    //with a post confirmation lambda trigger
    useEffect(() => {
        const changeUser = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            if (userInfo.attributes.zoneinfo) {
                setSystemID(userInfo.attributes.zoneinfo)
            }
        }
        changeUser();
    }, [])

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
    });

    const Proceed = async () => {

        if (ready === false) {
            alert("Please fill out the required fields.")
            return;
        }

        if (data.firstName !== '' && data.lastName !== '') {
            setProcessing(true);
            navigation.navigate('SelectHospital', {systemID: systemID})

            const userInfo = await Auth.currentAuthenticatedUser();
            const changeUser = await API.graphql(
                graphqlOperation(
                updateUser, {input :{
                    id: userInfo.attributes.sub,
                    firstName: data.firstName.toLowerCase(),
                    lastName:  data.lastName.toLowerCase()
                }})
            )

            console.log(changeUser)
            
            // if (changeUser) {
            //     navigation.navigate('SelectHospital', {systemID: systemID})
            // }
            setProcessing(false);
        } 
    }

    useEffect(() => {
        if (data.firstName.length > 1 && data.lastName.length > 1) {
            setReady(true)
        }
    }, [data])
    

    const handleNameChange = (val : any) => {
        setData({
            ... data,
            firstName: val
        });
    }

    const handleLastNameChange = (val : any) => {
        setData({
            ... data,
            lastName: val
        });
    }
    
    return (
        <View style={[styles.container, {justifyContent: 'space-between', height: SCREEN_HEIGHT}]}>
            <View style={{marginTop: 100, alignItems: 'center'}}>
                <View style={{alignItems: 'center'}}>
                    <Text style={[styles.title, {fontSize: 26}]}>
                        Welcome to Medall
                    </Text>
                    <Text style={[styles.subtext, { fontWeight: '300'}]}>
                        Communication for medical staff
                    </Text>
                    
                    <Text style={[styles.paragraph, {textAlign: 'center', marginTop: 20, marginHorizontal: 20}]}>
                        To get started, we need some information to connect you with your people:
                    </Text>
                </View>
            </View> 

            <View>
                <View style={{}}>
                    <Text style={[styles.title, {marginHorizontal: 0, marginVertical: 10,}]}>
                        First name
                    </Text>
                    <View style={styles.inputfield}>
                        <TextInput 
                            placeholder='Enter first name'
                            placeholderTextColor='#ffffffa5'
                            style={styles.textInputTitle}
                            maxLength={30}
                            onChangeText={(val) => handleNameChange(val)}
                            autoCapitalize='none'
                        />
                    </View>
                </View>
                <View>
                    <Text style={[styles.title, {marginHorizontal: 0, marginVertical: 10,}]}>
                        Last name
                    </Text>
                    <View style={styles.inputfield}>
                        <TextInput 
                            placeholder='Enter last name'
                            placeholderTextColor='#ffffffa5'
                            style={styles.textInputTitle}
                            maxLength={30}
                            onChangeText={(val) => handleLastNameChange(val)}
                            autoCapitalize='none'
                            
                        />
                    </View>
                </View>    
            </View>
        <View style={{height: 140}}/>
{/* FOOTER */}
        <View style={{position: 'absolute', bottom: 20, flexDirection: 'row', width: Dimensions.get('window').width, justifyContent: 'space-between', paddingHorizontal: 40}}>
                <TouchableOpacity onPress={() =>  navigation.navigate('SelectHospital')}>
                    <View style={[{backgroundColor: 'maroon', width: 0, height: 0, alignItems: 'center', justifyContent: 'center', borderRadius: 25}]}>
                        <FontAwesome5 
                            name='chevron-left'
                            color='#fff'
                            size={24}
                            style={{
                                height: 0, width: 0
                            }}
                        />
                    </View>
                </TouchableOpacity>
                {processing ? (
                    <View style={[{backgroundColor: 'gray', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25}]}>
                        <ActivityIndicator size='small' color='#fff'/>
                    </View>
                ) : (
                    <TouchableOpacity onPress={Proceed}>
                        <View style={[{backgroundColor: 'maroon', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25}]}>
                            <FontAwesome5 
                                name='chevron-right'
                                color='#fff'
                                size={24}
                                style={{}}
                            />
                        </View>
                    </TouchableOpacity>
                )}
                
        </View>
        </View>
    )
}

export default Welcome;