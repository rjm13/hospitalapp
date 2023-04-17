import React, {useContext, useEffect, useState} from 'react';
import { 
  Text, 
  View, 
  Dimensions,
  TouchableWithoutFeedback
 } from 'react-native';

import { format } from "date-fns";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';

import { AppContext } from '../AppContext';
import useStyles from '../styles';

const Header = ({header} : any) => {

    const navigation = useNavigation();

    const { userID, theme } = useContext(AppContext);

    const styles = useStyles(theme);

    return (
        <View style={{alignSelf: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 60, justifyContent: 'space-between', width: Dimensions.get('window').width - 40}}>
            <FontAwesome name='chevron-left' color={theme === true ? '#fff' : '#000'} onPress={() => navigation.goBack()} size={18} style={{padding: 20, margin: -20}}/>
            <Text style={[styles.title, {}]}>
                {header}
            </Text>
            <View />
        </View>
    )
}

export default Header