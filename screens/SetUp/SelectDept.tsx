 //select department (single relationship)

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
                    <Text style={styles.title}>
                        Welcome to Medall
                    </Text>
                    <Text style={[styles.paragraph, { marginTop: 20}]}>
                        Your shift scheduler for medical staff
                    </Text>
                    
                    <Text style={[styles.paragraph, {textAlign: 'center', marginTop: 20, marginHorizontal: 20}]}>
                        To get started, we need to we need to find your people
                    </Text>
                </View>
                <View>
                    <Text style={[styles.title, {marginHorizontal: 0, marginVertical: 10,}]}>
                        First name?
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
                        Last name?
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

{/* FOOTER */}
            <View style={[styles.buttonlayout, {marginVertical: 60}]}>
                <TouchableOpacity onPress={() =>  navigation.navigate('Redirect', {trigger: Math.random()})}>
                    <Text style={styles.buttontext}>
                        Next
                    </Text>
                </TouchableOpacity>
                
            </View>
        </View>
        </Provider>
    )
}

export default Welcome;