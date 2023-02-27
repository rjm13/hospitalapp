import React, {useState, useContext, useEffect} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Dimensions, 
    TextInput, 
    Linking,
    ActivityIndicator,
    Keyboard,
    TouchableWithoutFeedback,
    Image,
    Platform
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { AppContext } from '../../AppContext';
import Feather from 'react-native-vector-icons/Feather';
import { StatusBar } from 'expo-status-bar';
import {Modal, Provider, Portal} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";

import Colors from '../../constants/Colors'

import {styles} from '../../styles';

import { Auth, API, graphqlOperation, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { getUser } from '../../src/graphql/queries';
import { createUser } from '../../src/graphql/mutations';


const SignIn = ({navigation} : any) => {

    const [seePass, setSeePass] = useState(false);

    const [isErr, setIsErr] = useState(false);

    const [err, setErr] = useState('Error signing in.');

    const [signingIn, setSigningIn] = useState(false);

    const { userID, setUserID } = useContext(AppContext);

    const [trigger, setTrigger] = useState(false);
    
    const [userstuff, setUserstuff] = useState({
       
    })


    const CreateUser = async () => {

        const {password} = data;

        const username = data.username.replace(/ /g, '');
    
        const userInfo = await Auth.currentAuthenticatedUser(
            { bypassCache: true }
          );
    
          if (userInfo === 'The user is not authenticated') {
            return;
          }

          if (userInfo.attributes.email_verified === false) {
              await Auth.resendSignUp(username)
              .then(navigation.navigate('ConfirmEmail', {username, password}))
          }
    
          else if (userInfo) {
          //get the user from Backend with the user SUB from Auth
            const userData = await API.graphql(
              graphqlOperation(
                getUser, 
                { id: userInfo.attributes.sub,
                }
              )
            )
    
            if (userData.data.getUser) {
                setUserID(userData.data.getUser);
                setIsErr(false);
                setTrigger(!trigger);
                navigation.navigate('Redirect', {trigger: Math.random()});
                return;
            };
          }
        }

    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const handlePassword = (val : any) => {
        setData({
            ... data,
            password: val
        });
    }

    const handleUsername = (val : any) => {
        setData({
            ... data,
            username: val
        });
    }

    async function signIn() {
        setSigningIn(true);
        const {username, password} = data;
        try {
            await Auth.signIn(username.replace(/ /g, ''), password)
            .then (CreateUser)
        } 
        catch (error) {
            console.log('error signing in', error)
            setErr(error)
            setIsErr(true);
            setSigningIn(false);
        }
        setSigningIn(false);
    }

    // const CreateFedUser = async () => {

    //         const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true })

    //         if (userInfo) {

    //             const userCheck = await API.graphql(
    //                 graphqlOperation(
    //                 getUser,
    //                 { id: userInfo.attributes.sub }
    //                 )
    //             )

    //             if (userCheck.data.getUser === null) {

    //                 await Auth.updateUserAttributes(userInfo, {
    //                     'birthdate': "04/20/2000"
    //                   })

                      

    //                 .then(() => setUserstuff(userInfo.attributes))

    //                 const newUser = {
    //                     id: userInfo.attributes.sub,
    //                     type: 'User',
    //                     name: userInfo.attributes.name,
    //                     //birthdate: format(date, "MM/dd/yyyy"),
    //                 }

    //                const createdUser = await API.graphql(
    //                     graphqlOperation(
    //                     createUser,
    //                     { input: newUser }
    //                     )
    //                 )
    //                 if (createdUser) {
    //                     navigation.navigate('Welcome')
    //                 } 
    //             } 
    //             else {
    //                 navigation.navigate('Redirect', {trigger: Math.random()});
    //             }

                
    //         }
    // }
    
    // useEffect(() => {
    //     Hub.listen('auth', ({ payload: { event, data } }) => {
    //       switch (event) {
    //         case 'signIn':
    //         case 'cognitoHostedUI':
    //             CreateFedUser();
    //           break;
    //         case 'signOut':
    //           //setUser(null);
    //           break;
    //         case 'signIn_failure':
    //         case 'cognitoHostedUI_failure':
    //           console.log('Sign in failure', data);
    //           break;
    //       }
    //     });
    
    //     //getUser().then(userData => setUser(userData));
    //   }, []);

    // async function signInWithGoogle() {
    //     //setSigningIn(true);
    //     try {
            
    //         //await Auth.federatedSignIn({provider: "google"})
    //         //.then (CreateUser)
    //         await Auth.federatedSignIn({
    //             provider: CognitoHostedUIIdentityProvider.Google
    //           });
    //     } 
    //     catch (error) {
    //         console.log('error signing in', error)
    //         //setIsErr(true);
    //         //setSigningIn(false);
    //     }
    //     //setSigningIn(false);
    // }

    // async function signInWithApple() {
    //     setSigningIn(true);
    //     const {username, password} = data;
    //     try {
    //         await Auth.signIn(username.replace(/ /g, ''), password)
    //         .then (CreateUser)
    //     } 
    //     catch (error) {
    //         console.log('error signing in', error)
    //         setIsErr(true);
    //         setSigningIn(false);
    //     }
    //     setSigningIn(false);
    // }

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

            //date time picker
        const [mode, setMode] = useState('date');
        const [show, setShow] = useState(false);

    const showMode = (currentMode : any) => {
        setShow(true);
        setMode(currentMode);
    };

    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <View>
                </View>
                </Modal>
            </Portal>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container, {justifyContent: 'center'}]}>
                <View style={{ margin: 20}}>
                    {isErr ? (
                    <View style={{ alignItems: 'center', justifyContent: 'center', margin: 10}}>
                        <Text style={{borderRadius: 15, backgroundColor: '#ffffff', paddingHorizontal: 20, paddingVertical: 10, color: 'red', fontSize: 13, }}>
                            Error signing in. Please try again.
                        </Text>
                        <Text style={{borderRadius: 15, backgroundColor: '#ffffff', paddingHorizontal: 20, paddingVertical: 10, color: 'red', fontSize: 13, }}>
                            {err}
                        </Text>
                    </View>
                    ) : null}
                    <View>
                        <Text style={[styles.title, {marginHorizontal: 20, marginVertical: 10,}]}>
                            Email
                        </Text>
                        <View style={istyles.inputfield}>
                            <TextInput 
                                placeholder='....'
                                placeholderTextColor='#ffffffa5'
                                style={istyles.textInputTitle}
                                maxLength={40}
                                onChangeText={handleUsername}
                                autoCapitalize='none'
                            />
                        </View>
                    </View>

                    <View>
                        <Text style={[styles.title, {marginHorizontal: 20, marginVertical: 10,}]}>
                            Password
                        </Text>
                        <View style={[istyles.inputfield, {flexDirection: 'row', justifyContent: 'space-between'}]}>
                            <TextInput 
                                placeholder='....'
                                placeholderTextColor='#ffffffa5'
                                style={[istyles.textInputTitle, {width: '80%'}]}
                                maxLength={30}
                                secureTextEntry={seePass === true ? false : true}
                                onChangeText={handlePassword}
                                autoCapitalize='none'
                            />
                            <Feather 
                                name={seePass === true ? 'eye' : 'eye-off'}
                                color='#fff'
                                size={18}
                                style={{marginRight: 10, alignSelf: 'center'}}
                                onPress={() => setSeePass(!seePass)}
                            />
                        </View>
                    </View>

                    <View style={{width: Dimensions.get('window').width - 60, alignSelf: 'center', marginVertical: 20, justifyContent: 'space-between', flexDirection: 'row', marginTop: 30}}>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <View style={{  }}>
                                <Text style={{ fontSize: 14, color: '#000000a5', alignSelf: 'center'}}>
                                    Forgot password
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => Linking.openURL('mailto:martianspidermedia@gmail.com') }>
                            <View style={{ }}>
                                <Text style={{ fontSize: 14, color: '#000000a5', alignSelf: 'center'}}>
                                    Contact us
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{alignSelf: 'center', width: Dimensions.get('window').width - 60, borderTopWidth: 1, borderColor: '#000000a5',}}>
                       
                    </View>
                </View>

            {signingIn === true ? (
                <ActivityIndicator size="small" color={Colors.light.loadingIcon}/>
                ) : (
                    <TouchableOpacity onPress={signIn}>
                        <View style={[styles.button, {alignSelf: 'center'}]}>
                            <Text style={{textAlign: 'center', color: Colors.dark.text}}>
                                Sign In
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}

                <TouchableOpacity onPress={() => navigation.navigate('SignUp') }>
                    <Text style={[styles.paragraph, { alignSelf: 'center', margin: 20}]}>
                        Create an account
                    </Text>
                </TouchableOpacity>
            <StatusBar style="dark" backgroundColor='transparent'/>
        </View>
        </TouchableWithoutFeedback>
        </Provider>
    );
}

const istyles = StyleSheet.create ({
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
        width: '90%',
        height: 40,
        backgroundColor: '#363636',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    button: {
       alignItems: 'center',
       margin: 20,
       alignSelf: 'center'
    },
    buttontext: {
        backgroundColor: 'cyan',
        borderRadius: 17,
        paddingVertical: 6,
        paddingHorizontal: 20,
        overflow: 'hidden',
    },
});

export default SignIn;