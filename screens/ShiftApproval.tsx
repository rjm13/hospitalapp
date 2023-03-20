import React, {useEffect, useState, useContext} from 'react';
import { 
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {format} from 'date-fns'
import {LinearGradient} from 'expo-linear-gradient';
import {Provider, Portal, Modal} from 'react-native-paper';

import useStyles from '../styles';
import { AppContext } from '../AppContext';

import { Auth, graphqlOperation, API } from 'aws-amplify';
import { getShift} from '../src/graphql/queries';
import { updateShift, createMessage} from '../src/graphql/mutations';

const ShiftApproval = ({navigation, route} : any) => {

  const {id} = route.params;

  const { theme } = useContext(AppContext);
  const { userID } = useContext(AppContext);

  const styles = useStyles(theme);
  
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
    status: 'open',
    userID: '',
    user: {
        id: '',
        firstName: '',
        lastName: '',
        primaryRole: {
            id: '',
            acronym: '',

        }
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

  //deny modal
  const [visible9, setVisible9] = useState(false);
  const showDenyModal = () => {setVisible9(true);}
  const hideDenyModal = () => setVisible9(false);

  //modal container style
  const containerStyle = {
    backgroundColor: theme ===true ? '#000' : '#fff', 
    borderRadius: 15,
    paddingVertical: 10
};

const SendApprovalMessage = async () => {

  const Title = 'Your pick up request for' + ' ' +
                  shift.date + ' ' +
                  'from' + ' ' + shift.startTime + ' ' + 'to' + ' ' + shift.endTime + ' ' +
                  'has been approved.' + ' '

  const Subtitle = (shift.payMultiplier === 1 || shift.payRate === 0 ? 'No Incentives' : 'Incentives for this shift:' + ' ' + (shift.payMultiplier !== 1 ? (shift.payMultiplier + 'x' + 'multiplier') : (null) + ' ' + (shift.payRate !== 0 ? ('plus' + shift.payRate + 'dollats per hour') : (null))))


  const Content = shift.date + ' ' +
                  'from' + ' ' + shift.startTime + ' ' + 'to' + ' ' + shift.endTime

  try {
    await API.graphql(graphqlOperation(
      createMessage, {input: {
        type: 'Message',
        title: Title,
        subtitle: Subtitle,
        content: Content,
        messageType: 'Shift Approved',
        isReadBySender: true,
        isReadByReceiver: false,
        senderID: userID,
        receiverID: shift.userID,
        status: 'Approved',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        shiftID: shift.id
      }}
    ))
  } catch (e) {
    console.log(e)
  }
}

const SendDenialMessage = async () => {

  const Title = 'Your pick up request for' + ' ' +
                  shift.date + ' ' +
                  'from' + ' ' + shift.startTime + 'to' + ' ' + shift.endTime + ' ' +
                  'has been denied.' + ' '

  const Subtitle = ''

  const Content = shift.date + ' ' +
                  'from' + ' ' + shift.startTime + 'to' + ' ' + shift.endTime

  try {
    await API.graphql(graphqlOperation(
      createMessage, {input: {
        type: 'Message',
        title: Title,
        subtitle: Subtitle,
        content: Content,
        messageType: 'Shift Denied',
        isReadBySender: true,
        isReadByReceiver: false,
        senderID: userID,
        receiverID: shift.userID,
        status: 'Denied',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        shiftID: shift.id,
      }}
    ))
  } catch (e) {
    console.log(e)
  }
}

const ApproveShift = async () => {
    setProcessing(true);
    try {

      const init = await API.graphql(graphqlOperation(
        getShift, {id: id}
      ))

      if (init.data.getShift.status !== 'pending') {
        alert('Oops! It looks like you were beat to the punch. Someone else has already requested to pick up this shift.')
        setProcessing(false)
      } else {

        const response = await API.graphql(graphqlOperation(
            updateShift, {input: {
              id: id,
              status: 'approved',
            }}
        ))
        console.log(response)
        if (response) {
          SendApprovalMessage()
          alert('Shift approved.')
          navigation.navigate('ApprovalRequests', {trigger: Math.random()});
          setProcessing(false)
        }
      }
    } catch (e) {
      setProcessing(false)
      alert(e.toString())
    }
}

const DenyShift = async () => {
    setProcessing(true);
    try {

      const init = await API.graphql(graphqlOperation(
        getShift, {id: id}
      ))

      if (init.data.getShift.status !== 'pending') {
        alert('Oops! It looks like someone has already approved this shift.')
        setProcessing(false)
      } else {

        const response = await API.graphql(graphqlOperation(
            updateShift, {input: {
              id: id,
              status: 'open',
            }}
        ))
        console.log(response)
        if (response) {
          SendDenialMessage();
          alert('Shift pickup denied.')
          navigation.navigate('ApprovalRequests', {trigger: Math.random()});
          setProcessing(false)
        }
      }
    } catch (e) {
      setProcessing(false)
      alert(e.toString())
    }
}

  return (
    <Provider>
      <Portal>

        <Modal visible={visible10} onDismiss={hideConfirmModal} contentContainerStyle={containerStyle}>
          <View style={{height: '50%'}}>
            <Text style={[styles.paragraph, {textAlign: 'center', fontSize: 15, fontWeight: '500', marginHorizontal: 20}]}>
              Approve this shift for {shift.date} from {shift.startTime} to {shift.endTime}?
            </Text>
            <Text style={[styles.paragraph, {textAlign: 'center', fontSize: 15, marginHorizontal: 20, marginVertical: 20}]}>
              for
            </Text>
            <Text style={[styles.paragraph, {textAlign: 'center', fontSize: 18, fontWeight: '800', marginHorizontal: 20, textTransform: 'capitalize'}]}>
              {shift.user.firstName + ' ' + shift.user.lastName + ' ' + '(' + shift.user.primaryRole.acronym + ')'}
            </Text>

            <LinearGradient
          colors={[theme === true ? '#000' : '#fff', theme === true ? '#000' : '#fff', theme === true ? '#000000a5' : '#ffffffa5','transparent']}
          style={{position: 'absolute', bottom: -70 }}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
        >
          <View style={{width: Dimensions.get('window').width, justifyContent: 'center', paddingHorizontal: 40}}>
              {processing ? (
                  <View style={[{alignSelf: 'center', width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}]}>
                      <ActivityIndicator size='small' color='maroon'/>
                  </View>
              ) : (
                  <TouchableOpacity onPress={ApproveShift}>
                      <View style={styles.buttonlayout}>
                              <Text style={styles.buttontext}>
                                  Approve
                              </Text> 
                          </View>  
                  </TouchableOpacity>
              )}
              <Text style={{textAlign: 'center', marginTop: 20, color: 'gray'}}>
                {/* This shift pick up will not be final until it has been approved by your manager. */}
              </Text>
          </View>
          
        </LinearGradient>
          </View>
        </Modal>

        <Modal visible={visible9} onDismiss={hideDenyModal} contentContainerStyle={containerStyle}>
          <View style={{height: '50%'}}>
            <Text style={[styles.paragraph, {textAlign: 'center', fontSize: 15, fontWeight: '500', marginHorizontal: 20}]}>
              DENY this shift for {shift.date} from {shift.startTime} to {shift.endTime}?
            </Text>
            <Text style={[styles.paragraph, {textAlign: 'center', fontSize: 15, marginHorizontal: 20, marginVertical: 20}]}>
              for
            </Text>
            <Text style={[styles.paragraph, {textAlign: 'center', fontSize: 18, fontWeight: '800', marginHorizontal: 20, textTransform: 'capitalize'}]}>
              {shift.user.firstName + ' ' + shift.user.lastName + ' ' + '(' + shift.user.primaryRole.acronym + ')'}
            </Text>

            <LinearGradient
          colors={[theme === true ? '#000' : '#fff', theme === true ? '#000' : '#fff', theme === true ? '#000000a5' : '#ffffffa5','transparent']}
          style={{position: 'absolute', bottom: -70 }}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
        >
          <View style={{width: Dimensions.get('window').width, justifyContent: 'center', paddingHorizontal: 40}}>
              {processing ? (
                  <View style={[{alignSelf: 'center', width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}]}>
                      <ActivityIndicator size='small' color='maroon'/>
                  </View>
              ) : (
                  <TouchableOpacity onPress={DenyShift}>
                      <View style={[styles.buttonlayout, {backgroundColor: 'darkgray'}]}>
                              <Text style={styles.buttontext}>
                                  Deny
                              </Text> 
                          </View>  
                  </TouchableOpacity>
              )}
              <Text style={{textAlign: 'center', marginTop: 20, color: 'gray'}}>
                {/* This shift pick up will not be final until it has been approved by your manager. */}
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
        <FontAwesome name='edit' size={20} color={theme === true ? '#fff' : '#000'} style={{padding: 20, margin: -20}}/>
      </View>
{/* date title */}
      <View style={{alignItems: 'center', marginBottom: 0, marginTop: 20}}>
        <Text style={[styles.paragraph, {fontWeight: '800', fontSize: 30}]}>
          {shift.date.substring(0, shift.date.length - 5)}
        </Text>
      </View>
{/* shifts times */}
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginVertical: 20, width: Dimensions.get('window').width - 40}}>
          <View>
                <View style={{justifyContent: 'center', alignItems: 'center', width: 120, backgroundColor: '#ffffffa5', borderRadius: 10, overflow: 'hidden' }}>
                    <Text style={styles.timeselect}>
                        {shift.startTime}
                    </Text>
                </View> 
          </View>

          <View style={{justifyContent: 'center'}}>
              <Text style={styles.paragraph}>
                  to
              </Text>
          </View>

          <View>
                <View style={{justifyContent: 'center', alignItems: 'center', width: 120, backgroundColor: '#ffffffa6', borderRadius: 10, overflow: 'hidden' }}>
                    <Text style={[styles.timeselect, {color: theme === true ? '#fff' : '#000'}]}>
                        {shift.endTime}
                    </Text>
                </View> 
          </View>
        </View> 
      </View>
{/* shift type */}
      <View style={{marginVertical: 0, flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{fontSize: 18, fontWeight: '500', color: shift.shiftType === 'day' ? 'maroon' : 'darkblue', textTransform: 'capitalize'}}>
          {(shift.priority === 'normal' ? '' : shift.priority + ' ') + (shift.name === 'Regular' ? '' : shift.name + ' ')}
        </Text>
        <Text style={{fontSize: 18, fontWeight: '500', color: shift.shiftType === 'day' ? 'maroon' : 'darkblue'}}>
          {shift.role.acronym + ' '}
        </Text>
        <Text style={{fontSize: 18, fontWeight: '500', color: shift.shiftType === 'day' ? 'maroon' : 'darkblue', textTransform: 'capitalize'}}>
          {shift.shiftType +' Shift'}
        </Text>
      </View>

{/* incentives */}
      <View>
        <View style={{marginVertical: 10}}>
          <View>
            {shift.payMultiplier === 1.0 ? null : (
              <View style={{marginVertical: 6, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
                <FontAwesome5 
                    name='bolt'
                    size={14}
                    color='green'
                    style={{marginHorizontal: 4}}
                />
                <Text style={[styles.timeselect, {fontWeight: '600', fontSize: 14}]}>
                    {shift.payMultiplier}x pay multiplier
                </Text>
              </View>
            )}
          </View>
                                    
          <View>
            {shift.payRate === 0 ? null : (
              <View style={{marginVertical: 6, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <FontAwesome5 
                    name='dollar-sign'
                    size={14}
                    color='green'
                    style={{marginHorizontal: 4}}
                />
                <Text style={[styles.timeselect, {fontWeight: '600', fontSize: 14}]}>
                    {shift.payRate} hourly pay addition
                </Text>
              </View> 
            )}
          </View>
          {shift.payRate === 0 && shift.payMultiplier === 1.0 ? (
            <View>
              <Text style={{fontSize: 20}}>
                No additional incentives
              </Text>
            </View>
          ) : null}
          
        </View> 
      </View>
{/* notes */}
      <View style={{marginVertical: 0}}>
        <Text style={styles.paragraph}>
          {shift.notes}
        </Text>
      </View>
{/* request by section */}
    <View style={{marginVertical: 60, borderRadius: 10, borderWidth: 1, borderColor: 'darkgray', paddingVertical: 20, width: Dimensions.get('window').width - 40}}>
        <Text style={[styles.paragraph, {textAlign: 'center'}]}>
            Pickup Requested by:
        </Text>
        <Text style={[styles.paragraph, {textTransform: 'capitalize', fontWeight: 'bold', fontSize: 18, textAlign: 'center'}]}>
            {shift.user.firstName + ' ' + shift.user.lastName + ' ' + '(' + shift.user.primaryRole.acronym + ')'}
        </Text>
    </View>
{/* button */}
      <LinearGradient
        colors={[theme === true ? '#000' : '#fff',theme === true ? '#000' : '#fff', theme === true ? '#000000a5' : '#ffffffa5','transparent']}
        style={{position: 'absolute', bottom: 0 }}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        <View style={{marginBottom: 20, width: Dimensions.get('window').width, justifyContent: 'center', paddingHorizontal: 40}}>
          <TouchableOpacity onPress={showConfirmModal}>
              <View style={styles.buttonlayout}>
                      <Text style={styles.buttontext}>
                         Approve
                      </Text> 
                  </View>  
          </TouchableOpacity>
        </View>
        <View style={{marginBottom: 20, width: Dimensions.get('window').width, justifyContent: 'center', paddingHorizontal: 40}}>
          <TouchableOpacity onPress={showDenyModal}>
              <View style={[styles.buttonlayout, {backgroundColor: 'lightgray'}]}>
                      <Text style={styles.buttontext}>
                          Deny
                      </Text> 
                  </View>  
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 4, }}>
          <Text style={[styles.paragraph, {textAlign: 'center'}]}>
            {'Created by' + ' '}
          </Text>
          <Text style={[styles.paragraph, {textAlign: 'center', textTransform: 'capitalize'}]}>
            {shift.createdBy.firstName + ' '}
          </Text>
          <Text style={[styles.paragraph, {textAlign: 'center'}]}>
            on {format(new Date(shift.createdOn), 'MMM do yyyy')}
          </Text>
        </View>
        <Text style={[styles.paragraph, {textAlign: 'center', color: 'gray', marginBottom: 20}]}>
          Status: {shift.status}
        </Text>
        
      </LinearGradient>

      <StatusBar style="dark" backgroundColor='transparent'/>
    </View>
    </Provider>
  )
}

export default ShiftApproval;
