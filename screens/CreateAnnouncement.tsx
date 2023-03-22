import React, {useContext, useEffect, useState} from 'react';
import { 
  Text, 
  View, 
  Dimensions, 
  SectionList, 
  TouchableWithoutFeedback,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
Keyboard,
TextInput
 } from 'react-native';

import { format } from "date-fns";
import DatePicker from 'react-native-date-picker'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import {LinearGradient} from 'expo-linear-gradient';
import {Provider, Portal, Modal} from 'react-native-paper';

import { AppContext } from '../AppContext';
import useStyles from '../styles';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { createAnnouncement } from '../src/graphql/mutations';
import { getDepartment } from '../src/graphql/queries';

const CreateAnnouncement = ({ navigation }: any) => {

  const { userID } = useContext(AppContext);
  const { departID } = useContext(AppContext);
  const { hospID } = useContext(AppContext);
  const { systemID } = useContext(AppContext);
  const { userRoleID } = useContext(AppContext);
  const { theme } = useContext(AppContext);

  const styles = useStyles(theme);

  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date())
  const [endTime, setEndTime] = useState(new Date())
  const [priority, setPriority] = useState(['normal', 'attention', 'urgent'])

  const [didUpdate, setDidUpdate] = useState(false);

  const [announcementType, setAnnouncementType] = useState(['Announcement', 'Event'])

  //refresh state of the flatlist
  const [isCreating, setIsCreating] = useState(false);

  const [data, setData] = useState({
    type: 'Select Type', //Event or Announcement
    startTime: new Date(),
    endTime: new Date(),
    priority: 'normal',
    content: '',
    title: ''
  })

  const [roles, setRoles] = useState([])
  const [whoDat, setWhoDat] = useState('Select Group');
  const [whoOptions, setWhoOptions] = useState(['Entire Hospital', 'Entire Department', 'Specific Role'])

  useEffect(() => {
    const getSutff = async () => {
       if (whoDat === 'Specific Role') {
            const resp = await API.graphql(graphqlOperation(
                getDepartment, {id: departID}
            ))
            setRoles(resp.data.getDepartment.roles.items)
        } 
    }
    getSutff();
  }, [whoDat])

  const handleNote = (val : any) => {
    setData({
        ... data,
        content: val
    });
};

const handleTitle = (val : any) => {
    setData({
        ... data,
        title: val
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

//priority modal
const [visible8, setVisible8] = useState(false);
const showPriorityModal = () => {setVisible8(true);}
const hidePriorityModal = () => setVisible8(false);

//confirm modal
const [visible10, setVisible10] = useState(false);
const showConfirmModal = () => {setVisible10(true);}
const hideConfirmModal = () => setVisible10(false);

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

const Create = async () => {

    setIsCreating(true);
    
    try {

        const response = await API.graphql(graphqlOperation(
            createAnnouncement, {input: {
                type: data.type,
                updatedAt: new Date().toISOString(),
                createdAt: new Date().toISOString(),
                date: date.toISOString(),
                startTime: startTime.toISOString(),
                endTime: endTime.toISOString(),
                content: data.content,
                title: data.title,
            }}
        ))
        console.log(response)

    setIsCreating(false);
    if (response) {
        navigation.goBack();
    }


    } catch (e) {
        console.log(e)
        setIsCreating(false);
        alert(e.toString())
    }
}

  return (
    <Provider>
    <Portal>
{/* visible to modal */}
        <Modal visible={visible} onDismiss={hideRoleModal} contentContainerStyle={containerStyle}>
            <View style={{ alignItems: 'center'}}>
                {whoOptions.map((item, index : any) => {
                    return (
                        <TouchableOpacity onPress={() => setWhoDat(item)}>
                            <Text style={[styles.title, {fontSize: 20, paddingVertical: 16}]}>
                                {item}
                            </Text> 
                        </TouchableOpacity>  
                     )
                })}
            </View>
            {roles.length > 0 ? (
                <View>
                    {roles.map(({id, title, abbreviation} , index : any) => {
                    return (
                        <TouchableOpacity onPress={() => {setWhoDat(title); hideRoleModal()}}>
                            <Text style={[styles.paragraph, {fontSize: 16, paddingVertical: 16, textAlign: 'center'}]}>
                                {title}
                            </Text> 
                        </TouchableOpacity>  
                     )
                })}
                </View>
            ) : null}
        </Modal>
{/* Type of announcement Modal */}
        <Modal visible={visible2} onDismiss={hideTypeModal} contentContainerStyle={containerStyle}>
            <View style={{ alignItems: 'center'}}>
                {announcementType.map((item, index) => {
                    return (
                        <TouchableOpacity onPress={() => {hideTypeModal(); setData({...data, type: announcementType[index]});}}>
                            <Text style={[styles.title, {fontSize: 20, paddingVertical: 16, width: Dimensions.get('window').width, textAlign: 'center'}]}>
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
                    fadeToColor={theme === true ? '#000' : '#fff'}
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
                    fadeToColor={theme === true ? '#000' : '#fff'}
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
                    fadeToColor={theme === true ? '#000' : '#fff'}
                    //is24hourSource='device'
                />
            </View>
        </Modal>

{/* priority Modal */}
        <Modal visible={visible8} onDismiss={hidePriorityModal} contentContainerStyle={containerStyle}>
            <View style={{ alignItems: 'center'}}>
                {priority.map((item, index) => {
                    return (
                        <TouchableOpacity onPress={() => {hidePriorityModal(); setData({...data, priority: priority[index]});}}>
                            <Text style={[styles.title, {textTransform: 'capitalize', fontSize: 20, paddingVertical: 16, width: Dimensions.get('window').width, textAlign: 'center'}]}>
                                {item}
                            </Text> 
                        </TouchableOpacity>
                        
                    )
                })}
            </View>
        </Modal>
{/* confirm Modal */}
        <Modal visible={visible10} onDismiss={hideConfirmModal} contentContainerStyle={containerStyle}>
            <View style={{ alignItems: 'center'}}>
                <ScrollView style={{height: '70%'}} showsVerticalScrollIndicator={false}>
                    <Text style={[styles.title, {textAlign: 'center'}]}>
                        Create this announcement?
                    </Text>
                    <Text style={[styles.paragraph, {textAlign: 'center'}]}>
                        For {whoDat.toLowerCase()}s on {format(date, "MMMM do yyyy")}?
                    </Text>
                    <View style={{alignSelf: 'center', height: 1, backgroundColor: theme === true ? '#fff' : '#000', width: Dimensions.get('window').width - 80, marginVertical: 20}}/>
                
                    <View style={{alignSelf: 'center', marginVertical: 4, backgroundColor: theme === true ? '#363636a5' : 'white', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10, marginBottom: 0, borderWidth: 0.5, borderColor: 'gray', width: Dimensions.get('window').width - 20}}>
                        <View style={{flexDirection: 'row'}}>
                                           
                            <Text style={{fontSize: 16, fontWeight: '500', color: theme === true ? '#fff' : '#000'}}>
                                {format(startTime, "p")}
                            </Text>
                            <Text style={{marginHorizontal: 4, fontSize: 16, color: theme === true ? '#fff' : '#000'}}>
                            -
                            </Text>
                            <Text style={{fontSize: 16, fontWeight: '500', color: theme === true ? 'lightblue' : '#000'}}>
                            {format(endTime, "p")}
                            </Text>
                        </View>
                        
                        <View style={{flexDirection: 'row', alignItems: 'center',}}>
                        <View style={{backgroundColor: '#FCF8DA', borderRadius: 20, borderColor: 'gold', paddingHorizontal: 4, paddingVertical: 0}}>
                            <Text style={{}}>
                            {data.title}
                            </Text>
                        </View>
                        </View>

                        <View style={{marginVertical: 4}}>
                        {data.content.length > 0 ? (
                            <Text style={styles.paragraph}>
                                {data.content}
                            </Text>
                        ) : null}
                        </View>
                    </View>
                <View style={{height: 100}}/>
                </ScrollView>
                <LinearGradient
                colors={[theme === true ? '#000' : '#fff',theme === true ? '#000' : '#fff', theme === true ? '#000000a5' : '#ffffffa5','transparent']}
                style={{position: 'absolute', bottom: 0 }}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
            >
                <View style={{marginBottom: 0, flexDirection: 'row', width: Dimensions.get('window').width, justifyContent: 'center', paddingHorizontal: 0}}>
                    {isCreating ? (
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
                    <View style={{alignItems: 'center', flexDirection: 'row', marginTop: 40, justifyContent: 'space-between'}}>
                        <FontAwesome 
                            name='close'
                            color={theme === true ? '#fff' : '#000'}
                            size={20}
                            style={{padding: 20, margin: -20}}
                            onPress={() => navigation.goBack()}
                        />
                        <Text style={styles.title}>
                            Announcement Template
                        </Text>
                        <View />
                    </View>
{/* body */}
                    <View style={{marginTop: 40}}>
{/*to who */}
                        <TouchableOpacity >
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>
                                <Text style={[styles.title, {}]}>
                                    Visible To
                                </Text>
                                <View>
                                    <TouchableOpacity onPress={showRoleModal}>
                                        <Text style={[styles.title, {color: whoDat === 'Select Group' ? 'gray' : 'maroon'}]}>
                                            {whoDat}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>

{/* type of shift */}
                        <TouchableOpacity>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>
                                <Text style={[styles.title, {}]}>
                                    Type
                                </Text>
                                <View>
                                <TouchableOpacity onPress={showTypeModal}>
                                    <Text style={[styles.title, {color: data.type === 'Select Type' ? 'gray' : 'maroon'}]}>
                                        {data.type}
                                    </Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>

                        {data.type === 'Event' ? (
                        <View>
{/* select day */}
                            <TouchableOpacity>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>
                                    <Text style={[styles.title, {}]}>
                                        Date
                                    </Text>
                                    <View>
                                        <TouchableOpacity onPress={showDateModal}>
                                        <Text style={[styles.title, {color: 'gray'}]}>
                                            {format(date, "MMMM do yyyy") === format(new Date(), "MMMM do yyyy") ? 'Today' : format(date, "MMMM do yyyy") }
                                        </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
{/* select start/end time */}
{/* select am/pm */}
                            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20}}>
                                <View>
                                    <TouchableOpacity activeOpacity={0.8} onPress={showStartModal}>
                                        
                                            <View style={{justifyContent: 'center', alignItems: 'center', height: 80, width: 120, backgroundColor: theme === true ? '#00000033' : '#ffffffa5', borderRadius: 10, overflow: 'hidden' }}>
                                                    <Text style={[styles.timeselect, {color: theme === true ? '#fff' : '#000'} ]}>
                                                        {format(startTime, "p")}
                                                    </Text>
                                                </View> 
                                    </TouchableOpacity>
                                </View>

                                <View style={{justifyContent: 'center'}}>
                                    <Text style={styles.paragraph}>
                                        to
                                    </Text>
                                </View>
                                
                                
                                <View>
                                    <TouchableOpacity activeOpacity={0.8} onPress={showEndModal}>
                                            <View style={{justifyContent: 'center', alignItems: 'center', height: 80, width: 120, backgroundColor: theme === true ? '#00000033' : '#ffffffa6', borderRadius: 10, overflow: 'hidden' }}>
                                                    <Text style={[styles.timeselect, {color: theme === true ? '#fff' : '#000'}]}>
                                                        {format(endTime, "p")}
                                                    </Text>
                                                </View> 
                                    </TouchableOpacity>
                                </View>
                            </View>  
                        </View>
                        ) : null}
{/* priority */}
                        <TouchableOpacity>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20}}>
                                <Text style={[styles.title, {}]}>
                                    Importance
                                </Text>
                                <View>
                                <TouchableOpacity onPress={showPriorityModal}>
                                    <Text style={[styles.title, {color: data.priority === 'normal' ? 'gray' : 'maroon', textTransform: 'capitalize'}]}>
                                        {data.priority}
                                    </Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity> 
{/* title */}   
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
                                    onChangeText={(val) => handleTitle(val)}
                                    autoCapitalize='words'
                                    multiline={true}
                                />
                            </View>
                        </View> 
{/* notes */}   
                        <View style={{marginVertical: 20}}>
                            <Text style={[styles.title, {marginHorizontal: 0, marginVertical: 10,}]}>
                                Content
                            </Text>
                            <View style={[styles.inputfield, {height: 200, backgroundColor: theme === true ? '#363636' : 'white', borderWidth: 1}]}>
                                <TextInput 
                                    placeholder='...'
                                    placeholderTextColor={theme === true ? '#ffffffa5' : '#000000a5'}
                                    style={[styles.textInputTitle, {color: theme === true ? '#fff' : '#000]'}]}
                                    maxLength={400}
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
                    {isCreating ? (
                        <View style={[{width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}]}>
                            <ActivityIndicator size='small' color='#fff'/>
                        </View>
                    ) : (
                        <TouchableOpacity onPress={showConfirmModal}>
                            <View style={styles.buttonlayout}>
                                    <Text style={styles.buttontext}>
                                        Create Announcement
                                    </Text> 
                                </View>  
                        </TouchableOpacity>
                    )}
                </View>
            </LinearGradient>

            <StatusBar style={theme === true ? "light" : "dark"} backgroundColor='transparent'/>
    </View>
    </Provider>
  )

}

  export default CreateAnnouncement