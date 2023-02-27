import React, {useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    Dimensions, 
    TextInput, 
    TouchableOpacity, 
    Keyboard, 
    TouchableWithoutFeedback
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import Colors from '../../constants/Colors'
import {styles} from '../../styles';

import { Auth, graphqlOperation, API } from 'aws-amplify';
import { createUser } from '../../src/graphql/mutations';
import { ActivityIndicator } from 'react-native-paper';

const ConfirmEmail = ({navigation, route} : {navigation: any, route : any}) => {

    const [loggingIn, setLoggingIn] = useState(false);

    const {username, password} = route.params

    const [data, setData] = useState({
        username: username,
        code: '',
        password: password,
    });

    async function confirmSignUp() {

        const {username, code, password} = data;

        setLoggingIn(true);
        
        try {

            let result = await Auth.confirmSignUp(username, code);

            console.log(data)

            if (result) {
                let signin = await Auth.signIn (username, password)

                if (signin) {
                    const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true })

                    if (userInfo) {

                        const newUser = {
                            id: userInfo.attributes.sub,
                            type: 'User',
                            //name: userInfo.attributes.name,
                            //birthdate: userInfo.attributes.birthdate,
                            //plan: 'basic'
                        }

                        const createdUser = await API.graphql(
                            graphqlOperation(
                            createUser,
                            { input: newUser }
                            )
                        )
                        if (createdUser) {
                            navigation.navigate('Welcome')
                        }
                    }
                }
            }
        } catch (error) {
            console.log('error confirming sign up', error);
            alert('Error confirming account. Please try again.')
        }
        setLoggingIn(false);
    }

    async function resendConfirmationCode() {
        try {
            await Auth.resendSignUp(username);
            alert('Confirmation code resent. Please check your email.');
        } catch (err) {
            console.log('error resending code: ', err);
            alert('Error sending code.')
        }
    }

    const handleCode = (val : any) => {
        setData({
            ... data,
            code: val
        });
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container, {justifyContent: 'center'}]}>
                <View style={{ margin: 20}}>
                    <View>
                        <Text style={[styles.title, {marginHorizontal: 20, marginVertical: 10,}]}>
                            Confirmation Code
                        </Text>
                        <View style={istyles.inputfield}>
                            <TextInput 
                                placeholder='Check email for code'
                                placeholderTextColor='#ffffffa5'
                                style={istyles.textInputTitle}
                                maxLength={30}
                                onChangeText={(val) => handleCode(val)}
                                autoCapitalize='none'
                                
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={confirmSignUp}>
                    <View style={styles.button}>
                        {loggingIn === true ? (
                            <ActivityIndicator size='small' color={Colors.light.loadingIcon}/>
                        ) : (
                            <Text style={styles.buttontext}>
                                Confirm Account
                            </Text> 
                            )}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={resendConfirmationCode}>
                    <Text style={[styles.paragraph, { alignSelf: 'center', marginTop: 40}]}>
                        Resend code
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={[styles.paragraph, { alignSelf: 'center', marginTop: 20}]}>
                        Go Back
                    </Text>
                </TouchableOpacity>
                <StatusBar style="dark" backgroundColor='transparent'/>
        </View>
        </TouchableWithoutFeedback>
    );
}

const istyles = StyleSheet.create({
    textInputTitle: {
        color: '#fff',
        fontWeight: 'normal',
    },
    inputfield: {
        width: Dimensions.get('window').width - 40,
        height: 40,
        backgroundColor: '#363636',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    button: {
       alignItems: 'center',
       margin: 20,
    },
    buttontext: {
        backgroundColor: 'cyan',
        borderRadius: 17,
        paddingVertical: 10,
        paddingHorizontal: 20,
        overflow: 'hidden'
    },
});

export default ConfirmEmail;