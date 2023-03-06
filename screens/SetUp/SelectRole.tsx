 //select multiple hospitals (many to many relationship)

 import React, {useState, useEffect} from 'react';
import {
    View, 
    Text, 
    Dimensions, 
    TouchableOpacity,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
    ActivityIndicator
} from 'react-native';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { getUser, getDepartment } from '../../src/graphql/queries';
import { updateUser } from '../../src/graphql/mutations';
import { AppContext } from '../../AppContext';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {styles} from '../../styles'

const SelectRole = ({navigation, route} : any) => {

    const [ready, setReady] = useState(false);

    const [processing, setProcessing] = useState(false);

    const [roles, setRoles] = useState([
        {
        id: '',
        title: '',
        acronym: '',
        icon: '',
        color: '',
        details: '',

        }
    ]);

    const {systemID, systemImageUri, systemName} = route.params

    const [hospitalData, setHospitalData] = useState(
        {
            id: '',
            name: '',
        }
    );

    const [department, setDepartment] = useState({
        id: '',
        name: '',
    })

    const [roleIDs, setRoleIDs] = useState([])

    useEffect(() => {

        const fetchUser = async () => {

            const userInfo = await Auth.currentAuthenticatedUser();

            let hosparr = [];

            const getIt = await API.graphql(
                graphqlOperation(
                    getUser, {
                        id: userInfo.attributes.sub,
                    })
            )
            console.log(getIt.data.getUser.department)
            
            // for (let i = 0; i < 1; i++) {
            //     hosparr.push(getIt.data.getUser.hospital.items[i].hospital)
            // }
            setHospitalData(getIt.data.getUser.hosp)
            setDepartment(getIt.data.getUser.department)

            if (getIt.data.getUser.departmentID) {
                const getMore = await API.graphql(
                    graphqlOperation(
                        getDepartment, {
                            id: getIt.data.getUser.departmentID,
                        })
                )
                console.log(getMore.data.getDepartment)
                setRoles(getMore.data.getDepartment.roles.items)
            }
        }
        fetchUser();
    }, [])

    const Proceed = async () => {
        if (roleIDs.length > 0) {

            setProcessing(true);

            const userInfo = await Auth.currentAuthenticatedUser();

            const response = await API.graphql(
                graphqlOperation(
                    updateUser, {input: {
                        id: userInfo.attributes.sub,
                        primaryRoleID: roleIDs[0],
                    }     
                })
            )
            console.log(response)
            navigation.navigate('SelectQuals', {systemID: systemID, systemImageUri: systemImageUri, systemName: systemName})
            setProcessing(false)
        } else {
            alert("Please select your role")
            return;
        }
    }

    const SCREEN_HEIGHT = Dimensions.get('window').height
    const SCREEN_WIDTH = Dimensions.get('window').width
    
    return (
        <View style={[styles.container, {justifyContent: 'space-between', height: SCREEN_HEIGHT}]}>
            <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true} contentContainerStyle={{justifyContent: 'flex-start'}}>
            <View style={{marginTop: 0, alignItems: 'center'}}>
                <View style={{alignItems: 'center', marginTop: 60, backgroundColor: 'transparent', borderRadius: 20, paddingHorizontal: 20, paddingBottom: 20}}>
                    {systemImageUri.length > 1 ? (
                        <Image
                            style={{height: 100, width: SCREEN_WIDTH - 100, resizeMode: 'contain'}}
                            source={{uri: systemImageUri}}
                        />
                    ) : (
                        <Text style={[styles.title, {fontSize: 26, marginTop: 20}]}>
                            {systemName}
                        </Text>
                    )}
                    <View style={{flexDirection: 'row', width: Dimensions.get('window').width - 80, justifyContent: 'center', marginVertical: 0}}>
                        <View>
                            {/* {hospitalData.map(({id, name}, index) => {
                                return ( */}
                                    <View style={{padding: 10, elevation: 4,shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3, backgroundColor: '#fff', flexDirection: 'row', width: Dimensions.get('window').width - 80, justifyContent: 'center', marginVertical: 6}}>
                                        <Text style={[styles.paragraph, {marginVertical: 0}]}>
                                            {hospitalData.name}
                                        </Text>
                                    </View>
                                {/* )})} */}
                        </View>
                    </View>

                    <View style={{padding: 10, elevation: 4,shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3, backgroundColor: '#fff', flexDirection: 'row', width: Dimensions.get('window').width - 80, justifyContent: 'center', marginVertical: 6}}>
                        <Text style={[styles.paragraph, {marginVertical: 0}]}>
                            {department?.name}
                        </Text>
                    </View>
                </View>
                <Text style={[styles.title, {fontSize: 20, marginTop: 30, marginBottom: 20}]}>
                    Please select your role:
                </Text>
            </View> 
                {roles.map(({id, title, acronym}, index) => {

                const AddTo = ({roleid} : any) => {
                    if (roleIDs.includes(roleid)) {
                        setRoleIDs(roleIDs.filter(item => item !== id))
                    } else {
                        setRoleIDs([...roleIDs,roleid])
                    }
                }

                return (
                    <TouchableWithoutFeedback key={id} onPress={() => AddTo({roleid: id})}>
                        <View style={{margin: 10, paddingVertical: 12, paddingHorizontal: 20, borderWidth: 2, borderRadius: 10,
                            borderColor: roleIDs.includes(id) === true ? 'maroon' : '#fff', 
                            //backgroundColor: hospitalIDs.includes(id) === true ? 'cyan' : '#fff',
                        }}>
                            <Text style={{textAlign: 'center', fontSize: 18, fontWeight: '600', color: '#474747'}}>
                            {acronym !== null ? (title + ' (' + acronym + ')') : title}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                )})}
                <View style={{height: 180}}/>
            </ScrollView>
            <View style={{height: 0}}/>
{/* FOOTER */}
        <LinearGradient
            colors={['#fff','#fff', '#ffffffa5','transparent']}
            style={{position: 'absolute', bottom: 0 }}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
        >
            <View style={{marginBottom: 20, flexDirection: 'row', width: SCREEN_WIDTH, justifyContent: 'space-between', paddingHorizontal: 40}}>
                <TouchableOpacity onPress={() =>  navigation.navigate('SelectDept', {systemID: systemID, systemImageUri: systemImageUri, systemName: systemName})}>
                    <View style={[{backgroundColor: 'maroon', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25}]}>
                        <FontAwesome5 
                            name='chevron-left'
                            color='#fff'
                            size={24}
                            style={{
                                
                            }}
                        />
                    </View>
                </TouchableOpacity>
                {processing ? (
                    <View style={[{backgroundColor: 'gray', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25}]}>
                        <ActivityIndicator size='small' color='#fff'/>
                    </View>
                ) : (
                    <TouchableOpacity onPress={Proceed}>
                        <View style={[{backgroundColor: 'maroon', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25}]}>
                            <FontAwesome5 
                                name='chevron-right'
                                color='#fff'
                                size={24}
                                style={{}}
                            />
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </LinearGradient>
        </View>
    )
}

export default SelectRole;