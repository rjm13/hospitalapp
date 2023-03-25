import React, {useState, useContext} from 'react';
import {
    View, 
    Text,
    TextInput, 
    TouchableOpacity, 
    Keyboard, 
    TouchableWithoutFeedback
} from 'react-native';

import Colors from '../../constants/Colors'
import useStyles from '../../styles';
import { AppContext } from '../../AppContext';

import { Auth } from 'aws-amplify';

const ForgotPassword = ({navigation} : any) => {

    const { theme } = useContext(AppContext);

    const styles = useStyles(theme);

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
                        <Text style={[styles.title, {marginBottom: 4}]}>
                            Email
                        </Text>
                        <View style={styles.inputfield}>
                            <TextInput 
                                placeholder='....'
                                placeholderTextColor='#ffffffa5'
                                style={styles.textInputTitle}
                                maxLength={40}
                                onChangeText={val => setEmail(val)}
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity onPress={handleForgotPassword}>
                    <View style={styles.buttonlayout}>
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

export default ForgotPassword;