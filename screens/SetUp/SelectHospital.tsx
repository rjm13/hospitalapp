 //select multiple hospitals (many to many relationship)

 import React, {useState} from 'react';
import {
    View, 
    Text, 
    Dimensions, 
    TouchableOpacity,
    TextInput,
    FlatList,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { createMessage } from '../../src/graphql/mutations';
import {Modal, Provider, Portal} from 'react-native-paper';
import { AppContext } from '../../AppContext';
import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {styles} from '../../styles'

const hospitals = [
    {
        id: '1',
        name: 'Lyndon B Johnson Hospital',
        abbreviation: 'LBJ',
        streetNum: '111',
        streetAddress: 'Kelly Street',
        city: 'Houston',
        state: 'TX',
        postalCode: '77578'
    },
    {
        id: '2',
        name: 'Ben Taub',
        abbreviation: 'BT',
        streetNum: '11101',
        streetAddress: 'Main Street',
        city: 'Houston',
        state: 'TX',
        postalCode: '77008'
    },
    {
        id: '3',
        name: 'Lyndon B Johnson Hospital',
        abbreviation: 'LBJ',
        streetNum: '111',
        streetAddress: 'Kelly Street',
        city: 'Houston',
        state: 'TX',
        postalCode: '77578'
    },
    {
        id: '4',
        name: 'Ben Taub',
        abbreviation: 'BT',
        streetNum: '11101',
        streetAddress: 'Main Street',
        city: 'Houston',
        state: 'TX',
        postalCode: '77008'
    },
    {
        id: '5',
        name: 'Lyndon B Johnson Hospital',
        abbreviation: 'LBJ',
        streetNum: '111',
        streetAddress: 'Kelly Street',
        city: 'Houston',
        state: 'TX',
        postalCode: '77578'
    },
    {
        id: '6',
        name: 'Ben Taub',
        abbreviation: 'BT',
        streetNum: '11101',
        streetAddress: 'Main Street',
        city: 'Houston',
        state: 'TX',
        postalCode: '77008'
    },
]

const SelectHospital = ({navigation} : any) => {

    const [hospitalIDs, setHospitalIDs] = useState([])

    const SCREEN_HEIGHT = Dimensions.get('window').height
    const SCREEN_WIDTH = Dimensions.get('window').width

    //modal
    const [visible, setVisible] = useState(false);
    const showModal = () => {setVisible(true)}
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: '#363636', borderRadius: 15, paddingVertical: 40};


    
    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <View>

                </View>
                </Modal>
            </Portal>
        <View style={[styles.container, {justifyContent: 'space-between', height: SCREEN_HEIGHT}]}>
            <View style={{marginTop: 0, alignItems: 'center'}}>
            <View style={{width: SCREEN_WIDTH - 40, alignItems: 'center', marginTop: 60, backgroundColor: '#e0e0e0', borderRadius: 20, paddingHorizontal: 20, paddingBottom: 20}}>
                <Text style={[styles.title, {fontSize: 26, marginTop: 20}]}>
                    Harris Health
                </Text>
                
            </View> 
            <Text style={[styles.title, {fontSize: 20, marginTop: 30, marginBottom: 20}]}>
                Select your hospital(s):
                </Text>
            </View> 
            <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true} contentContainerStyle={{justifyContent: 'flex-start'}}>
                {hospitals.map(({id, name, abbreviation, streetNum, streetAddress, city, state, postalCode}, index) => {

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
                            //backgroundColor: hospitalIDs.includes(id) === true ? 'cyan' : '#fff',
                        }}>
                            <Text style={{fontSize: 18, fontWeight: '600', color: '#474747',}}>
                                {name}
                            </Text>
                            <Text style={{fontSize: 14, color: 'gray'}}>
                                {streetNum} {streetAddress}
                            </Text>
                            <Text style={{fontSize: 14, color: 'gray'}}>
                                {city}, {state} {postalCode}
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
                <TouchableOpacity onPress={() =>  navigation.navigate('SelectDept')}>
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
        </Provider>
    )
}

export default SelectHospital;