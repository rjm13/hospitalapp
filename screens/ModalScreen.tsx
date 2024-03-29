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
import Fontisto from 'react-native-vector-icons/Fontisto';
import {format} from 'date-fns'
import {LinearGradient} from 'expo-linear-gradient';
import {Provider, Portal, Modal} from 'react-native-paper';

import { Auth, graphqlOperation, API } from 'aws-amplify';
import { getShift} from '../src/graphql/queries';
import { updateShift, deleteShift} from '../src/graphql/mutations';

const ShiftModal = ({navigation, route} : any) => {

  const {id} = route.params;

  const { userID, theme, militaryTime, expoPushToken, userRoleID } = useContext(AppContext);

  const styles = useStyles(theme);

  const nightimage ={uri: 'https://wallpapers.com/images/hd/romantic-blue-moon-and-stars-7bthn2mib21qvff0.jpg'}
  const dayimage ={uri: 'https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4=' }

  const SCREEN_HEIGHT = Dimensions.get('window').height
  const SCREEN_WIDTH = Dimensions.get('window').width

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
    userID: '',
    user: {
      firstName: '',
      lastName: ''
    }
  })

  const [processing, setProcessing] = useState(false);

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

  //modal container style
  const containerStyle = {
    backgroundColor: theme === true ? '#000' : '#fff', 
    borderRadius: 15,
    paddingVertical: 10
};

const SendPush = async () => {

  const message = {
      to: shift?.createdBy?.Setting2,
      sound: "default",
      title: "You have a new request pending your approval.",
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
              status: 'pending',
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

const ReOpenShift = async () => {
  setProcessing(true);
  try {

    const init = await API.graphql(graphqlOperation(
      getShift, {id: id}
    ))

    if (init.data.getShift.status === 'approved') {
      alert('Oops! This shift has already been approved. Please contact your manager.')
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
              Delete this shift for {shift.date} from {shift.startTime} to {shift.endTime}?
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
              Cancel this approval request for {shift?.user?.firstName.toUpperCase()} {shift?.user?.lastName.toUpperCase()} and re-open this shift on {shift.date} from {convertTime12to24(shift.startTime)} to {convertTime12to24(shift.endTime)}?
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
                This will cancel the shift pickup request and re-open the shift for others.
              </Text>
          </View>
          
        </LinearGradient>
          </View>
        </Modal>
      </Portal>
    <View style={styles.container}>
      <ImageBackground
        source={shift.shiftType === 'day' && theme === false ? require('../assets/images/dayimage.png') : shift.shiftType === 'night' && theme === false ? require('../assets/images/nightimage.png') : shift.shiftType === 'night' && theme === true ? require('../assets/images/darknightimage.png') : shift.shiftType === 'day' && theme === true ? require('../assets/images/darkdayimage.png') : require('../assets/images/dayimage.png')}
        style={{backgroundColor: '#ffffffa5', position: 'absolute', alignSelf: 'center', width: SCREEN_WIDTH, height: SCREEN_HEIGHT + 100}}
        imageStyle={{}}
      />
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
        <Text style={{color: theme === true ? '#fff' : '#000', fontWeight: '800', fontSize: 34}}>
          {shift.date.substring(0, shift.date.length - 5)}
        </Text>
      </View>
{/* time row */}
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20, width: Dimensions.get('window').width - 40}}>
          <View>
            <Text style={[styles.timeselect, {fontSize: 24, } ]}>
              {militaryTime === true ? convertTime12to24(shift.startTime) : shift.startTime}
            </Text>
          </View>

          <View style={{justifyContent: 'center'}}>
              <Text style={styles.paragraph}>
                  to
              </Text>
          </View>

          <View>
            <Text style={[styles.timeselect, {fontSize: 24}]}>
              {militaryTime === true ? convertTime12to24(shift.endTime) : shift.endTime}
            </Text>
          </View> 
        </View> 
      </View>
{/* break */}
          <View style={{height: 60}}/>
{/* shift type */}
      <View style={{marginVertical: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={[styles.paragraph, {textAlign: 'center', fontSize: 20, fontWeight: '500'}]}>
          {/* {(shift.priority === 'normal' ? '' : shift.priority + ' ') +  */}
          {(shift.name === 'Regular' ? '' : shift.name + ' ')}
        </Text>
        {/* <Text style={[styles.paragraph, {fontSize: 20, fontWeight: '500', color: shift.shiftType === 'day' && theme === false ? 'maroon' : shift.shiftType === 'night' && theme === true ? 'lightblue' : shift.shiftType === 'night' && theme === false ? 'darkblue' : 'tomato'}]}>
          {shift.role.acronym + ' '}
        </Text> */}
        {/* <Text style={[styles.paragraph, {fontSize: 20, fontWeight: '500', color: shift.shiftType === 'day' && theme === false ? 'maroon' : shift.shiftType === 'night' && theme === true ? 'lightblue' : shift.shiftType === 'night' && theme === false ? 'darkblue' : 'tomato', textTransform: 'capitalize'}]}>
          {shift.shiftType +' Shift'}
        </Text> */}
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
                <Text style={[styles.timeselect, {textTransform: 'capitalize'}]}>
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
                    {shift.payRate} hourly pay addition
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
            colors={[theme === true ? '#transparent' : 'transparent', 'transparent']}
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
                  <TouchableOpacity onPress={showConfirmModal}>
                      <View style={styles.buttonlayout}>
                              <Text style={styles.buttontext}>
                                  {shift?.trade === true && shift?.giveUp === false ? 'Propose Trade' : 'Pick Up'}
                              </Text> 
                          </View>  
                  </TouchableOpacity>
                </View>
              )
              
            ) : (
              <View>
                {shift.userID === userID ? (
                  <TouchableOpacity onPress={showReOpenModal}>
                    <View style={{justifyContent: 'center', marginTop: 20, marginBottom: 40, overflow: 'hidden', borderRadius: 24, borderColor: theme === true ? '#fff' : '#000', borderWidth: 1, paddingVertical: 10, flexDirection: 'row', alignItems: 'center'}}>
                        <Fontisto name= 'doctor' color={theme === true ? '#fff' : '#000'} size={20} style={{marginRight: 6}}/>
                        <Text style={[styles.paragraph, {textTransform: 'capitalize', fontSize: 20}]}>
                            {shift?.user?.firstName + ' ' + shift?.user?.lastName}
                        </Text>
                    </View>
                  </TouchableOpacity>
                ) : null}
              </View>
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

export default ShiftModal;
