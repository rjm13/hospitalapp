import React, {useState} from 'react';
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Keyboard, 
    TouchableWithoutFeedback
} from 'react-native';

import {Auth} from '@aws-amplify/auth'
import Feather from 'react-native-vector-icons/Feather';

import Colors from '../../constants/Colors'

import {styles} from '../../styles';

const ForgotPassword = ({navigation, route} : {navigation : any, route : any}) => {

    const {email} = route.params

    const [newPassVis, setNewPassVis] = useState(false);

    const [conPassVis, setConPassVis] = useState(false);

    const [updatePass, setUpdatePass] = useState({
        username: email,
        code: '',
        password: '',
        confirmPass: '',
    })

    const handleResetPassword = async () => {
        const {username, code, password, confirmPass} = updatePass;

        if(password === confirmPass) {

        try {
            console.log(username, code, password);
            let result = await Auth.forgotPasswordSubmit(username, code, password)

            console.log(result);

            if(result) {
                navigation.navigate('SignIn');
            }
        } catch (e) {
            console.log(Error);
        }} else {
            alert('Passwords do not match')
        }
    }

    const ResendCode = async () => {
        
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
                <View style={{ margin: 20}}>
                    <Text style={[styles.paragraph, {textAlign: 'center', marginBottom: 40, fontSize: 12}]}>
                        Please check your email for the confirmation code to reset your password.
                    </Text>
                    <View>
                        <Text style={styles.title}>
                            Confirmation Code
                        </Text>
                        <View style={styles.inputfield}>
                            <TextInput 
                                placeholder='Check email for code'
                                placeholderTextColor='#ffffffa5'
                                style={styles.textInputTitle}
                                maxLength={40}
                                autoCapitalize='none'
                                onChangeText={val => setUpdatePass({...updatePass, code: val})}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ marginBottom: 0, marginHorizontal: 20}}>
                    <View>
                        <Text style={styles.title}>
                            New Password
                        </Text>
                        <View style={[styles.inputfield, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <TextInput 
                                placeholder='...'
                                placeholderTextColor='#ffffffa5'
                                style={[styles.textInputTitle, {width: '80%'}]}
                                maxLength={30}
                                autoCapitalize='none'
                                secureTextEntry={newPassVis === true ? false : true}
                                onChangeText={val => setUpdatePass({...updatePass, password: val})}
                            />
                            <Feather 
                                name={newPassVis === true ? 'eye' : 'eye-off'}
                                color='#fff'
                                size={18}
                                style={{marginRight: 10, alignSelf: 'center'}}
                                onPress={() => setNewPassVis(!newPassVis)}
                            />
                        </View>
                    </View>
                </View>

                <View style={{ marginBottom: 20, marginHorizontal: 20}}>
                    <View>
                        <Text style={styles.title}>
                            Confirm New Password
                        </Text>
                        <View style={[styles.inputfield, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <TextInput 
                                placeholder='...'
                                placeholderTextColor='#ffffffa5'
                                style={[styles.textInputTitle, {width: '80%'}]}
                                maxLength={30}
                                autoCapitalize='none'
                                secureTextEntry={conPassVis === true ? false : true}
                                onChangeText={val => setUpdatePass({...updatePass, confirmPass: val})}
                            />
                            <Feather 
                                name={conPassVis === true ? 'eye' : 'eye-off'}
                                color='#fff'
                                size={18}
                                style={{marginRight: 10, alignSelf: 'center'}}
                                onPress={() => setConPassVis(!conPassVis)}
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={handleResetPassword}>
                    <View style={styles.buttonlayout}>
                        <Text style={styles.buttontext}>
                            Reset Password
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.goBack() }>
                    <Text style={[styles.paragraph, {alignSelf: 'center', margin: 20}]}>
                        Go Back
                    </Text>
                </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
    );
}

export default ForgotPassword;