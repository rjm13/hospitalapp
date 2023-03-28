import React, {useState, useEffect, useContext} from "react";
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
import { shiftsByCreator } from '../src/graphql/queries';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StatusBar} from 'expo-status-bar';

const PostedShifts = ({navigation} : any) => {

    const { theme } = useContext(AppContext);
    const { userID } = useContext(AppContext);

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

//fetch the user information
    useEffect(() => {
        const fetchUser = async () => {
            const response = await API.graphql(graphqlOperation(
                shiftsByCreator, {
                    createdByID: userID,
                        dateOrder: {
                            gt: new Date().toISOString()
                        },
                    filter : {
                        trade: {
                            eq: true
                        }
                    }
                }
            ))
            setShifts(response.data.shiftsByCreator.items)
        }
        fetchUser();
    }, []);

  
    const Item = ({id, date, status, firstName, lastName, title, giveUp, shiftType, notes, priority, startTime, endTime, startAMPM, endAMPM, numNeeded, name, payMultiplier, payRate} : any) => {

        
      return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate('TradeModalScreen', {id: id})}>
        <View style={{alignSelf: 'center', marginVertical: 10, elevation: 4, shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, backgroundColor: theme === true ? '#363636a5' : 'white', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10, marginBottom: 0, borderWidth: 0, borderColor: 'gray', width: Dimensions.get('window').width - 20}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
              <View style={{width: '80%'}}>
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
                  {startTime}
              </Text>
              <Text style={{marginHorizontal: 4, fontSize: 16, color: shiftType === 'night' && theme === true ? 'lightblue' : shiftType === 'day' && theme === true ? '#fff' : '#000'}}>
              -
              </Text>
              <Text style={{fontSize: 16, fontWeight: '500', color: shiftType === 'night' && theme === true ? 'lightblue' : shiftType === 'day' && theme === true ? '#fff' : '#000'}}>
              {endTime}
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <View style={{backgroundColor: '#FCF8DA', borderRadius: 20, borderColor: 'gold', paddingHorizontal: 4, paddingVertical: 0}}>
              <Text style={{}}>
                {name}
              </Text>
            </View>
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
            </View>
            </View>
            <View style={{alignItems: 'center', width: '20%', justifyContent: 'center', flexDirection: 'row'}}>
              {giveUp === true ? (
                <View style={{alignItems: 'center'}}>
                <FontAwesome5 name='hands-helping' size={20} color={theme=== true ? 'orange' : 'tomato'}/>
                {/* <Text style={{color: 'gray', fontSize: 10, textAlign: 'center'}}>
                  Giving
                </Text> */}
                </View>
              ) : (
                <View style={{alignItems: 'center'}}>
                <FontAwesome5 name='people-arrows' size={20} color={theme=== true ? 'orange' : 'tomato'}/>
                {/* <Text style={{color: 'gray', fontSize: 10, textAlign: 'center'}}>
                  Trading
                </Text> */}
                </View>
              )}
               <View>
                <FontAwesome5 name={status === 'pending' ? 'hourglass-half' : status === 'approved' ? 'check' : status === 'tradepending' ? 'door-open' : status === 'open' ? 'door-open' : 'skull-crossbones'} size={20} color={status === 'pending' ? '#BAB9A8' : status === 'approved' ? 'green' : 'lightgray'} style={{paddingHorizontal: 20}} />
                {/* <Text style={{color: 'gray', fontSize: 10, textAlign: 'center'}}>
                      {status}
                  </Text> */}
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
            
            
        </View>
        
        </TouchableWithoutFeedback>
      )
    }

    return (
        <View style={styles.container}>
{/* header row */}
            <View style={{alignItems: 'center', flexDirection: 'row', marginTop: 60, justifyContent: 'space-between', width: Dimensions.get('window').width - 80}}>
                <FontAwesome name='close' color={theme === true ? '#fff' : '#000'} onPress={() => navigation.goBack()} size={20} style={{padding: 20, margin: -20}}/>
                <Text style={styles.title}>
                    Posted Shifts
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
                    giveUp={item.giveUp}
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
                                you have no shifts at this time.
                            </Text>
                        )}
                    </View>
                }
            />
            <StatusBar style={theme === true ? "light" : "dark"} backgroundColor='transparent'/>

        </View>
    );
}

export default PostedShifts;