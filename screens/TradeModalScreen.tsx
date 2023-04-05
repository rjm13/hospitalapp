import React, {useEffect, useState, useContext} from 'react';
import { 
  Text,
  View,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import useStyles from '../styles';
import { AppContext } from '../AppContext';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {format} from 'date-fns'
import {LinearGradient} from 'expo-linear-gradient';
import {Provider, Portal, Modal} from 'react-native-paper';
import DatePicker from 'react-native-date-picker'

import { Auth, graphqlOperation, API } from 'aws-amplify';
import { getShift, usersByPrimaryRole} from '../src/graphql/queries';
import { updateShift, deleteShift, createShift} from '../src/graphql/mutations';

const TradeModal = ({navigation, route} : any) => {

  const {id} = route.params;

  const { userID, militaryTime, theme, systemID, userRoleID, hospID, departID} = useContext(AppContext);

  const styles = useStyles(theme);

  const nightimage ={uri: 'https://wallpapers.com/images/hd/romantic-blue-moon-and-stars-7bthn2mib21qvff0.jpg'}
  const dayimage ={uri: 'https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4=' }

  const [shift, setShift] = useState({
    id: id,
    date: '',
    name: 'Regular',
    shiftType: '',
    startTime: '',
    endTime: '',
    isStartDayNight: '',
    isEndDayNight: '',
    payRate: 0,
    payMultiplier: 0,
    notes: '',
    createdBy: {
      id: '',
      firstName: ''
    },
    role: {
      id: '',
      acronym: '',
    },
    createdOn: new Date(),
    priority: '',
    status: '',
    user: {
      firstName: '',
      lastName: ''
    }
  })

  const [processing, setProcessing] = useState(false);

  const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date('2023-01-15T13:00:00'));
  const [endTime, setEndTime] = useState(new Date('2023-01-15T01:00:00'));
  const [type, setType] = useState('Regular');
  const [shiftTypes, setShiftTypes] = useState(['Regular', 'CCT', 'Charge', 'Manager'])

//fetch the shift from AWS  
  useEffect(() => {
    const fetchShift = async () => {
      const response = await API.graphql(graphqlOperation(
        getShift, {id: id}
    ))
    setShift(response.data.getShift)
    }
    fetchShift();
  }, [id])

//confirm modal
  const [visible10, setVisible10] = useState(false);
  const showConfirmModal = () => {setVisible10(true);}
  const hideConfirmModal = () => setVisible10(false);

  //confirm delete modal
  const [visible1, setVisible1] = useState(false);
  const showConfirmDeleteModal = () => {setVisible1(true);}
  const hideConfirmDeleteModal = () => setVisible1(false);

  //confirm modal
  const [visible11, setVisible11] = useState(false);
  const showReOpenModal = () => {setVisible11(true);}
  const hideReOpenModal = () => setVisible11(false);

    //trade modal
    const [visible2, setVisible2] = useState(false);
    const showTradeModal = () => {setVisible2(true);}
    const hideTradeModal = () => setVisible2(false);

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

    //multiptypelier modal
    const [visible6, setVisible6] = useState(false);
    const showTypeModal = () => {setVisible6(true);}
    const hideTypeModal = () => setVisible6(false);

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

const SendPush = async () => {

  const response = await API.graphql(graphqlOperation(
      usersByPrimaryRole, {
          primaryRoleID: userRoleID,
              filter: {
                  Setting3: {
                      eq: 'manager'
                  }
              }
      }
  ))

  for (let i = 0; i < response.data.usersByPrimaryRole.items.length; i++) {

      const message = {
          to: response.data.usersByPrimaryRole.items[i].Setting2,
          sound: "default",
          title: "You have a new trade request pending your approval.",
          body: "For Today",
          data: {someData: "goes here"},
      }

      await fetch("https://exp.host/--/api/v2/push/send", {
          method: "POST",
          headers: {
              Accept: "application/json",
              "Accept-encoding": "gzip, deflate",
              "Content-Type": "application/json",
          },
          body: JSON.stringify(message)
      });
  }
}

const PickUpShift = async () => {
    setProcessing(true);
    try {

      const init = await API.graphql(graphqlOperation(
        getShift, {id: id}
      ))

      if (init.data.getShift.status !== 'open') {
        alert('Oops! It looks like you were beat to the punch. Someone else has already requested to pick up this shift.')
        setProcessing(false)
      } else {

        const response = await API.graphql(graphqlOperation(
            updateShift, {input: {
              id: id,
              status: 'tradepending',
              userID: userID,
              updatedAt: new Date().toISOString()
            }}
        ))
        console.log(response)
        if (response) {
          SendPush();
          alert('A pickup request has been sent to your manager.')
          navigation.goBack();
          setProcessing(false)
        }
      }
    } catch (e) {
      setProcessing(false)
      alert(e.toString())
    }
}

const TradeShift = async () => {
  setProcessing(true);
  try {

    const init = await API.graphql(graphqlOperation(
      getShift, {id: id}
    ))

    if (init.data.getShift.status !== 'open') {
      alert('Oops! It looks like you were beat to the punch. Someone else has already requested to pick up this shift.')
      setProcessing(false)
    } else {


      const create = await API.graphql(graphqlOperation(
          createShift, {input: {
              type: 'Trade',
              createdByID: userID, //the id of the manager who created the shift
              systemID: systemID,
              hospitalID: hospID,
              departmentID: departID,
              roleID: userRoleID,
              notes: '',
              name: type,
              payMultiplier: 1,
              payRate: 0,
              //quals: [], //what quals are needed
              date: format((date), "MMMM do yyyy"), //start date of the shift, format (March 8th 2023)
              dateOrder: date.toISOString(),
              //month: 0, //month integer
              //year: 0, //year integer
              startTime: format(startTime, "p"),
              start: startTime.toISOString(),
              //startAMPM: 'AM', //AM or PM
              endTime: format(endTime, "p"),
              end: endTime.toISOString(),
              priority: 'normal', //urgent, high needs, normal
              numNeeded: 1, //how many of the same shift are need. will loop and create multiple
              trade: false, //is the shift for trade
              giveUp: false, //is this someone giving up their shift
              approved: false, //approved or denied
              //endAMPM: 'PM', //AM or PM
              //payAddToShift: 0,
              //payAddToHour: 0,
              status: 'trade', //open, filled, pending
              //userID: null, //person working the shift
              shiftType: 'day', // day or night
              isStartDayNight: 'day',
              isEndDayNight: 'day',
          }}
      ))

      const response = await API.graphql(graphqlOperation(
          updateShift, {input: {
            id: id,
            status: 'tradepending',
            userID: userID,
            updatedAt: new Date().toISOString(),
            tradeShiftID: create.data.createShift.id
          }}
      ))
      console.log(response)
      if (response) {
        SendPush();
        alert('A trade request has been sent to your manager.')
        navigation.goBack();
        setProcessing(false)
      }
    }
  } catch (e) {
    setProcessing(false)
    alert(e.toString())
  }
}

const ReOpenShift = async () => {
  setProcessing(true);
  try {

    const init = await API.graphql(graphqlOperation(
      getShift, {id: id}
    ))

    if (init.data.getShift.status === 'approved') {
      alert('Oops! It looks like you were beat to the punch. This shift is either expierd or no longer approved.')
      setProcessing(false)
    } else {

      const response = await API.graphql(graphqlOperation(
          updateShift, {input: {
            id: id,
            status: 'open',
            userID: null,
            updatedAt: new Date().toISOString()
          }}
      ))
      console.log(response)
      if (response) {
        alert('Shift has been re-opened')
        navigation.navigate('FilledShifts', {trigger: Math.random()});
        setProcessing(false)
      }
    }
  } catch (e) {
    setProcessing(false)
    alert(e.toString())
  }
}

const DeleteShift = async () => {
  setProcessing(true);
  try {

    const response = await API.graphql(graphqlOperation(
      deleteShift, {input: {id: id}}
    ))
      if (response) {
        alert('Shift deleted')
        navigation.goBack();
        setProcessing(false)
      }
  } catch (e) {
    setProcessing(false)
    alert(e.toString())
  }
}

const convertTime12to24 = (inputtime : any) => {
  const [time, modifier] = inputtime.split(' ');

  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
}


  return (
    <Provider>
      <Portal>

        <Modal visible={visible2} onDismiss={hideTradeModal} contentContainerStyle={containerStyle}>
          <View style={{height: '70%'}}>
            <Text style={[styles.paragraph, {marginBottom: 40, textAlign: 'center', fontSize: 15, fontWeight: '500', marginHorizontal: 20}]}>
              {/* Pick up this shift for {shift.date} from {convertTime12to24(shift.startTime)} to {convertTime12to24(shift.endTime)}? */}
              Select the shift date and time you would like to trade away
            </Text>
            <TouchableOpacity onPress={showDateModal}>
              <View style={{alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
                  <View>
                      <Text style={[styles.title, {color: theme === true ? '#fff' : '#000'}]}>
                          {format(date, "MMMM do yyyy") === format(new Date(), "MMMM do yyyy") ? 'Today' : format(date, "MMMM do yyyy") }
                      </Text>
                  </View>
              </View>
            </TouchableOpacity>

{/* select am/pm */}
            <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 0}}>
              <View>
                  <TouchableOpacity activeOpacity={0.8} onPress={showStartModal}>
                      
                          <View style={{justifyContent: 'center', alignItems: 'center', height: 60, width: 120, backgroundColor: theme === true ? '#00000033' : '#ffffffa5', borderRadius: 10, overflow: 'hidden' }}>
                                  <Text style={[styles.timeselect ]}>
                                      {format(startTime, "p")}
                                  </Text>
                              </View> 
                  </TouchableOpacity>
              </View>

              <View style={{justifyContent: 'center'}}>
                  <Text style={{}}>
                      to
                  </Text>
              </View>
              
              
              <View>
                  <TouchableOpacity activeOpacity={0.8} onPress={showEndModal}>
                      
                          <View style={{justifyContent: 'center', alignItems: 'center', height: 60, width: 120, backgroundColor: theme === true ? '#00000033' : '#ffffffa6', borderRadius: 10, overflow: 'hidden' }}>
                                  <Text style={[styles.timeselect]}>
                                      {format(endTime, "p")}
                                  </Text>
                              </View> 
                  </TouchableOpacity>
              </View>
            </View>  

{/* type of shift (name) */}
            <TouchableOpacity onPress={showTypeModal}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, marginHorizontal: 40}}>
                  <Text style={[styles.title, {}]}>
                      Type
                  </Text>
                  <View>
                      <Text style={[styles.title, {color: type === 'Regular' ? 'gray' : theme === true ? 'tomato' : 'maroon'}]}>
                          {type}
                      </Text>
                  </View>
              </View>
            </TouchableOpacity>

            <LinearGradient
          colors={[theme === true ? '#000' : '#fff',theme === true ? '#000' : '#fff', theme === true ? '#000000a5' : '#ffffffa5','transparent']}
          style={{position: 'absolute', bottom: -50 }}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
        >
          <View style={{width: Dimensions.get('window').width, justifyContent: 'center', paddingHorizontal: 40}}>
              {processing ? (
                  <View style={[{alignSelf: 'center', width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}]}>
                      <ActivityIndicator size='small' color='maroon'/>
                  </View>
              ) : (
                  <TouchableOpacity onPress={TradeShift}>
                      <View style={styles.buttonlayout}>
                              <Text style={styles.buttontext}>
                                  Send Trade Proposal
                              </Text> 
                          </View>  
                  </TouchableOpacity>
              )}
              <Text style={{textAlign: 'center', marginTop: 20, color: 'gray'}}>
                This shift trade will not be final until it has been approved by your manager.
              </Text>
          </View>
          
            </LinearGradient>
          </View>
        </Modal>

{/* Type of Shift Modal */}
        <Modal visible={visible6} onDismiss={hideTypeModal} contentContainerStyle={containerStyle}>
          <View style={{ alignItems: 'center'}}>
              {shiftTypes.map((item, index) => {
                  return (
                      <TouchableOpacity onPress={() => {hideTypeModal(); setType(shiftTypes[index]);}}>
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

        <Modal visible={visible10} onDismiss={hideConfirmModal} contentContainerStyle={containerStyle}>
          <View style={{height: '50%'}}>
            <Text style={[styles.paragraph, {textAlign: 'center', fontSize: 15, fontWeight: '500', marginHorizontal: 20}]}>
              Pick up this shift for {shift.date} from {convertTime12to24(shift.startTime)} to {convertTime12to24(shift.endTime)}?
            </Text>
            <LinearGradient
          colors={[theme === true ? '#000' : '#fff',theme === true ? '#000' : '#fff', theme === true ? '#000000a5' : '#ffffffa5','transparent']}
          style={{position: 'absolute', bottom: -50 }}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
        >
          <View style={{width: Dimensions.get('window').width, justifyContent: 'center', paddingHorizontal: 40}}>
              {processing ? (
                  <View style={[{alignSelf: 'center', width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}]}>
                      <ActivityIndicator size='small' color='maroon'/>
                  </View>
              ) : (
                  <TouchableOpacity onPress={PickUpShift}>
                      <View style={styles.buttonlayout}>
                              <Text style={styles.buttontext}>
                                  Request Pick Up
                              </Text> 
                          </View>  
                  </TouchableOpacity>
              )}
              <Text style={{textAlign: 'center', marginTop: 20, color: 'gray'}}>
                This shift pick up will not be final until it has been approved by your manager.
              </Text>
          </View>
          
        </LinearGradient>
          </View>
        </Modal>

        <Modal visible={visible1} onDismiss={hideConfirmDeleteModal} contentContainerStyle={containerStyle}>
          <View style={{height: '50%'}}>
            <Text style={[styles.paragraph, {textAlign: 'center', fontSize: 15, fontWeight: '500', marginHorizontal: 20}]}>
              Delete this shift for {shift.date} from {convertTime12to24(shift.startTime)} to {convertTime12to24(shift.endTime)}?
            </Text>
            <LinearGradient
          colors={[theme === true ? '#000' : '#fff',theme === true ? '#000' : '#fff', theme === true ? '#000000a5' : '#ffffffa5','transparent']}
          style={{position: 'absolute', bottom: -50 }}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
        >
          <View style={{width: Dimensions.get('window').width, justifyContent: 'center', paddingHorizontal: 40}}>
              {processing ? (
                  <View style={[{alignSelf: 'center', width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}]}>
                      <ActivityIndicator size='small' color='maroon'/>
                  </View>
              ) : (
                  <TouchableOpacity onPress={DeleteShift}>
                      <View style={styles.buttonlayout}>
                              <Text style={styles.buttontext}>
                                  Delete Shift
                              </Text> 
                          </View>  
                  </TouchableOpacity>
              )}
              <Text style={{textAlign: 'center', marginTop: 20, color: 'gray'}}>
                This shift will be permenantly deleted.
              </Text>
          </View>
          
        </LinearGradient>
          </View>
        </Modal>

        <Modal visible={visible11} onDismiss={hideReOpenModal} contentContainerStyle={containerStyle}>
          <View style={{height: '50%'}}>
            <Text style={[styles.paragraph, {textAlign: 'center', fontSize: 15, fontWeight: '500', marginHorizontal: 20}]}>
              Cancel this approval for {shift?.user?.firstName.toUpperCase()} {shift?.user?.lastName.toUpperCase()} and re-open this shift on {shift.date} from {convertTime12to24(shift.startTime)} to {convertTime12to24(shift.endTime)}?
            </Text>
            <LinearGradient
          colors={[theme === true ? '#000' : '#fff',theme === true ? '#000' : '#fff', theme === true ? '#000000a5' : '#ffffffa5','transparent']}
          style={{position: 'absolute', bottom: -50 }}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
        >
          <View style={{width: Dimensions.get('window').width, justifyContent: 'center', paddingHorizontal: 40}}>
              {processing ? (
                  <View style={[{alignSelf: 'center', width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}]}>
                      <ActivityIndicator size='small' color='maroon'/>
                  </View>
              ) : (
                  <TouchableOpacity onPress={ReOpenShift}>
                      <View style={styles.buttonlayout}>
                              <Text style={styles.buttontext}>
                                  Re-open
                              </Text> 
                          </View>  
                  </TouchableOpacity>
              )}
              <Text style={{textAlign: 'center', marginTop: 20, color: 'gray'}}>
                This will cancel the shift pick up and re-open the shift for others. To cancel the shift, click on the edit icon.
              </Text>
          </View>
          
        </LinearGradient>
          </View>
        </Modal>
      </Portal>
    <View style={styles.container}>
      <View style={{height: 60}}/>
{/* header icon row */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', width: Dimensions.get('window').width - 40}}>
        <FontAwesome onPress={()=> navigation.goBack()} name='close' size={20} color={theme === true ? '#fff' : '#000'} style={{padding: 20, margin: -20}}/>
        {shift?.createdByID === userID ? (
          <FontAwesome name='edit' size={20} color={theme === true ? '#fff' : '#000'} style={{padding: 20, margin: -20}} onPress={() => navigation.navigate('EditShift', {id: id})}/>
        ) : null}
      </View>
{/* date title */}
      <View style={{alignItems: 'center', marginBottom: 20, marginTop: 40}}>
        <Text style={{color: theme === true ? '#fff' : '#000', fontWeight: '800', fontSize: 30}}>
          {shift.date.substring(0, shift.date.length - 5)}
        </Text>
      </View>
      <View>
          {shift?.giveUp === true ? (
              <View style={{alignItems: 'center', marginTop: 20}}>
              <FontAwesome5 name='hands-helping' size={30} color={theme=== true ? 'orange' : 'tomato'}/>
              <Text style={{color: 'gray', fontSize: 12, textAlign: 'center'}}>
                Giving
              </Text>
              </View>
            ) : (
              <View style={{alignItems: 'center'}}>
              <FontAwesome5 name='people-arrows' size={20} color={theme=== true ? 'orange' : 'tomato'}/>
              <Text style={{color: 'gray', fontSize: 10, textAlign: 'center'}}>
                Trading
              </Text>
              </View>
            )}
          </View>
{/* shift type */}
      <View style={{marginVertical: 20, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={[styles.paragraph, {fontSize: 20, fontWeight: '500', color: shift.shiftType === 'day' && theme === false ? 'maroon' : shift.shiftType === 'night' && theme === true ? 'lightblue' : shift.shiftType === 'night' && theme === false ? 'darkblue' : 'tomato', textTransform: 'capitalize'}]}>
          {(shift.priority === 'normal' ? '' : shift.priority + ' ') + (shift.name === 'Regular' ? '' : shift.name + ' ')}
        </Text>
        <Text style={[styles.paragraph, {fontSize: 20, fontWeight: '500', color: shift.shiftType === 'day' && theme === false ? 'maroon' : shift.shiftType === 'night' && theme === true ? 'lightblue' : shift.shiftType === 'night' && theme === false ? 'darkblue' : 'tomato', textTransform: 'uppercase'}]}>
          {shift.role.acronym + ' '}
        </Text>
        <Text style={[styles.paragraph, {fontSize: 20, fontWeight: '500', color: shift.shiftType === 'day' && theme === false ? 'maroon' : shift.shiftType === 'night' && theme === true ? 'lightblue' : shift.shiftType === 'night' && theme === false ? 'darkblue' : 'tomato', textTransform: 'capitalize'}]}>
          {shift.shiftType +' Shift'}
        </Text>
      </View>
{/* time row */}
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20, width: Dimensions.get('window').width - 40}}>
          <View>
            <ImageBackground
                source={shift.isStartDayNight === 'night' ? nightimage : shift.isStartDayNight === 'day' ? dayimage : dayimage}
                style={{backgroundColor: '#fff', elevation: 4, shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3,borderRadius: 10, height: 80, width: 120, overflow: 'hidden'}}
                //borderRadius={0}
                resizeMode="cover"
            >
                <View style={{justifyContent: 'center', alignItems: 'center', height: 80, width: 120, backgroundColor: theme === true ? '#00000033' : '#ffffffa5', borderRadius: 10, overflow: 'hidden' }}>
                <Text style={[styles.timeselect, {color: theme === true && shift.isStartDayNight === 'night' ? '#fff' : theme === true && shift.isStartDayNight === 'day' ? '#000' :'#000'} ]}>
                  {militaryTime === true ? convertTime12to24(shift.startTime) : shift.startTime}
                        </Text>
                    </View> 
            </ImageBackground>
          </View>

          <View style={{justifyContent: 'center'}}>
              <Text style={styles.paragraph}>
                  to
              </Text>
          </View>

          <View>
            <ImageBackground
                source={shift.isEndDayNight === 'night' ? nightimage : shift.isEndDayNight === 'day' ? dayimage : nightimage}
                style={{backgroundColor: '#fff', elevation: 4, shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3,borderRadius: 10, height: 80, width: 120, overflow: 'hidden'}}
                //borderRadius={0}
                resizeMode="cover"
            >
                <View style={{justifyContent: 'center', alignItems: 'center', height: 80, width: 120, backgroundColor: theme === true ? '#00000033' : '#ffffffa6', borderRadius: 10, overflow: 'hidden' }}>
                <Text style={[styles.timeselect, {color: theme === true && shift.isEndDayNight === 'night' ? '#fff' : theme === true && shift.isEndDayNight === 'day' ? '#000' :'#000'}]}>
                  {militaryTime === true ? convertTime12to24(shift.endTime) : shift.endTime}
                        </Text>
                    </View> 
            </ImageBackground>
          </View>
        </View> 
      </View>
{/* incentives */}
      <View>
        <View style={{marginVertical: 20}}>
          <View>
            {shift.payMultiplier === 1.0 ? null : (
              <View style={{marginVertical: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                <FontAwesome5 
                    name='bolt'
                    size={18}
                    color='green'
                    style={{marginHorizontal: 4}}
                />
                <Text style={styles.timeselect}>
                    {shift.payMultiplier}x pay multiplier
                </Text>
              </View>
            )}
          </View>
                                    
          <View>
            {shift.payRate === 0 ? null : (
              <View style={{marginVertical: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <FontAwesome5 
                    name='dollar-sign'
                    size={18}
                    color='green'
                    style={{marginHorizontal: 4}}
                />
                <Text style={styles.timeselect}>
                    {shift.payRate} shift pay addition
                </Text>
              </View> 
            )}
          </View>
          {shift.payRate === 0 && shift.payMultiplier === 1.0 ? (
            <View>
              <Text style={[styles.paragraph, {fontSize: 20}]}>
                No additional incentives
              </Text>
            </View>
          ) : null}
          
        </View> 
      </View>
{/* notes */}
      <View style={{marginVertical: 10}}>
        <Text style={styles.paragraph}>
          {shift.notes}
        </Text>
      </View>
{/* button */}
          <LinearGradient
            colors={[ 'transparent','transparent']}
            style={{position: 'absolute', bottom: 0 }}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
          >
            {shift.status === 'open' ? (
              shift?.createdByID === userID ? (
                <View style={{marginBottom: 20, width: Dimensions.get('window').width, justifyContent: 'center', paddingHorizontal: 40}}>
                  <TouchableOpacity onPress={showConfirmDeleteModal}>
                      <View style={styles.buttonlayout}>
                              <Text style={styles.buttontext}>
                                  Delete Shift
                              </Text> 
                          </View>  
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={{marginBottom: 20, width: Dimensions.get('window').width, justifyContent: 'center', paddingHorizontal: 40}}>
                  <TouchableOpacity onPress={() => shift?.trade === true && shift?.giveUp === false ? showTradeModal() : showConfirmModal()}>
                      <View style={styles.buttonlayout}>
                              <Text style={styles.buttontext}>
                              {shift?.trade === true && shift?.giveUp === false ? 'Propose Trade' : 'Pick Up'}
                              </Text> 
                          </View>  
                  </TouchableOpacity>
                </View>
              )
              
            ) : (
              <TouchableOpacity onPress={showReOpenModal}>
                <View style={{justifyContent: 'center', marginTop: 20, marginBottom: 40, overflow: 'hidden', borderRadius: 24, borderWidth: 1, paddingVertical: 10, flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesome5 name= 'user-nurse' color={theme === true ? '#fff' : '#000'} size={20} style={{marginRight: 6}}/>
                    <Text style={[styles.paragraph, {textTransform: 'capitalize', fontSize: 20}]}>
                        {shift?.user?.firstName + ' ' + shift?.user?.lastName}
                    </Text>
                </View>
              </TouchableOpacity>
            )}

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 4, }}>
              <Text style={[styles.paragraph, {textAlign: 'center'}]}>
                {'Created by' + ' '}
              </Text>
              <Text style={[styles.paragraph, {textAlign: 'center', textTransform: 'capitalize'}]}>
                {shift.createdBy?.firstName + ' '}
              </Text>
              <Text style={[styles.paragraph, {textAlign: 'center'}]}>
                on {format(new Date(shift.createdOn), 'MMM do yyyy')}
              </Text>
            </View>
            <Text style={[styles.paragraph, {textAlign: 'center', color: 'gray', marginBottom: 20}]}>
              Status: {shift.status}
            </Text>
            
          </LinearGradient>
      

      <StatusBar style={theme === true ? "light" : "dark"} backgroundColor='transparent'/>
    </View>
    </Provider>
  )
}

export default TradeModal;
