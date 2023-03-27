import React, {useContext, useEffect, useState, useRef} from 'react';
import { View,
        Dimensions,
        Image,
        Animated
    } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {AppContext} from '../AppContext';


const Ambulance = ({size} : any) => {

    const { theme } = useContext(AppContext);

    const startingPoint = -100

    const moveCarValue = useRef(new Animated.Value(startingPoint)).current;

    Animated.loop(
        Animated.timing(moveCarValue, {
            toValue: Dimensions.get('window').width,
            duration: 2000,
            useNativeDriver: true,
        })
    ).start();

    return (
        <View style={{marginVertical: 10, width: Dimensions.get('window').width }}>
            <Animated.View style={{position: 'absolute', transform: [{ translateX: moveCarValue }]}}>
                <Image 
                    source={theme === true ? require('../assets/images/IconWhite.png') : require('../assets/images/IconMaroon.png')}
                    style={{height: size*2, width: size*2 + 4}}
                />
                {/* <FontAwesome5 name='ambulance' color={theme === true ? 'tomato' : 'maroon'} size={size}/> */}
            </Animated.View>
        </View>
        
    )

}

export default Ambulance;