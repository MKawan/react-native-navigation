import { NavigationContainer } from "@react-navigation/native";

//contexto
import BottomTabsRoutes from "./bottoms-tabs.routes";

//caixa de contexto
const RoutesBottomTabs = () => {
    return(
    <NavigationContainer>
        <BottomTabsRoutes/>
    </NavigationContainer>)
}

export default RoutesBottomTabs;