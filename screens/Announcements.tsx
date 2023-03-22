import React, {useContext, useEffect, useState} from 'react';
import { 
  Text, 
  View, 
  Dimensions, 
  FlatList, 
  TouchableWithoutFeedback,
  RefreshControl,
  ActivityIndicator
 } from 'react-native';

import { format } from "date-fns";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AppContext } from '../AppContext';
import useStyles from '../styles';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { updateUser } from '../src/graphql/mutations';
import { getUser, shiftsByRole } from '../src/graphql/queries';

const TabTwoScreen = ({ navigation }: any) => {

  const { userID } = useContext(AppContext);
  const { departID } = useContext(AppContext);
  const { hospID } = useContext(AppContext);
  const { systemID } = useContext(AppContext);
  const { userRoleID } = useContext(AppContext);
  const { theme } = useContext(AppContext);

  const styles = useStyles(theme);

  const [didUpdate, setDidUpdate] = useState(false);

  //refresh state of the flatlist
  const [isFetching, setIsFetching] = useState(false);

  const [announcements, setAnnouncements] = useState([
    {
        id: '1', 
        type: 'Announcement',
        updatedAt: new Date(),
        createdAt: new Date(),
        date: new Date(),
        startTime: new Date(),
        endTime: new Date(),
        title: 'Announcement 1',
        announcement: 'Make sure when you make an announcement you are able to add paragraphs. If you dont it will just be 1 big jumbled mess of words.'
    }
  ])

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
    }
    fetchShifts();
  }, [didUpdate])

  const Item = ({id, date, startTime, endTime, announcement, priority, title, createdAt} : any) => {
    
    return (
      <TouchableWithoutFeedback>
      <View style={{alignSelf: 'center', marginVertical: 10, backgroundColor: theme === true ? '#363636a5' : 'white', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10, marginBottom: 0, borderWidth: 0, borderColor: 'gray', width: Dimensions.get('window').width - 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <Text style={styles.title}>
              {title}
            </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>
              {format(date, "MMMM do yyyy")}
            </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          </View>
            <Text style={[styles.paragraph, {fontSize: 16, fontWeight: '500'}]}>
                {format(startTime, "p")}
            </Text>
            <Text style={[styles.paragraph, {marginHorizontal: 4, fontSize: 16}]}>
            -
            </Text>
            <Text style={[styles.paragraph, {fontSize: 16, fontWeight: '500'}]}>
            {format(endTime, "p")}
            </Text>
          </View>

        <View style={{marginVertical: 4, padding: 10}}>
          <Text style={styles.paragraph}>
            {announcement}
          </Text>
        </View>
      </View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={announcements}
        style={{alignSelf: 'center'}}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item + index}
        extraData={didUpdate}
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
            priority={item.priority}
            announcement={item.announcement}
            type={item.type}
            title={item.title}
          />
        }
        ListFooterComponent={ () => (
            <View>
                <View style={{height: 80}}>

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
