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

import { format, formatRelative, parseISO } from "date-fns";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AppContext } from '../AppContext';
import useStyles from '../styles';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { updateUser } from '../src/graphql/mutations';
import { announcementsBySystem, announcementsByHospital, announcementsByDepartment, announcementsByRole  } from '../src/graphql/queries';

const Announcements = ({ navigation }: any) => {

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

  const [announcements, setAnnouncements] = useState([])

  const onRefresh = () => {
      setIsFetching(true);
      setDidUpdate(!didUpdate)
      setTimeout(() => {
          setIsFetching(false);
      }, 2000);
      }

//fetch the data
  useEffect(() => {

    setIsFetching(true);

    let today = new Date()

    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();
    const c = new Date(year, month - 1, day);

    let arr = []

    // const fetchSystemAnnouncements = async () => {

    //   const response = await API.graphql(graphqlOperation(
    //     announcementsBySystem, {
    //       systemID: systemID,
    //     }
    //   ))

    //   for (let i = 0; i < response.data.announcementsBySystem.items.length; i++) {
    //     arr.push(response.data.announcementsBySystem.items.length)
    //   }
    // }
    // const fetchHospitalAnnouncements = async () => {

    //     const response = await API.graphql(graphqlOperation(
    //       announcementsByHospital, {
    //         hospitalID: hospID,
    //       }
    //     ))
  
    //     for (let i = 0; i < response.data.announcementsByHospital.items.length; i++) {
    //       arr.push(response.data.announcementsByHospital.items.length)
    //     }
    // }
    // const fetchDepartmentAnnouncements = async () => {

    // const response = await API.graphql(graphqlOperation(
    //     announcementsByDepartment, {
    //     departmentID: departID,
    //     createdAt: {
    //         gt: c.toISOString()
    //     }
    //     }
    // ))

    // for (let i = 0; i < response.data.announcementsByDepartment.items.length; i++) {
    //     arr.push(response.data.announcementsByDepartment.items[i])
    // }
    // }  
    
    const fetchRoleAnnouncements = async () => {

        const response = await API.graphql(graphqlOperation(
            announcementsByRole, {
            roleID: userRoleID,
            createdAt: {
                gt: c.toISOString()
            }
            }
        ))
    
        for (let i = 0; i < response.data.announcementsByRole.items.length; i++) {
            arr.push(response.data.announcementsByRole.items[i])
        }
        const respon = await API.graphql(graphqlOperation(
          announcementsByDepartment, {
          departmentID: departID,
          createdAt: {
              gt: c.toISOString()
          }
          }
      ))
  
      for (let i = 0; i < respon.data.announcementsByDepartment.items.length; i++) {
          arr.push(respon.data.announcementsByDepartment.items[i])
      } 

      arr.sort(function(a,b){return new Date(b.createdAt) - new Date(a.createdAt);});

      setAnnouncements(arr);     

    }  
    fetchRoleAnnouncements();
    setIsFetching(false);
  }, [didUpdate])

  const Item = ({id, date, startTime, endTime, announcement, priority, type, title, createdAt} : any) => {
    
    const createdDate = parseISO(createdAt)

    return (
      <TouchableWithoutFeedback>
      <View style={{alignSelf: 'center', marginVertical: 10, backgroundColor: theme === true ? '#363636a5' : 'white', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10, marginBottom: 0, borderWidth: 0, borderColor: 'gray', width: Dimensions.get('window').width - 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center',}}>
            <Text style={styles.title}>
              {title}
            </Text>
        </View>

        {type === 'Event' ? (
        <View style={{marginTop: 6}}>
            <Text style={styles.paragraph}>
              {format(parseISO(date), "MMMM do yyyy")}
            </Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.paragraph, {}]}>
                    {format(parseISO(startTime), "p")}
                </Text>
                <Text style={[styles.paragraph, {marginHorizontal: 4, fontSize: 16}]}>
                -
                </Text>
                <Text style={[styles.paragraph, {}]}>
                {format(parseISO(endTime), "p")}
                </Text>
            </View>
          </View>
        ) : null}

        <View style={{marginVertical: 4, padding: 10}}>
          <Text numberOfLines={20} style={[styles.paragraph, {color: '#d3d3d3', fontSize: 15, fontWeight: '300'}]}>
            {announcement}
          </Text>
        </View>
        <View style={{marginVertical: 4, padding: 0}}>
          <Text style={[styles.paragraph, {fontSize: 12, color: 'gray'}]}>
            Created {formatRelative(createdDate, new Date())} by Meghan Myers 
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
        keyExtractor={(item, index) => item.id + index}
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
            createdAt={item?.createdAt}
          />
        }
        ListFooterComponent={ () => (
            <View>
                <View style={{height: 80}}>

                </View>
            </View>
        )}
        ListHeaderComponent={ () => (
            <View>
                <View style={{height: 20}}>

                </View>
            </View>
        )}
        ListEmptyComponent={ () => (
          <View style={{alignItems: 'center', justifyContent: 'center', marginVertical: 40}}>
            {isFetching === true ? (
                <ActivityIndicator size='small' color='maroon'/>
            ) : (
                <Text style={styles.paragraph}>
                    There are no recent announcements
                </Text>
            )}
          </View>
      )}
      />
    </View>
  );
}

export default Announcements;
