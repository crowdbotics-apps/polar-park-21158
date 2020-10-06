import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps129382Navigator from '../features/Maps129382/navigator';
import Add-Item129381Navigator from '../features/Add-Item129381/navigator';
import Maps129377Navigator from '../features/Maps129377/navigator';
import UserProfile129373Navigator from '../features/UserProfile129373/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps129382: { screen: Maps129382Navigator },
Add-Item129381: { screen: Add-Item129381Navigator },
Maps129377: { screen: Maps129377Navigator },
UserProfile129373: { screen: UserProfile129373Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
