 //select multiple hospitals (many to many relationship)

 import React, {useState, useEffect} from 'react';
import {
    View, 
    Text, 
    Dimensions, 
    TouchableOpacity,
    TextInput,
    FlatList,
    ScrollView,
    TouchableWithoutFeedback,
    Image
} from 'react-native';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { updateUser, createQualUser } from '../../src/graphql/mutations';
import { getUser, getRole } from '../../src/graphql/queries';
import {Modal, Provider, Portal} from 'react-native-paper';
import { AppContext } from '../../AppContext';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {styles} from '../../styles'

const SelectQuals = ({navigation, route} : any) => {
    
    const {systemID, systemImageUri, systemName} = route.params

    const [systemData, setSystemData] = useState({
        id: systemID,
        name: systemName,
        imageUri: systemImageUri,
    });

    const [hospitalData, setHospitalData] = useState([
        {
            id: '',
            name: '',
        }
    ]);

    const [department, setDepartment] = useState({
        id: '',
        name: '',
    });

    const [role, setRole] = useState({
        id: '',
        title: '',
    });

    const [quals, setQuals] = useState([
        {id: '',
        title: '',
        abbreviation: '',
    }])

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
            
            for (let i = 0; i < 1; i++) {
                hosparr.push(getIt.data.getUser.hospital.items[i].hospital)
            }
            setHospitalData(hosparr)
            setDepartment(getIt.data.getUser.department)
            setRole(getIt.data.getUser.primaryRole)

            if (getIt.data.getUser.primaryRole) {
                const getMore = await API.graphql(
                    graphqlOperation(
                        getRole, {
                            id: getIt.data.getUser.primaryRoleID,
                        })
                )
                //console.log(getMore.data.getDepartment)
                setQuals(getMore.data.getRole.quals.items)
            }
        }
        fetchUser();
    }, [])

    const Proceed = async () => {

            const userInfo = await Auth.currentAuthenticatedUser();

            for (let i = 0; i < qualIDs.length; i++) {
                const response = await API.graphql(
                    graphqlOperation(
                        createQualUser, {input: {
                            userID: userInfo.attributes.sub,
                            qualID: qualIDs[i],
                        }     
                    })
                )
                console.log(response)
            }

            navigation.navigate('ConfirmSetUp', {systemID: systemID, systemImageUri: systemImageUri, systemName: systemName})
    }

    const [qualIDs, setQualIDs] = useState([])

    const SCREEN_HEIGHT = Dimensions.get('window').height
    const SCREEN_WIDTH = Dimensions.get('window').width
    
    return (
        <View style={[styles.container, {justifyContent: 'space-between', height: SCREEN_HEIGHT}]}>
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
                            {hospitalData.map(({id, name}, index) => {
                                return (
                                    <View style={{padding: 10, elevation: 4,shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3, backgroundColor: '#fff', flexDirection: 'row', width: Dimensions.get('window').width - 80, justifyContent: 'center', marginVertical: 6}}>
                                        <Text style={[styles.paragraph, {marginVertical: 0}]}>
                                            {name}
                                        </Text>
                                    </View>
                                )})}
                        </View>
                    </View>

                    <View style={{padding: 10, elevation: 4,shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3, backgroundColor: '#fff', flexDirection: 'row', width: Dimensions.get('window').width - 80, justifyContent: 'center', marginVertical: 6}}>
                        <Text style={[styles.paragraph, {marginVertical: 0}]}>
                            {department?.name}
                        </Text>
                    </View>

                    <View style={{padding: 10, elevation: 4,shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3, backgroundColor: '#fff', flexDirection: 'row', width: Dimensions.get('window').width - 80, justifyContent: 'center', marginVertical: 6}}>
                        <Text style={[styles.paragraph, {marginVertical: 0, textTransform: 'capitalize'}]}>
                            {role?.title}
                        </Text>
                    </View>
                </View>
                <Text style={[styles.title, {fontSize: 20, marginTop: 30, marginBottom: 20}]}>
                    Please select your qualifications:
                </Text>
            </View>  
            <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true} contentContainerStyle={{justifyContent: 'flex-start'}}>
                {quals.map(({id, title, abbreviation}, index) => {

                const AddTo = ({qualid} : any) => {
                    if (qualIDs.includes(qualid)) {
                        setQualIDs(qualIDs.filter(item => item !== id))
                    } else {
                        setQualIDs([...qualIDs,qualid])
                    }
                }

                return (
                    <TouchableWithoutFeedback onPress={() => AddTo({qualid: id})}>
                        <View style={{ margin: 10, paddingVertical: 12, paddingHorizontal: 20, borderWidth: 2, borderRadius: 10,
                            borderColor: qualIDs.includes(id) === true ? 'maroon' : '#fff', 
                            //backgroundColor: hospitalIDs.includes(id) === true ? 'cyan' : '#fff',
                        }}>
                            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>                     
                                <Text style={{marginLeft: 10, color: '#474747', fontSize: 18, fontWeight: '600', textAlign: 'center'}}>
                                    {abbreviation !== null ? (title + ' (' + abbreviation + ')') : title}
                                </Text>
                            </View>
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
                <TouchableOpacity onPress={() =>  navigation.navigate('SelectRole', {systemID: systemID, systemImageUri: systemImageUri, systemName: systemName})}>
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
                <TouchableOpacity onPress={Proceed}>
                    <View style={[{backgroundColor: 'maroon', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25}]}>
                        <FontAwesome5 
                            name='chevron-right'
                            color='#fff'
                            size={24}
                            style={{
                                
                            }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </LinearGradient>
        </View>
    )
}

export default SelectQuals;