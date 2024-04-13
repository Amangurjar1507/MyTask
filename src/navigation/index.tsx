import {NavigationContainer} from '@react-navigation/native';
import RootStack from './stacks/RootStack';
 
const Route = () => {
  return (
    <NavigationContainer independent={true}>
      <RootStack />
    </NavigationContainer>
  );
};

export default Route;
