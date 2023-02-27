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

import Colors from '../../constants/Colors'

import {styles} from '../../styles';

import { LinearGradient } from 'expo-linear-gradient';
import { Auth } from 'aws-amplify';

const ForgotPassword = ({navigation} : any) => {

    const [email, setEmail] = useState('');

    const handleForgotPassword = async () => {
        try {
            await Auth.forgotPassword(
                email.replace(/ /g, ''),
            )
            .then(navigation.navigate('ForgotPasswordCon', {email: email.replace(/ /g, '')}))

        } catch {
            alert('Error. Please try again.')
        }
      }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container, {justifyContent: 'center'}]}>
                <View style={{ margin: 20}}>
                    <View>
                        <Text style={styles.title}>
                            Email
                        </Text>
                        <View style={istyles.inputfield}>
                            <TextInput 
                                placeholder='....'
                                placeholderTextColor='#ffffffa5'
                                style={istyles.textInputTitle}
                                maxLength={40}
                                onChangeText={val => setEmail(val)}
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={handleForgotPassword}>
                    <View style={styles.button}>
                        <Text style={styles.buttontext}>
                            Send Reset Code
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.goBack() }>
                    <Text style={[styles.paragraph, {alignSelf: 'center', marginTop: 30}]}>
                        Go Back
                    </Text>
                </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
    );
}

const istyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        //alignItems: 'center',
        flex: 1,
        width: Dimensions.get('window').width
    },
    header: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginVertical: 10,
    },
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

export default ForgotPassword;