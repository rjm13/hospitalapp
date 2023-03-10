import { 
  StyleSheet, 
  TouchableOpacity, 
  Text, 
  View, 
  FlatList, 
  Dimensions, 
  SectionList, 
  TouchableWithoutFeedback,
  RefreshControl,
  ActivityIndicator
 } from 'react-native';
//import {styles} from '../styles';
import { format, parseISO } from "date-fns";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import React, {useContext, useEffect, useState} from 'react';
import Accordion from 'react-native-collapsible/Accordion';

import { API, graphqlOperation, Auth, Storage } from "aws-amplify";
import { updateUser } from '../src/graphql/mutations';
import { getUser, getRole } from '../src/graphql/queries';

const TabOneScreen = ({ navigation }: any) => {

  const [activeSections, setActiveSections] = useState([])

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

  const [sections, setSections] = useState([]);

  const [empty, setEmpty] = useState(false)

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

      const userInfo = await Auth.currentAuthenticatedUser();

      const response = await API.graphql(graphqlOperation(
        getUser, {id: userInfo.attributes.sub}
      ))
      const resp = await API.graphql(graphqlOperation(
        getRole, {id: response.data.getUser.primaryRoleID}
      ))

      for (let i = 0; i < resp.data.getRole.activeShifts.items.length; i++) {
        let index = arr.findIndex((obj => obj.title === resp.data.getRole.activeShifts.items[i].date));
        if (index !== -1 && resp.data.getRole.activeShifts.items[i].status === 'open') {
          arr[index].data.push(resp.data.getRole.activeShifts.items[i]);
        }
      }

      // for (let i = 0; i < dummyshifts.length; i++) {
      //   let index = arr.findIndex((obj => obj.title === dummyshifts[i].title));
       
      //   if (index !== -1) {
      //     arr[index].data.push(dummyshifts[i]);
      //   }
      // }
      //console.log(arr)
      setSections(arr)
      if (resp.data.getRole.activeShifts.items.length === 0) {
        setEmpty(true);
      } else {
        setEmpty(false)
      }
    }
    fetchShifts();
  }, [didUpdate])

  const Item = ({id, date, title, shiftType, notes, priority, startTime, endTime, startAMPM, endAMPM, numNeeded, name, payMultiplier, payRate} : any) => {
      const [vis, setVis] = useState(true);
      useEffect(() => {
        if (activeSections.includes(date) === true) {
        
          setVis(false);
        }
      }, [])
      
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Modal', {id: id})}>
      <View style={{height:  vis ? undefined : 0, alignSelf: 'center', marginVertical: 4, backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 10, paddingVertical: vis ? 10 : 0, marginBottom: 0, borderWidth: 0, borderColor: 'gray', width: Dimensions.get('window').width - 20}}>
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

        <View style={{marginVertical: 4}}>
          <Text style={{}}>
            {notes}
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
        <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'lightgray', paddingVertical: 4, paddingHorizontal: 10, marginTop: 0, borderWidth: 0, borderTopRightRadius: 0, borderTopLeftRadius: 0,padding: 0, width: Dimensions.get('window').width - 0}}>
          <Text style={{fontWeight: '600', fontSize: 14}}>{title}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight: '400', fontSize: 14}}>{data.length === 1 ? data.length + ' ' + 'Shift' : data.length + ' ' + 'Shifts'}</Text>
            <FontAwesome5 name={vis ? 'caret-down' : 'caret-right'} size={16} style={{width: 20, paddingHorizontal: 4}}/>
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
                <Text style={{marginVertical: 80}}>
                  There are no open shifts posted at this time.
                </Text>
              ) : (
                <View style={{height: 80}}>

                </View>
              )}
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

const styles = StyleSheet.create({
  container: {
    height: '100%',
    //flex: 1,
    //  `marginTop: Constants.statusBarHeight,
  },
  headerbox: {
    backgroundColor: '#fff',
    //height: 100,
    elevation: 1,
    padding: 16, 
    
},
titlebox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
},
  title: {
    fontFamily: 'chalkboard-bold',
    fontSize: 18,
  },
  titleblock: {

},
submittedby: {
    fontFamily: 'chalkboard-regular',
    color: '#155843',
    fontSize: 14,
  },
iconbox: {
    flexDirection: 'row',
    //backgroundColor: 'green',
    marginVertical: 8,
    justifyContent: 'space-between',
    width: 64,
},
category: {
    fontFamily: 'chalkboard-light',
    fontSize: 14,
    color: '#155843',
},
footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8
},
playersbutton: {
    borderRadius: 4,
    backgroundColor: '#B2D9BF',
    paddingHorizontal: 8,
    paddingVertical: 2,
},
variationsbutton: {
    borderRadius: 4,
    backgroundColor: '#D9D1B2',
    paddingHorizontal: 8,
    paddingVertical: 2,
},
footertext: {
    fontFamily: 'chalkboard-regular',
    fontSize: 14,
},
//   titlebox: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
  cardbox: {
    marginHorizontal: 16,
    marginTop: 16,
    backgroundColor: '#fff',
    elevation: 1,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerbox: {
    marginHorizontal: 16,
    backgroundColor: '#fff',
    elevation: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  databox: {
    marginHorizontal: 16,
    backgroundColor: '#fff',
    elevation: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
    warningtext: {
        fontFamily: 'chalkboard-regular',
        fontSize: 14,
  },
  flattitlebox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 16,
},
submitbutton: {
    borderRadius: 4,
    backgroundColor: '#D9D1B2',
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 8,
},
housefavbutton: {
    marginVertical: 8,
},
bottombuttonbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginVertical: 16,
},
});

export default TabOneScreen;
