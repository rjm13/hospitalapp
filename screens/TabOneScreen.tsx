import { StyleSheet, TouchableOpacity, Text, View, FlatList, Dimensions, SectionList } from 'react-native';
//import {styles} from '../styles';
import { format, parseISO } from "date-fns";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TabOneScreen = ({ navigation }: any) => {


  const dummyshifts = [
    {
      id: '1',
      title: 'March 8th',
      key: '03092023',
      data : [
        {
        id: '1',
        title: 'March 9',
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'Some Manager',
        name: 'CCT',
        notes: 'random notes about the shift.',
        system: 'Harris Health',
        hospital: 'Lyndon B. Johnson',
        department: 'Emergency Room',
        role: 'nurse',
        announcement: 'this is an announcement',
        qual: [
          {
            id: '1',
            name: 'Certified Flight Nurse',
            abberviation: 'CFFN',
          },
          {
            id: '2',
            name: 'Pediatric Advanced Life Support',
            abberviation: 'PALS',
          },
        ],
        date: new Date(),
        month: 'July',
        year: '2023',
        startTime: '700',
        startAMPM: 'AM',
        endTime: '1900',
        endAMPM: 'PM',
        payMultiplier: 1.5,
        payRate: '20',
        status: 'open',
        user: 'none',
        priority: 'urgent',
        numNeeded: 1,
        trade: false,
        giveUp: false,
        approved: 'na',
        shiftType: 'night'
      },
      {
        id: '1',
        title: 'March 9',
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'Some Manager',
        name: 'CCT',
        notes: 'random notes about the shift.',
        system: 'Harris Health',
        hospital: 'Lyndon B. Johnson',
        department: 'Emergency Room',
        role: 'nurse',
        announcement: 'this is an announcement',
        qual: [
          {
            id: '1',
            name: 'Certified Flight Nurse',
            abberviation: 'CFFN',
          },
          {
            id: '2',
            name: 'Pediatric Advanced Life Support',
            abberviation: 'PALS',
          },
        ],
        date: new Date(),
        month: 'July',
        year: '2023',
        startTime: '700',
        startAMPM: 'AM',
        endTime: '1900',
        endAMPM: 'PM',
        payMultiplier: 1.5,
        payRate: '20',
        status: 'open',
        user: 'none',
        priority: 'urgent',
        numNeeded: 1,
        trade: false,
        giveUp: false,
        approved: 'na',
        shiftType: 'night',
      },
    ]
      
    },
    {
      id: '2',
      title: 'March 9th',
      key: '03082023',
      data: [
        {
          id: '1',
          title: 'March 9',
          createdAt: new Date(),
          updatedAt: new Date(),
          createdBy: 'Some Manager',
          name: 'Charge',
          notes: 'random notes about the shift.',
          system: 'Harris Health',
          hospital: 'Lyndon B. Johnson',
          department: 'Emergency Room',
          role: 'nurse',
          announcement: 'this is an announcement',
          qual: [
          {
            id: '1',
            name: 'Certified Flight Nurse',
            abberviation: 'CFFN',
          },
          {
            id: '2',
            name: 'Pediatric Advanced Life Support',
            abberviation: 'PALS',
          },
        ],
        date: new Date(),
        month: 'July',
        year: '2023',
        startTime: '700',
        startAMPM: 'AM',
        endTime: '1900',
        endAMPM: 'PM',
        payMultiplier: 1.5,
        payRate: '20',
        status: 'open',
        user: 'none',
        priority: 'none',
        numNeeded: 1,
        trade: false,
        giveUp: false,
        approved: 'na',
        shiftType: 'day'
        },
      ]
    },
    {
      id: '3',
      title: 'March 10th',
      key: '03072023',
      data: [
        {
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 'Some Manager',
        name: 'Shock Room',
        notes: 'random notes about the shift.',
        system: 'Harris Health',
        hospital: 'Lyndon B. Johnson',
        department: 'Emergency Room',
        role: 'nurse',
        announcement: 'this is an announcement',
        qual: [
          {
            id: '1',
            name: 'Certified Flight Nurse',
            abberviation: 'CFFN',
          },
          {
            id: '2',
            name: 'Pediatric Advanced Life Support',
            abberviation: 'PALS',
          },
        ],
        date: new Date(),
        month: 'July',
        year: '2023',
        startTime: '700',
        startAMPM: 'AM',
        endTime: '1900',
        endAMPM: 'PM',
        payMultiplier: 1.5,
        payRate: '20',
        status: 'open',
        user: 'none',
        priority: 'urgent',
        numNeeded: 1,
        trade: false,
        giveUp: false,
        approved: 'na',
        shiftType: 'day'
      },
    ]
    },
  ];

  const Item = ({id, date, shiftType, notes, priority, startTime, endTime, startAMPM, endAMPM, numNeeded, name, payMultiplier, payRate} : any) => {
    return (
      <View style={{alignSelf: 'center', paddingHorizontal: 20, paddingVertical: 10, marginBottom: 0, borderWidth: 0, borderBottomRightRadius: 10, borderBottomLeftRadius: 10, width: Dimensions.get('window').width - 40}}>
          <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {priority === 'urgent' ? (
              <FontAwesome5 
                name='exclamation-triangle'
                color='tomato'
                size={12}
                style={{marginRight: 4}}
              />
            ) : null}
          </View>
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              {startTime + ' '}
            </Text>
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              {startAMPM}
            </Text>
            <Text style={{marginHorizontal: 4, fontSize: 16}}>
              -
            </Text>
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              {endTime + ' '}
            </Text>
            <Text style={{fontSize: 16, fontWeight: '500'}}>
              {endAMPM}
            </Text>
          </View>
          
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{}}>
            {name}
          </Text>
          {shiftType === 'night' ? (
            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
              <FontAwesome5 
                name='moon'
                color='darkblue'
                size={12}
                style={{marginRight: 4}}
              />
            </View>
          ) : null}
          
          <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
            <FontAwesome5 
              name='bolt'
              color='green'
              size={12}
              style={{marginRight: 4}}
            />
            <Text style={{fontSize: 14}}>
              {payMultiplier}
            </Text>
          </View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10}}>
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
    )
  }

  return (
    <View style={styles.container}>
      <SectionList
        style={{alignSelf: 'center'}}
        sections={dummyshifts}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item } : any) =>
          <Item 
            id={item.id}
            name={item.name}
            date={format((item.date), "MMMM do")}
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
          />
        }
        renderSectionHeader={({ section: { title, data } }) => (
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'lightgray', paddingVertical: 4, paddingHorizontal: 10, marginTop: 10, borderWidth: 0, borderTopRightRadius: 0, borderTopLeftRadius: 0,padding: 0, width: Dimensions.get('window').width - 0}}>
              <Text style={{fontWeight: '600', fontSize: 14}}>{title}</Text>
              <Text style={{fontWeight: '400', fontSize: 14}}>{data.length + ' ' + 'shift'}</Text>
            </View>
        )}
        ListFooterComponent={ () => (
            <View>
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
