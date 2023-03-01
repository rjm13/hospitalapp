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
import { getUser, getDepartment } from '../../src/graphql/queries';
import { updateUser } from '../../src/graphql/mutations';
import {Modal, Provider, Portal} from 'react-native-paper';
import { AppContext } from '../../AppContext';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {styles} from '../../styles'

const departments = [
    {
        id: '1',
        name: 'Emergency Department',
        abbreviation: 'ED',
    },
    {
        id: '2',
        name: 'Intensive Care Unit',
        abbreviation: 'ICU'
    },
    {
        id: '3',
        name: 'Med Surge',
        abbreviation: 'MS'
    },
    {
        id: '4',
        name: 'Emergency Department',
        abbreviation: 'ED',
    },
    {
        id: '5',
        name: 'Intensive Care Unit',
        abbreviation: 'ICU'
    },
    {
        id: '6',
        name: 'Med Surge',
        abbreviation: 'MS'
    },
]

const SelectDept = ({navigation, route} : any) => {

    const {systemID, systemImageUri, systemName} = route.params;

    const [departmentID, setDepartmentID] = useState();
    
    const [departments, setDepartments] = useState([
       {
        id: '',
        name: '',
        abbreviation: ''
        }
    ]);

    const SCREEN_HEIGHT = Dimensions.get('window').height
    const SCREEN_WIDTH = Dimensions.get('window').width

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

    //fetch the user and set their hospitals
    useEffect(() => {

        const fetchUser = async () => {

            const userInfo = await Auth.currentAuthenticatedUser();

            let hosparr = [];

            let deptarr = [];

            const getIt = await API.graphql(
                graphqlOperation(
                    getUser, {
                        id: userInfo.attributes.sub,
                })
            )
            
            for (let i = 0; i < 1; i++) {
                hosparr.push(getIt.data.getUser.hospital.items[i].hospital)

                for (let k = 0; k < getIt.data.getUser.hospital.items[i].hospital.departments.items.length; k++) {
                    deptarr.push(getIt.data.getUser.hospital.items[i].hospital.departments.items[k])
                }
            }
            setHospitalData(hosparr);
            setDepartments(deptarr)
        }
        fetchUser();
    }, [])

    useEffect(() => {
        const fetchDepartments = async () => {

        }
        fetchDepartments();
    }, [])

    const Proceed = async () => {
        if (departmentID) {

            const userInfo = await Auth.currentAuthenticatedUser();

            const response = await API.graphql(
                graphqlOperation(
                    updateUser, {input: {
                        id: userInfo.attributes.sub,
                        departmentID: departmentID
                    }     
                })
            )
            console.log(response)
            navigation.navigate('SelectRole', {systemID: systemID, systemImageUri: systemImageUri, systemName: systemName})
        }
    }

    
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

                    <Text style={[styles.title, {fontSize: 20, marginTop: 10, marginBottom: 20}]}>
                        Select your department:
                    </Text>
                
            </View> 
            <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true} contentContainerStyle={{justifyContent: 'flex-start'}}>
                {departments.map(({id, name, abbreviation}, index) => {

                const AddTo = ({deptid} : any) => {
                    setDepartmentID(deptid)
                }

                return (
                    <TouchableWithoutFeedback onPress={() => AddTo({deptid: id})}>
                        <View style={{margin: 10, paddingVertical: 12, paddingHorizontal: 20, borderWidth: 2, borderRadius: 10,
                            borderColor: departmentID === id ? 'maroon' : '#fff', 
                            //backgroundColor: hospitalIDs.includes(id) === true ? 'cyan' : '#fff',
                        }}>
                            <Text style={{fontSize: 18, fontWeight: '600', textAlign: 'center', color: '#474747'}}>
                                {name}
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
                <TouchableOpacity onPress={() =>  navigation.navigate('SelectHospital', {systemID: systemID, systemImageUri: systemImageUri, systemName: systemName})}>
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

export default SelectDept;