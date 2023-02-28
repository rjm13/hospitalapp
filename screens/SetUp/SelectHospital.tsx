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
    }
]

const Welcome = ({navigation} : any) => {

    const [hospitalIDs, setHospitalIDs] = useState([])

    const SCREEN_HEIGHT = Dimensions.get('window').height

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
                <View style={{alignItems: 'center', marginTop: 100}}>
                    <Text style={[styles.title, {marginVertical: 30}]}>
                        Harris Health
                    </Text>
                    <Text style={styles.title}>
                        Please select your Hospital(s):
                    </Text>
                </View>
            </View> 
            <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={true} contentContainerStyle={{height: (SCREEN_HEIGHT/2), justifyContent: 'center'}}>
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
                        <View style={{margin: 10, paddingVertical: 12, paddingHorizontal: 20, borderWidth: 2, borderRadius: 10,
                            borderColor: hospitalIDs.includes(id) === true ? 'maroon' : '#fff', 
                            //backgroundColor: hospitalIDs.includes(id) === true ? 'cyan' : '#fff',
                        }}>
                            <Text style={{fontSize: 18, fontWeight: '700'}}>
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
            </ScrollView>
            <View style={{height: 160}}/>
{/* FOOTER */}
            <View style={[styles.buttonlayout, {marginVertical: 60, position: 'absolute', bottom: 0}]}>
                <TouchableOpacity onPress={() =>  navigation.navigate('SelectRole')}>
                    <Text style={styles.buttontext}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        </Provider>
    )
}

export default Welcome;