import React, {useState, useContext, useEffect} from 'react';
import {
    View, 
    Text,
    TextInput, 
    TouchableOpacity, 
    Keyboard, 
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions
} from 'react-native';

import DatePicker from 'react-native-date-picker'

import { StatusBar } from 'expo-status-bar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../constants/Colors'
import {styles} from '../styles';
import { AppContext } from '../AppContext';
import {Provider, Portal, Modal} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';

import { Auth, graphqlOperation, API } from 'aws-amplify';
import { getUser, getDepartment} from '../src/graphql/queries';
import { createShift} from '../src/graphql/mutations';
import { ActivityIndicator } from 'react-native-paper';

const CreateShift = ({navigation, route} : {navigation: any, route : any}) => {

    const { theme } = useContext(AppContext);

    const [creating, setCreating] = useState(false);

    const [roles, setRoles] = useState([])
    const [roleTitle, setRoleTitle] = useState('Select Role');

    const [date, setDate] = useState(new Date());

    const howmany = [1, 2, 3, 4, 5, 6, 7, 8];
    const multiplier = [1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0];

    const [data, setData] = useState({
            type: 'Shift',
            createdByID: '', //the id of the manager who created the shift
            name: '', //type of shift - CCT, charge, 
            notes: '',
            systemID: '',
            hospitalID: '',
            departmentID: '',
            roleID: '',
            announcementID: '',
            qual: [], //what quals are needed
            date: '', //start date of the shift, format (March 8th 2023)
            month: 0, //month integer
            year: 0, //year integer
            startTime: 0,
            startAMPM: 'AM', //AM or PM
            endTime: 0,
            endAMPM: 'PM', //AM or PM
            payMultiplier: 1.0, //must be a decimal
            payRate: 0, //float, whatever that means
            status: '', //open, filled, pending
            userID: '', //person working the shift
            priority: 'regular', //urgent, high needs, normal
            numNeeded: 1, //how many of the same shift are need. will loop and create multiple
            trade: false, //is the shift for trade
            giveUp: false, //is this someone giving up their shift
            approved: false, //approved or denied
            shiftType: '', // day or night
    });

    useEffect(() => {
        const fetchInfo = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();
            const response = await API.graphql(graphqlOperation(
                getUser, {id: userInfo.attributes.sub}
            ))
            setData({...data, 
                type: 'Shift',
                createdByID: userInfo.attributes.sub, //the id of the manager who created the shift
                //name: '', //type of shift - CCT, charge, 
                //notes: '',
                systemID: userInfo.attributes.zoneinfo,
                hospitalID: response.data.getUser.hospID,
                departmentID: response.data.getUser.departmentID,
                //roleID: '',
                //announcementID: '',
                //qual: [], //what quals are needed
                date: '', //start date of the shift, format (March 8th 2023)
                month: 0, //month integer
                year: 0, //year integer
                startTime: 0,
                startAMPM: 'AM', //AM or PM
                endTime: 0,
                endAMPM: 'PM', //AM or PM
                payMultiplier: 1.0, //must be a decimal
                payRate: 0, //float, whatever that means
                status: '', //open, filled, pending
                userID: '', //person working the shift
                priority: 'regular', //urgent, high needs, normal
                numNeeded: 0, //how many of the same shift are need. will loop and create multiple
                trade: false, //is the shift for trade
                giveUp: false, //is this someone giving up their shift
                approved: false, //approved or denied
                shiftType: '', // day or night
            })

            setRoles(response.data.getUser.department.roles.items)

        }
        
        fetchInfo();
    }, [])

    const Create = async () => {

        setCreating(true);
        
        try {

        console.log(data)

        setCreating(false);

        } catch (e) {
            console.log(e)
            alert(e.toString())
        }
    }

    const handleNote = (val : any) => {
        setData({
            ... data,
            notes: val
        });
    };

//role modal
    const [visible, setVisible] = useState(false);
    const showRoleModal = () => {setVisible(true);}
    const hideRoleModal = () => setVisible(false);

//type of shift modal
    const [visible2, setVisible2] = useState(false);
    const showTypeModal = () => {setVisible2(true);}
    const hideTypeModal = () => setVisible2(false);

//date modal
    const [visible3, setVisible3] = useState(false);
    const showDateModal = () => {setVisible3(true);}
    const hideDateModal = () => setVisible3(false);

//start time modal
    const [visible4, setVisible4] = useState(false);
    const showStartModal = () => {setVisible4(true);}
    const hideStartModal = () => setVisible4(false);

//end time modal
    const [visible5, setVisible5] = useState(false);
    const showEndModal = () => {setVisible5(true);}
    const hideEndModal = () => setVisible5(false);

//multiplier modal
    const [visible6, setVisible6] = useState(false);
    const showMultiplierModal = () => {setVisible6(true);}
    const hideMultiplierModal = () => setVisible6(false);

//multiplier modal
    const [visible7, setVisible7] = useState(false);
    const showPayModal = () => {setVisible7(true);}
    const hidePayModal = () => setVisible7(false);

//priority modal
    const [visible8, setVisible8] = useState(false);
    const showPriorityModal = () => {setVisible8(true);}
    const hidePriorityModal = () => setVisible8(false);

//priority modal
    const [visible9, setVisible9] = useState(false);
    const showHowManyModal = () => {setVisible9(true);}
    const hideHowManyModal = () => setVisible9(false);

//confirm modal
    const [visible10, setVisible10] = useState(false);
    const showConfirmModal = () => {setVisible10(true);}
    const hideConfirmModal = () => setVisible10(false);

//modal container style
    const containerStyle = {
        backgroundColor: '#fff', 
        borderRadius: 15,
        paddingVertical: 10
    };
    
    return (
        <Provider>
            <Portal>
{/* role modal */}
                <Modal visible={visible} onDismiss={hideRoleModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                        {roles.map(({id, acronym, title} : any) => {
                            return (
                                <TouchableOpacity onPress={() => {hideRoleModal(); setData({...data, roleID: id}); setRoleTitle(title)}}>
                                    <Text key={id} style={{fontSize: 20, fontWeight: 'bold', paddingVertical: 16, color: '#000'}}>
                                        {title}
                                    </Text> 
                                </TouchableOpacity>
                                
                            )
                        })}
                    </View>
                </Modal>
{/* Type of Shift Modal */}
                <Modal visible={visible2} onDismiss={hideTypeModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                        {roles.map(({id, acronym, title} : any) => {
                            return (
                                <TouchableOpacity onPress={() => {hideTypeModal()}}>
                                    <Text key={id} style={{fontSize: 20, fontWeight: 'bold', paddingVertical: 16, color: '#000'}}>
                                        {acronym} CCT
                                    </Text> 
                                </TouchableOpacity>
                                
                            )
                        })}
                    </View>
                </Modal>
{/* Date Modal */}
                <Modal visible={visible3} onDismiss={hideDateModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                        <DatePicker date={date} onDateChange={setDate} />
                    </View>
                </Modal>
{/* start time Modal */}
                <Modal visible={visible4} onDismiss={hideStartModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                    </View>
                </Modal>
{/* end time Modal */}
                <Modal visible={visible5} onDismiss={hideEndModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                    </View>
                </Modal>
{/* multiplier Modal */}
                <Modal visible={visible6} onDismiss={hideMultiplierModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center', height: '70%'}}>
                    
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{height: 100}}/>
                            {multiplier.map((multiplier) => {
                                return (
                                    <TouchableOpacity onPress={() => {hideMultiplierModal(); setData({...data, payMultiplier: multiplier});}}>
                                        <Text style={{fontSize: 20, fontWeight: 'bold', paddingVertical: 16, color: '#000', width: Dimensions.get('window').width, textAlign: 'center'}}>
                                            {multiplier}x
                                        </Text> 
                                    </TouchableOpacity>
                                    
                                )
                            })}
                            <View style={{height: 140}}/>
                        </ScrollView>
                        <LinearGradient
                        colors={['transparent', 'transparent', '#ffffffa5', '#fff']}
                        style={{ position: 'absolute', top: 0, height: 120, width: Dimensions.get('window').width}}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                    />
                    <LinearGradient
                        colors={['transparent', 'transparent', '#ffffffa5', '#fff']}
                        style={{ position: 'absolute', bottom: 0, height: 120, width: Dimensions.get('window').width}}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                    />
                    </View>
                </Modal>
{/* payrate Modal */}
                <Modal visible={visible7} onDismiss={hidePayModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                    </View>
                </Modal>
{/* priority Modal */}
                <Modal visible={visible8} onDismiss={hidePriorityModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                    </View>
                </Modal>
{/* how many Modal */}
                <Modal visible={visible9} onDismiss={hideHowManyModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center', }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{height: '80%'}}>
                        <View style={{height: 80}}/>
                        {howmany.map((num) => {
                                return (
                                    <TouchableOpacity style={{}} onPress={() => {hideHowManyModal(); setData({...data, numNeeded: num});}}>
                                        <Text style={{fontSize: 20, fontWeight: 'bold', paddingVertical: 16, color: '#000', width: Dimensions.get('window').width, textAlign: 'center'}}>
                                            {num}
                                        </Text> 
                                    </TouchableOpacity>
                                    
                                )
                            })}
                        <View style={{height: 80}}/>
                    </ScrollView> 
                    <LinearGradient
                        colors={['transparent', 'transparent', '#ffffffa5', '#fff']}
                        style={{ position: 'absolute', top: 0, height: 100, width: Dimensions.get('window').width}}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                    />
                    <LinearGradient
                        colors={['transparent', 'transparent', '#ffffffa5', '#fff']}
                        style={{ position: 'absolute', bottom: 0, height: 100, width: Dimensions.get('window').width}}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                    />
                    </View>
                </Modal>
{/* confirm Modal */}
                <Modal visible={visible10} onDismiss={hideConfirmModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                        <View style={{alignSelf: 'center', marginVertical: 4, backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10, marginBottom: 0, borderWidth: 0, borderColor: 'gray', width: Dimensions.get('window').width - 20}}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    {data.shiftType === 'night' ? (
                                        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 0}}>
                                        <Ionicons 
                                            name='moon'
                                            color='darkblue'
                                            size={12}
                                            style={{marginRight: 4}}
                                        />
                                        </View>
                                    ) : null}
            </View>
                <Text style={{fontSize: 16, fontWeight: '500', color: data.shiftType === 'night' ? 'darkblue': '#000'}}>
                {data.startTime + ' '}
                </Text>
                <Text style={{fontSize: 16, fontWeight: '500', color: data.shiftType === 'night' ? 'darkblue': '#000'}}>
                {data.startAMPM}
                </Text>
                <Text style={{marginHorizontal: 4, fontSize: 16, color: data.shiftType === 'night' ? 'darkblue': '#000'}}>
                -
                </Text>
                <Text style={{fontSize: 16, fontWeight: '500', color: data.shiftType === 'night' ? 'darkblue': '#000'}}>
                {data.endTime + ' '}
                </Text>
                <Text style={{fontSize: 16, fontWeight: '500', color: data.shiftType === 'night' ? 'darkblue': '#000'}}>
                {data.endAMPM}
                </Text>
            </View>
            
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <View style={{backgroundColor: '#FCF8DA', borderRadius: 20, borderColor: 'gold', paddingHorizontal: 4, paddingVertical: 0}}>
                <Text style={{}}>
                {data.name}
                </Text>
            </View>
            
            <View style={{backgroundColor: '#D2E0D7a5', borderRadius: 20, borderColor: 'gold', paddingHorizontal: 4,flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                <FontAwesome5 
                name='bolt'
                color='green'
                size={12}
                style={{marginRight: 4}}
                />
                <Text style={{fontSize: 14}}>
                {data.payMultiplier}x
                </Text>
            </View>

            <View style={{backgroundColor: '#D2E0D7a5', borderRadius: 20, borderColor: 'gold', paddingHorizontal: 4,flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
            <FontAwesome5 
                name='dollar-sign'
                color='green'
                size={12}
                style={{marginRight: 4}}
            />
            <Text style={{fontSize: 14}}>
                {'+' + '' + data.payRate}
            </Text>
            </View>
            </View>

            <View style={{marginVertical: 4}}>
            <Text style={{}}>
                {data.notes}
            </Text>
            </View>
                        </View>
                    </View>
                </Modal>
            </Portal>
        
           
                <View style={[styles.container]}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView style={{ }} showsVerticalScrollIndicator={false}>
                        <View style={{justifyContent: 'space-between'}}>
{/* header */}
                            <View style={{flexDirection: 'row', marginTop: 40, justifyContent: 'space-between'}}>
                                <FontAwesome 
                                    name='close'
                                    color='#000'
                                    size={20}
                                />
                                <Text style={styles.title}>
                                    Shift Template
                                </Text>
                                <View />
                            </View>
{/* body */}
                            <View style={{marginTop: 40}}>
    {/*role */}
                                <TouchableOpacity onPress={showRoleModal}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>
                                        <Text style={[styles.title, {}]}>
                                            Role
                                        </Text>
                                        <View>
                                            <Text style={[styles.title, {color: 'gray'}]}>
                                                {roleTitle}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

    {/* type of shift (name) */}
                                <TouchableOpacity onPress={showTypeModal}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>
                                        <Text style={[styles.title, {}]}>
                                            Type
                                        </Text>
                                        <View>
                                            <Text style={[styles.title, {color: 'gray'}]}>
                                                Select Shift Type
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
    {/* select day */}
                                <TouchableOpacity onPress={showDateModal}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>
                                        <Text style={[styles.title, {}]}>
                                            Date
                                        </Text>
                                        <View>
                                            <Text style={[styles.title, {color: 'gray'}]}>
                                                Select Date
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
    {/* select start/end time */}
    {/* select am/pm */}
                                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20}}>
                                    <View>
                                        <TouchableWithoutFeedback onPress={showStartModal}>
                                           <View style={{justifyContent: 'center', alignItems: 'center', height: 80, width: 120, backgroundColor: 'white', borderRadius: 10, elevation: 4, shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3,}}>
                                                <Text style={styles.timeselect}>
                                                    7:00
                                                </Text>
                                                <Text style={styles.timeselect}>
                                                    AM
                                                </Text>
                                            </View> 
                                        </TouchableWithoutFeedback> 
                                    </View>

                                    <View style={{justifyContent: 'center'}}>
                                        <Text style={{}}>
                                            to
                                        </Text>
                                    </View>
                                    
                                    
                                    <View>
                                        <TouchableWithoutFeedback onPress={showEndModal}>
                                            <View style={{justifyContent: 'center', alignItems: 'center', height: 80, width: 120, backgroundColor: 'white', borderRadius: 10, elevation: 4, shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3,}}>
                                                <Text style={styles.timeselect}>
                                                    7:00
                                                </Text>
                                                <Text style={styles.timeselect}>
                                                    PM
                                                </Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </View>
                                </View>  

    {/* pay multiplier */}                          
    {/* pay rate */}
                                <Text style={[styles.title, {marginVertical: 10,}]}>
                                    Incentives
                                </Text>
                                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20}}>
                                    <View>
                                        <View>
                                        <TouchableWithoutFeedback onPress={showMultiplierModal}>
                                           <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 80, width: 120, backgroundColor: 'white', borderRadius: 10, elevation: 4, shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3,}}>
                                                <FontAwesome5 
                                                    name='bolt'
                                                    size={18}
                                                    color='green'
                                                    style={{marginHorizontal: 4}}
                                                />
                                                <Text style={styles.timeselect}>
                                                    {data.payMultiplier}x
                                                </Text>
                                            </View> 
                                        </TouchableWithoutFeedback> 
                                    </View>
                                    </View>
                                    
                                    <View>
                                       
                                        <View>
                                        <TouchableWithoutFeedback onPress={showPayModal}>
                                           <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 80, width: 120, backgroundColor: 'white', borderRadius: 10, elevation: 4, shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3,}}>
                                                <FontAwesome5 
                                                    name='dollar-sign'
                                                    size={18}
                                                    color='green'
                                                    style={{marginHorizontal: 4}}
                                                />
                                                <Text style={styles.timeselect}>
                                                    +{data.payRate}
                                                </Text>
                                            </View> 
                                        </TouchableWithoutFeedback> 
                                    </View>
                                    </View>
                                </View>  
    {/* priority */}
                                <TouchableOpacity onPress={showPriorityModal}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>
                                        <Text style={[styles.title, {}]}>
                                            Priority
                                        </Text>
                                        <View>
                                            <Text style={[styles.title, {color: 'gray'}]}>
                                                Regular
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity> 
    {/* special quals needed */}
                                <TouchableOpacity onPress={showRoleModal}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>
                                        <Text style={[styles.title, {}]}>
                                            Quals
                                        </Text>
                                        <View>
                                            <Text style={[styles.title, {color: 'gray'}]}>
                                                Select Quals
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
    {/* notes */}   
                                <View style={{marginVertical: 20}}>
                                    <Text style={[styles.title, {marginHorizontal: 0, marginVertical: 10,}]}>
                                        Notes
                                    </Text>
                                    <View style={[styles.inputfield, {height: 60}]}>
                                        <TextInput 
                                            placeholder='...'
                                            placeholderTextColor='#ffffffa5'
                                            style={styles.textInputTitle}
                                            maxLength={200}
                                            onChangeText={(val) => handleNote(val)}
                                            autoCapitalize='none'
                                            multiline={true}
                                        />
                                    </View>
                                </View>
    {/* numneeded, how many of this shift to create */}
                                <TouchableOpacity onPress={showHowManyModal}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>
                                        <Text style={[styles.title, {}]}>
                                            How Many?
                                        </Text>
                                        <View>
                                            <Text style={[styles.title, {color: 'gray'}]}>
                                                {data.numNeeded}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>       
                            </View>
    {/* footer */}
                            <View style={{height: 160}}/>
                        </View>
                        
                    </ScrollView>
                    </TouchableWithoutFeedback> 

                    <LinearGradient
                        colors={['#fff','#fff', '#ffffffa5','transparent']}
                        style={{position: 'absolute', bottom: 0 }}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                    >
                        <View style={{marginBottom: 20, flexDirection: 'row', width: Dimensions.get('window').width, justifyContent: 'center', paddingHorizontal: 40}}>
                            {creating ? (
                                <View style={[{width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}]}>
                                    <ActivityIndicator size='small' color='#fff'/>
                                </View>
                            ) : (
                                <TouchableOpacity onPress={showConfirmModal}>
                                    <View style={styles.buttonlayout}>
                                            <Text style={styles.buttontext}>
                                                Create Shift
                                            </Text> 
                                        </View>  
                                </TouchableOpacity>
                            )}
                        </View>
                    </LinearGradient>

                    <StatusBar style="dark" backgroundColor='transparent'/>
            </View>
           
        </Provider>
    );
}

export default CreateShift;