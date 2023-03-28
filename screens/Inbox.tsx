import React, { useEffect, useState, useContext } from 'react';
import {
    View, 
    Text, 
    TouchableWithoutFeedback,  
    FlatList,
    Dimensions,
    RefreshControl,
    ActivityIndicator
} from 'react-native';

import {AppContext} from '../AppContext';
import useStyles from '../styles';

import { format, parseISO } from "date-fns";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {StatusBar} from 'expo-status-bar'

import { API, graphqlOperation } from "aws-amplify";
import { messagesByUser } from '../src/graphql/queries';


const Inbox = ({navigation} : any) => {

    const { userID, militaryTime, theme } = useContext(AppContext);

    const styles = useStyles(theme);
    
    const [messages, setMessages] = useState([]);

    const [didUpdate, setDidUpdate] = useState(false);

    const [nextToken, setNextToken] = useState()

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {

        const Arr = [];

        setIsLoading(true);

        let getMessages = async () => {

            const response = await API.graphql(graphqlOperation(
                messagesByUser, {
                    nextToken, 
                    receiverID: userID,
                }
            ))

            if (response.data.messagesByUser.items.length > 0) {
                for (let i = 0; i < response.data.messagesByUser.items.length; i++) {
                    Arr.push(response.data.messagesByUser.items[i])
                }
                if (response.data.messagesByUser.nextToken) {
                    setNextToken(response.data.messagesByUser.nextToken)
                    getMessages();
                    return;
                }
            }
            setMessages(Arr);
            setIsLoading(false);
        }
        getMessages();
    }, [didUpdate])

    const Item = ({index, id, title, content, subtitle, senderID, senderFirstName, senderLastName, createdAt, isReadbyUser, isReadBySender, isReadByReceiver, status} : any) => {

        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('ViewMessage', {messageid: id})}>
                <View style={{backgroundColor: index%2 === 0 ? 'transparent' : theme === true ? '#363636a5' : '#d3d3d3a5', alignItems: 'center', paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                    {isReadByReceiver === false ?  (
                        <View style={{}}>
                            <FontAwesome5 
                                name='hand-point-right'
                                size={20}
                                color={theme === true ? 'tomato' : 'maroon'}
                                style={{marginLeft: 20, marginRight: 0, alignSelf: 'center'}}
                            />
                        </View>
                    ) : null}
                    
                    <View style={{marginRight: 20, marginVertical: 10, paddingHorizontal: 20, width: isReadByReceiver === true ? Dimensions.get('window').width : Dimensions.get('window').width - 40}}>
                        <Text style={[styles.paragraph, {fontSize: 13, fontWeight: 'bold'}]}>
                            {title}
                        </Text>
                        <Text style={[styles.paragraph, {fontSize: 12, marginTop: 6 }]}>
                            {format(parseISO(createdAt), militaryTime === true ? "MMMM do yyyy HH:mm" : "MMMM do yyyy p")}
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            
        );
    }

    const renderItem = ({item, index}: any) => {

        return (
            <Item 
                id={item.id}
                title={item.title}
                content={item.content}
                subtitle={item.subtitle}
                senderID={item.userID}
                receiverID={item.otherUserID}
                createdAt={item.createdAt}
                senderFirstName={item.sender?.firstName}
                senderLastName={item.sender?.lastName}
                isReadbySender={item.isReadbySender}
                isReadByReceiver={item.isReadByReceiver}
                index={index}
                updatedAt={item.updatedAt}
                status={item.status}
            />
        )
    }

    const [isFetching, setIsFetching] = useState(false);

    const onRefresh = () => {
        setIsFetching(true);
        setDidUpdate(!didUpdate)
        setTimeout(() => {
          setIsFetching(false);
        }, 2000);
      }

    return (
        <View style={styles.container}>
            <View style={{width:Dimensions.get('window').width - 40, justifyContent: 'space-between', flexDirection: 'row', marginTop: 30, alignItems: 'center'}}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <View style={{padding: 30, margin:-30}}>
                        <FontAwesome5 
                            name='chevron-left'
                            color={theme === true ? '#fff' : '#000'}
                            size={20}
                        />
                    </View>
                </TouchableWithoutFeedback>
                <Text style={[styles.title, { marginHorizontal: 40, marginVertical: 20, }]}>
                    Inbox
                </Text>
                <View style={{width: 0}}/>
            </View>

            <View style={{height: '87%'}}>
                <FlatList 
                    data={messages}
                    extraData={messages}
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
                                <Text style={styles.paragraph}>
                                    You have no messaages at this time.
                                </Text>
                            )}
                        </View>
                    }
                />
            </View>
            <StatusBar style={theme === true ? "light" : "dark"} backgroundColor='transparent'/>
        </View>
    );
}

export default Inbox;