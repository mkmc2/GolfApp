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
// import { driver100, driver80, threeWood100, threeWood80 } from './src/data/woodsData/WoodsStats';
import { clubsInMyBag, clubsInMyBag2 } from './src/data/clubsInMyBag';
import DriverStats from './src/data/ClubArrays/DriverStats';
import ThreeWoodStats from './src/data/ClubArrays/ThreeWoodStats';
import FiveWoodData from './src/data/ClubArrays/FiveWoodStats';
import SevenWoodData from './src/data/ClubArrays/SevenWoodStats';

// Screens
import useCustomState from './src/data/shotData/MyShots2';
import HelpScreen from './src/MiscScreens/HelpScreen';
import ContactUsScreen from './src/MiscScreens/ContactUs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
    // Club Stats State
    // const [clubSelected, setClubSelected] = useState("");
    // const [distance, setDistance] = useState(0);
    // const [selectedValue, setSelectedValue] = useState("option1");
    // const [selectedPower, setSelectedPower] = useState('');
    // const [newShotDistance, setNewShotDistance] = useState("");
    // const [shotArray, setShotArray] = useState({})
    // Profile State
    // const [playersName, setPlayersName] = useState("Players Name");
    // const [username, setUsername] = useState("Username");

    // Functions
    // My Stats Functions
    // Add New Shot to Array
    // const handleButtonPressToAddShot = () => {
    //     if (newShotDistance !== '') {
    //         setShotArray([newShotDistance].concat(shotArray));
    //         setNewShotDistance('');
    //     }
    // };

    // Clubs Selected
    // Woods
    const [driverIsPressed, setDriverIsPressed] = useState(false);
    const [threeWoodIsPressed, setThreeWoodIsPressed] = useState(false);
    const [fiveWoodIsPressed, setFiveWoodIsPressed] = useState(false);
    const [sevenWoodIsPressed, setSevenWoodIsPressed] = useState(false);
    // Hybrids
    const [twoHybridIsPressed, setTwoHybridIsPressed] = useState(false);
    const [threeHybridIsPressed, setThreeHybridIsPressed] = useState(false);
    const [fourHybridIsPressed, setFourHybridIsPressed] = useState(false);
    const [fiveHybridIsPressed, setFiveHybridIsPressed] = useState(false);
    const [sixHybridIsPressed, setSixHybridIsPressed] = useState(false);
    const [sevenHybridIsPressed, setSevenHybridIsPressed] = useState(false);
    // Irons
    const [twoIronIsPressed, setTwoIronIsPressed] = useState(false);
    const [threeIronIsPressed, setThreeIronIsPressed] = useState(false);
    const [fourIronIsPressed, setFourIronIsPressed] = useState(false);
    const [fiveIronIsPressed, setFiveIronIsPressed] = useState(false);
    const [sixIronIsPressed, setSixIronIsPressed] = useState(false);
    const [sevenIronIsPressed, setSevenIronIsPressed] = useState(false);
    const [eightIronIsPressed, setEightIronIsPressed] = useState(false);
    const [nineIronIsPressed, setNineIronIsPressed] = useState(false);
    const [pwIronIsPressed, setPwIronIsPressed] = useState(false);
    // Irons
    const [fortyEightWedgeIsPressed, setFortyEightWedgeIsPressed] = useState(false);
    const [fiftyWedgeIsPressed, setFiftyWedgeIsPressed] = useState(false);
    const [fiftyTwoWedgeIsPressed, setFiftyTwoWedgeIsPressed] = useState(false);
    const [fiftyFourWedgeIsPressed, setFiftyFourWedgeIsPressed] = useState(false);
    const [fiftySixWedgeIsPressed, setFiftySixWedgeIsPressed] = useState(false);
    const [fiftyEightWedgeIsPressed, setFiftyEightWedgeIsPressed] = useState(false);
    const [sixtyWedgeIsPressed, setSixtyWedgeIsPressed] = useState(false);


    // User Registraton 
    // const [newUser, setNewUser] = useState('first name..')
    // const [emailAddress, setEmailAddress] = useState('enter your email')
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('')
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tabs" component={HomeTabs} options={{ headerShown: false }} />
                <Stack.Screen
                    name="Help"
                    component={HelpScreen}
                    // options={{ headerShown: false }} 
                    options={{
                        headerShown: true,
                        headerTitle: '',
                        headerStyle: {
                            elevation: 0, // remove shadow on Android
                            shadowOpacity: 0, // remove shadow on iOS
                            borderBottomWidth: 0 // Just in case.
                        },
                    }}
                />
                <Stack.Screen
                    name="ContactUs"
                    component={ContactUsScreen}
                    // options={{ headerShown: false }} 
                    options={{
                        headerShown: true,
                        headerTitle: '',
                        headerStyle: {
                            elevation: 0, // remove shadow on Android
                            shadowOpacity: 0, // remove shadow on iOS
                            borderBottomWidth: 0 // Just in case.
                        },
                    }}
                />
                <Stack.Screen name="SignUp"
                    options={{
                        headerShown: true,
                        headerTitle: '',
                        headerStyle: {
                            elevation: 0, // remove shadow on Android
                            shadowOpacity: 0, // remove shadow on iOS
                            borderBottomWidth: 0 // Just in case.
                        },
                    }}>
                    {(props) => (
                        <SignUpScreen
                            // newUser={newUser}
                            // setNewUser={setNewUser}
                            // emailAddress={emailAddress}
                            // setEmailAddress={setEmailAddress}
                            name={name}
                            setName={setName}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            phone={phone}
                            setPhone={setPhone}
                            {...props}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    // options={{ headerShown: true, headerTitle: '' }}
                    options={{
                        headerShown: true,
                        headerTitle: '',
                        headerStyle: {
                            elevation: 0, // remove shadow on Android
                            shadowOpacity: 0, // remove shadow on iOS
                            borderBottomWidth: 0 // Just in case.
                        },
                    }}
                    name="ClubSelector">
                    {(props) => (
                        <ClubSelectorScreen
                            // Woods
                            driverIsPressed={driverIsPressed}
                            setDriverIsPressed={setDriverIsPressed}
                            threeWoodIsPressed={threeWoodIsPressed}
                            setThreeWoodIsPressed={setThreeWoodIsPressed}
                            fiveWoodIsPressed={fiveWoodIsPressed}
                            setFiveWoodIsPressed={setFiveWoodIsPressed}
                            sevenWoodIsPressed={sevenWoodIsPressed}
                            setSevenWoodIsPressed={setSevenWoodIsPressed}
                            // Hybrids
                            twoHybridIsPressed={twoHybridIsPressed}
                            setTwoHybridIsPressed={setTwoHybridIsPressed}
                            threeHybridIsPressed={threeHybridIsPressed}
                            setThreeHybridIsPressed={setThreeHybridIsPressed}
                            fourHybridIsPressed={fourHybridIsPressed}
                            setFourHybridIsPressed={setFourHybridIsPressed}
                            fiveHybridIsPressed={fiveHybridIsPressed}
                            setFiveHybridIsPressed={setFiveHybridIsPressed}
                            sixHybridIsPressed={sixHybridIsPressed}
                            setSixHybridIsPressed={setSixHybridIsPressed}
                            sevenHybridIsPressed={sevenHybridIsPressed}
                            setSevenHybridIsPressed={setSevenHybridIsPressed}
                            // Irons
                            twoIronIsPressed={twoIronIsPressed}
                            setTwoIronIsPressed={setTwoIronIsPressed}
                            threeIronIsPressed={threeIronIsPressed}
                            setThreeIronIsPressed={setThreeIronIsPressed}
                            fourIronIsPressed={fourIronIsPressed}
                            setFourIronIsPressed={setFourIronIsPressed}
                            fiveIronIsPressed={fiveIronIsPressed}
                            setFiveIronIsPressed={setFiveIronIsPressed}
                            sixIronIsPressed={sixIronIsPressed}
                            setSixIronIsPressed={setSixIronIsPressed}
                            sevenIronIsPressed={sevenIronIsPressed}
                            setSevenIronIsPressed={setSevenIronIsPressed}
                            eightIronIsPressed={eightIronIsPressed}
                            setEightIronIsPressed={setEightIronIsPressed}
                            nineIronIsPressed={nineIronIsPressed}
                            setNineIronIsPressed={setNineIronIsPressed}
                            pwIronIsPressed={pwIronIsPressed}
                            setPwIronIsPressed={setPwIronIsPressed}
                            //Wedges
                            fortyEightWedgeIsPressed={fortyEightWedgeIsPressed}
                            setFortyEightWedgeIsPressed={setFortyEightWedgeIsPressed}
                            fiftyWedgeIsPressed={fiftyWedgeIsPressed}
                            setFiftyWedgeIsPressed={setFiftyWedgeIsPressed}
                            fiftyTwoWedgeIsPressed={fiftyTwoWedgeIsPressed}
                            setFiftyTwoWedgeIsPressed={setFiftyTwoWedgeIsPressed}
                            fiftyFourWedgeIsPressed={fiftyFourWedgeIsPressed}
                            setFiftyFourWedgeIsPressed={setFiftyFourWedgeIsPressed}
                            fiftySixWedgeIsPressed={fiftySixWedgeIsPressed}
                            setFiftySixWedgeIsPressed={setFiftySixWedgeIsPressed}
                            fiftyEightWedgeIsPressed={fiftyEightWedgeIsPressed}
                            setFiftyEightWedgeIsPressed={setFiftyEightWedgeIsPressed}
                            sixtyWedgeIsPressed={sixtyWedgeIsPressed}
                            setSixtyWedgeIsPressed={setSixtyWedgeIsPressed}
                            {...props}
                        />
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function HomeTabs() {

    // Club Stats State
    const [clubSelected, setClubSelected] = useState("");
    const [distance, setDistance] = useState(0);
    const [selectedValue, setSelectedValue] = useState("option1");
    const [selectedPower, setSelectedPower] = useState('');
    const [selectedLabel, setSelectedLabel] = useState('');
    const [newShotDistance, setNewShotDistance] = useState("");
    const [shotArray, setShotArray] = useState([]);
    // Profile State
    const [playersName, setPlayersName] = useState("Players Name");
    const [username, setUsername] = useState("Username");


    // Importing Shots
    const {
        driver100,
        setDriver100,
        driver75,
        setDriver75,
        threeWood100,
        setThreeWood100,
        threeWood75,
        setThreeWood75,
        fiveWood100,
        setFiveWood100,
        fiveWood75,
        setFiveWood75,
        sevenWood100,
        setSevenWood100,
        sevenWood75,
        setSevenWood75,
        // Hybrids
        twoHybrid100,
        setTwoHybrid100,
        twoHybrid75,
        setTwoHybrid75,
        threeHybrid100,
        setThreeHybrid100,
        threeHybrid75,
        setThreeHybrid75,
        fourHybrid100,
        setFourHybrid100,
        fourHybrid75,
        setFourHybrid75,
        fiveHybrid100,
        setFiveHybrid100,
        fiveHybrid75,
        setFiveHybrid75,
        sixHybrid100,
        setSixHybrid100,
        sixHybrid75,
        setSixHybrid75,
        sevenHybrid100,
        setSevenHybrid100,
        sevenHybrid75,
        setSevenHybrid75,
        // Irons
        twoIron100,
        setTwoIron100,
        twoIron75,
        setTwoIron75,
        twoIron50,
        setTwoIron50,
        twoIron25,
        setTwoIron25,
        threeIron100,
        setThreeIron100,
        threeIron75,
        setThreeIron75,
        threeIron50,
        setThreeIron50,
        threeIron25,
        setThreeIron25,
        fourIron100,
        setFourIron100,
        fourIron75,
        setFourIron75,
        fourIron50,
        setFourIron50,
        fourIron25,
        setFourIron25,
        fiveIron100,
        setFiveIron100,
        fiveIron75,
        setFiveIron75,
        fiveIron50,
        setFiveIron50,
        fiveIron25,
        setFiveIron25,
        sixIron100,
        setSixIron100,
        sixIron75,
        setSixIron75,
        sixIron50,
        setSixIron50,
        sixIron25,
        setSixIron25,
        sevenIron100,
        setSevenIron100,
        sevenIron75,
        setSevenIron75,
        sevenIron50,
        setSevenIron50,
        sevenIron25,
        setSevenIron25,
        eightIron100,
        setEightIron100,
        eightIron75,
        setEightIron75,
        eightIron50,
        setEightIron50,
        eightIron25,
        setEightIron25,
        nineIron100,
        setNineIron100,
        nineIron75,
        setNineIron75,
        nineIron50,
        setNineIron50,
        nineIron25,
        setNineIron25,
        // Wedges
        pWedge100,
        setPWedge100,
        pWedge75,
        setPWedge75,
        pWedge50,
        setPWedge50,
        pWedge25,
        setPWedge25,
        forty8Wedge100,
        setForty8Wedge100,
        forty8Wedge75,
        setForty8Wedge75,
        forty8Wedge50,
        setForty8Wedge50,
        forty8Wedge25,
        setForty8Wedge25,
        fiftyWedge100,
        setFiftyWedge100,
        fiftyWedge75,
        setFiftyWedge75,
        fiftyWedge50,
        setFiftyWedge50,
        fiftyWedge25,
        setFiftyWedge25,
        fifty2Wedge100,
        setFifty2Wedge100,
        fifty2Wedge75,
        setFifty2Wedge75,
        fifty2Wedge50,
        setFifty2Wedge50,
        fifty2Wedge25,
        setFifty2Wedge25,
        fifty4Wedge100,
        setFifty4Wedge100,
        fifty4Wedge75,
        setFifty4Wedge75,
        fifty4Wedge50,
        setFifty4Wedge50,
        fifty4Wedge25,
        setFifty4Wedge25,
        fifty6Wedge100,
        setFifty6Wedge100,
        fifty6Wedge75,
        setFifty6Wedge75,
        fifty6Wedge50,
        setFifty6Wedge50,
        fifty6Wedge25,
        setFifty6Wedge25,
        fifty8Wedge100,
        setFifty8Wedge100,
        fifty8Wedge75,
        setFifty8Wedge75,
        fifty8Wedge50,
        setFifty8Wedge50,
        fifty8Wedge25,
        setFifty8Wedge25,
        sixtyWedge100,
        setSixtyWedge100,
        sixtyWedge75,
        setSixtyWedge75,
        sixtyWedge50,
        setSixtyWedge50,
        sixtyWedge25,
        setSixtyWedge25,
        // Averages
    } = useCustomState();

    const {
        driver100Data,
        setDriver100Data,
        driver75Data,
        setDriver75Data,
        // Total Shots
        driverShotCounter100,
        setDriverShotCounter100,
        driverShotTotalCounter100,
        // Historical Value
        calculateHistoricalAverageDriver100,
    } = DriverStats();
    const {
        threeWood100Data,
        setThreeWood100Data,
        threeWood75Data,
        setThreeWood75Data,
    } = ThreeWoodStats();
    const {
        fiveWood100Data,
        setFiveWood100Data,
        fiveWood75Data,
        setFiveWood75Data,
    } = FiveWoodData();
    const {
        sevenWood100Data,
        setSevenWood100Data,
        sevenWood75Data,
        setSevenWood75Data,
    } = SevenWoodData();

    // const shotWeightedAverage = (arrayUsed) => {
    //     const shotArrayUsed = arrayUsed;
    //     const shotAverage =
    //         ((shotArrayUsed[0] * 10) + (shotArrayUsed[1] * 10) + (shotArrayUsed[2] * 10) + (shotArrayUsed[3] * 10)) /
    //         (10 + 10 + 10 + 10);

    //     return shotAverage;
    // }
    // const shotWeightedAverage = (arrayUsed) => {
    //     const shotArrayUsed = arrayUsed;
    //     return (shotArrayUsed[0] * 10) + (shotArrayUsed[1] * 10) + (shotArrayUsed[2] * 10) + (shotArrayUsed[3] * 10)) /
    //         (10 + 10 + 10 + 10);
    // };
    const shotWeightedAverage = (arrayUsed) => {
        const shotArrayUsed = arrayUsed;
        const numerator = (shotArrayUsed[0] * 10) + (shotArrayUsed[1] * 10) + (shotArrayUsed[2] * 10) + (shotArrayUsed[3] * 10) + (shotArrayUsed[4] * 10);
        const denominator = 10 + 10 + 10 + 10 + 10;
        return Math.round(numerator / denominator);
    };
    // const shotWeightedAverage1 = (arrayUsed) => {
    //     const shotArrayUsed = arrayUsed;
    //     const numerator = (shotArrayUsed[0] * 10) + (shotArrayUsed[1] * 10) + (shotArrayUsed[2] * 10) + (shotArrayUsed[3] * 10) + (shotArrayUsed[4] * 10) + (shotArrayUsed[5] * 10)(shotArrayUsed[6] * 10) + (shotArrayUsed[7] * 10) + (shotArrayUsed[8] * 10) + (shotArrayUsed[9] * 10);
    //     const denominator = 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10;
    //     return Math.round(numerator / denominator);
    // };
    const shotWeightedAverage1 = (arrayUsed) => {
        const shotArrayUsed = arrayUsed;
        const numerator =
            (shotArrayUsed[0] * 10) +
            (shotArrayUsed[1] * 10) +
            (shotArrayUsed[2] * 10) +
            (shotArrayUsed[3] * 10) +
            (shotArrayUsed[4] * 10) +
            (shotArrayUsed[5] * 10) +
            (shotArrayUsed[6] * 10) +
            (shotArrayUsed[7] * 10) +
            (shotArrayUsed[8] * 10) +
            (shotArrayUsed[9] * 10);
        const denominator = 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10;
        return Math.round(numerator / denominator);
    };
    // const shotWeightedAverage2 = (arrayUsed) => {
    //     const shotArrayUsed = arrayUsed;
    //     const numerator = ((shotArrayUsed[0] * 10) + (shotArrayUsed[1] * 10) + (shotArrayUsed[2] * 10) + (shotArrayUsed[3] * 10) +
    //         (shotArrayUsed[4] * 10) + (shotArrayUsed[5] * 10) + (shotArrayUsed[6] * 10) + (shotArrayUsed[7] * 10) +
    //         (shotArrayUsed[8] * 10) + (shotArrayUsed[9] * 10) + (shotArrayUsed[10] * 10) +
    //         (shotArrayUsed[11] * 6) + (shotArrayUsed[12] * 6) + (shotArrayUsed[13] * 6) +
    //         (shotArrayUsed[14] * 6) + (shotArrayUsed[15] * 6) + (shotArrayUsed[16] * 6) +
    //         (shotArrayUsed[17] * 6) + (shotArrayUsed[18] * 6) + (shotArrayUsed[19] * 6) + (shotArrayUsed[20] * 6)
    //     )
    //     const denominator = (10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 6 + 6 + 6 + 6 + 6 + 6 + 6 + 6 + 6 + 6);
    //     return Math.round(numerator / denominator);
    // };
    const shotWeightedAverage2 = (arrayUsed) => {
        const shotArrayUsed = arrayUsed;
        const numerator =
            (shotArrayUsed[0] * 10) +
            (shotArrayUsed[1] * 10) +
            (shotArrayUsed[2] * 10) +
            (shotArrayUsed[3] * 10) +
            (shotArrayUsed[4] * 10) +
            (shotArrayUsed[5] * 10) +
            (shotArrayUsed[6] * 10) +
            (shotArrayUsed[7] * 10) +
            (shotArrayUsed[8] * 10) +
            (shotArrayUsed[9] * 10) +
            (shotArrayUsed[10] * 6) +
            (shotArrayUsed[11] * 6) +
            (shotArrayUsed[12] * 6) +
            (shotArrayUsed[13] * 6) +
            (shotArrayUsed[14] * 6) +
            (shotArrayUsed[15] * 6) +
            (shotArrayUsed[16] * 6) +
            (shotArrayUsed[17] * 6) +
            (shotArrayUsed[18] * 6) +
            (shotArrayUsed[19] * 6);
        const denominator = 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 6 + 6 + 6 + 6 + 6 + 6 + 6 + 6 + 6 + 6;
        return Math.round(numerator / denominator);
    };

    const driver100Average = ((driver100[0] + driver100[1] + driver100[2]) / 3)

    // Total Shots
    // Total Shot State
    // const [shotCounter100, setShotCounter100] = useState(0);
    // const [shotCounter75, setShotCounter75] = useState(0);
    // const [shotCounter50, setShotCounter50] = useState(0);
    // const [shotCounter25, setShotCounter25] = useState(0);

    // const shotTotalCounter100 = (arrayPlaceholder) => {
    //     setShotCounter100(arrayPlaceholder.length)
    //     return shotCounter100
    // };
    const shotTotalCounter100 = (arrayPlaceholder) => {
        const counter = arrayPlaceholder.length;
        setDriverShotCounter100(counter);
        return counter;
    };
    // const shotTotalCounter75 = (arrayPlaceholder) => {
    //     setShotCounter75(arrayPlaceholder.length)
    //     return shotCounter75
    // };
    // const shotTotalCounter50 = (arrayPlaceholder) => {
    //     setShotCounter50(arrayPlaceholder.length)
    //     return shotCounter50
    // };
    // const shotTotalCounter25 = (arrayPlaceholder) => {
    //     setShotCounter25(arrayPlaceholder.length)
    //     return shotCounter25 
    // };
    // const shotTotalCounter = (arrayPlaceholder) => {
    //     const shotCounter = (arrayPlaceholder.length)
    //     return shotCounter;
    // };



    // Historical Average
    const calculateHistoricalAverage = (array) => {
        if (array.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = array.reduce((acc, value) => acc + value, 0);
        setHistoricalAverage(Math.round(sum / array.length));
        return historicalAverage;
    };


    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Caddie') {
                        iconName = focused ? 'golf' : 'golf-outline';
                    } else if (route.name === 'MyBag') {
                        iconName = focused ? 'heart' : 'heart-outline';
                    } else if (route.name === 'Stats') {
                        iconName = focused ? 'analytics' : 'analytics-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name="Caddie"
                options={{ headerShown: false }}
            >
                {(props) => (
                    <ClubPickerScreen
                        // shotWeightedAverage={shotWeightedAverage}
                        {...props}
                    />
                )}
            </Tab.Screen>
            {/* <Tab.Screen name="MyBag" component={MyBagScreen} options={{ headerShown: false }} /> */}
            <Tab.Screen
                name="MyBag"
                options={{ headerShown: false }}
            >
                {(props) => (
                    <MyBagScreen
                        // Weighted Average
                        shotWeightedAverage={shotWeightedAverage}
                        shotWeightedAverage1={shotWeightedAverage1}
                        shotWeightedAverage2={shotWeightedAverage2}
                        // 
                        // shotTotalCounter={shotTotalCounter}
                        shotTotalCounter100={shotTotalCounter100}
                        // shotTotalCounter75={shotTotalCounter75}
                        // shotTotalCounter50={shotTotalCounter50}
                        // shotTotalCounter25={shotTotalCounter25}
                        // shotCounter100={shotCounter100}
                        // setShotCounter100={setShotCounter100}
                        // shotCounter75={shotCounter75}
                        // setShotCounter75={setShotCounter75}
                        // shotCounter50={shotCounter50}
                        // setShotCounter50={setShotCounter50}
                        // shotCounter25={shotCounter25}
                        // setShotCounter25={setShotCounter25}
                        // shotAverages={shotAverages}
                        // New Shot Arrays
                        driver100Data={driver100Data}
                        driver75Data={driver75Data}
                        threeWood100Data={threeWood100Data}
                        threeWood75Data={threeWood75Data}
                        fiveWood100Data={fiveWood100Data}
                        fiveWood75Data={fiveWood75Data}
                        sevenWood100Data={sevenWood100Data}
                        sevenWood75Data={sevenWood75Data}
                        // Old Shot Arrays
                        driver100={driver100}
                        driver75={driver75}
                        threeWood100={threeWood100}
                        threeWood75={threeWood75}
                        fiveWood100={fiveWood100}
                        fiveWood75={fiveWood75}
                        sevenWood100={sevenWood100}
                        sevenWood75={sevenWood75}
                        twoHybrid100={twoHybrid100}
                        twoHybrid75={twoHybrid75}
                        // twoHybrid50={twoHybrid50}
                        threeHybrid100={threeHybrid100}
                        threeHybrid75={threeHybrid75}
                        // threeHybrid50={threeHybrid50}
                        fourHybrid100={fourHybrid100}
                        fourHybrid75={fourHybrid75}
                        // fourHybrid50={fourHybrid50}
                        fiveHybrid100={fiveHybrid100}
                        fiveHybrid75={fiveHybrid75}
                        // fiveHybrid50={fiveHybrid50}
                        sixHybrid100={sixHybrid100}
                        sixHybrid75={sixHybrid75}
                        // sixHybrid50={sixHybrid50}
                        sevenHybrid100={sevenHybrid100}
                        sevenHybrid75={sevenHybrid75}
                        // sevenHybrid50={sevenHybrid50}
                        // Iron
                        twoIron100={twoIron100}
                        threeIron100={threeIron100}
                        fourIron100={fourIron100}
                        fiveIron100={fiveIron100}
                        sixIron100={sixIron100}
                        sevenIron100={sevenIron100}
                        eightIron100={eightIron100}
                        nineIron100={nineIron100}
                        twoIron75={twoIron75}
                        threeIron75={threeIron75}
                        fourIron75={fourIron75}
                        fiveIron75={fiveIron75}
                        sixIron75={sixIron75}
                        sevenIron75={sevenIron75}
                        eightIron75={eightIron75}
                        nineIron75={nineIron75}
                        twoIron50={twoIron50}
                        threeIron50={threeIron50}
                        fourIron50={fourIron50}
                        fiveIron50={fiveIron50}
                        sixIron50={sixIron50}
                        sevenIron50={sevenIron50}
                        eightIron50={eightIron50}
                        nineIron50={nineIron50}
                        // Wedges
                        pWedge100={pWedge100}
                        pWedge75={pWedge75}
                        pWedge50={pWedge50}
                        pWedge25={pWedge25}
                        forty8Wedge100={forty8Wedge100}
                        forty8Wedge75={forty8Wedge75}
                        forty8Wedge50={forty8Wedge50}
                        forty8Wedge25={forty8Wedge25}
                        fiftyWedge100={fiftyWedge100}
                        fiftyWedge75={fiftyWedge75}
                        fiftyWedge50={fiftyWedge50}
                        fiftyWedge25={fiftyWedge25}
                        fifty2Wedge100={fifty2Wedge100}
                        fifty2Wedge75={fifty2Wedge75}
                        fifty2Wedge50={fifty2Wedge50}
                        fifty2Wedge25={fifty2Wedge25}
                        fifty4Wedge100={fifty4Wedge100}
                        fifty4Wedge75={fifty4Wedge75}
                        fifty4Wedge50={fifty4Wedge50}
                        fifty4Wedge25={fifty4Wedge25}
                        fifty6Wedge100={fifty6Wedge100}
                        fifty6Wedge75={fifty6Wedge75}
                        fifty6Wedge50={fifty6Wedge50}
                        fifty6Wedge25={fifty6Wedge25}
                        fifty8Wedge100={fifty8Wedge100}
                        fifty8Wedge75={fifty8Wedge75}
                        fifty8Wedge50={fifty8Wedge50}
                        fifty8Wedge25={fifty8Wedge25}
                        sixtyWedge100={sixtyWedge100}
                        sixtyWedge75={sixtyWedge75}
                        sixtyWedge50={sixtyWedge50}
                        sixtyWedge25={sixtyWedge25}
                        // calculateAverage={calculateAverage}
                        // weightedAverage={weightedAverage}
                        // Club Averages
                        driver100Average={driver100Average}
                        {...props}
                    />
                )}
            </Tab.Screen>
            <Tab.Screen
                options={{ headerShown: false }}
                name="Stats">
                {(props) => (
                    <MyStatsScreen
                        clubSelected={clubSelected}
                        setClubSelected={setClubSelected}
                        newShotDistance={newShotDistance}
                        setNewShotDistance={setNewShotDistance}
                        selectedValue={selectedValue}
                        setSelectedValue={setSelectedValue}
                        selectedPower={selectedPower}
                        setSelectedPower={setSelectedPower}
                        selectedLabel={selectedLabel}
                        setSelectedLabel={setSelectedLabel}
                        // driver100={driver100}
                        // driver80={driver80}
                        // threeWood100={threeWood100}
                        // threeWood80={threeWood80}
                        clubsInMyBag={clubsInMyBag}
                        clubsInMyBag2={clubsInMyBag2}
                        shotArray={shotArray}
                        setShotArray={setShotArray}
                        // handleButtonPressToAddShot={handleButtonPressToAddShot}
                        // shotWeightedAverage={shotWeightedAverage}
                        // shotAverage={shotAverage}
                        driver100Data={driver100Data}
                        setDriver100Data={setDriver100Data}
                        driver75Data={driver75Data}
                        setDriver75Data={setDriver75Data}
                        threeWood100Data={threeWood100Data}
                        setThreeWood100Data={setThreeWood100Data}
                        threeWood75Data={threeWood75Data}
                        setThreeWood75Data={setThreeWood75Data}
                        fiveWood100Data={fiveWood100Data}
                        setFiveWood100Data={setFiveWood100Data}
                        fiveWood75Data={fiveWood75Data}
                        setFiveWood75Data={setFiveWood75Data}
                        sevenWood100Data={sevenWood100Data}
                        setSevenWood100Data={setSevenWood100Data}
                        sevenWood75Data={sevenWood75Data}
                        setSevenWood75Data={setSevenWood75Data}
                        // Old Driver
                        driver100={driver100}
                        driver75={driver75}
                        threeWood100={threeWood100}
                        threeWood75={threeWood75}
                        fiveWood100={fiveWood100}
                        fiveWood75={fiveWood75}
                        sevenWood100={sevenWood100}
                        sevenWood75={sevenWood75}
                        twoHybrid100={twoHybrid100}
                        twoHybrid75={twoHybrid75}
                        threeHybrid100={threeHybrid100}
                        threeHybrid75={threeHybrid75}
                        fourHybrid100={fourHybrid100}
                        fourHybrid75={fourHybrid75}
                        fiveHybrid100={fiveHybrid100}
                        fiveHybrid75={fiveHybrid75}
                        sixHybrid100={sixHybrid100}
                        sixHybrid75={sixHybrid75}
                        sevenHybrid100={sevenHybrid100}
                        sevenHybrid75={sevenHybrid75}
                        twoIron100={twoIron100}
                        twoIron75={twoIron75}
                        twoIron50={twoIron50}
                        twoIron25={twoIron25}
                        threeIron100={threeIron100}
                        threeIron75={threeIron75}
                        threeIron50={threeIron50}
                        threeIron25={threeIron25}
                        fourIron100={fourIron100}
                        fourIron75={fourIron75}
                        fourIron50={fourIron50}
                        fourIron25={fourIron25}
                        fiveIron100={fiveIron100}
                        fiveIron75={fiveIron75}
                        fiveIron50={fiveIron50}
                        fiveIron25={fiveIron25}
                        sixIron100={sixIron100}
                        sixIron75={sixIron75}
                        sixIron50={sixIron50}
                        sixIron25={sixIron25}
                        sevenIron100={sevenIron100}
                        sevenIron75={sevenIron75}
                        sevenIron50={sevenIron50}
                        sevenIron25={sevenIron25}
                        eightIron100={eightIron100}
                        eightIron75={eightIron75}
                        eightIron50={eightIron50}
                        eightIron25={eightIron25}
                        nineIron100={nineIron100}
                        nineIron75={nineIron75}
                        nineIron50={nineIron50}
                        nineIron25={nineIron25}
                        pWedge100={pWedge100}
                        pWedge75={pWedge75}
                        pWedge50={pWedge50}
                        pWedge25={pWedge25}
                        forty8Wedge100={forty8Wedge100}
                        forty8Wedge75={forty8Wedge75}
                        forty8Wedge50={forty8Wedge50}
                        forty8Wedge25={forty8Wedge25}
                        fiftyWedge100={fiftyWedge100}
                        fiftyWedge75={fiftyWedge75}
                        fiftyWedge50={fiftyWedge50}
                        fiftyWedge25={fiftyWedge25}
                        fifty2Wedge100={fifty2Wedge100}
                        fifty2Wedge75={fifty2Wedge75}
                        fifty2Wedge50={fifty2Wedge50}
                        fifty2Wedge25={fifty2Wedge25}
                        fifty4Wedge100={fifty4Wedge100}
                        fifty4Wedge75={fifty4Wedge75}
                        fifty4Wedge50={fifty4Wedge50}
                        fifty4Wedge25={fifty4Wedge25}
                        fifty6Wedge100={fifty6Wedge100}
                        fifty6Wedge75={fifty6Wedge75}
                        fifty6Wedge50={fifty6Wedge50}
                        fifty6Wedge25={fifty6Wedge25}
                        fifty8Wedge100={fifty8Wedge100}
                        fifty8Wedge75={fifty8Wedge75}
                        fifty8Wedge50={fifty8Wedge50}
                        fifty8Wedge25={fifty8Wedge25}
                        sixtyWedge100={sixtyWedge100}
                        sixtyWedge75={sixtyWedge75}
                        sixtyWedge50={sixtyWedge50}
                        sixtyWedge25={sixtyWedge25}
                        setDriver100={setDriver100}
                        setDriver75={setDriver75}
                        setThreeWood100={setThreeWood100}
                        setThreeWood75={setThreeWood75}
                        setFiveWood100={setFiveWood100}
                        setFiveWood75={setFiveWood75}
                        setSevenWood100={setSevenWood100}
                        setSevenWood75={setSevenWood75}
                        setTwoHybrid100={setTwoHybrid100}
                        setTwoHybrid75={setTwoHybrid75}
                        setThreeHybrid100={setThreeHybrid100}
                        setThreeHybrid75={setThreeHybrid75}
                        setFourHybrid100={setFourHybrid100}
                        setFourHybrid75={setFourHybrid75}
                        setFiveHybrid100={setFiveHybrid100}
                        setFiveHybrid75={setFiveHybrid75}
                        setSixHybrid100={setSixHybrid100}
                        setSixHybrid75={setSixHybrid75}
                        setSevenHybrid100={setSevenHybrid100}
                        setSevenHybrid75={setSevenHybrid75}
                        setTwoIron100={setTwoIron100}
                        setTwoIron75={setTwoIron75}
                        setTwoIron50={setTwoIron50}
                        setTwoIron25={setTwoIron25}
                        setThreeIron100={setThreeIron100}
                        setThreeIron75={setThreeIron75}
                        setThreeIron50={setThreeIron50}
                        setThreeIron25={setThreeIron25}
                        setFourIron100={setFourIron100}
                        setFourIron75={setFourIron75}
                        setFourIron50={setFourIron50}
                        setFourIron25={setFourIron25}
                        setFiveIron100={setFiveIron100}
                        setFiveIron75={setFiveIron75}
                        setFiveIron50={setFiveIron50}
                        setFiveIron25={setFiveIron25}
                        setSixIron100={setSixIron100}
                        setSixIron75={setSixIron75}
                        setSixIron50={setSixIron50}
                        setSixIron25={setSixIron25}
                        setSevenIron100={setSevenIron100}
                        setSevenIron75={setSevenIron75}
                        setSevenIron50={setSevenIron50}
                        setSevenIron25={setSevenIron25}
                        setEightIron100={setEightIron100}
                        setEightIron75={setEightIron75}
                        setEightIron50={setEightIron50}
                        setEightIron25={setEightIron25}
                        setNineIron100={setNineIron100}
                        setNineIron75={setNineIron75}
                        setNineIron50={setNineIron50}
                        setNineIron25={setNineIron25}
                        setPWedge100={setPWedge100}
                        setPWedge75={setPWedge75}
                        setPWedge50={setPWedge50}
                        setPWedge25={setPWedge25}
                        setForty8Wedge100={setForty8Wedge100}
                        setForty8Wedge75={setForty8Wedge75}
                        setForty8Wedge50={setForty8Wedge50}
                        setForty8Wedge25={setForty8Wedge25}
                        setFiftyWedge100={setFiftyWedge100}
                        setFiftyWedge75={setFiftyWedge75}
                        setFiftyWedge50={setFiftyWedge50}
                        setFiftyWedge25={setFiftyWedge25}
                        setFifty2Wedge100={setFifty2Wedge100}
                        setFifty2Wedge75={setFifty2Wedge75}
                        setFifty2Wedge50={setFifty2Wedge50}
                        setFifty2Wedge25={setFifty2Wedge25}
                        setFifty4Wedge100={setFifty4Wedge100}
                        setFifty4Wedge75={setFifty4Wedge75}
                        setFifty4Wedge50={setFifty4Wedge50}
                        setFifty4Wedge25={setFifty4Wedge25}
                        setFifty6Wedge100={setFifty6Wedge100}
                        setFifty6Wedge75={setFifty6Wedge75}
                        setFifty6Wedge50={setFifty6Wedge50}
                        setFifty6Wedge25={setFifty6Wedge25}
                        setFifty8Wedge100={setFifty8Wedge100}
                        setFifty8Wedge75={setFifty8Wedge75}
                        setFifty8Wedge50={setFifty8Wedge50}
                        setFifty8Wedge25={setFifty8Wedge25}
                        setSixtyWedge100={setSixtyWedge100}
                        setSixtyWedge75={setSixtyWedge75}
                        setSixtyWedge50={setSixtyWedge50}
                        setSixtyWedge25={setSixtyWedge25}
                        useCustomState={useCustomState}
                        {...props}
                    />
                )}
            </Tab.Screen>
            <Tab.Screen
                options={{ headerShown: false }}
                name="Profile">
                {(props) => (
                    <MyProfileScreen
                        playersName={playersName}
                        setPlayersName={setPlayersName}
                        username={username}
                        setUsername={setUsername}
                        {...props}
                    />
                )}
            </Tab.Screen>
        </Tab.Navigator>
    );
}