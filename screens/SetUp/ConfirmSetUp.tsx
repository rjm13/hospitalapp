import React, {useState, useEffect, useContext} from 'react';
import {
    View, 
    Text, 
    Dimensions, 
    TouchableOpacity,
    TextInput,
    FlatList,
    ScrollView,
    TouchableWithoutFeedback,
    Image
} from 'react-native';

import { API, graphqlOperation, Auth } from "aws-amplify";
import { updateUser, createQualUser } from '../../src/graphql/mutations';
import { getUser, getRole } from '../../src/graphql/queries';
import { AppContext } from '../../AppContext';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {LinearGradient} from 'expo-linear-gradient';

import useStyles from '../../styles'


const ConfirmSetUp = ({navigation, route} : any) => {

    const { theme } = useContext(AppContext);

    const styles = useStyles(theme);

    const {systemID, systemImageUri, systemName} = route.params

    const [hospitalData, setHospitalData] = useState(
        {
            id: '',
            name: '',
        }
    );

    const [department, setDepartment] = useState({
        id: '',
        name: '',
    });

    const [role, setRole] = useState({
        id: '',
        title: '',
    });

    const [quals, setQuals] = useState([
        {id: '',
        title: '',
        abbreviation: '',
    }]);

    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {

        const fetchUser = async () => {

            const userInfo = await Auth.currentAuthenticatedUser();

            let hosparr = [];

            let qualarr = []

            const getIt = await API.graphql(
                graphqlOperation(
                    getUser, {
                        id: userInfo.attributes.sub,
                    })
            )
            //console.log(getIt.data.getUser.department)
            
            // for (let i = 0; i < 1; i++) {
            //     hosparr.push(getIt.data.getUser.hospital.items[i].hospital)
            // }

            for (let i = 0; i < getIt.data.getUser.quals.items.length; i++) {
                qualarr.push(getIt.data.getUser.quals.items[i].qual)
            }

            setHospitalData(getIt.data.getUser.hosp)
            setDepartment(getIt.data.getUser.department)
            setRole(getIt.data.getUser.primaryRole)
            setQuals(qualarr)
            setUserInfo(getIt.data.getUser)
        }
        fetchUser();
    }, [])

    const SCREEN_HEIGHT = Dimensions.get('window').height
    const SCREEN_WIDTH = Dimensions.get('window').width
    
    return (
        <View style={[styles.container, {}]}>
            <ScrollView showsVerticalScrollIndicator={false} style={{}} contentContainerStyle={{alignItems: 'center'}}>
                {systemImageUri.length > 1 ? (
                    <Image
                        style={{marginTop: 60, height: 100, width: SCREEN_WIDTH - 100, resizeMode: 'contain'}}
                        source={{uri: systemImageUri}}
                    />
                ) : (
                    <Text style={[styles.title, {fontSize: 26, marginTop: 20}]}>
                        {systemName}
                    </Text>
                )}

                <View style={{marginVertical: 20}}>
                    <Text style={[styles.title, {fontSize: 26, textTransform: 'capitalize'}]}>
                        Welcome {userInfo?.firstName}!
                    </Text>
                    <Text style={[styles.subtext, {textAlign: 'center', textTransform: 'capitalize'}]}>
                        {userInfo.firstName + "  " + userInfo.lastName}
                    </Text>
                </View>

            <View style={{alignItems: 'center', marginTop: 20}}>

                <View>
                    <Text style={styles.subtext}>
                        My Hospital
                    </Text>
                    <View style={{height: 1, backgroundColor: '#e0e0e0', width: SCREEN_WIDTH - 40}}/>
                </View>
                
                <View style={{flexDirection: 'row', width: Dimensions.get('window').width - 80, justifyContent: 'center', marginVertical: 0}}>
                    <View>
                        {/* {hospitalData.map(({id, name}, index) => {
                            return ( */}
                                <View style={{padding: 10, backgroundColor: '#fff', flexDirection: 'row', width: Dimensions.get('window').width - 80, justifyContent: 'center', marginVertical: 6}}>
                                    <Text style={[styles.paragraph, {marginVertical: 0}]}>
                                        {hospitalData?.name}
                                    </Text>
                                </View>
                            {/* )})} */}
                    </View>
                </View>

                <View>
                    <Text style={styles.subtext}>
                        My Department
                    </Text>
                    <View style={{height: 1, backgroundColor: '#e0e0e0', width: SCREEN_WIDTH - 40}}/>
                </View>
                
                <View style={{padding: 10, backgroundColor: '#fff', flexDirection: 'row', width: Dimensions.get('window').width - 80, justifyContent: 'center', marginVertical: 6}}>
                    <Text style={[styles.paragraph, {marginVertical: 0}]}>
                        {department?.name}
                    </Text>
                </View>

                <View>
                    <Text style={styles.subtext}>
                        My Role
                    </Text>
                    <View style={{height: 1, backgroundColor: '#e0e0e0', width: SCREEN_WIDTH - 40}}/>
                </View>
                <View style={{padding: 10, backgroundColor: '#fff', flexDirection: 'row', width: Dimensions.get('window').width - 80, justifyContent: 'center', marginVertical: 6}}>
                    <Text style={[styles.paragraph, {marginVertical: 0, textTransform: 'capitalize'}]}>
                        {role?.title}
                    </Text>
                </View>

                <View>
                    <Text style={styles.subtext}>
                        My Qualifications
                    </Text>
                    <View style={{height: 1, backgroundColor: '#e0e0e0', width: SCREEN_WIDTH - 40}}/>
                </View>

                <View style={{flexDirection: 'row', width: Dimensions.get('window').width - 80, justifyContent: 'center', marginVertical: 0}}>
                    <View>
                        {quals.map(({id, title}, index) => {
                            return (
                                <View key={id} style={{padding: 10, backgroundColor: '#fff', flexDirection: 'row', width: Dimensions.get('window').width - 80, justifyContent: 'center', marginVertical: 6}}>
                                    <Text style={[styles.paragraph, {marginVertical: 0}]}>
                                        {title}
                                    </Text>
                                </View>
                            )})}
                    </View>
                </View>
            </View>
            <View style={{height: 100}}/>
            </ScrollView> 
        
{/* FOOTER */}
        <LinearGradient
            colors={['#fff','#fff', '#ffffffa5','transparent']}
            style={{position: 'absolute', bottom: 0 }}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
        >
            <View style={{marginBottom: 20, flexDirection: 'row', width: SCREEN_WIDTH, justifyContent: 'space-between', paddingHorizontal: 40}}>
                <TouchableOpacity onPress={() =>  navigation.navigate('SelectQuals', {systemID: systemID, systemImageUri: systemImageUri, systemName: systemName})}>
                    <View style={[{backgroundColor: 'maroon', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25}]}>
                        <FontAwesome5 
                            name='chevron-left'
                            color='#fff'
                            size={24}
                            style={{
                                
                            }}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>  navigation.navigate('Redirect', {trigger: Math.random()})}>
                    <View style={[{backgroundColor: 'maroon', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25}]}>
                        <FontAwesome5 
                            name='chevron-right'
                            color='#fff'
                            size={24}
                            style={{
                                
                            }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </LinearGradient>
        </View>
    )
}

export default ConfirmSetUp;