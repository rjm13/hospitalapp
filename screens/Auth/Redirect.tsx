import React, {useState, useEffect, useContext, useLayoutEffect, useRef} from "react";
import { View, Text, ActivityIndicator, Dimensions, TouchableWithoutFeedback, Platform } from "react-native";
import { AppContext } from '../../AppContext';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { getUser } from '../../src/graphql/queries';
import { updateUser } from '../../src/graphql/mutations';
import { StatusBar } from 'expo-status-bar';
import useStyles from '../../styles';
import Ambulance from '../../components/ActivityAmbulance'


const Redirect = ({route, navigation} : any) => {

    const [isLoading, setIsLoading] = useState(false);

    const [tryAgain, setTryAgain] = useState(false);

    const trigger = route.params

    const { 
        isManager, 
        theme, 
        militaryTime,
        expoPushToken
    } = useContext(AppContext);
    
    const { 
        setIsManager, 
        setUserFirstName, 
        setUserLastName, 
        setMilitaryTime,
        setUserID,
        setUserRoleID,
        setDepartID,
        setHospID,
        setSystemID,
        setTheme
    } = useContext(AppContext);

    const styles = useStyles(theme);


    useEffect(() => {

        setIsLoading(true);

        const fetchUser = async () => {

            try {
                const userInfo = await Auth.currentAuthenticatedUser({ bypassCache: true }).catch(err=>err)

                //console.log(userInfo)

                if (userInfo === 'The user is not authenticated') {
                    navigation.navigate('SignIn')
                }

                else {

                    if (userInfo.attributes.profile === 'manager') {
                        setIsManager(true)
                    } else {
                        setIsManager(false)
                    }

                    const userData = await API.graphql(graphqlOperation(
                        getUser,{ id: userInfo.attributes.sub}))

                    if (userData.data.getUser.system === null) {
                        await API.graphql(graphqlOperation(
                            updateUser, {input: {
                                id: userInfo.attributes.sub,
                                systemID: userInfo.attributes.zoneinfo
                            }}
                        ))
                    }
        
                    if (userData.data.getUser) {

                        if (userData.data.getUser.hospID === null || userData.data.getUser.primaryRoleID === null || userData.data.getUser.departmentID === null || userData.data.getUser.firstName === null || userData.data.getUser.lastName === null) {
                            setIsLoading(false)
                            navigation.reset({
                                //index: 0,
                                routes: [{ name: 'Welcome' }],
                            });
                        } else {
                            setUserID(userData.data.getUser.id);
                            setSystemID(userData.data.getUser.systemID)
                            setHospID(userData.data.getUser.hospID)
                            setDepartID(userData.data.getUser.departmentID)
                            setUserRoleID(userData.data.getUser.primaryRoleID)
                            setTheme(userData.data.getUser.Setting1);
                            setMilitaryTime(userData.data.getUser.Setting4);
                            setUserFirstName(userData.data.getUser.firstName);
                            setUserLastName(userData.data.getUser.lastName);
                            
                            await API.graphql(graphqlOperation(
                                updateUser, {input: {
                                    id: userInfo.attributes.sub,
                                    expoNotificationToken: expoPushToken,
                                    Setting2: expoPushToken,
                                    Setting3: userInfo.attributes.profile
                                }}
                            ))
                            setIsLoading(false)
                            navigation.reset({
                                //index: 0,
                                routes: [{ name: 'Root' }],
                            });
                        }
                    } else {
                        setIsLoading(false)
                        setUserID(null);
                        navigation.reset({
                            //index: 0,
                            routes: [{ name: 'SignIn' }],
                        });
                    }
                }
            } catch (e) {
                setIsLoading(false);
                console.log(e)
            }
        }
        fetchUser();
        
    }, [trigger, tryAgain])


    return (
        <View style={[styles.container, {alignContent: 'center', justifyContent: 'center'}]}>
            {isLoading === true ? (
                <Ambulance size={40} />
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