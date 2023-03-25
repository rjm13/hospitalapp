 //select multiple hospitals (many to many relationship)

 import React, {useState, useEffect, useContext} from 'react';
import {
    View, 
    Text, 
    Dimensions, 
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback,
    Image,
    ActivityIndicator
} from 'react-native';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { getUser } from '../../src/graphql/queries';
import { updateUser } from '../../src/graphql/mutations';
import { AppContext } from '../../AppContext';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import useStyles from '../../styles'

const SelectDept = ({navigation, route} : any) => {

    const { theme } = useContext(AppContext);

    const styles = useStyles(theme);

    const [processing, setProcessing] = useState(false);

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

    const [hospitalData, setHospitalData] = useState(
        {
            id: '',
            name: '',
        }
    );

    //fetch the user and set their hospitals
    useEffect(() => {

        const fetchUser = async () => {

            const userInfo = await Auth.currentAuthenticatedUser();

            //let hosparr = [];

            //let deptarr = [];

            const getIt = await API.graphql(
                graphqlOperation(
                    getUser, {
                        id: userInfo.attributes.sub,
                })
            )
            
            // for (let i = 0; i < getIt.data.getUser.hospital.items.length; i++) {
            //     hosparr.push(getIt.data.getUser.hospital.items[i].hospital)

            //     for (let k = 0; k < getIt.data.getUser.hospital.items[i].hospital.departments.items.length; k++) {
            //         deptarr.push(getIt.data.getUser.hospital.items[i].hospital.departments.items[k])
            //     }
            // }
            // setHospitalData(hosparr);
            // setDepartments(deptarr)
            setDepartments(getIt.data.getUser.hosp.departments.items);
            setHospitalData(getIt.data.getUser.hosp);
        }
        fetchUser();
    }, [])

    const Proceed = async () => {
        if (departmentID) {

            setProcessing(true);

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
            setProcessing(false)
        }
    }
    
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
                    <View>
                        {/* {hospitalData.map(({id, name}, index) => { */}
                            {/* return ( */}
                                <View style={{padding: 10, elevation: 4,shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3, backgroundColor: '#fff', flexDirection: 'row', width: Dimensions.get('window').width - 80, justifyContent: 'center', marginVertical: 6}}>
                                    <Text style={[styles.paragraph, {marginVertical: 0}]}>
                                        {hospitalData.name}
                                    </Text>
                                </View>
                            {/* )})} */}
                    </View>
                    
                </View>

                    <Text style={[styles.title, {fontSize: 20, marginTop: 10, marginBottom: 20}]}>
                        Select your department:
                    </Text>
                
            </View> 
                {departments?.map(({id, name, abbreviation}, index) => {

                const AddTo = ({deptid} : any) => {
                    setDepartmentID(deptid)
                }

                return (
                    <TouchableWithoutFeedback key={id} onPress={() => AddTo({deptid: id})}>
                        <View style={{margin: 10, paddingVertical: 12, paddingHorizontal: 20, borderWidth: 2, borderRadius: 10,
                            borderColor: departmentID === id ? 'maroon' : '#fff', 
                            //backgroundColor: hospitalIDs.includes(id) === true ? 'cyan' : '#fff',
                        }}>
                            <Text style={[styles.paragraph, {fontSize: 18, fontWeight: '600', textAlign: 'center', }]}>
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

export default SelectDept;