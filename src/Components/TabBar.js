import React,{Component} from 'react';
import Header from '../header/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Peticiones from './Petition';
import PetitionNavigator from '../navigators/navigatorPetition';
import HeaderNavigator from '../navigators/navigatorHome';
class TabBar extends Component{

    
    render(){
        const Tab = createBottomTabNavigator();            
        
        return(

            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={HeaderNavigator} />
                    <Tab.Screen name="Petition" component={PetitionNavigator} />                    
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}

export default TabBar;