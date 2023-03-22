import React, { useEffect, useState, useContext } from 'react';
import {
    View, 
    Text, 
    Dimensions,
} from 'react-native';

import {AppContext} from '../AppContext';
import useStyles from '../styles';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { getMessage } from '../src/graphql/queries';
import { updateMessage } from '../src/graphql/mutations';

const ViewMessage = ({navigation, route} : any) => {

    const {messageid} = route.params

    const { theme } = useContext(AppContext);
    const { userID } = useContext(AppContext);

    const styles = useStyles(theme);

    const [message, setMessage] = useState({
        title: '',
        subtitle: '',
        content: '',
        messageType: '',
    })

    useEffect(() => {
        const fetchMessage = async () => {
            const response = await API.graphql(graphqlOperation(
                getMessage, {id: messageid}
            ))
            setMessage(response.data.getMessage)

            if (response.data.getMessage.isReadByReceiver === false) {
                await API.graphql(graphqlOperation(
                    updateMessage, {input: {
                        id: messageid,
                        isReadByReceiver: true
                    }}
                ))
            }
        }
        fetchMessage();
    }, [messageid])

    return (
        <View style={styles.container}>
            <View style={{width: Dimensions.get('window').width - 60}}>
                <View style={{height: 60}}/>
                <FontAwesome onPress={() => navigation.goBack()} name='close' color={theme === true ? '#fff' : '#000'} size={20} style={{margin: -20, padding: 20}}/>
            </View>
            <View style={{margin: 20, justifyContent: 'space-around', height: Dimensions.get('window').height - 60}}>
                <View>
                    <Text style={[styles.title, {textAlign: 'center', fontSize: 34}]}>
                        {message.messageType}
                    </Text>
                    <Text style={[styles.paragraph, {textAlign: 'center', marginVertical: 20, fontSize: 16}]}>
                        {message.content}
                    </Text>
                </View>
                <Ionicons name={message.messageType === 'Shift Approved' ? 'ios-checkmark-circle-outline' : 'skull'} color={message.messageType === 'Shift Approved' ? 'green' : 'lightgray'} size={120} style={{alignSelf: 'center', marginVertical: 20}}/>
                <View>
                    <Text style={[styles.paragraph, {textAlign: 'center'}]}>
                        {message.title}
                    </Text>
                </View>
                <View>
                    <Text>
                        {message.subtitle}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ViewMessage;