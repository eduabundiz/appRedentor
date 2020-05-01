import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {  
  Colors,  
} from 'react-native/Libraries/NewAppScreen';
import TabBar from './src/Components/TabBar';
import Header from './src/header/Header';
import Petition from './src/Components/Petition';
import ShowPetition from './src/Components/showPetition';
import Card from './src/Components/card';
import AddPetition from './src/admin/petitions/addPetition';
import MenuAdmin from './src/admin/menuAdmin';
import MenuPetitions from './src/admin/petitions/menuPetitions';

const App: () => React$Node = () => {
  
  
  return (
    <>      
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

         <ShowPetition />

        </ScrollView>
      </SafeAreaView>
      
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
