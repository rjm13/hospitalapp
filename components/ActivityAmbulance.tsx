import React, {useContext, useEffect, useState, useRef} from 'react';
import { View, 
        StyleSheet, 
        Text, 
        Dimensions, 
        Switch, 
        ScrollView, 
        TouchableWithoutFeedback, 
        TouchableOpacity, 
        ActivityIndicator,
        Animated
    } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {AppContext} from '../AppContext';


const Ambulance = ({size} : any) => {

    const { theme } = useContext(AppContext);

    const startingPoint = 0

    const moveCarValue = useRef(new Animated.Value(startingPoint)).current;

    

    Animated.timing(moveCarValue, {
            toValue: Dimensions.get('window').width,
        // easing: Easing.back(),
            duration: 2000,
            useNativeDriver: true,
        }).start();

    return (
        <View style={{marginVertical: 10, width: Dimensions.get('window').width }}>
            <Animated.View style={{position: 'absolute', transform: [{ translateX: moveCarValue }]}}>
                <FontAwesome5 name='ambulance' color={theme === true ? 'tomato' : 'maroon'} size={size}/>
            </Animated.View>
        </View>
        
    )

}

export default Ambulance;