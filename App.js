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
import NavigationAdmin from './src/admin/navigationAdmin';
import TabBarPrincipal from './src/navigators/tabNavigatorPrincipal';
import Offering from './src/Components/offering/offering';
import OfferingCard from './src/Components/offering/offeringCard';
const App: () => React$Node = () => {
  
  
  return (
    
      <SafeAreaView style={styles.safeAreaView}>        

         <OfferingCard />

        
      </SafeAreaView>
      
    
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex:1
  },
});

export default App;
