import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../../screens/Home";
import Gallery from "../../screens/Gallery";

import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const {Screen, Navigator} = createDrawerNavigator();


const Drawer = () =>{
    return(
        <Navigator>
            <Screen name='home' component={Home} 
                options={
                    {
                        title: 'Home',
                        headerTintColor: '#1ab7da',
                        drawerIcon: ({color, size}) => (
                            <Ionicons
                            name="home"
                            color='#1ab7da'
                            size={size}
                            />
                        )
                    }
                }
            />
            <Screen name='gallery' component={Gallery} 
                options={
                    {
                        title: 'Gallery',
                        headerTintColor: '#1ada30',
                        drawerIcon: ({color, size}) => (
                            <MaterialCommunityIcons
                            name="view-gallery"
                            color='#1ada30'
                            size={size}
                            />
                        )
                    }
                }
            />
        </Navigator>
    )
}

export default Drawer;