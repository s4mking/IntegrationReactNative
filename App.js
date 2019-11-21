/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';
import { white } from 'ansi-colors';
state = {
  test: [6, 'Wed'],
  name: 'John Doe',
  id: 'ID : Q6644555Q',
  arrayNumber: [
    [5, 'Tue'],
    [6, 'Wed'],
    [7, 'Fri'],
    [8, 'Sat'],
    [9, 'Sun'],
  ],
  taskComplete: 'Vous avez complété 75% de vos taches cette semaine.',
  arrayHead: ['All', 'Loved', 'Usefull', 'Closed'],
  family: 'family',
  contactfa: 'Contacts with your family',
  arrayContact: [
    [require('./assets/imgs/marty.png'), 'Son', 'Marty Mc Fly'],
    [require('./assets/imgs/wife.png'), 'Wife', 'Glados Douglas'],
    [require('./assets/imgs/daughter.png'), 'Daughter', 'Clara Oswald'],
    [require('./assets/imgs/brother.png'), 'Brother', 'Leonard Hoassferd'],
  ],
  arrayCarre: [
    [require('./assets/imgs/medecine.png'), 'Medecine', '9 upcomings'],
    [require('./assets/imgs/reminder.png'), 'Reminders', '3 upcomings'],
    [require('./assets/imgs/doctor.png'), 'Doctor Visits', '1 upcoming'],
    [require('./assets/imgs/phone.png'), 'Calls', '3 upcomings'],
  ],
  report: 'Vous avez effectué ce mois ci',
};

const App: () => React$Node = () => {
  return (
    <View style={styles.body}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.rowDirection}>
            <View></View>
            <View>
              <Text style={styles.titleGreen}>{state.name}</Text>
              <Text style={styles.titleGrey}>{state.id}</Text>
            </View>
            <Image source={require('./assets/imgs/exit.png')} />
          </View>
          <View style={styles.rowDirection}>
            {state.arrayNumber.map(item => (
              <TouchableOpacity
                style={
                  item[0] == state.test[0]
                    ? styles.buttonNumberGreen
                    : styles.buttonNumber
                }>
                <View style={ item[0] == 5 ? styles.redButton : styles.displayNone}></View>
                <Text
                  style={
                    item[0] == state.test[0]
                      ? styles.titleGrey
                      : styles.titleGreen
                  }>
                  {item[0]}
                </Text>
                <Text
                  style={
                    item[1] == state.test[1]
                      ? styles.textBlockTitleWhite
                      : styles.textBlockTitle
                  }>
                  {item[1]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.ContainerGreen}>
            <View style={[styles.rowDirection, styles.roundGreen]}>
              <Image
                style={styles.imgMan}
                source={require('./assets/imgs/mangrass.png')}
              />
              <Text style={styles.textMan}>{state.taskComplete}</Text>
            </View>
          </View>

          <View style={styles.containerBlocks}>
            {state.arrayCarre.map(item => (
              <View style={styles.block}>
                <Image style={styles.ImageRadius} source={item[0]} />
                <Text style={styles.textBlockTitle}>{item[1]}</Text>
                <Text style={styles.textBlockSubTitle}>{item[2]}</Text>
              </View>
            ))}
          </View>
          <View style={styles.ContainerGreen}>
            <View style={[styles.roundGreen]}>
              <View style={styles.ContainerLines}>
                <Text style={styles.textMonth}>{state.report}</Text>
                <View style={styles.whiteLine}>
                  <View style={styles.yellowLine}></View>
                </View>
              </View>
            </View>
          </View>
          <View style={(styles.rowDirection, styles.backgroundGreen)}>
            <View>
              <Text style={styles.titleGreen}>{state.family}</Text>
              <Text style={styles.textBlockSubTitle}>{state.contactfa}</Text>
            </View>
            <View style={styles.cross}>
              <Image source={require('./assets/imgs/plus.png')} />
            </View>
          </View>

          <View style={[styles.rowDirection, styles.TitleRepertoires]}>
            {state.arrayHead.map(item => (
              <Text style={styles.textBlockSubTitle}>{item}</Text>
            ))}
            {/* <Text style={styles.textBlockBlack}>All</Text> */}
          </View>
          {state.arrayContact.map(item => (
            <View style={styles.repertoire}>
              <View style={styles.rowDirection}>
                <Image source={item[0]} />
                <View style={styles.repertoireText}>
                  <Text style={styles.repertoireTitre}>{item[1]}</Text>
                  <Text style={styles.repertoireNom}>{item[2]}</Text>
                </View>
              </View>
              <Image source={require('./assets/imgs/greyphone.png')} />
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  rowDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  roundGreen: {
    backgroundColor: '#28B67B',
    borderRadius: 20,
    position: 'relative',
    paddingVertical: 10,
    marginHorizontal: 20,
    
  },
  backgroundGreen: {
    backgroundColor: '#EBF3EC',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  textMan: {
    color: 'white',
    width: '60%',
    marginLeft: '45%',
  },
  ContainerLines: {
    height:70,
    paddingLeft:30,
    justifyContent:'space-around'
  },
  textMonth:{
    color: 'white',
    textAlign:'left'
  },
  ContainerGreen: {
    backgroundColor: '#EBF3EC',
  },
  imgMan: {
    position: 'absolute',
    top: -30,
    left: 20,
  },
  textBlockTitle: {
    color: '#314E2C',
    fontSize: 18,
  },
  textBlockTitleWhite: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  displayNone :{
    display:'none'
  },
  redButton :{
    width:10,
    height:10,
    borderRadius:50,
    backgroundColor:"#FE4B8A",
    alignSelf:"flex-end",
    marginLeft:20
  },
  titleGreen: {
    color: '#314E2C',
    fontSize: 20,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
  },
  titleWhite: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Avenir',
    fontWeight: 'bold',
  },
  titleGrey: {
    color: '#D9D9D9',
    fontSize: 12,
    fontFamily: 'Avenir',
  },

  repertoire: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#E4E4E4',
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  repertoireTitre: {
    color: '#A4A8AC',
    fontSize: 12,
    fontWeight: 'bold',
  },
  repertoireNom: {
    color: '#314E2C',
    fontSize: 14,
    fontWeight: 'bold',
  },
  TitleRepertoires: {
    marginTop:50,
    marginHorizontal: 35,
    borderBottomColor: '#E4E4E4',
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  repertoireText: {
    marginLeft: 10,
    marginTop: 10,
  },
  whiteLine: {
    backgroundColor:'white',
    height:10,
    width:"90%",
    borderRadius:50
    
  },
  yellowLine: {
    backgroundColor:'#FACE3E',
    height:10,
    width:"50%",
    borderRadius:50

  },
  textBlockSubTitle: {
    color: '#A4A8AC',
    fontSize: 13,
    fontWeight: 'bold',
  },
  textBlockBlack: {
    color: '#424243',
    fontSize: 13,
    fontWeight: 'bold',
  },
  containerBlocks: {
    backgroundColor: '#EBF3EC',
    paddingVertical: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  block: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
    marginVertical: 40,
    width: '40%',
  },
  buttonNumber: {
    marginTop: 40,
    backgroundColor: '#F9F9F9',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 50,
  },
  buttonNumberGreen: {
    marginTop: 40,
    backgroundColor: '#28B67B',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 1,
    marginBottom: 50,
  },
  ImageRadius: {
    marginBottom: 40,
  },
  cross: {
    padding: 15,
    borderRadius: 5,
    width: 10,
    height: 10,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
