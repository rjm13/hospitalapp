import React, {useState} from 'react';
import {
    View, 
    Text, 
    Dimensions, 
    TouchableOpacity,
    TextInput
} from 'react-native';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { createMessage } from '../../src/graphql/mutations';
import {Modal, Provider, Portal} from 'react-native-paper';
import { AppContext } from '../../AppContext';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {styles} from '../../styles'


const Welcome = ({navigation} : any) => {

    const SCREEN_HEIGHT = Dimensions.get('window').height

    //upload modal
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

    //select multiple hospitals (many to many relationship)
    //select roles (many to many relationship)
    //select multiple quals (many to many relationship)

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        systemID: '',
        departmentID: '',
    })

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
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <View>

                </View>
                </Modal>
            </Portal>
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
                <TouchableOpacity onPress={() =>  navigation.navigate('SelectHospital')}>
                    <View style={[{backgroundColor: 'maroon', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25}]}>
                        <FontAwesome5 
                            name='chevron-right'
                            color='#fff'
                            size={24}
                            style={{
                                
                            }}
                        />
                    </View>
                </TouchableOpacity>
        </View>
        </View>
        </Provider>
    )
}

export default Welcome;