import React, { useEffect, useState, useContext } from 'react';
import {
    View, 
    Text, 
    Dimensions,
    TouchableOpacity,
    FlatList,
    RefreshControl,
    ActivityIndicator
} from 'react-native';

import {AppContext} from '../AppContext';
import useStyles from '../styles';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StatusBar} from 'expo-status-bar';
import { format, parseISO, formatRelative } from "date-fns";

import { API, graphqlOperation, Auth } from "aws-amplify";
import { getMessage } from '../src/graphql/queries';
import { updateMessage } from '../src/graphql/mutations';

const Training = ({navigation} : any) => {

    const { theme, userID, userRoleID, militaryTime } = useContext(AppContext);

    const styles = useStyles(theme);

    const [modules, setModules] = useState([
        {
            id: '1',
            name: 'Training SIM',
            abbreviation: 'TS',
            createdAt: new Date().toISOString(),
            index: 0,
            updatedAt: new Date().toISOString(),
            color: 'lime',
            imageUri: '',
            deadline: new Date().toISOString(),
            completionPercent: 40,
            trainingDates: [
                'March 13th, 2023 at 9:00 PM',
                'March 13th, 2023 at 9:00 PM',
                'March 13th, 2023 at 9:00 PM'
            ]
        }
    ])

    const [didUpdate, setDidUpdate] = useState(false);

    const [isFetching, setIsFetching] = useState(false);

    const onRefresh = () => {
        setIsFetching(true);
        setDidUpdate(!didUpdate)
        setTimeout(() => {
          setIsFetching(false);
        }, 2000);
      }

    useEffect(() => {

    }, []);

    const Item = ({id, name, trainingDates, abbreviation, createdAt, index, updatedAt, color, imageUri, deadline, completionPercent} : any) => {

        const deadlineDate = parseISO(deadline)

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
                            {name}
                        </Text> 
                        <Text style={styles.title}>
                            {completionPercent}%
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
                        {trainingDates.map((item : any) => {
                            return (
                                <Text style={[styles.paragraph, {fontWeight: '300'}]}>
                                    {item}
                                </Text>  
                            )
                        })}
                    </View>
                    
                </View>
            </View>
        )
    }

    const renderItem = ({item, index}: any) => {

        console.log(item.trainingDates)

        return (
            <Item 
                id={item.id}
                name={item.name}
                abbreviation={item.abbreviation}
                createdAt={item.createdAt}
                index={index}
                updatedAt={item.updatedAt}
                color={item.color}
                imageUri={item.imageUri}
                deadline={item.deadline}
                completionPercent={item.completionPercent}
                trainingDates={item.trainingDates}
            />
        )
    }

    return (
        <View style={styles.container}>
            <View style={{width: Dimensions.get('window').width - 60}}>
                <View style={{height: 60}}/>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <FontAwesome onPress={() => navigation.goBack()} name='close' color={theme === true ? '#fff' : '#000'} size={20} style={{margin: -20, padding: 20}}/>
                    <Text style={styles.title}>
                        Training
                    </Text>
                    <View style={{width: 20}}/>
                </View>
                <TouchableOpacity>
                    <View style={{marginVertical: 20, backgroundColor: 'lightgray', paddingVertical: 8, borderRadius: 20, overflow: 'hidden'}}>
                        <Text style={{textAlign: 'center'}}>
                            Create Training Module
                        </Text>
                    </View>
                </TouchableOpacity>
                
            </View>

            <View style={{height: '87%'}}>
                <FlatList 
                    data={modules}
                    extraData={modules}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    maxToRenderPerBatch={20}
                    refreshControl={
                        <RefreshControl
                        refreshing={isFetching}
                        onRefresh={onRefresh}
                        />
                    }
                    ListFooterComponent={() => {
                        return (
                            <View style={{height: 120}}/>
                        )
                    }}
                    ListHeaderComponent={() => {
                        return (
                            <View style={{height: 20}}/>
                        )
                    }}
                    ListEmptyComponent={
                        <View style={{height: 20}}>
                            {isFetching === true ? (
                                <ActivityIndicator size='small' color='maroon'/>
                            ) : (
                                <Text style={[styles.paragraph, {textAlign: 'center'}]}>
                                    You have not created any training modules.
                                </Text>
                            )}
                        </View>
                    }
                />
            </View>

            <StatusBar style={theme === true ? "light" : "dark"} backgroundColor='transparent'/>

        </View>
    )
}

export default Training;