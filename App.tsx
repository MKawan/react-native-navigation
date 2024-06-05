import 'react-native-gesture-handler';
import RoutesStack from "./src/routers/stack";
import RoutesBottomTabs from "./src/routers/bottom-tabs";
import RouterDrawer from './src/routers/drawer';


export default function App() {
  return (
    // <RoutesStack/>
    // <RoutesBottomTabs/>
    <RouterDrawer/>
  );
}