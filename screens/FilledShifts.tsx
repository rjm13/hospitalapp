import React, {useState, useEffect, useContext, useLayoutEffect} from "react";
import { 
    View, 
    Text, 
    ActivityIndicator, 
    Dimensions, 
    TouchableWithoutFeedback, 
    Platform,
    FlatList,
    RefreshControl
} from "react-native";

import { AppContext } from '../AppContext';
import {styles} from '../styles';

import { Auth, API, graphqlOperation } from 'aws-amplify';
import { getDepartment, getUser } from '../src/graphql/queries';
import { updateUser } from '../src/graphql/mutations';

import { StatusBar } from 'expo-status-bar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';


const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const FilledShifts = ({navigation, route} : any) => {

    const {trigger} = route.params;

    const [shifts, setShifts] = useState([]);

    const [didUpdate, setDidUpdate] = useState(false);

    //refresh state of the flatlist
    const [isFetching, setIsFetching] = useState(false);

    const onRefresh = () => {
        setIsFetching(true);
        setDidUpdate(!didUpdate)
        setTimeout(() => {
            setIsFetching(false);
        }, 2000);
        }

    useEffect(() => {

        let shiftarr = [];

        const fetchDepartment = async () => {
            const userInfo = await Auth.currentAuthenticatedUser();

            const response = await API.graphql(graphqlOperation(
                getUser, {id: userInfo.attributes.sub}
            ))

            const resp = await API.graphql(graphqlOperation(
                getDepartment, {id: response.data.getUser.departmentID}
            ))

            for (let i = 0; i < resp.data.getDepartment.shifts.items.length; i++) {
                if (resp.data.getDepartment.shifts.items[i].status === 'approved') {
                    shiftarr.push(resp.data.getDepartment.shifts.items[i])
                }
            }
            
            setShifts(shiftarr)
        }
        fetchDepartment();
    }, [didUpdate, trigger]);

  
        const Item = ({id, date, firstName, lastName, title, status, shiftType, notes, priority, startTime, endTime, startAMPM, endAMPM, numNeeded, name, payMultiplier, payRate} : any) => {
          
            
          return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('ShiftApproval', {id: id})}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', elevation: 6, shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3, alignSelf: 'center', marginVertical: 20, paddingVertical: 10, overflow: 'hidden', backgroundColor: '#fcfcfc', borderRadius: 10, paddingHorizontal: 10, marginBottom: 0, borderWidth: 0, width: Dimensions.get('window').width - 20, marginHorizontal: 10}}>
                <View>
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
                        color='darkblue'
                        size={12}
                        style={{marginRight: 4}}
                        />
                    </View>
                    ) : null}
                    </View>
                    <Text style={{fontSize: 16, fontWeight: '500', color: shiftType === 'night' ? 'darkblue': '#000'}}>
                        {startTime + ' '}
                    </Text>
                    <Text style={{fontSize: 16, fontWeight: '500', color: shiftType === 'night' ? 'darkblue': '#000'}}>
                        {startAMPM}
                    </Text>
                    <Text style={{marginHorizontal: 4, fontSize: 16, color: shiftType === 'night' ? 'darkblue': '#000'}}>
                        -
                    </Text>
                    <Text style={{fontSize: 16, fontWeight: '500', color: shiftType === 'night' ? 'darkblue': '#000'}}>
                        {endTime + ' '}
                    </Text>
                    <Text style={{fontSize: 16, fontWeight: '500', color: shiftType === 'night' ? 'darkblue': '#000'}}>
                        {endAMPM}
                    </Text>
                    </View>
                    
                <View style={{flexDirection: 'row', alignItems: 'center',}}>
                    <View style={{backgroundColor: '#FCF8DA', borderRadius: 20, borderColor: 'gold', paddingHorizontal: 4, paddingVertical: 0}}>
                    <Text style={{}}>
                        {name}
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
                        {payMultiplier}x
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
                    {'+' + '' + payRate}
                    </Text>
                </View>
                </View>
      
                <View style={{marginTop: 20, marginBottom: 4}}>
                    <Text style={{textTransform: 'capitalize'}}>
                    For {firstName + ' ' + lastName}
                    </Text>
                </View>
                </View>
                <View>
                    <FontAwesome5 name={status === 'pending' ? 'hourglass-half' : status === 'approved' ? 'check' : status === 'open' ? 'skull-crossbones' : 'hand-holding-medical'} size={26} color={status === 'pending' ? '#BAB9A8' : status === 'approved' ? 'green' : 'lightgray'} style={{paddingHorizontal: 20}} />
                    <Text style={{color: '#7F7D70', textAlign: 'center', fontSize: 12, marginTop: 6}}>
                        {status === 'open' ? 'denied' : status}
                    </Text>
                </View>
            </View>
            </TouchableWithoutFeedback>
          )
        }

    return (
        <View style={styles.container}>
{/* header row */}
            <View style={{alignItems: 'center', flexDirection: 'row', marginTop: 60, marginBottom: 10, justifyContent: 'space-between', width: Dimensions.get('window').width - 80}}>
                <FontAwesome name='close' onPress={() => navigation.goBack()} size={20} style={{padding: 20, margin: -20}}/>
                <Text style={styles.title}>
                    Filled Shifts
                </Text>
                <View />
            </View>

            <FlatList 
                data={shifts}
                keyExtractor={item => item.id}
                refreshControl={
                    <RefreshControl
                    refreshing={isFetching}
                    onRefresh={onRefresh}
                    />
                  }
                  extraData={[didUpdate, trigger]}
                renderItem={({item} : any) =>
                <Item 
                    id={item.id}
                    name={item.name}
                    date={item.date}
                    startTime={item.startTime}
                    endTime={item.endTime}
                    numNeeded={item.numNeeded}
                    payMultiplier={item.payMultiplier}
                    endAMPM={item.endAMPM}
                    startAMPM={item.startAMPM}
                    payRate={item.payRate}
                    priority={item.priority}
                    notes={item.notes}
                    shiftType={item.shiftType}
                    title={item.title}
                    status={item.status}
                    firstName={item.user.firstName}
                    lastName={item.user.lastName}
                />
                }
                ListFooterComponent={
                    <View style={{height: 60}}>

                    </View>
                }
                ListHeaderComponent={
                    <View style={{height: 20}}>
                       
                    </View>
                }
            />
        </View>
    );
}

export default FilledShifts;