import * as React from 'react';
import { useState } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Picker from 'react-native-picker';

// Styling
import mainStyles from './src/styles/mainStyles';

// Screens
import MyBagScreen from './src/components/MyBag';
import MyStatsScreen from './src/components/MyStats';
import MyProfileScreen from './src/components/MyProfile';
import SignUpScreen from './src/SignInScreens/SignUp';
import ClubSelectorScreen from './src/SignInScreens/ClubSelector';
import ClubPickerScreen from './src/components/clubPicker';

// Data
import { driver100, driver80, threeWood100, threeWood80 } from './src/data/woodsData/WoodsStats';
import { clubsInMyBag } from './src/data/clubsInMyBag';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  // Club Stats State
  const [clubSelected, setClubSelected] = useState("");
  const [distance, setDistance] = useState(0);
  const [selectedValue, setSelectedValue] = useState("option1");
  const [selectedPower, setSelectedPower] = useState('');
  const [newShotDistance, setNewShotDistance] = useState("");
  const [shotArray, setShotArray] = useState({})
  // Profile State
  const [playersName, setPlayersName] = useState("Players Name");
  const [username, setUsername] = useState("Username");


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // hide the header
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Caddie') {
              iconName = focused
                ? 'golf'
                : 'golf-outline';
            } else if (route.name === 'MyBag') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Stats') {
              iconName = focused ? 'analytics' : 'analytics-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Caddie" component={ClubPickerScreen} />
        <Tab.Screen name="MyBag" component={MyBagScreen} />
        <Tab.Screen name="Stats">
          {(props) =>
            <MyStatsScreen
              clubSelected={clubSelected}
              setClubSelected={setClubSelected}
              newShotDistance={newShotDistance}
              setNewShotDistance={setNewShotDistance}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
              selectedPower={selectedPower}
              setSelectedPower={setSelectedPower}
              driver100={driver100}
              driver80={driver80}
              threeWood100={threeWood100}
              threeWood80={threeWood80}
              clubsInMyBag={clubsInMyBag}
              shotArray={shotArray}
              setShotArray={setShotArray}
              // handleButtonPressToAddShot={handleButtonPressToAddShot}
              {...props}
            />
          }
        </Tab.Screen>
        <Tab.Screen name="Profile">
          {(props) =>
            <MyProfileScreen
              playersName={playersName}
              setPlayersName={setPlayersName}
              username={username}
              setUsername={setUsername}
              navigation={props.navigation} // Pass the navigation prop
              {...props}
            />
          }
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ClubSelector" component={ClubSelectorScreen} />
    </Stack.Navigator>
  );
}
