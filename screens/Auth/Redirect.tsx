import React, {useState, useEffect, useContext, useLayoutEffect} from "react";
import { View, Text, ActivityIndicator, Dimensions, TouchableWithoutFeedback, Platform } from "react-native";
import { AppContext } from '../../AppContext';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { getUser } from '../../src/graphql/queries';
import { updateUser } from '../../src/graphql/mutations';
import { StatusBar } from 'expo-status-bar';
import {styles} from '../../styles';

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const Redirect = ({route, navigation} : any) => {

    const [isLoading, setIsLoading] = useState(false);

    const [tryAgain, setTryAgain] = useState(false);

    const trigger = route.params

    const { setUserID } = useContext(AppContext);
    const { setTheme } = useContext(AppContext);
    const { setSystemID } = useContext(AppContext);
    const { setHospID } = useContext(AppContext);
    const { setDepartID } = useContext(AppContext);
    const { setUserRoleID } = useContext(AppContext);

    useEffect(() => {

        setIsLoading(true);

        const fetchUser = async () => {

            try {
                const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true }).catch(err=>err)

                console.log(userInfo)

                if (userInfo === 'The user is not authenticated') {
                    navigation.navigate('SignIn')
                }

                else {
                    const userData = await API.graphql(graphqlOperation(
                        getUser,{ id: userInfo.attributes.sub}))
                    console.log(userData.data.getUser)

                    if (userData.data.getUser.system === null) {
                        const resp = await API.graphql(graphqlOperation(
                            updateUser, {input: {
                                id: userInfo.attributes.sub,
                                systemID: userInfo.attributes.zoneinfo
                            }}
                        ))
                        console.log(resp)
                    }
        
                    if (userData.data.getUser) {
                        setUserID(userData.data.getUser);
                        setSystemID(userData.data.getUser.systemID)
                        setHospID(userData.data.getUser.hospID)
                        setDepartID(userData.data.getUser.departID)
                        setUserRoleID(userData.data.getUser.primaryRoleID)
                        setTheme(userData.data.getUser.Setting1);

                        if (userData.data.getUser.hospID === null || userData.data.getUser.primaryRoleID === null || userData.data.getUser.departmentID === null || userData.data.getUser.firstName === null || userData.data.getUser.lastName === null) {
                            navigation.reset({
                                //index: 0,
                                routes: [{ name: 'Welcome' }],
                            });
                        } else {
                            navigation.reset({
                                //index: 0,
                                routes: [{ name: 'Root' }],
                            });
                        }
                    } else {
                        setUserID(null);
                        navigation.reset({
                            //index: 0,
                            routes: [{ name: 'SignIn' }],
                        });
                    }
                }
            } catch {
                setIsLoading(false);
            }
        }
        fetchUser();
        
    }, [trigger, tryAgain])


    return (
        <View style={[styles.container, {alignContent: 'center', justifyContent: 'center'}]}>
            {isLoading === true ? (
                <ActivityIndicator size="large" color="maroon" />
            ) : (
                <View>
                    <Text style={styles.paragraph}>
                        Error logging in. Please check your internet connection.
                    </Text>
                    <TouchableWithoutFeedback onPress={() => setTryAgain(!tryAgain)}>
                       <View style={{margin: 20, padding: 20}}>
                            <Text style={[styles.paragraph, {color: 'maroon'}]}>
                                Try Again
                            </Text>
                        </View> 
                    </TouchableWithoutFeedback>
                    
                </View>
            )}
            
            <StatusBar style='light' backgroundColor="transparent"/>
        </View>
        
    );
}

export default Redirect;