import React, {useContext, useEffect, useState} from 'react';
import { 
  Text, 
  View, 
  Dimensions,
  TouchableWithoutFeedback
 } from 'react-native';

import { format } from "date-fns";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';

import { AppContext } from '../AppContext';
import useStyles from '../styles';

const ShiftTile = ({
    id, 
    date, 
    firstName, 
    lastName, 
    acronym,
    createdFirstName,
    createdLastName,
    createdAcronym,
    title, 
    giveUp, 
    shiftType, 
    notes, 
    priority, 
    startTime, 
    endTime, 
    startAMPM, 
    endAMPM, 
    numNeeded, 
    name, 
    payMultiplier, 
    payRate,
    status,
    trade,
    screen,
    screen2
} : any) => {

    const { 
        theme, 
        militaryTime, 
        userRoleID,
        userID
      } = useContext(AppContext);

    const styles = useStyles(theme);
    const navigation = useNavigation();

    const convertTime12to24 = (startTime : any) => {
      const [time, modifier] = startTime.split(' ');
    
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
    <TouchableWithoutFeedback onPress={() => trade === true ? navigation.navigate(screen2, {id: id}) : navigation.navigate(screen, {id: id})}>
        <View style={{alignSelf: 'center', elevation: 4, shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3, marginVertical: 10, paddingTop: 10, overflow: 'hidden', backgroundColor: theme === true ? '#363636' : '#fcfcfc', borderRadius: 10, paddingHorizontal: 10, marginBottom: 0, borderWidth: 0, width: Dimensions.get('window').width - 20, marginHorizontal: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{width: '80%'}}>
                <View>
                    <Text style={styles.title}>
                        {date}
                    </Text>
                </View>
            <View style={{flexDirection: 'row'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {shiftType === 'night' ? (
            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 0}}>
                <Ionicons 
                name='moon'
                color={theme === true ? 'lightblue' : 'darkblue'}
                size={12}
                style={{marginRight: 4}}
                />
            </View>
            ) : null}
            </View>
            <Text style={{fontSize: 16, fontWeight: '500', color: shiftType === 'night' && theme === true ? 'lightblue' : shiftType === 'day' && theme === true ? '#fff' : '#000'}}>
                {militaryTime === true ? convertTime12to24(startTime) : startTime}
            </Text>
            <Text style={{marginHorizontal: 4, fontSize: 16, color: shiftType === 'night' && theme === true ? 'lightblue' : shiftType === 'day' && theme === true ? '#fff' : '#000'}}>
            -
            </Text>
            <Text style={{fontSize: 16, fontWeight: '500', color: shiftType === 'night' && theme === true ? 'lightblue' : shiftType === 'day' && theme === true ? '#fff' : '#000'}}>
                {militaryTime === true ? convertTime12to24(endTime) : endTime}
            </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <View style={{backgroundColor: '#FCF8DA', borderRadius: 20, borderColor: 'gold', paddingHorizontal: 4, paddingVertical: 0}}>
            <Text style={{}}>
                {name}
            </Text>
            </View>
            {payMultiplier === 1 ? null : (
                <View style={{backgroundColor: theme === true ? '#474747a5' : '#D2E0D7a5', borderRadius: 20, borderColor: 'gold', paddingHorizontal: 4,flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                    <FontAwesome5 
                        name='bolt'
                        color='green'
                        size={12}
                        style={{marginRight: 4}}
                    />
                    <Text style={[styles.paragraph, {fontSize: 14}]}>
                        {payMultiplier}x
                    </Text>
                </View>
            )}
            {payRate === 0 ? null : (
                <View style={{backgroundColor: theme === true ? '#474747a5' : '#D2E0D7a5', borderRadius: 20, borderColor: 'gold', paddingHorizontal: 4,flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
                    <FontAwesome5 
                    name='dollar-sign'
                    color='green'
                    size={12}
                    style={{marginRight: 4}}
                    />
                    <Text style={[styles.paragraph, {fontSize: 14}]}>
                    {'+' + '' + payRate}
                    </Text>
                </View>
            )}
            </View>
            </View>
            <View style={{alignItems: 'center', width: '20%', justifyContent: 'center'}}>
                <View>
                    <FontAwesome5 name={status === 'pending' ? 'hourglass-half' : status === 'approved' ? 'check' : status === 'open' ? 'skull-crossbones' : 'hand-holding-medical'} size={20} color={status === 'pending' ? '#BAB9A8' : status === 'approved' ? 'green' : 'lightgray'} style={{paddingHorizontal: 20}} />
                    <Text style={{color: theme === true ? 'lightgray' : '#7F7D70', textAlign: 'center', fontSize: 10, marginTop: 6}}>
                        {status === 'open' ? 'denied' : status}
                    </Text>
                </View>
            </View>
            </View>
            
            {notes.length === 0 ? null : (
            <View style={{marginVertical: 10}}>
                <Text style={styles.paragraph}>
                {notes}
                </Text>
            </View>
            )}

            {/* <View style={{marginVertical: 10}}>
            <Text style={[styles.paragraph, {textTransform: 'capitalize', color: 'gray'}]}>
                Posted by {firstName} {lastName}
            </Text>
            </View> */}
            {trade === true ? (
                        <View style={{alignSelf: 'center', paddingVertical: 10, paddingHorizontal: 4, marginBottom: 4, flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={[styles.paragraph, {textTransform: 'capitalize', fontWeight: '500', marginLeft: 0, color: 'orange'}]}>
                                {createdFirstName + ' ' + createdLastName + ','}
                            </Text>
                            <Text style={[styles.paragraph, {textTransform: 'uppercase', fontWeight: '500', marginLeft: 4, color: 'orange'}]}>
                                {createdAcronym}
                            </Text>
                            <Octicons 
                                name='arrow-switch'
                                size={20}
                                color='orange'
                                style={{marginHorizontal: 10}}
                            />
                            <Text style={[styles.paragraph, {textTransform: 'capitalize', fontWeight: '500', marginLeft: 0, color: 'orange'}]}>
                                {firstName + ' ' + lastName + ','}
                            </Text>
                            <Text style={[styles.paragraph, {textTransform: 'uppercase', fontWeight: '500', marginLeft: 4, color: 'orange'}]}>
                                {acronym}
                            </Text>
                        </View>
                    ) : (
            firstName !== undefined && lastName !== undefined ?  (
                <View style={{marginTop: 10, backgroundColor: '#c6c6c6', alignSelf: 'center', width: Dimensions.get('window').width - 20, borderBottomRightRadius: 10, borderBottomLeftRadius: 10}}>
                    <View style={{paddingVertical: 10, marginBottom: 4, flexDirection: 'row', alignItems: 'center'}}>
                        <Fontisto 
                            name='doctor'
                            size={18}
                            color='maroon'
                            style={{marginHorizontal: 10}}
                        />
                        <Text style={[styles.paragraph, {textTransform: 'capitalize', fontWeight: '500', marginLeft: 0, color: 'maroon'}]}>
                            {firstName + ' ' + lastName + ','}
                        </Text>
                        <Text style={[styles.paragraph, {textTransform: 'uppercase', fontWeight: '500', marginLeft: 4, color: 'maroon'}]}>
                            {acronym}
                        </Text>
                    </View>
                </View>
            ) : null
                    )}


            
        </View>
    </TouchableWithoutFeedback>
  )
}

export default ShiftTile;