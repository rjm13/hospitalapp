 //select multiple hospitals (many to many relationship)

 import React, {useState, useEffect} from 'react';
import {
    View, 
    Text, 
    Dimensions, 
    TouchableOpacity,
    ScrollView,
    TouchableWithoutFeedback,
    Image
} from 'react-native';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { createHospitalUser } from '../../src/graphql/mutations';
import { getSystem } from '../../src/graphql/queries';

import { AppContext } from '../../AppContext';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {styles} from '../../styles'


const SelectHospital = ({navigation, route} : any) => {

    const {systemID} = route.params

    const [hospitals, setHospitals] = useState([])

    const [sys, setSys] = useState({
        id: '',
        name: '',
        imageUri: '',
    })

    const [hospitalIDs, setHospitalIDs] = useState([])

    const SCREEN_HEIGHT = Dimensions.get('window').height
    const SCREEN_WIDTH = Dimensions.get('window').width

    useEffect (() => {
        const fetchHospitals = async () => {
            const getIt = await API.graphql(
                graphqlOperation(
                    getSystem, {
                        id: systemID,
                    })
            )
            setHospitals(getIt.data.getSystem.hospitals.items);
            setSys(getIt.data.getSystem)
        }
        fetchHospitals();
    }, [systemID])

    const Proceed = async () => {

        if (hospitalIDs.length !== 0) {
            console.log(hospitalIDs)
            const userInfo = await Auth.currentAuthenticatedUser();

            for (let i = 0; i < hospitalIDs.length; i++) {
                const response = await API.graphql(
                    graphqlOperation(
                    createHospitalUser, {input :{
                        userID: userInfo.attributes.sub,
                        hospitalID: hospitalIDs[i]
                    }})
                )
                console.log(response);
                navigation.navigate('SelectDept', {systemID: systemID, systemImageUri: sys.imageUri, systemName: sys.name});
                
            }

            
        } else {
            alert('Please select a hospital you work at. If you do not see your hospital here, please contact your hospital administration to get added to our system')
        }
    }
    
    return (
        <View style={[styles.container, {justifyContent: 'space-between', height: SCREEN_HEIGHT}]}>
            <View style={{marginTop: 0, alignItems: 'center'}}>
            <View style={{width: SCREEN_WIDTH - 40, alignItems: 'center', marginTop: 60, backgroundColor: 'transparent', borderRadius: 20, paddingHorizontal: 20, paddingBottom: 20}}>
                {sys.imageUri.length > 1 ? (
                    <Image
                        style={{height: 100, width: SCREEN_WIDTH - 100, resizeMode: 'contain'}}
                        source={{uri: sys.imageUri}}
                    />
                ) : (
                    <Text style={[styles.title, {fontSize: 26, marginTop: 20}]}>
                        {sys.name}
                    </Text>
                )}
            </View> 
            <Text style={[styles.title, {fontSize: 20, marginTop: 10, marginBottom: 20}]}>
                Select your hospital(s):
                </Text>
            </View> 
            <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true} contentContainerStyle={{justifyContent: 'flex-start'}}>
                {hospitals.map(({id, name, color, abbreviation, streetNum, streetAddress, city, state, postalCode, imageUri}, index) => {

                const AddTo = ({hospid} : any) => {
                    if (hospitalIDs.includes(hospid)) {
                        setHospitalIDs(hospitalIDs.filter(item => item !== id))
                    } else {
                        setHospitalIDs([...hospitalIDs,hospid])
                    }
                }

                return (
                    <TouchableWithoutFeedback onPress={() => AddTo({hospid: id})}>
                        <View style={{ margin: 10, paddingVertical: 12, paddingHorizontal: 20, borderWidth: 2, borderRadius: 10,
                            borderColor: hospitalIDs.includes(id) === true ? 'maroon' : '#fff', 
                            backgroundColor: hospitalIDs.includes(id) === true ? '#fff' : '#fff',
                        }}>
                            <View style={{borderRadius: 10, elevation: 4, shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3,}}>
                                <Image
                                    style={{height: 200, width: SCREEN_WIDTH - 80, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                    source={{uri: imageUri}}
                                />
                                <View style={{padding: 10, backgroundColor: '#fff', borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}>
                                    <Text style={{fontSize: 18, fontWeight: '600', color: '#474747', textTransform: 'capitalize'}}>
                                        {name}
                                    </Text>
                                    <Text style={{fontSize: 14, color: 'gray'}}>
                                        {streetNum} {streetAddress}
                                    </Text>
                                    <Text style={{fontSize: 14, color: 'gray', textTransform: 'capitalize'}}>
                                        {city}, {state} {postalCode}
                                    </Text>
                                </View>
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
                <TouchableOpacity onPress={() =>  navigation.navigate('Welcome')}>
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

export default SelectHospital;