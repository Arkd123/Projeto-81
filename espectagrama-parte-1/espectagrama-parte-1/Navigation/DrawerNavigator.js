import React {component} from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigation";
import Profile from "../screens/Profile"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tela Inicial" component={TabNavigator}/>
      <Drawer.Screen name="Perfil" component={Profile}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;