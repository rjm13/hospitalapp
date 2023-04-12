import React, {useContext, useEffect, useState} from 'react';
import { 
  Text, 
  View, 
  Dimensions, 
  SectionList, 
  TouchableWithoutFeedback,
  RefreshControl,
  ActivityIndicator
 } from 'react-native';

import { format } from "date-fns";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AppContext } from '../AppContext';
import useStyles from '../styles';

import { API, graphqlOperation } from "aws-amplify";
import { shiftsByRole } from '../src/graphql/queries';

const TabTwoScreen = ({ navigation }: any) => {

  const { 
    theme, 
    militaryTime, 
    userRoleID,
    userID
  } = useContext(AppContext);

  const styles = useStyles(theme);

  const [activeSections, setActiveSections] = useState([])
  const [sections, setSections] = useState([]);

  //refresh state of the flatlist
  const [isFetching, setIsFetching] = useState(false);
  const [didUpdate, setDidUpdate] = useState(false);

  const [empty, setEmpty] = useState(false)

  const onRefresh = () => {
      setIsFetching(true);
      setDidUpdate(!didUpdate)
      setTimeout(() => {
          setIsFetching(false);
      }, 2000);
      }

//fetch the data
  useEffect(() => {

    let arr = []

    const today = new Date();

    for (let i = 0; i < 60; i++) {
      const year = today.getFullYear();
      const month = today.getMonth();
      const day = today.getDate();
      const c = new Date(year, month, day + i);
      const formatted = format((c), "MMMM do yyyy")
      arr.push({id: i.toString(), title: formatted, data: []})
    }

    const fetchShifts = async () => {

      const resp = await API.graphql(graphqlOperation(
        shiftsByRole, {
          dateOrder : {
            gt: new Date().toISOString()
          },
          roleID: userRoleID,
          filter : {
            status: {
              contains: 'open'
            },
            trade: {
              eq: true
            },
            userID: {
              ne: userID
            }
          }
        }
      ))

      for (let i = 0; i < resp.data.shiftsByRole.items.length; i++) {
        let index = arr.findIndex((obj => obj.title === resp.data.shiftsByRole.items[i].date));
        if (index !== -1 && resp.data.shiftsByRole.items[i].status === 'open') {
          arr[index].data.push(resp.data.shiftsByRole.items[i]);
        }
      }

      setSections(arr)
      if (resp.data.shiftsByRole.items.length === 0) {
        setEmpty(true);
      } else {
        setEmpty(false)
      }
    }
    fetchShifts();
  }, [didUpdate])

  const Item = ({id, date, firstName, lastName, title, giveUp, shiftType, notes, priority, startTime, endTime, startAMPM, endAMPM, numNeeded, name, payMultiplier, payRate} : any) => {
      
      const [vis, setVis] = useState(true);

      useEffect(() => {
        if (activeSections.includes(date) === true) {
        
          setVis(false);
        }
      }, [])

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
      <TouchableWithoutFeedback onPress={() => navigation.navigate('TradeModalScreen', {id: id})}>
      <View style={{height:  vis ? undefined : 0, alignSelf: 'center', marginVertical: 0, backgroundColor: theme === true ? '#363636a5' : 'white', elevation: 4, shadowColor: '#000', shadowOffset: {width: -2, height: 4}, shadowOpacity: 0.2, borderRadius: 10, paddingHorizontal: 10, paddingVertical: vis ? 10 : 0, marginBottom: 4, borderWidth: 0, borderColor: 'gray', width: Dimensions.get('window').width - 20}}>
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
          <View style={{alignItems: 'center', width: '20%', justifyContent: 'center'}}>
            {giveUp === true ? (
              <View style={{alignItems: 'center'}}>
              <FontAwesome5 name='hands-helping' size={20} color={theme=== true ? 'orange' : 'tomato'}/>
              <Text style={{color: 'gray', fontSize: 10, textAlign: 'center'}}>
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
          </View>
          
          {notes.length === 0 ? null : (
            <View style={{marginVertical: 10}}>
              <Text style={styles.paragraph}>
                {notes}
              </Text>
            </View>
          )}

          <View style={{marginVertical: 10}}>
            <Text style={[styles.paragraph, {textTransform: 'capitalize', color: 'gray'}]}>
              Posted by {firstName} {lastName}
            </Text>
          </View>
      </View>
      
      </TouchableWithoutFeedback>
    )
  }

  const SectionHeader = ({title, data} : any) => {

    const [vis, setVis] = useState(true)

    useEffect(() => {
      if (activeSections.includes(title) === true) {
        setVis(false);
      }
    }, [])

    const AddToArray = () => {
      
      let arr = activeSections;
      const index = arr.indexOf(title)

      if (arr.includes(title)) {
        arr.splice(index, 1);
        setVis(!vis);
        setActiveSections(arr)
        setDidUpdate(!didUpdate)
      } else {
        setVis(!vis);
        arr.push(title)
        setActiveSections(arr)
        setDidUpdate(!didUpdate)
      }
    }

    return (
      <TouchableWithoutFeedback onPress={() => AddToArray()}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: theme === true ? '#6A6A6A' : 'lightgray', paddingVertical: 4, paddingHorizontal: 10, marginBottom: 4, borderWidth: 0, borderTopRightRadius: 0, borderTopLeftRadius: 0,padding: 0, width: Dimensions.get('window').width - 0}}>
          <Text style={{fontWeight: '600', fontSize: 14, color: theme === true ? '#e4e4e4' : '#000'}}>{title}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight: '400', fontSize: 14, color: theme === true ? '#e4e4e4' : '#000'}}>{data.length === 1 ? data.length + ' ' + 'Shift' : data.length + ' ' + 'Shifts'}</Text>
            <FontAwesome5 name={vis ? 'caret-down' : 'caret-right'} color={theme === true ? '#e4e4e4' : '#000'} size={16} style={{width: 20, paddingHorizontal: 4}}/>
          </View>
        </View>
      </TouchableWithoutFeedback>
      
    )
  }

  return (
    <View style={styles.container}>
      <SectionList
        style={{alignSelf: 'center'}}
        showsVerticalScrollIndicator={false}
        sections={sections}
        keyExtractor={(item, index) => item + index}
        extraData={didUpdate}
        stickySectionHeadersEnabled
        refreshControl={
          <RefreshControl
          refreshing={isFetching}
          onRefresh={onRefresh}
          />
        }
        renderItem={({ item } : any) => 
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
            giveUp={item.giveUp}
            firstName={item.createdBy.firstName}
            lastName={item.createdBy.lastName}
          />
        }
        //ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderSectionHeader={({ section: { title, data } }) => {
          if (data.length === 0) {
            return null
          }
          return (
            <SectionHeader title={title} data={data}/>
          )
        }}
        ListFooterComponent={ () => (
            <View>
              {empty === true ? (
                <Text style={[styles.paragraph, {textAlign: 'center', marginVertical: 80}]}>
                  There are no open shifts posted at this time.
                </Text>
              ) : (
                <View style={{height: 80}}>

                </View>
              )}
            </View>
        )}
        ListHeaderComponent={ () => (
          <View style={{width: Dimensions.get('window').width}}>
              <View style={{paddingVertical: 4, marginBottom: 0, backgroundColor: '#757575a5',justifyContent: 'center', flexDirection: 'row', alignItems: 'center', width: Dimensions.get('window').width}}>
                <Text style={{color: 'black', fontSize: 12}}>
                  Pull to refresh
                </Text>
                <FontAwesome5 name='chevron-down' size={12} style={{marginHorizontal: 8}}/>
              </View>
          </View>
      )}
        ListEmptyComponent={ () => (
          <View style={{alignItems: 'center', justifyContent: 'center', marginVertical: 40}}>
            <ActivityIndicator size='small' color='maroon'/>
          </View>
      )}
      />
    </View>
  );
}

export default TabTwoScreen;
