import React, {useState, useEffect, useContext, useLayoutEffect} from "react";
import { 
    View, 
    Text, 
    ActivityIndicator, 
    Dimensions, 
    TouchableWithoutFeedback, 
    FlatList,
    RefreshControl
} from "react-native";

import useStyles from '../styles';
import { AppContext } from '../AppContext';

import { Auth, API, graphqlOperation } from 'aws-amplify';
import { shiftsByDepartment } from '../src/graphql/queries';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {StatusBar} from 'expo-status-bar'


const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const FilledShifts = ({navigation, route} : any) => {

    const {trigger} = route.params;

    const { departID, theme, militaryTime } = useContext(AppContext);

    const styles = useStyles(theme);

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

        setIsFetching(true);

        const fetchDepartment = async () => {

            const resp = await API.graphql(graphqlOperation(
                shiftsByDepartment, {
                    departmentID: departID,
                    filter: {
                        status: {
                            eq: "approved"
                        }
                    }
                }
            ))
            setShifts(resp.data.shiftsByDepartment.items);
            setIsFetching(false);
        }
        fetchDepartment();
    }, [didUpdate, trigger]);
  
    const Item = ({id, date, firstName, lastName, acronym, title, status, shiftType, notes, priority, startTime, endTime, startAMPM, endAMPM, numNeeded, name, payMultiplier, payRate} : any) => {
         
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
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Modal', {id: id})}>
            <View style={{elevation: 4, shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, shadowRadius: 3, alignSelf: 'center', marginVertical: 20,borderTopRightRadius: 10, borderTopLeftRadius: 10, overflow: 'hidden', backgroundColor: theme === true ? '#363636a5' : '#fcfcfc', borderRadius: 10, paddingHorizontal: 10, marginBottom: 0, borderWidth: 0, width: Dimensions.get('window').width - 20, marginHorizontal: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center', paddingVertical: 10, overflow: 'hidden', paddingHorizontal: 10,width: Dimensions.get('window').width - 20, }}>
                    <View>
                        <View>
                            <Text style={styles.title}>
                                {date}
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row',  marginVertical: 4}}>
                        <View style={{flexDirection: 'row', alignItems: 'center',  marginVertical: 4}}>
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
                                    {payMultiplier}
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
                    <View>
                        <FontAwesome5 name={status === 'pending' ? 'hourglass-half' : status === 'approved' ? 'check' : status === 'open' ? 'skull-crossbones' : 'hand-holding-medical'} size={26} color={status === 'pending' ? '#BAB9A8' : status === 'approved' ? 'green' : 'lightgray'} style={{paddingHorizontal: 20}} />
                        <Text style={{color: '#7F7D70', textAlign: 'center', fontSize: 12, marginTop: 6}}>
                            {status === 'open' ? 'denied' : status}
                        </Text>
                    </View>
                </View>
                <View style={{backgroundColor: '#5B5B5B', alignSelf: 'center', width: Dimensions.get('window').width - 20, borderBottomRightRadius: 10, borderBottomLeftRadius: 10}}>
                    <View style={{paddingVertical: 10, marginBottom: 4, flexDirection: 'row', alignItems: 'center'}}>
                        <Fontisto 
                            name='doctor'
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
                </View>
            </View>
        </TouchableWithoutFeedback>
        )
    }

    return (
        <View style={styles.container}>
{/* header row */}
            <View style={{alignItems: 'center', flexDirection: 'row', marginTop: 60, marginBottom: 10, justifyContent: 'space-between', width: Dimensions.get('window').width - 80}}>
                <FontAwesome name='close' color={theme === true ? '#fff' : '#000'} onPress={() => navigation.goBack()} size={20} style={{padding: 20, margin: -20}}/>
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
                    acronym={item.user.primaryRole.acronym}
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
                ListEmptyComponent={
                    <View style={{height: 20}}>
                        {isFetching === true ? (
                            <ActivityIndicator size='small' color='maroon'/>
                        ) : (
                            <Text style={styles.paragraph}>
                                There are no pending shift requests at this time.
                            </Text>
                        )}
                    </View>
                }
            />
            <StatusBar style={theme === true ? "light" : "dark"} backgroundColor='transparent'/>

        </View>
    );
}

export default FilledShifts;