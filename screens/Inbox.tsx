import React, { useEffect, useState, useContext } from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    TouchableWithoutFeedback,  
    FlatList,
    Dimensions,
    RefreshControl
} from 'react-native';

import {AppContext} from '../AppContext';
import useStyles from '../styles';

import { LinearGradient } from 'expo-linear-gradient';
import { format, parseISO } from "date-fns";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { getUser, listMessages } from '../src/graphql/queries';


const Inbox = ({navigation} : any) => {

    const { setTheme } = useContext(AppContext);
    const { theme } = useContext(AppContext);
    const { userID } = useContext(AppContext);

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
                getUser, {nextToken, id: userID}
            ))

            const response2 = await API.graphql(graphqlOperation(
                listMessages
            ))

            console.log(response2.data.listMessages.items)

            if (response.data.getUser.messagesIn.items.length > 0) {
                for (let i = 0; response.data.getUser.messagesIn.items.length; i++) {
                    Arr.push(response.data.getUser.messagesIn.items)
                }
                if (response.data.getUser.messagesIn.nextToken) {
                    setNextToken(response.data.getUser.messagesIn.nextToken)
                    getMessages();
                    return;
                }
            }
            
            setMessages(Arr);
            setIsLoading(false);
        }
        getMessages();
    }, [didUpdate])

    const Item = ({index, id, title, content, subtitle, senderID, senderFirstName, senderLastName, createdAt, isReadbyUser, isReadByOtherUser, status} : any) => {

        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('ViewMessage', {messageid: id})}>
                <View style={{backgroundColor: index%2 === 0 ? '#303030a5' : 'transparent', alignItems: 'center', paddingVertical: 6, flexDirection: 'row', justifyContent: 'space-between'}}>
                    {isReadbyUser === false ?  (
                        <View style={{}}>
                            <FontAwesome5 
                                name='hand-point-right'
                                size={20}
                                color='#00ffffa5'
                                style={{marginLeft: 20, marginRight: 0, alignSelf: 'center'}}
                            />
                        </View>
                    ) : null}
                    
                    <View style={{marginRight: 20, marginVertical: 10, paddingHorizontal: 20, width: isReadbyUser === true && currentUserID === userID ? Dimensions.get('window').width : isReadbyUser === false && currentUserID === userID ? Dimensions.get('window').width - 40 : isReadByOtherUser === true && currentUserID !== userID ? Dimensions.get('window').width : isReadByOtherUser === false && currentUserID !== userID ? Dimensions.get('window').width - 40 : Dimensions.get('window').width}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{color: '#fff', fontSize: 12}}>
                                {format(parseISO(createdAt), "MMM do")}
                            </Text>
                        </View>
                        <Text style={{color: '#fff', fontSize: 12, marginTop: 4 }}>
                            {title}
                        </Text>
                        <Text style={{color: '#fff', fontSize: 12, marginTop: 4 }}>
                            {subtitle}
                        </Text>
                        <Text numberOfLines={2} style={{color: 'gray', fontSize: 12 }}>
                            {content}
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
                senderFirstName={item.sender.fistName}
                senderLastName={item.sender.lastName}
                isReadbyUser={item.isReadbyUser}
                isReadByOtherUser={item.isReadByOtherUser}
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
                            <View style={{height: 120}}/>
                        )
                    }}
                    ListEmptyComponent={() => {
                        return (
                            <View style={{height: 120}}/>
                        )
                    }}
                />
            </View>
        </View>
    );
}

export default Inbox;