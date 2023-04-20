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
    ActivityIndicator,
} from 'react-native';

import { format, parseISO, formatRelative } from "date-fns";
import DatePicker from 'react-native-date-picker'
import { StatusBar } from 'expo-status-bar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Provider, Portal, Modal} from 'react-native-paper';
import {LinearGradient} from 'expo-linear-gradient';

import useStyles from '../styles';
import { AppContext } from '../AppContext';
import Header from '../components/Header';

import { Auth, graphqlOperation, API, Analytics } from 'aws-amplify';
import { getDepartment, getRole} from '../src/graphql/queries';
import { createModule} from '../src/graphql/mutations';

const CreateModule = ({navigation} : {navigation: any}) => {

    const { 
        theme, 
        militaryTime,
        userRoleID, 
        userID, 
        systemID, 
        departID, 
        hospID
    } = useContext(AppContext);


    const styles = useStyles(theme);

    const [creating, setCreating] = useState(false);

    const [roles, setRoles] = useState([])
    const [roleTitle, setRoleTitle] = useState('Select Role');

    const [date, setDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date('2023-01-15T13:00:00'));
    const [endTime, setEndTime] = useState(new Date('2023-01-15T01:00:00'));

    const [data, setData] = useState({
        type: 'Module',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        name: '', 
        abbreviation: '',
        color: '',
        imageUri: '',
        deadline: new Date().toISOString(),
        completionPercent: 0,
        trainingDates: [],
        location: '',
        notes: '',
        ownerID: userID,
        //users: [],
        systemID: systemID,
        hospitalID: hospID,
        departmentID: departID,
        roleID: userRoleID,
    });

    useEffect(() => {
        
        // const fetchInfo = async () => {
        //     const response = await API.graphql(graphqlOperation(
        //         getDepartment, {id: departID}
        //     ))
        //     setData({...data, 
        //         type: 'Shift',
        //     })

        //     setRoles(response.data.getDepartment.roles.items)
        // }
        
        // fetchInfo();
    }, [])

    const Create = async () => {

        setCreating(true);
        
        try {

            const response = await API.graphql(graphqlOperation(
                createModule, {input: {
                    type: 'Module',
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                    name: data.name, 
                    deadline: data.deadline,
                    completionPercent: 0,
                    trainingDates: data.trainingDates,
                    //location: data.location,
                    //notes: data.notes,
                    ownerID: userID,
                    systemID: systemID,
                    hospitalID: hospID,
                    departmentID: departID,
                    roleID: userRoleID,
                }}
            ))

            console.log(response)
         
            // Analytics.record({
            //     name: 'moduleCreated',
            //     attributes: {
            //         moduleID: '',
            //         userID: '',
            //     }
            // })
            navigation.goBack();

        setCreating(false);


        } catch (e) {
            console.log(e)
            setCreating(false);
            alert(e.toString())
        }
    }

    const handleName = (val : any) => {
        setData({
            ... data,
            name: val
        });
    };

    const handleNote = (val : any) => {
        setData({
            ... data,
            notes: val
        });
    };

    const handleLocation = (val : any) => {
        setData({
            ... data,
            location: val
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

    const AddDateToArray = () => {
        let arr = data.trainingDates

        arr.push(date.toISOString())

        console.log(arr)

        setData({
            ... data,
            trainingDates: arr
        });
        hideDateModal();
    }

    const Item = () => {

        const deadlineDate = parseISO(data.deadline)

        const convertTime12to24 = (datetime : any) => {
    
          const timeap = datetime.slice(-8)
    
          const timeampm = timeap.startsWith(' ') ? datetime.slice(-7) : timeap
    
          const [time, modifier] = timeampm.split(' ');
    
          const beginLength = datetime.length - 8;
    
          const beginning = datetime.substring(0, beginLength)
        
          let [hours, minutes] = time.split(':');
        
          if (hours === '12') {
            hours = '00';
          }
        
          if (modifier === 'PM') {
            hours = parseInt(hours, 10) + 12;
          }
    
          let final = beginning + hours + ':' + minutes
    
          if (datetime.includes('/')) {
            return datetime;
          } else {
            return final;
          }
          
          //return `${hours}:${minutes}`;
        }

        return (
            <View style={{alignSelf: 'center', width: Dimensions.get('window').width - 40, padding: 10, borderRadius: 10, overflow: 'hidden', borderWidth: 1, borderColor: 'black' }}>
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                       <Text style={styles.title}>
                            {data.name}
                        </Text> 
                        <Text style={styles.title}>
                            {data.completionPercent}%
                        </Text>
                    </View>

                    <View>
                        <Text style={[styles.paragraph, {marginVertical: 10}]}>
                            {data.notes}
                        </Text>
                    </View>
                    
                    <Text style={[styles.paragraph, {color: 'maroon', fontWeight: '600'}]}>
                        Due {militaryTime === true ? convertTime12to24(formatRelative(deadlineDate, new Date())) : formatRelative(deadlineDate, new Date())}
                    </Text>
                    <View style={{marginTop: 20}}>
                        <Text style={styles.paragraph}>
                            Date(s):
                        </Text>
                        <View style={{marginVertical: 4, height: 1, width: Dimensions.get('window').width - 60, backgroundColor: 'black'}}/>
                        {data.trainingDates.map((item : any) => {
                            return (
                                <Text style={[styles.paragraph, {fontWeight: '300'}]}>
                                    {(formatRelative(parseISO(item), new Date())).charAt(0).toUpperCase() + (formatRelative(parseISO(item), new Date())).slice(1) }
                                </Text>  
                            )
                        })}
                    </View>

                    <View>
                        <Text style={[styles.paragraph, {marginTop: 10, color: 'gray', fontWeight: '600'}]}>
                            Location: {data.location}
                        </Text>
                    </View>
                    
                </View>
            </View>
        )
    }

  
    return (
        <Provider>
            <Portal>
{/* role modal */}
                <Modal visible={visible} onDismiss={hideRoleModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                        
                    </View>
                </Modal>
{/* Type of Shift Modal */}
                <Modal visible={visible2} onDismiss={hideTypeModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                        
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
                            mode='datetime'
                            fadeToColor={theme === true ? '#000' : '#fff'}
                            textColor={theme === true ? '#fff' : '#000'}
                            //is24hourSource='device'
                        />
                        <View style={{marginTop: 80, marginBottom: 40}}>
                            <TouchableOpacity onPress={AddDateToArray}>
                                <View style={styles.buttonlayout}>
                                    <Text style={styles.buttontext}>
                                        Add Date
                                    </Text> 
                                </View>  
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
{/* deadline time Modal */}
                <Modal visible={visible4} onDismiss={hideStartModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                        <DatePicker 
                            date={startTime} 
                            onDateChange={setStartTime}
                            mode='date'
                            textColor={theme === true ? '#fff' : '#000'}
                            fadeToColor={theme === true ? '#000' : '#fff'}
                            //is24hourSource='device'
                        />
                        <View style={{marginTop: 80, marginBottom: 40}}>
                            <TouchableOpacity onPress={() => {setData({...data, deadline: startTime.toISOString()}); hideStartModal() }}>
                                <View style={styles.buttonlayout}>
                                    <Text style={styles.buttontext}>
                                        Set Deadline
                                    </Text> 
                                </View>  
                            </TouchableOpacity>
                        </View>
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
                            fadeToColor={theme === true ? '#000' : '#fff'}
                            //is24hourSource='device'
                        />
                    </View>
                </Modal>
{/* multiplier Modal */}
                <Modal visible={visible6} onDismiss={hideMultiplierModal} contentContainerStyle={containerStyle}>
                <View></View>
                </Modal>
{/* payrate Modal */}
                <Modal visible={visible7} onDismiss={hidePayModal} contentContainerStyle={containerStyle}>
                <View></View>
                </Modal>
{/* priority Modal */}
                <Modal visible={visible8} onDismiss={hidePriorityModal} contentContainerStyle={containerStyle}>
                <View></View>
                </Modal>
{/* quals Modal */}
                <Modal visible={visible11} onDismiss={hideQualsModal} contentContainerStyle={containerStyle}>
                   <View></View>
                </Modal>

{/* how many Modal */}
                <Modal visible={visible9} onDismiss={hideHowManyModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center', }}>
                    
                    </View>
                </Modal>
{/* confirm Modal */}
                <Modal visible={visible10} onDismiss={hideConfirmModal} contentContainerStyle={containerStyle}>
                    <View style={{ alignItems: 'center'}}>
                        <ScrollView style={{height: '70%'}} showsVerticalScrollIndicator={false}>
                            <Text style={[styles.title, {textAlign: 'center'}]}>
                                Create this training module?
                            </Text>
                            {/* <Text style={[styles.paragraph, {textAlign: 'center'}]}>
                                Due {format(date, "MMMM do yyyy")}?
                            </Text> */}
                            <View style={{alignSelf: 'center', height: 1, backgroundColor: theme === true ? '#fff' : '#000', width: Dimensions.get('window').width - 80, marginVertical: 20}}/>
                    
                        <Item />

                        <View style={{height: 100}}/>

                        </ScrollView>
                        <LinearGradient
                        colors={[theme === true ? '#000' : '#fff',theme === true ? '#000' : '#fff', theme === true ? '#000000a5' : '#ffffffa5','transparent']}
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
                                <TouchableOpacity onPress={Create}>
                                    <View style={styles.buttonlayout}>
                                            <Text style={styles.buttontext}>
                                                Create
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
                            <Header header={'Create Training Module'}/>
{/* body */}
                            <View style={{marginTop: 40}}>

{/* name                            */}
                                <View style={{marginVertical: 20}}>
                                    <Text style={[styles.title, {marginHorizontal: 0, marginVertical: 10,}]}>
                                        Title
                                    </Text>
                                    <View style={[styles.inputfield, {height: 50, backgroundColor: theme === true ? '#363636' : 'white', borderWidth: 1}]}>
                                        <TextInput 
                                            placeholder='...'
                                            placeholderTextColor={theme === true ? '#ffffffa5' : '#000000a5'}
                                            style={[styles.textInputTitle, {color: theme === true ? '#fff' : '#000]'}]}
                                            maxLength={100}
                                            onChangeText={(val) => handleName(val)}
                                            autoCapitalize='words'
                                            multiline={false}
                                        />
                                    </View>
                                </View>

                                    {/*role */}
                                    <TouchableOpacity onPress={showStartModal}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>
                                        <Text style={[styles.title, {}]}>
                                            Deadline
                                        </Text>
                                        <View>
                                            <Text style={[styles.title, {color: roleTitle === 'Select Role' ? 'gray' : theme === true ? 'tomato' : 'maroon'}]}>
                                                {formatRelative(startTime, new Date())}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

    {/*role */}
                                <TouchableOpacity onPress={showRoleModal}>
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>
                                        <Text style={[styles.title, {}]}>
                                            Who is this for?
                                        </Text>
                                        <View>
                                            <Text style={[styles.title, {color: roleTitle === 'Select Role' ? 'gray' : theme === true ? 'tomato' : 'maroon'}]}>
                                                {roleTitle}
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

{/*location */}
                                <View style={{marginVertical: 20}}>
                                    <Text style={[styles.title, {marginHorizontal: 0, marginVertical: 10,}]}>
                                        Location
                                    </Text>
                                    <View style={[styles.inputfield, {height: 50, backgroundColor: theme === true ? '#363636' : 'white', borderWidth: 1}]}>
                                        <TextInput 
                                            placeholder='...'
                                            placeholderTextColor={theme === true ? '#ffffffa5' : '#000000a5'}
                                            style={[styles.textInputTitle, {color: theme === true ? '#fff' : '#000]'}]}
                                            maxLength={100}
                                            onChangeText={(val) => handleLocation(val)}
                                            autoCapitalize='words'
                                            multiline={false}
                                        />
                                    </View>
                                </View>

    {/* select day */}
                        
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>
                                        <Text style={[styles.title, {}]}>
                                            Date and Time
                                        </Text>
                                        <TouchableWithoutFeedback onPress={showDateModal}>
                                           <Text style={[styles.title, {color: 'darkgray' }]}>
                                             + Add
                                            </Text> 
                                        </TouchableWithoutFeedback>
                                        
                                </View>

                                {data.trainingDates.map(item => 
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={[styles.paragraph, {fontSize: 18, color: theme === true ? 'tomato' : 'maroon'}]}>
                                            {(formatRelative(parseISO(item), new Date())).charAt(0).toUpperCase() + (formatRelative(parseISO(item), new Date())).slice(1) }
                                        </Text>
                                    </View>
                                )}
    {/* notes */}   
                                <View style={{marginVertical: 20}}>
                                    <Text style={[styles.title, {marginHorizontal: 0, marginVertical: 10,}]}>
                                        Notes
                                    </Text>
                                    <View style={[styles.inputfield, {height: 100, backgroundColor: theme === true ? '#363636' : 'white', borderWidth: 1}]}>
                                        <TextInput 
                                            placeholder='...'
                                            placeholderTextColor={theme === true ? '#ffffffa5' : '#000000a5'}
                                            style={[styles.textInputTitle, {color: theme === true ? '#fff' : '#000]'}]}
                                            maxLength={200}
                                            onChangeText={(val) => handleNote(val)}
                                            autoCapitalize='none'
                                            multiline={true}
                                        />
                                    </View>
                                </View>
    
                            </View>
    {/* footer */}
                            <View style={{height: 160}}/>
                            </View>
                        
                    </ScrollView>
                </TouchableWithoutFeedback> 
{/* button */}
                    <LinearGradient
                        colors={[theme === true ? '#000' : '#fff',theme === true ? '#000' : '#fff', theme === true ? '#000000a5' : '#ffffffa5','transparent']}
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
                                <TouchableOpacity onPress={() => {showConfirmModal()}}>
                                    <View style={styles.buttonlayout}>
                                            <Text style={styles.buttontext}>
                                                Create
                                            </Text> 
                                        </View>  
                                </TouchableOpacity>
                            )}
                        </View>
                    </LinearGradient>

                    <StatusBar style={theme === true ? "light" : "dark"} backgroundColor='transparent'/>
            </View>
           
        </Provider>
    );
}

export default CreateModule;