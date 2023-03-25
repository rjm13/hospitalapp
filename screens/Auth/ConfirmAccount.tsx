import React, {useState, useContext} from 'react';
import {
    View, 
    Text,
    TextInput, 
    TouchableOpacity, 
    Keyboard, 
    TouchableWithoutFeedback
} from 'react-native';

import { StatusBar } from 'expo-status-bar';

import Colors from '../../constants/Colors'
import useStyles from '../../styles';
import { AppContext } from '../../AppContext';

import { Auth, graphqlOperation, API } from 'aws-amplify';
import { createUser } from '../../src/graphql/mutations';
import { ActivityIndicator } from 'react-native-paper';

const ConfirmEmail = ({navigation, route} : {navigation: any, route : any}) => {

    const { theme } = useContext(AppContext);

    const styles = useStyles(theme);

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
                            Setting1: true,
                            systemID: userInfo.attributes.zoneinfo
                            //name: userInfo.attributes.name
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
                        <View style={styles.inputfield}>
                            <TextInput 
                                placeholder='Check email for code'
                                placeholderTextColor='#ffffffa5'
                                style={styles.textInputTitle}
                                maxLength={30}
                                onChangeText={(val) => handleCode(val)}
                                autoCapitalize='none'
                                
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={confirmSignUp}>
                    
                        {loggingIn === true ? (
                            <ActivityIndicator size='small' color={theme ? Colors.light.loadingIcon : Colors.light.loadingIcon}/>
                        ) : (
                            <View style={styles.buttonlayout}>
                                <Text style={styles.buttontext}>
                                    Confirm Account
                                </Text> 
                            </View>    
                            )}
                    
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

export default ConfirmEmail;