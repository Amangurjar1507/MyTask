import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FC} from 'react';
import NewsFeed from '../../screens/Home/newsFeed/NewsFeed';

export type RootStackParams = {
  NewsFeed: undefined;
};
const Stack = createNativeStackNavigator<RootStackParams>();

const RootStack: FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="NewsFeed">
    <Stack.Screen name="NewsFeed" component={NewsFeed} />
  </Stack.Navigator>
);

export default RootStack;
