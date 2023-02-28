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

const SelectDept = ({navigation} : any) => {

    const [departmentID, setDepartmentID] = useState()

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
                <View style={{alignItems: 'center', marginTop: 60, backgroundColor: '#e0e0e0', borderRadius: 20, paddingHorizontal: 20, paddingBottom: 20}}>
                    <Text style={[styles.title, {fontSize: 26, marginTop: 20}]}>
                        Harris Health
                    </Text>
                    <View style={{flexDirection: 'row', width: Dimensions.get('window').width - 80, justifyContent: 'center', marginVertical: 0}}>
                        <Text style={[styles.paragraph, {marginVertical: 0}]}>
                            LBJ 
                        </Text>
                        <View style={{width: 10}}/>
                        <Text style={[styles.paragraph, {marginVertical: 0}]}>
                            Ben Taub
                        </Text>
                    </View>
                </View>

                    <Text style={[styles.title, {fontSize: 20, marginTop: 30, marginBottom: 20}]}>
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
                <TouchableOpacity onPress={() =>  navigation.navigate('SelectHospital')}>
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
                <TouchableOpacity onPress={() =>  navigation.navigate('SelectRole')}>
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

export default SelectDept;