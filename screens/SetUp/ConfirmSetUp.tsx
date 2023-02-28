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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {LinearGradient} from 'expo-linear-gradient';

import {styles} from '../../styles'


const ConfirmSetUp = ({navigation} : any) => {

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

                <View style={{marginTop: 80}}>
                    <Text style={[styles.title, {fontSize: 26}]}>
                        Welcome firstName!
                    </Text>
                    <Text style={[styles.subtext, {textAlign: 'center'}]}>
                        firstName lastName
                    </Text>
                </View>

                <View style={{marginTop: 40}}>
                    <Text style={[styles.title, {}]}>
                        Harris Health (System)
                    </Text>
                </View>

                <View style={{alignItems: 'center', marginTop: 20}}>

                <View>
                    <Text style={styles.subtext}>
                        My Hospital(s)
                    </Text>
                    <View style={{height: 1, backgroundColor: '#000', width: SCREEN_WIDTH - 40}}/>
                </View>
                
                <View style={{flexDirection: 'row', width: Dimensions.get('window').width - 40, justifyContent: 'space-around'}}>
                    <Text style={[styles.title, {marginVertical: 10}]}>
                        LBJ
                    </Text>
                    <Text style={[styles.title, {marginVertical: 10}]}>
                        Ben Taub
                    </Text>
                </View>

                <View>
                    <Text style={styles.subtext}>
                        My Department
                    </Text>
                    <View style={{height: 1, backgroundColor: '#000', width: SCREEN_WIDTH - 40}}/>
                </View>
                <View style={{flexDirection: 'row', width: Dimensions.get('window').width - 40, justifyContent: 'space-around'}}>
                    <Text style={[styles.title, {marginVertical: 10}]}>
                        Emergency Department
                    </Text>
                </View>

                <View>
                    <Text style={styles.subtext}>
                        My Role(s)
                    </Text>
                    <View style={{height: 1, backgroundColor: '#000', width: SCREEN_WIDTH - 40}}/>
                </View>
                <View style={{flexDirection: 'row', width: Dimensions.get('window').width - 40, justifyContent: 'space-around'}}>
                    <Text style={[styles.title, {marginVertical: 10, textAlign: 'center'}]}>
                        Nurse (RN)
                    </Text>
                </View>

                <View>
                    <Text style={styles.subtext}>
                        My Qualifications
                    </Text>
                    <View style={{height: 1, backgroundColor: '#000', width: SCREEN_WIDTH - 40}}/>
                </View>
                <View style={{flexDirection: 'row', width: Dimensions.get('window').width - 40, justifyContent: 'space-around'}}>
                    <Text style={[styles.title, {marginVertical: 10, textAlign: 'center'}]}>
                        CCT
                    </Text>
                    <Text style={[styles.title, {marginVertical: 10, textAlign: 'center'}]}>
                        Charge
                    </Text>
                </View>
            </View>
        </View> 
        
        <View style={{height: 160}}/>
{/* FOOTER */}
        <LinearGradient
            colors={['#fff','#fff', '#ffffffa5','transparent']}
            style={{position: 'absolute', bottom: 0 }}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
        >
            <View style={{marginBottom: 20, flexDirection: 'row', width: SCREEN_WIDTH, justifyContent: 'space-between', paddingHorizontal: 40}}>
                <TouchableOpacity onPress={() =>  navigation.navigate('SelectQuals')}>
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
                <TouchableOpacity onPress={() =>  navigation.navigate('Redirect', {trigger: Math.random()})}>
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

export default ConfirmSetUp;