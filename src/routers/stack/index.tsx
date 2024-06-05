import { NavigationContainer } from "@react-navigation/native";

//contexto
import StackRoutes from './stack.routes'

//caixa de contexto
const RoutesStack = () => {
    return(
    <NavigationContainer>
        <StackRoutes/>
    </NavigationContainer>)
}

export default RoutesStack;