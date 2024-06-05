import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./drawer.routes";

const RouterDrawer = () => {
    return(
        <NavigationContainer>
            <Drawer/>
        </NavigationContainer>
    )
}

export default RouterDrawer;