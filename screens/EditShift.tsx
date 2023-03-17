import React, {useState, useContext, useEffect} from 'react';
import {
    View, 
    Text,
    TextInput, 
    TouchableOpacity, 
    Keyboard, 
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
    ImageBackground,
    ActivityIndicator
} from 'react-native';

import { format } from "date-fns";
import DatePicker from 'react-native-date-picker'

import { StatusBar } from 'expo-status-bar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Provider, Portal, Modal} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';

import useStyles from '../styles';
import { AppContext } from '../AppContext';

import { Auth, graphqlOperation, API } from 'aws-amplify';
import { getShift, getRole, getUser} from '../src/graphql/queries';
import { updateShift} from '../src/graphql/mutations';

const EditShift = ({navigation, route} : {navigation: any, route : any}) => {

    const { id } = route.params

    const { theme } = useContext(AppContext);
    const { userID } = useContext(AppContext);
    const { systemID } = useContext(AppContext);
    const { departID } = useContext(AppContext);
    const { hospID } = useContext(AppContext);

    const styles = useStyles(theme);

    const nightimage ={uri: 'https://wallpapers.com/images/hd/romantic-blue-moon-and-stars-7bthn2mib21qvff0.jpg'}
    const dayimage ={uri: 'https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4=' }

    const [creating, setCreating] = useState(false);

    const [roles, setRoles] = useState([])
    const [roleTitle, setRoleTitle] = useState('Select Role');

    const [date, setDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date('2023-01-15T12:00:00'));
    const [endTime, setEndTime] = useState(new Date('2023-01-15T00:00:00'));

    const howmany = [1, 2, 3, 4, 5, 6, 7, 8];
    const multiplier = [1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0];

    const [shiftTypes, setShiftTypes] = useState(['Regular', 'CCT', 'Charge', 'Manager' ])

    const priority = ['normal', 'high needs'];

    const [quals, setQuals] = useState([]);

    const [qualIDs, setQualIDs] = useState([])

    const [data, setData] = useState({
            type: 'Shift',
            createdByID: '', //the id of the manager who created the shift
            name: 'Regular', //type of shift - CCT, charge, 
            notes: '',
            systemID: '',
            hospitalID: '',
            departmentID: '',
            roleID: '',
            announcementID: '',
            quals: [], //what quals are needed
            date: format((date), "MMMM do yyyy"), //start date of the shift, format (March 8th 2023)
            month: 0, //month integer
            year: 0, //year integer
            startTime: 0,
            startAMPM: 'AM', //AM or PM
            endTime: 0,
            endAMPM: 'PM', //AM or PM
            payMultiplier: 1.0, //must be a decimal
            payRate: 0, //float, whatever that means
            payAddToShift: 0,
            payAddToHour: 0,
            status: '', //open, filled, pending
            userID: '', //person working the shift
            priority: 'normal', //urgent, high needs, normal
            numNeeded: 1, //how many of the same shift are need. will loop and create multiple
            trade: false, //is the shift for trade
            giveUp: false, //is this someone giving up their shift
            approved: false, //approved or denied
            shiftType: 'day', // day or night
            jobType: 'Regular',
    });

    const [shift, setShift] = useState();

    const [processing, setProcessing] = useState(false)

    useEffect(() => {
        const fetchInfo = async () => {

            setProcessing(true)

            const response = await API.graphql(graphqlOperation(
                getShift, {id: id}
            ))

//completely unnecessary code, could have just updated the schema
            let endhour = response.data.getShift.endTime.charAt(1) === ':' ? response.data.getShift.endTime.charAt(0) : response.data.getShift.endTime.slice(0, 2);
            let endhours = response.data.getShift.endTime.slice(-2) === 'AM' ? +endhour : +endhour + 12
            let endminute = response.data.getShift.endTime.charAt(1) === ':' ? response.data.getShift.endTime.slice(2, 2) : response.data.getShift.endTime.slice(3, 2);
            
            let starthour = response.data.getShift.startTime.charAt(1) === ':' ? response.data.getShift.startTime.charAt(0) : response.data.getShift.startTime.slice(0, 2);
            let starthours = response.data.getShift.startTime.slice(-2) === 'AM' ? +starthour : +starthour + 12
            let startminute = response.data.getShift.startTime.charAt(1) === ':' ? response.data.getShift.startTime.slice(2, 2) : response.data.getShift.startTime.slice(3, 2);
            
            const endresult = (new Date(2014, 8, 0, endhours, endminute, 0))
            const startresult = (new Date(2014, 8, 0, starthours, startminute, 0))

            setShift(response.data.getShift)
            setStartTime(startresult)
            setEndTime(endresult)
            setData({...data, 
                type: 'Shift',
                createdByID: userID, //the id of the manager who created the shift
                //name: '', //type of shift - CCT, charge, 
                notes: response.data.getShift.notes,
                systemID: systemID,
                hospitalID: hospID,
                departmentID: departID,
                //roleID: '',
                //announcementID: '',
                //quals: [], //what quals are needed
                date: response.data.getShift.date, //start date of the shift, format (March 8th 2023)
                month: 0, //month integer
                year: 0, //year integer
                startTime: 0,
                startAMPM: response.data.getShift.startAMPM, //AM or PM
                endTime: 0,
                endAMPM: response.data.getShift.endAMPM, //AM or PM
                payMultiplier: response.data.getShift.payMultiplier, //must be a decimal
                payRate: response.data.getShift.payRate, //float, whatever that means
                payAddToShift: 0,
                payAddToHour: 0,
                status: response.data.getShift.status, //open, filled, pending
                userID: response.data.getShift.userID, //person working the shift
                priority: response.data.getShift.priority, //urgent, high needs, normal
                numNeeded: 1, //how many of the same shift are need. will loop and create multiple
                trade: false, //is the shift for trade
                giveUp: false, //is this someone giving up their shift
                approved: false, //approved or denied
                shiftType: response.data.getShift.shiftType, // day or night
                jobType: response.data.getShift.jobType,//this does not exist in the schema
            })
            setProcessing(false)
        }
        
        fetchInfo();
    }, [])

    const Update = async () => {

        setCreating(true);
        
        try {

        console.log(data)

        for (let i = 0; i < data.numNeeded; i++) {
            const response = await API.graphql(graphqlOperation(
                updateShift, {input: {
                    id: id,
                    type: 'Shift',
                    notes: data.notes,
                    startTime: format(startTime, "p"),
                    endTime: format(endTime, "p"),
                    payMultiplier: data.payMultiplier, //must be a decimal
                    payRate: data.payRate, //float, whatever that means
                    priority: data.priority, //urgent, high needs, normal
                    shiftType: data.shiftType, // day or night
                }}
            ))
            console.log(response)
            if (response && i === data.numNeeded - 1) {
                navigation.navigate('FilledShifts', {trigger: Math.random()});
            }
        }

        setCreating(false);

        } catch (e) {
            console.log(e)
            setCreating(false);
            alert(e.toString())
        }
    }

    const handleNote = (val : any) => {
        setData({
            ... data,
            notes: val
        });
    };

    const handlePay = (val : any) => {
        setData({
            ... data,
            payRate: parseFloat(val)
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

    //confirm modal
    const [visible11, setVisible11] = useState(false);
    const showQualsModal = () => {setVisible11(true);}
    const hideQualsModal = () => setVisible11(false);

//modal container style
    const containerStyle = {
        backgroundColor: theme === true ? '#000' : '#fff', 
        borderRadius: 15,
        paddingVertical: 10
    };

    const dateplus = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const day = today.getDate();
        const c = new Date(year, month + 4, day);
        return c;
    }

    const dateminus = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const day = today.getDate();
        const c = new Date(year, month, day - 1);
        return c;
    }

    const [isStartDayNight, setIsStartDayNight] = useState('day');
    const [isEndDayNight, setIsEndDayNight] = useState('night');

    useEffect(() => {
        const hours = startTime.getHours();
        if (hours > 0 && hours < 7 || hours > 18) {
            setIsStartDayNight('night');
        } else {
            setIsStartDayNight('day')
        }
    }, [startTime])

    useEffect(() => {
        const hours = endTime.getHours();
        if (hours > 0 && hours < 7 || hours > 18) {
            setIsEndDayNight('night');
        } else {
            setIsEndDayNight('day')
        }
    },  [endTime])

    useEffect(() => {
        const starthours = startTime.getHours();
        const endhours = endTime.getHours();

        if (endhours < 8 || starthours > 18 ) {
            setData({...data, shiftType: 'night'})
        } else {
            setData({...data, shiftType: 'day'})
        }
    }, [startTime, endTime])

    const GetQuals = async ({id, title } : any) => {
        const response = await API.graphql(graphqlOperation(
            getRole, {id: id}
        ))
        hideRoleModal(); 
        setData({...data, roleID: id}); 
        setRoleTitle(title);
        setQuals(response.data.getRole.quals.items);
        }
 
    return (
        <Provider>
            <Portal>
{/* role modal */}
                <Modal visible={visible} onDismiss={hideRoleModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                        {roles.map(({id, acronym, title} : any) => {
                            return (
                                <TouchableOpacity onPress={() => GetQuals({id, title})}>
                                    <Text key={id} style={[styles.paragraph, {fontSize: 20, fontWeight: 'bold', paddingVertical: 16}]}>
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
                        {shiftTypes.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => {hideTypeModal(); setData({...data, name: shiftTypes[index]});}}>
                                    <Text style={[styles.paragraph, {fontSize: 20, fontWeight: 'bold', paddingVertical: 16, width: Dimensions.get('window').width, textAlign: 'center'}]}>
                                        {item}
                                    </Text> 
                                </TouchableOpacity>
                                
                            )
                        })}
                    </View>
                </Modal>
{/* Date Modal */}
                <Modal visible={visible3} onDismiss={hideDateModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                        <DatePicker 
                            date={date} 
                            onDateChange={setDate} 
                            maximumDate={new Date(dateplus())}
                            minimumDate={new Date(dateminus())}
                            mode='date'
                            textColor={theme === true ? '#fff' : '#000'}
                            //is24hourSource='device'
                        />
                    </View>
                </Modal>
{/* start time Modal */}
                <Modal visible={visible4} onDismiss={hideStartModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                        <DatePicker 
                            date={startTime} 
                            onDateChange={setStartTime}
                            mode='time'
                            textColor={theme === true ? '#fff' : '#000'}
                            //is24hourSource='device'
                        />
                    </View>
                </Modal>
{/* end time Modal */}
                <Modal visible={visible5} onDismiss={hideEndModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                        <DatePicker 
                            date={endTime} 
                            onDateChange={setEndTime}
                            mode='time'
                            textColor={theme === true ? '#fff' : '#000'}
                            //is24hourSource='device'
                        />
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
                                        <Text style={[styles.paragraph, {fontSize: 20, fontWeight: 'bold', paddingVertical: 16, width: Dimensions.get('window').width, textAlign: 'center'}]}>
                                            {multiplier}x
                                        </Text> 
                                    </TouchableOpacity>
                                    
                                )
                            })}
                            <View style={{height: 140}}/>
                        </ScrollView>
                        <LinearGradient
                        colors={['transparent', 'transparent', theme === true ? '#000000a5' : '#ffffffa5', theme === true ? '#000' : '#fff']}
                        style={{ position: 'absolute', top: 0, height: 120, width: Dimensions.get('window').width}}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                    />
                    <LinearGradient
                        colors={['transparent', 'transparent', theme === true ? '#000000a5' : '#ffffffa5', theme === true ? '#000' : '#fff']}
                        style={{ position: 'absolute', bottom: 0, height: 120, width: Dimensions.get('window').width}}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                    />
                    </View>
                </Modal>
{/* payrate Modal */}
                <Modal visible={visible7} onDismiss={hidePayModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                    <View style={[styles.inputfield, {alignItems: 'center', justifyContent: 'center', flexDirection: 'row', height: 60, backgroundColor: 'white', width: '50%'}]}>
                        <Text style={{fontSize: 20}}>
                            $
                        </Text>
                        <TextInput 
                            placeholder='--'
                            placeholderTextColor='#000000a5'
                            style={[styles.textInputTitle, {color: '#000', fontSize: 30, textAlign: 'center'}]}
                            maxLength={6}
                            onChangeText={(val) => handlePay(val)}
                            autoCapitalize='none'
                            multiline={true}
                            keyboardType={"number-pad"}
                        />
                    </View>
                    </View>
                </Modal>
{/* priority Modal */}
                <Modal visible={visible8} onDismiss={hidePriorityModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                        {priority.map((item, index) => {
                            return (
                                <TouchableOpacity onPress={() => {hidePriorityModal(); setData({...data, priority: priority[index]});}}>
                                    <Text style={[styles.paragraph, {textTransform: 'capitalize', fontSize: 20, fontWeight: 'bold', paddingVertical: 16, width: Dimensions.get('window').width, textAlign: 'center'}]}>
                                        {item}
                                    </Text> 
                                </TouchableOpacity>
                                
                            )
                        })}
                    </View>
                </Modal>
{/* quals Modal */}
                <Modal visible={visible11} onDismiss={hideQualsModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                        {quals.length === 0 ? (
                            <Text style={styles.paragraph}>
                                Please select a role
                            </Text>
                        ): (
                            <View>
                            {quals.map(({id, title, abbreviation}, index) => {

                        //console.log(quals)

                        const AddTo = ({qualid} : any) => {
                            if (qualIDs.includes(qualid)) {
                                setQualIDs(qualIDs.filter(item => item !== id))
                            } else {
                                setQualIDs([...qualIDs,qualid])
                            }
                        }

                        return (
                                <TouchableWithoutFeedback key={id} onPress={() => AddTo({qualid: id})}>
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
                        </View>
                        )}
                    
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
                                        <Text style={[styles.paragraph, {fontSize: 20, fontWeight: 'bold', paddingVertical: 16, width: Dimensions.get('window').width, textAlign: 'center'}]}>
                                            {num}
                                        </Text> 
                                    </TouchableOpacity>
                                    
                                )
                            })}
                        <View style={{height: 80}}/>
                    </ScrollView> 
                    <LinearGradient
                        colors={['transparent', 'transparent', theme === true ? '#000000a5' : '#ffffffa5', theme === true ? '#000' : '#fff']}
                        style={{ position: 'absolute', top: 0, height: 100, width: Dimensions.get('window').width}}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                    />
                    <LinearGradient
                        colors={['transparent', 'transparent', theme === true ? '#000000a5' : '#ffffffa5', theme === true ? '#000' : '#fff']}
                        style={{ position: 'absolute', bottom: 0, height: 100, width: Dimensions.get('window').width}}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                    />
                    </View>
                </Modal>
{/* confirm Modal */}
                <Modal visible={visible10} onDismiss={hideConfirmModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                        <ScrollView style={{height: '70%'}} showsVerticalScrollIndicator={false}>
                            <Text style={[styles.title, {textAlign: 'center'}]}>
                                Update this shift?
                            </Text>
                            <Text style={[styles.paragraph, {textAlign: 'center'}]}>
                               {format(date, "MMMM do yyyy")}
                            </Text>
                            <View style={{alignSelf: 'center', height: 1, backgroundColor: '#000', width: Dimensions.get('window').width - 80, marginVertical: 20}}/>
                        {
                            Array.from({ length: data.numNeeded }, (_, k) => (
                            <View style={{alignSelf: 'center', marginVertical: 4, backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10, marginBottom: 0, borderWidth: 0.5, borderColor: 'gray', width: Dimensions.get('window').width - 20}}>
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
                                        {format(startTime, "p")}
                                    </Text>
                                    <Text style={{marginHorizontal: 4, fontSize: 16, color: data.shiftType === 'night' ? 'darkblue': '#000'}}>
                                    -
                                    </Text>
                                    <Text style={{fontSize: 16, fontWeight: '500', color: data.shiftType === 'night' ? 'darkblue': '#000'}}>
                                    {format(endTime, "p")}
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
                                {data.notes.length > 0 ? (
                                    <Text style={{}}>
                                        {data.notes}
                                    </Text>
                                ) : null}
                                </View>
                            </View>
                            ))
                        } 
                        <View style={{height: 100}}/>
                        </ScrollView>
                        <LinearGradient
                        colors={['#fff','#fff', '#ffffffa5','transparent']}
                        style={{position: 'absolute', bottom: 0 }}
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}
                    >
                        <View style={{marginBottom: 0, flexDirection: 'row', width: Dimensions.get('window').width, justifyContent: 'center', paddingHorizontal: 0}}>
                            {creating ? (
                                <View style={[{width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}]}>
                                    <ActivityIndicator size='small' color='maroon'/>
                                </View>
                            ) : (
                                <TouchableOpacity onPress={Update}>
                                    <View style={styles.buttonlayout}>
                                            <Text style={styles.buttontext}>
                                                Update
                                            </Text> 
                                        </View>  
                                </TouchableOpacity>
                            )}
                        </View>
                    </LinearGradient>
                    </View>

                </Modal>
            </Portal>
        
           
            <View style={[styles.container]}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView style={{ }} showsVerticalScrollIndicator={false}>
                        <View style={{justifyContent: 'space-between'}}>
{/* header */}
                            <View style={{alignItems: 'center', flexDirection: 'row', marginTop: 40, justifyContent: 'space-between'}}>
                                <FontAwesome 
                                    name='close'
                                    color={theme === true ? '#fff' : '#000'}
                                    size={20}
                                    style={{padding: 20, margin: -20}}
                                    onPress={() => navigation.goBack()}
                                />
                                <Text style={styles.title}>
                                    Edit Shift
                                </Text>
                                <View />
                            </View>
{/* body */}
                            <View style={{marginTop: 40}}>
    {/*role */}
                                {/* <TouchableOpacity onPress={showRoleModal}>
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
                                </TouchableOpacity> */}

    {/* type of shift (name) */}
                                {/* <TouchableOpacity onPress={showTypeModal}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>
                                        <Text style={[styles.title, {}]}>
                                            Type
                                        </Text>
                                        <View>
                                            <Text style={[styles.title, {color: 'gray'}]}>
                                                {data.name}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity> */}
    {/* select day */}
                                {/* <TouchableOpacity onPress={showDateModal}> */}
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>
                                        <Text style={[styles.title, {}]}>
                                            Date
                                        </Text>
                                        <View>
                                            <Text style={[styles.title, {color: 'gray'}]}>
                                                {shift?.date === format(new Date(), "MMMM do yyyy") ? 'Today' : shift?.date }
                                            </Text>
                                        </View>
                                    </View>
                                {/* </TouchableOpacity> */}
    {/* select start/end time */}
    {/* select am/pm */}
                                <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20}}>
                                    <View>
                                        <TouchableOpacity activeOpacity={0.8} onPress={showStartModal}>
                                            <ImageBackground
                                                source={isStartDayNight === 'night' ? nightimage : isStartDayNight === 'day' ? dayimage : dayimage}
                                                style={{backgroundColor: '#fff', elevation: 4, shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3,borderRadius: 10, height: 80, width: 120, overflow: 'hidden'}}
                                                //borderRadius={0}
                                                resizeMode="cover"
                                            >
                                                <View style={{justifyContent: 'center', alignItems: 'center', height: 80, width: 120, backgroundColor: '#ffffffa5', borderRadius: 10, overflow: 'hidden' }}>
                                                        <Text style={styles.timeselect}>
                                                            {format(startTime, "p")}
                                                        </Text>
                                                    </View> 
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{justifyContent: 'center'}}>
                                        <Text style={{}}>
                                            to
                                        </Text>
                                    </View>
                                    
                                    
                                    <View>
                                        <TouchableOpacity activeOpacity={0.8} onPress={showEndModal}>
                                            <ImageBackground
                                                source={isEndDayNight === 'night' ? nightimage : isEndDayNight === 'day' ? dayimage : dayimage}
                                                style={{backgroundColor: '#fff', elevation: 4, shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3,borderRadius: 10, height: 80, width: 120, overflow: 'hidden'}}
                                                //borderRadius={0}
                                                resizeMode="cover"
                                            >
                                                <View style={{justifyContent: 'center', alignItems: 'center', height: 80, width: 120, backgroundColor: '#ffffffa6', borderRadius: 10, overflow: 'hidden' }}>
                                                        <Text style={[styles.timeselect, {color: '#000'}]}>
                                                            {format(endTime, "p")}
                                                        </Text>
                                                    </View> 
                                            </ImageBackground>
                                        </TouchableOpacity>
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
                                            <Text style={[styles.title, {color: 'gray', textTransform: 'capitalize'}]}>
                                                {data.priority}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity> 
    {/* special quals needed */}
                                {/* <TouchableOpacity onPress={showQualsModal}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>
                                        <Text style={[styles.title, {}]}>
                                            Required Quals
                                        </Text>
                                        <View>
                                            <Text style={[styles.title, {color: 'gray'}]}>
                                                {qualIDs.length + ' ' + 'selected'}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity> */}
    {/* notes */}   
                                <View style={{marginVertical: 20}}>
                                    <Text style={[styles.title, {marginHorizontal: 0, marginVertical: 10,}]}>
                                        Notes
                                    </Text>
                                    <View style={[styles.inputfield, {height: 100, backgroundColor: 'white', borderWidth: 1}]}>
                                        <TextInput 
                                            // placeholder={data.notes}
                                            // placeholderTextColor='#000000a5'
                                            style={[styles.textInputTitle, {color: '#000]'}]}
                                            maxLength={200}
                                            onChangeText={(val) => handleNote(val)}
                                            autoCapitalize='none'
                                            multiline={true}
                                            defaultValue={data.notes}
                                        />
                                    </View>
                                </View>
    {/* numneeded, how many of this shift to create */}
                                {/* <TouchableOpacity onPress={showHowManyModal}>
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
                                </TouchableOpacity>        */}
                            </View>
    {/* footer */}
                            <View style={{height: 160}}/>
                        </View>
                        
                    </ScrollView>
                    </TouchableWithoutFeedback> 
{/* button */}
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
                                                Update Shift
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

export default EditShift;