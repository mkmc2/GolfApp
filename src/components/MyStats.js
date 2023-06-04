import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native';
import PickerSelect from 'react-native-picker-select';
// import Picker from 'react-native-picker';
import { Feather } from '@expo/vector-icons';
// Styling
import mainStyles from '../styles/mainStyles';


export const MyStatsScreen = ({
    clubSelected,
    setClubSelected,
    newShotDistance,
    setNewShotDistance,
    selectedValue,
    setSelectedValue,
    selectedPower,
    setSelectedPower,
    selectedLabel,
    setSelectedLabel,
    clubsInMyBag,
    clubsInMyBag2,
    // handleButtonPressToAddShot,
    shotArray,
    setShotArray,
    // Shot Arrays
    driver100, driver75, threeWood100, threeWood75, fiveWood100, fiveWood75, sevenWood100, sevenWood75,
    twoHybrid100, twoHybrid75, threeHybrid100, threeHybrid75, fourHybrid100, fourHybrid75, fiveHybrid100, fiveHybrid75, sixHybrid100, sixHybrid75, sevenHybrid100, sevenHybrid75,
    twoIron100, twoIron75, twoIron50, twoIron25, threeIron100, threeIron75, threeIron50, threeIron25, fourIron100, fourIron75, fourIron50, fourIron25,
    fiveIron100, fiveIron75, fiveIron50, fiveIron25, sixIron100, sixIron75, sixIron50, sixIron25,
    sevenIron100, sevenIron75, sevenIron50, sevenIron25, eightIron100, eightIron75, eightIron50, eightIron25,
    nineIron100, nineIron75, nineIron50, nineIron25, pWedge100, pWedge75, pWedge50, pWedge25,
    forty8Wedge100, forty8Wedge75, forty8Wedge50, forty8Wedge25, fiftyWedge100, fiftyWedge75, fiftyWedge50, fiftyWedge25, fifty2Wedge100, fifty2Wedge75, fifty2Wedge50,
    fifty2Wedge25, fifty4Wedge100, fifty4Wedge75, fifty4Wedge50, fifty4Wedge25, fifty6Wedge100, fifty6Wedge75, fifty6Wedge50, fifty6Wedge25,
    fifty8Wedge100, fifty8Wedge75, fifty8Wedge50, fifty8Wedge25, sixtyWedge100, sixtyWedge75, sixtyWedge50, sixtyWedge25,
    // setClubs
    setDriver100, setDriver75, setThreeWood100, setThreeWood75, setFiveWood100, setFiveWood75, setSevenWood100, setSevenWood75,
    setTwoHybrid100, setTwoHybrid75, setThreeHybrid100, setThreeHybrid75, setFourHybrid100, setFourHybrid75, setFiveHybrid100, setFiveHybrid75, setSixHybrid100,
    setSixHybrid75, setSevenHybrid100, setSevenHybrid75, setTwoIron100, setTwoIron75, setTwoIron50, setTwoIron25,
    setThreeIron100, setThreeIron75, setThreeIron50, setThreeIron25,
    setFourIron100, setFourIron75, setFourIron50, setFourIron25,
    setFiveIron100, setFiveIron75, setFiveIron50, setFiveIron25,
    setSixIron100, setSixIron75, setSixIron50, setSixIron25,
    setSevenIron100, setSevenIron75, setSevenIron50, setSevenIron25,
    setEightIron100, setEightIron75, setEightIron50, setEightIron25,
    setNineIron100, setNineIron75, setNineIron50, setNineIron25,
    setPWedge100, setPWedge75, setPWedge50, setPWedge25,
    setForty8Wedge100, setForty8Wedge75, setForty8Wedge50, setForty8Wedge25,
    setFiftyWedge100, setFiftyWedge75, setFiftyWedge50, setFiftyWedge25,
    setFifty2Wedge100, setFifty2Wedge75, setFifty2Wedge50, setFifty2Wedge25,
    setFifty4Wedge100, setFifty4Wedge75, setFifty4Wedge50, setFifty4Wedge25,
    setFifty6Wedge100, setFifty6Wedge75, setFifty6Wedge50, setFifty6Wedge25,
    setFifty8Wedge100, setFifty8Wedge75, setFifty8Wedge50, setFifty8Wedge25,
    setSixtyWedge100, setSixtyWedge75, setSixtyWedge50, setSixtyWedge25
}) => {

    // const [shotTypeDropdownList, setShotTypeDropdownList] = useState([]);

    function renderDriverData({ item }) {
        return (
            <View style={{
                padding: 10,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#707070',
                backgroundColor: 'red',
            }}>
                <Text style={[mainStyles.header3, {
                    // backgroundColor: 'green',
                    lineHeight: 28,
                }]}>
                    {item}
                </Text>
            </View>
        );
    }

    //rework 
    function renderDriverData({ item }) {
        return (
            <TouchableOpacity style={{
                padding: 10,
                // justifyContent: 'center',
                // alignItems: 'center',
                // flex: 1,
                // borderRadius: 5,
                // borderWidth: 1,
                // borderColor: '#707070',
                // backgroundColor: 'red',
            }}>
                <View style={{}}>
                    <Text style={[mainStyles.header3, {
                        // // backgroundColor: 'green',
                        // lineHeight: 28,
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: '#707070',
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                    }]}>
                        {item}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
    // render function
    function renderClubs() {
        return clubsInMyBag.map((item) => (
            <Text key={item.id}>{item.club}</Text>
        ));
    }

    const ShotData = (clubSelected, selectedPower, selectedLabel) => {
        // Woods
        if (clubSelected === 'Driver' && selectedPower === 100) {
            const shotArray = driver100;
            console.log('Returned array:', shotArray);
            return shotArray;
        } else if (clubSelected === 'Driver' && selectedPower === 75) {
            const shotArray = driver75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '3 Wood' && selectedPower === 100) {
            const shotArray = threeWood100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '3 Wood' && selectedPower === 75) {
            const shotArray = threeWood75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '5 Wood' && selectedPower === 100) {
            const shotArray = fiveWood100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '5 Wood' && selectedPower === 75) {
            const shotArray = fiveWood75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '7 Wood' && selectedPower === 100) {
            const shotArray = sevenWood100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '7 Wood' && selectedPower === 75) {
            const shotArray = sevenWood75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // Hybrids
        else if (clubSelected === '2 Hybrid' && selectedPower === 100) {
            const shotArray = twoHybrid100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '2 Hybrid' && selectedPower === 75) {
            const shotArray = twoHybrid75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '3 Hybrid' && selectedPower === 100) {
            const shotArray = threeHybrid100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '3 Hybrid' && selectedPower === 75) {
            const shotArray = threeHybrid75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '4 Hybrid' && selectedPower === 100) {
            const shotArray = fourHybrid100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '4 Hybrid' && selectedPower === 75) {
            const shotArray = fourHybrid75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '5 Hybrid' && selectedPower === 100) {
            const shotArray = fiveHybrid100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '5 Hybrid' && selectedPower === 75) {
            const shotArray = fiveHybrid75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '6 Hybrid' && selectedPower === 100) {
            const shotArray = sixHybrid100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '6 Hybrid' && selectedPower === 75) {
            const shotArray = sixHybrid75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '7 Hybrid' && selectedPower === 100) {
            const shotArray = sevenHybrid100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '7 Hybrid' && selectedPower === 75) {
            const shotArray = sevenHybrid75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // Irons
        // 2 Iron
        else if (clubSelected === '2 Iron' && selectedPower === 100) {
            const shotArray = twoIron100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '2 Iron' && selectedPower === 75) {
            const shotArray = twoIron75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '2 Iron' && selectedPower === 50) {
            const shotArray = twoIron50;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '2 Iron' && selectedPower === 25) {
            const shotArray = twoIron25;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 3 Iron
        else if (clubSelected === '3 Iron' && selectedPower === 100) {
            const shotArray = threeIron100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '3 Iron' && selectedPower === 75) {
            const shotArray = threeIron75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '3 Iron' && selectedPower === 50) {
            const shotArray = threeIron50;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '3 Iron' && selectedPower === 25) {
            const shotArray = threeIron25;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 4 Iron
        else if (clubSelected === '4 Iron' && selectedPower === 100) {
            const shotArray = fourIron100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '4 Iron' && selectedPower === 75) {
            const shotArray = fourIron75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '4 Iron' && selectedPower === 50) {
            const shotArray = fourIron50;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '4 Iron' && selectedPower === 25) {
            const shotArray = fourIron25;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 5 Iron
        else if (clubSelected === '5 Iron' && selectedPower === 100) {
            const shotArray = fiveIron100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '5 Iron' && selectedPower === 75) {
            const shotArray = fiveIron75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '5 Iron' && selectedPower === 50) {
            const shotArray = fiveIron50;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '6 Iron' && selectedPower === 25) {
            const shotArray = fiveIron25;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 6 Iron
        else if (clubSelected === '6 Iron' && selectedPower === 100) {
            const shotArray = sixIron100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '6 Iron' && selectedPower === 75) {
            const shotArray = sixIron75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '6 Iron' && selectedPower === 50) {
            const shotArray = sixIron50;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '6 Iron' && selectedPower === 25) {
            const shotArray = sixIron25;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 7 Iron
        else if (clubSelected === '7 Iron' && selectedPower === 100) {
            const shotArray = sevenIron100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '7 Iron' && selectedPower === 75) {
            const shotArray = sevenIron75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '7 Iron' && selectedPower === 50) {
            const shotArray = sevenIron50;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '7 Iron' && selectedPower === 25) {
            const shotArray = sevenIron25;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 8 Iron
        else if (clubSelected === '8 Iron' && selectedPower === 100) {
            const shotArray = eightIron100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '8 Iron' && selectedPower === 75) {
            const shotArray = eightIron75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '8 Iron' && selectedPower === 50) {
            const shotArray = eightIron50;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '8 Iron' && selectedPower === 25) {
            const shotArray = eightIron25;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 9 Iron
        else if (clubSelected === '9 Iron' && selectedPower === 100) {
            const shotArray = nineIron100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '9 Iron' && selectedPower === 75) {
            const shotArray = nineIron75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '9 Iron' && selectedPower === 50) {
            const shotArray = nineIron50;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '9 Iron' && selectedPower === 25) {
            const shotArray = nineIron25;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // PW
        else if (clubSelected === 'PW' && selectedPower === 100) {
            const shotArray = pWedge100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === 'PW' && selectedPower === 75) {
            const shotArray = pWedge75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === 'PW' && selectedPower === 50) {
            const shotArray = pWedge50;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === 'PW' && selectedPower === 25) {
            const shotArray = pWedge25;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 48 Wedge
        else if (clubSelected === '48 Wedge' && selectedPower === 100) {
            const shotArray = forty8Wedge100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '48 Wedge' && selectedPower === 75) {
            const shotArray = forty8Wedge75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '48 Wedge' && selectedPower === 50) {
            const shotArray = forty8Wedge50;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '48 Wedge' && selectedPower === 25) {
            const shotArray = forty8Wedge25;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 50 Wedge
        else if (clubSelected === '50 Wedge' && selectedPower === 100) {
            const shotArray = fiftyWedge100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '50 Wedge' && selectedPower === 75) {
            const shotArray = fiftyWedge75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '50 Wedge' && selectedPower === 50) {
            const shotArray = fiftyWedge50;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '50 Wedge' && selectedPower === 25) {
            const shotArray = fiftyWedge25;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 52 Wedge
        else if (clubSelected === '52 Wedge' && selectedPower === 100) {
            const shotArray = fifty2Wedge100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '52 Wedge' && selectedPower === 75) {
            const shotArray = fifty2Wedge75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '52 Wedge' && selectedPower === 50) {
            const shotArray = fifty2Wedge50;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '52 Wedge' && selectedPower === 25) {
            const shotArray = fifty2Wedge25;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 54 Wedge
        else if (clubSelected === '54 Wedge' && selectedPower === 100) {
            const shotArray = fifty4Wedge100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '54 Wedge' && selectedPower === 75) {
            const shotArray = fifty4Wedge75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '54 Wedge' && selectedPower === 50) {
            const shotArray = fifty4Wedge50;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '54 Wedge' && selectedPower === 25) {
            const shotArray = fifty4Wedge25;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 56 Wedge
        else if (clubSelected === '56 Wedge' && selectedPower === 100) {
            const shotArray = fifty6Wedge100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '56 Wedge' && selectedPower === 75) {
            const shotArray = fifty6Wedge75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '56 Wedge' && selectedPower === 50) {
            const shotArray = fifty6Wedge50;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '56 Wedge' && selectedPower === 25) {
            const shotArray = fifty6Wedge25;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 58 Wedge
        else if (clubSelected === '58 Wedge' && selectedPower === 100) {
            const shotArray = fifty8Wedge100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '58 Wedge' && selectedPower === 75) {
            const shotArray = fifty8Wedge75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '58 Wedge' && selectedPower === 50) {
            const shotArray = fifty8Wedge50;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '58 Wedge' && selectedPower === 25) {
            const shotArray = fifty8Wedge25;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 60 Wedge
        else if (clubSelected === '60 Wedge' && selectedPower === 100) {
            const shotArray = sixtyWedge100;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '60 Wedge' && selectedPower === 75) {
            const shotArray = sixtyWedge75;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '60 Wedge' && selectedPower === 50) {
            const shotArray = sixtyWedge50;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '60 Wedge' && selectedPower === 25) {
            const shotArray = sixtyWedge25;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else
            return <Text>Select shot</Text>
    };

    // const handleButtonPress = (shotArray) => {
    //     if (newShotDistance !== '') {
    //         const distance = parseInt(newShotDistance);
    //         setShotArray([distance, ...shotArray]);
    //         setNewShotDistance('');
    //     }
    // };
    // const handleButtonPress = () => {
    //     if (newShotDistance !== '') {
    //         const distance = parseInt(newShotDistance);
    //         setDriver100([distance, ...driver100]);
    //         setNewShotDistance('');
    //     }
    // };

    // const handleButtonPress = () => {
    //     if (newShotDistance !== '') {
    //         const distance = parseInt(newShotDistance);
    //         let updatedArray;

    //         if (clubSelected === 'Driver' && selectedPower === 100) {
    //             updatedArray = [...driver100];
    //         } else if (clubSelected === 'Driver' && selectedPower === 75) {
    //             updatedArray = [...driver75];
    //         } else {
    //             // Add more conditions for other combinations if needed
    //             // For example: else if (clubSelected === 'Iron' && selectedPower === 100)
    //             //             { updatedArray = [...iron100]; }
    //             //             else if (clubSelected === 'Hybrid' && selectedPower === 100)
    //             //             { updatedArray = [...hybrid100]; }
    //             //             ...
    //         }

    //         if (updatedArray) {
    //             updatedArray.unshift(distance);
    //             setDriver100(updatedArray);
    //         }

    //         setNewShotDistance('');
    //     }
    // };
    const handleButtonPress = () => {
        if (newShotDistance !== '') {
            const distance = parseInt(newShotDistance);
            let updatedArray;
            // Woods
            if (clubSelected === 'Driver' && selectedPower === 100) {
                updatedArray = [distance, ...driver100];
                setDriver100(updatedArray);
            }
            else if (clubSelected === 'Driver' && selectedPower === 75) {
                updatedArray = [distance, ...driver75];
                setDriver75(updatedArray);
            }
            else if (clubSelected === '3 Wood' && selectedPower === 100) {
                updatedArray = [distance, ...threeWood100];
                setThreeWood100(updatedArray);
            }
            else if (clubSelected === '3 Wood' && selectedPower === 75) {
                updatedArray = [distance, ...threeWood75];
                setThreeWood75(updatedArray);
            }
            else if (clubSelected === '5 Wood' && selectedPower === 100) {
                updatedArray = [distance, ...fiveWood100];
                setFiveWood100(updatedArray);
            }
            else if (clubSelected === '5 Wood' && selectedPower === 75) {
                updatedArray = [distance, ...fiveWood75];
                setFiveWood75(updatedArray);
            }
            else if (clubSelected === '7 Wood' && selectedPower === 100) {
                updatedArray = [distance, ...sevenWood100];
                setSevenWood100(updatedArray);
            }
            else if (clubSelected === '7 Wood' && selectedPower === 75) {
                updatedArray = [distance, ...sevenWood75];
                setSevenWood75(updatedArray);
            }
            // Hybrids
            else if (clubSelected === '2 Hybrid' && selectedPower === 100) {
                updatedArray = [distance, ...twoHybrid100];
                setTwoHybrid100(updatedArray);
            }
            else if (clubSelected === '2 Hybrid' && selectedPower === 75) {
                updatedArray = [distance, ...twoHybrid75];
                setTwoHybrid75(updatedArray);
            }
            else if (clubSelected === '2 Hybrid' && selectedPower === 50) {
                updatedArray = [distance, ...twoHybrid50];
                setTwoHybrid50(updatedArray);
            }
            else if (clubSelected === '3 Hybrid' && selectedPower === 100) {
                updatedArray = [distance, ...threeHybrid100];
                setThreeHybrid100(updatedArray);
            }
            else if (clubSelected === '3 Hybrid' && selectedPower === 75) {
                updatedArray = [distance, ...threeHybrid75];
                setThreeHybrid75(updatedArray);
            }
            else if (clubSelected === '3 Hybrid' && selectedPower === 50) {
                updatedArray = [distance, ...threeHybrid50];
                setThreeHybrid50(updatedArray);
            }
            else if (clubSelected === '4 Hybrid' && selectedPower === 100) {
                updatedArray = [distance, ...fourHybrid100];
                setFourHybrid100(updatedArray);
            }
            else if (clubSelected === '4 Hybrid' && selectedPower === 75) {
                updatedArray = [distance, ...fourHybrid75];
                setFourHybrid75(updatedArray);
            }
            else if (clubSelected === '4 Hybrid' && selectedPower === 50) {
                updatedArray = [distance, ...fourHybrid50];
                setFourHybrid50(updatedArray);
            }
            else if (clubSelected === '5 Hybrid' && selectedPower === 100) {
                updatedArray = [distance, ...fiveHybrid100];
                setFiveHybrid100(updatedArray);
            }
            else if (clubSelected === '5 Hybrid' && selectedPower === 75) {
                updatedArray = [distance, ...fiveHybrid75];
                setFiveHybrid75(updatedArray);
            }
            else if (clubSelected === '5 Hybrid' && selectedPower === 50) {
                updatedArray = [distance, ...fiveHybrid50];
                setFiveHybrid50(updatedArray);
            }
            else if (clubSelected === '6 Hybrid' && selectedPower === 100) {
                updatedArray = [distance, ...sixHybrid100];
                setSixHybrid100(updatedArray);
            }
            else if (clubSelected === '6 Hybrid' && selectedPower === 75) {
                updatedArray = [distance, ...sixHybrid75];
                setSixHybrid75(updatedArray);
            }
            else if (clubSelected === '6 Hybrid' && selectedPower === 50) {
                updatedArray = [distance, ...sixHybrid50];
                setSixHybrid50(updatedArray);
            }
            else if (clubSelected === '7 Hybrid' && selectedPower === 100) {
                updatedArray = [distance, ...sevenHybrid100];
                setSevenHybrid100(updatedArray);
            }
            else if (clubSelected === '7 Hybrid' && selectedPower === 75) {
                updatedArray = [distance, ...sevenHybrid75];
                setSevenHybrid75(updatedArray);
            }
            else if (clubSelected === '7 Hybrid' && selectedPower === 50) {
                updatedArray = [distance, ...sevenHybrid50];
                setSevenHybrid50(updatedArray);
            }
            // Irons
            else if (clubSelected === '2 Iron' && selectedPower === 100) {
                updatedArray = [distance, ...twoIron100];
                setTwoIron100(updatedArray);
            }
            else if (clubSelected === '2 Iron' && selectedPower === 75) {
                updatedArray = [distance, ...twoIron75];
                setTwoIron75(updatedArray);
            }
            else if (clubSelected === '2 Iron' && selectedPower === 50) {
                updatedArray = [distance, ...twoIron50];
                setTwoIron50(updatedArray);
            }
            else if (clubSelected === '3 Iron' && selectedPower === 100) {
                updatedArray = [distance, ...threeIron100];
                setThreeIron100(updatedArray);
            }
            else if (clubSelected === '3 Iron' && selectedPower === 75) {
                updatedArray = [distance, ...threeIron75];
                setThreeIron75(updatedArray);
            }
            else if (clubSelected === '3 Iron' && selectedPower === 50) {
                updatedArray = [distance, ...threeIron50];
                setThreeIron50(updatedArray);
            }
            else if (clubSelected === '4 Iron' && selectedPower === 100) {
                updatedArray = [distance, ...fourIron100];
                setFourIron100(updatedArray);
            }
            else if (clubSelected === '4 Iron' && selectedPower === 75) {
                updatedArray = [distance, ...fourIron75];
                setFourIron75(updatedArray);
            }
            else if (clubSelected === '4 Iron' && selectedPower === 50) {
                updatedArray = [distance, ...fourIron50];
                setFourIron50(updatedArray);
            }
            else if (clubSelected === '5 Iron' && selectedPower === 100) {
                updatedArray = [distance, ...fiveIron100];
                setFiveIron100(updatedArray);
            }
            else if (clubSelected === '5 Iron' && selectedPower === 75) {
                updatedArray = [distance, ...fiveIron75];
                setFiveIron75(updatedArray);
            }
            else if (clubSelected === '5 Iron' && selectedPower === 50) {
                updatedArray = [distance, ...fiveIron50];
                setFiveIron50(updatedArray);
            }
            else if (clubSelected === '6 Iron' && selectedPower === 100) {
                updatedArray = [distance, ...sixIron100];
                setSixIron100(updatedArray);
            }
            else if (clubSelected === '6 Iron' && selectedPower === 75) {
                updatedArray = [distance, ...sixIron75];
                setSixIron75(updatedArray);
            }
            else if (clubSelected === '6 Iron' && selectedPower === 50) {
                updatedArray = [distance, ...sixIron50];
                setSixIron50(updatedArray);
            }
            else if (clubSelected === '7 Iron' && selectedPower === 100) {
                updatedArray = [distance, ...sevenIron100];
                setSevenIron100(updatedArray);
            }
            else if (clubSelected === '7 Iron' && selectedPower === 75) {
                updatedArray = [distance, ...sevenIron75];
                setSevenIron75(updatedArray);
            }
            else if (clubSelected === '7 Iron' && selectedPower === 50) {
                updatedArray = [distance, ...sevenIron50];
                setSevenIron50(updatedArray);
            }
            else if (clubSelected === '8 Iron' && selectedPower === 100) {
                updatedArray = [distance, ...eightIron100];
                setEightIron100(updatedArray);
            }
            else if (clubSelected === '8 Iron' && selectedPower === 75) {
                updatedArray = [distance, ...eightIron75];
                setEightIron75(updatedArray);
            }
            else if (clubSelected === '8 Iron' && selectedPower === 50) {
                updatedArray = [distance, ...eightIron50];
                setEightIron50(updatedArray);
            }
            else if (clubSelected === '9 Iron' && selectedPower === 100) {
                updatedArray = [distance, ...nineIron100];
                setNineIron100(updatedArray);
            }
            else if (clubSelected === '9 Iron' && selectedPower === 75) {
                updatedArray = [distance, ...nineIron75];
                setNineIron75(updatedArray);
            }
            else if (clubSelected === '9 Iron' && selectedPower === 50) {
                updatedArray = [distance, ...nineIron50];
                setNineIron50(updatedArray);
            }
            // Wedges
            else if (clubSelected === 'PW' && selectedPower === 100) {
                updatedArray = [distance, ...pWedge100];
                setPWedge100(updatedArray);
            }
            else if (clubSelected === 'PW' && selectedPower === 75) {
                updatedArray = [distance, ...pWedge75];
                setPWedge75(updatedArray);
            }
            else if (clubSelected === 'PW' && selectedPower === 50) {
                updatedArray = [distance, ...pWedge50];
                setPWedge50(updatedArray);
            }
            else if (clubSelected === 'PW' && selectedPower === 25) {
                updatedArray = [distance, ...pWedge50];
                setPWedge25(updatedArray);
            }
            else if (clubSelected === '48 Wedge' && selectedPower === 100) {
                updatedArray = [distance, ...forty8Wedge100];
                setForty8Wedge100(updatedArray);
            }
            else if (clubSelected === '48 Wedge' && selectedPower === 75) {
                updatedArray = [distance, ...forty8Wedge75];
                setForty8Wedge75(updatedArray);
            }
            else if (clubSelected === '48 Wedge' && selectedPower === 50) {
                updatedArray = [distance, ...forty8Wedge50];
                setForty8Wedge50(updatedArray);
            }
            else if (clubSelected === '48 Wedge' && selectedPower === 25) {
                updatedArray = [distance, ...forty8Wedge50];
                setForty8Wedge25(updatedArray);
            }
            else if (clubSelected === '50 Wedge' && selectedPower === 100) {
                updatedArray = [distance, ...fiftyWedge100];
                setFiftyWedge100(updatedArray);
            }
            else if (clubSelected === '50 Wedge' && selectedPower === 75) {
                updatedArray = [distance, ...fiftyWedge75];
                setFiftyWedge75(updatedArray);
            }
            else if (clubSelected === '50 Wedge' && selectedPower === 50) {
                updatedArray = [distance, ...fiftyWedge50];
                setFiftyWedge50(updatedArray);
            }
            else if (clubSelected === '50 Wedge' && selectedPower === 25) {
                updatedArray = [distance, ...fiftyWedge50];
                setFiftyWedge25(updatedArray);
            }
            else if (clubSelected === '52 Wedge' && selectedPower === 100) {
                updatedArray = [distance, ...fifty2Wedge100];
                setFifty2Wedge100(updatedArray);
            }
            else if (clubSelected === '52 Wedge' && selectedPower === 75) {
                updatedArray = [distance, ...fifty2Wedge75];
                setFifty2Wedge75(updatedArray);
            }
            else if (clubSelected === '52 Wedge' && selectedPower === 50) {
                updatedArray = [distance, ...fifty2Wedge50];
                setFifty2Wedge50(updatedArray);
            }
            else if (clubSelected === '52 Wedge' && selectedPower === 25) {
                updatedArray = [distance, ...fifty2Wedge50];
                setFifty2Wedge25(updatedArray);
            }
            else if (clubSelected === '54 Wedge' && selectedPower === 100) {
                updatedArray = [distance, ...fifty4Wedge100];
                setFifty4Wedge100(updatedArray);
            }
            else if (clubSelected === '54 Wedge' && selectedPower === 75) {
                updatedArray = [distance, ...fifty4Wedge75];
                setFifty4Wedge75(updatedArray);
            }
            else if (clubSelected === '54 Wedge' && selectedPower === 50) {
                updatedArray = [distance, ...fifty4Wedge50];
                setFifty4Wedge50(updatedArray);
            }
            else if (clubSelected === '54 Wedge' && selectedPower === 25) {
                updatedArray = [distance, ...fifty4Wedge50];
                setFifty4Wedge25(updatedArray);
            }
            else if (clubSelected === '56 Wedge' && selectedPower === 100) {
                updatedArray = [distance, ...fifty6Wedge100];
                setFifty6Wedge100(updatedArray);
            }
            else if (clubSelected === '56 Wedge' && selectedPower === 75) {
                updatedArray = [distance, ...fifty6Wedge75];
                setFifty6Wedge75(updatedArray);
            }
            else if (clubSelected === '56 Wedge' && selectedPower === 50) {
                updatedArray = [distance, ...fifty6Wedge50];
                setFifty6Wedge50(updatedArray);
            }
            else if (clubSelected === '56 Wedge' && selectedPower === 25) {
                updatedArray = [distance, ...fifty6Wedge50];
                setFifty6Wedge25(updatedArray);
            }
            else if (clubSelected === '58 Wedge' && selectedPower === 100) {
                updatedArray = [distance, ...fifty8Wedge100];
                setFifty8Wedge100(updatedArray);
            }
            else if (clubSelected === '58 Wedge' && selectedPower === 75) {
                updatedArray = [distance, ...fifty8Wedge75];
                setFifty8Wedge75(updatedArray);
            }
            else if (clubSelected === '58 Wedge' && selectedPower === 50) {
                updatedArray = [distance, ...fifty8Wedge50];
                setFifty8Wedge50(updatedArray);
            }
            else if (clubSelected === '58 Wedge' && selectedPower === 25) {
                updatedArray = [distance, ...fifty8Wedge50];
                setFifty8Wedge25(updatedArray);
            }
            else if (clubSelected === '60 Wedge' && selectedPower === 100) {
                updatedArray = [distance, ...sixtyWedge100];
                setSixtyWedge100(updatedArray);
            }
            else if (clubSelected === '60 Wedge' && selectedPower === 75) {
                updatedArray = [distance, ...sixtyWedge75];
                setSixtyWedge75(updatedArray);
            }
            else if (clubSelected === '60 Wedge' && selectedPower === 50) {
                updatedArray = [distance, ...sixtyWedge50];
                setSixtyWedge50(updatedArray);
            }
            else if (clubSelected === '60 Wedge' && selectedPower === 25) {
                updatedArray = [distance, ...sixtyWedge50];
                setSixtyWedge25(updatedArray);
            }
            else {
                // Add more conditions for other combinations if needed
                // For example: else if (clubSelected === 'Iron' && selectedPower === 100)
                //             { updatedArray = [distance, ...iron100]; setIron100(updatedArray); }
                //             else if (clubSelected === 'Hybrid' && selectedPower === 100)
                //             { updatedArray = [distance, ...hybrid100]; setHybrid100(updatedArray); }
                //             ...
            }
            setNewShotDistance('');
            console.log(updatedArray)
            console.log(driver75)
            console.log(driver100)
            // console.log(handleButtonPress())
        }
    };

    const shotTypeList = () => {
        if (clubSelected === 'Driver') {
            return [
                { label: "Full Swing", value: 100 },
                { label: "Fairway Finder", value: 75 },
            ];
        }
        else if (clubSelected === '3 Wood' || clubSelected === '5 Wood' || clubSelected === '7 Wood') {
            return [
                { label: "Full Swing", value: 100 },
                { label: "Easy Swing", value: 75 },
            ];
        }
        else if (clubSelected === '2 Hybrid' || clubSelected === '3 Hybrid' || clubSelected === '4 Hybrid' || clubSelected === '5 Hybrid' || clubSelected === '6 Hybrid' || clubSelected === '7 Hybrid') {
            return [
                { label: "Full Swing", value: 100 },
                { label: "Easy Swing", value: 75 },
            ];
        }
        else if (clubSelected === '2 Iron' || clubSelected === '3 Iron' || clubSelected === '4 Iron' || clubSelected === '5 Iron' || clubSelected === '6 Iron' || clubSelected === '7 Iron' || clubSelected === '8 Iron' || clubSelected === '9 Iron') {
            return [
                { label: "Full Swing", value: 100 },
                { label: "Easy Swing", value: 75 },
                { label: "Punch Shot", value: 50 },
            ];
        }
        else if (clubSelected === 'PW' || clubSelected === '48 Wedge' || clubSelected === '50 Wedge' || clubSelected === '52 Wedge' || clubSelected === '54 Wedge' || clubSelected === '56 Wedge' || clubSelected === '58 Wedge' || clubSelected === '60 Wedge') {
            return [
                { label: "Full Shot", value: 100 },
                { label: "3/4 Swing", value: 75 },
                { label: "Half Swing", value: 50 },
                { label: "Quarter Swing", value: 25 },
            ];
        }
        else
            return [
                { label: "Full Shot", value: 100 },
                { label: "3/4 Swing", value: 75 },
                { label: "Half Swing", value: 50 },
                { label: "Quarter Swing", value: 25 },
            ]
    };

    shotTypeDropdownList = shotTypeList();

    const handleValueChange = (value) => {
        setSelectedPower(value);
        const selected = shotTypeList().find(item => item.value === value);
        setSelectedLabel(selected ? selected.label : '');
    };
    // const handleValueChange = (value) => {
    //     setSelectedPower(value);
    //     const selected = shotTypeList().find(item => item.value === value);
    //     setSelectedLabel(selected.label || '');
    // };

    const resetPicker = () => {
        setSelectedPower(null);
        setSelectedLabel('');
    };

    const renderClubSelectedText = () => {
        if (clubSelected) {
            return <Text> | </Text>;
        } else {
            return null;
        }
    };

    return (
        <SafeAreaView style={mainStyles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                    style={[mainStyles.screenContainer, { flex: 1 }]}
                >
                    <Text style={[mainStyles.header1, { alignSelf: "center", paddingBottom: 30, fontSize: 30, }]}>Log Shots</Text>
                    <View style={{ flex: 4, alignItems: "flex-start", justifyContent: 'stretch' }}>
                        <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", }}>
                                <View>
                                    <Text style={[mainStyles.header1, { paddingRight: 5 }]}>Club:</Text>
                                    <Text style={mainStyles.mdText}>Select what club you're hitting</Text>
                                </View>
                                <View style={mainStyles.inputBackground}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, }}>
                                        <View style={{ fontSize: 20, fontWeight: "800", }}>
                                            <PickerSelect
                                                onValueChange={(value) => {
                                                    setClubSelected(value);
                                                    // console.log(value);
                                                    resetPicker();
                                                }}
                                                items={clubsInMyBag2
                                                    .filter((club) => club.status === "active")
                                                    .map((club) => ({ label: club.club, value: club.club }))
                                                }
                                                value={clubSelected}
                                            />
                                        </View>
                                        {/* <Feather style={{ paddingLeft: 5 }} name="arrow-down-circle" size={24} color="black" /> */}
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", }}>
                                <View>
                                    <Text style={[mainStyles.header1, { paddingRight: 5 }]}>Shot Type:</Text>
                                    <Text style={mainStyles.mdText}>Select what kind of shot you're hitting</Text>
                                </View>
                                <View style={mainStyles.inputBackground}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 10, }}>
                                        <View style={{ fontSize: 20, fontWeight: "800", }}>
                                            <PickerSelect
                                                // onValueChange={(value) => {
                                                //     setSelectedPower(value);
                                                //     console.log(value);
                                                // }}
                                                onValueChange={handleValueChange}
                                                // items={[
                                                //     { label: "100% Power", value: 100 },
                                                //     { label: "75% Power", value: 75 },
                                                //     { label: "50% Power", value: 50 },
                                                //     { label: "25% Power", value: 25 },
                                                // ]}
                                                items={shotTypeDropdownList}
                                                value={selectedPower}
                                            />
                                        </View>
                                        {/* <Feather style={{ paddingLeft: 5 }} name="arrow-down-circle" size={24} color="black" /> */}
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingVertical: 5 }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: "space-between", borderTopWidth: 1, borderTopColor: '#707070', paddingTop: 5, }}>
                                <View>
                                    <Text style={[mainStyles.header1, { paddingRight: 5 }]}>Enter Distance:</Text>
                                    <Text style={mainStyles.mdText}>Enter the distance and click the plus button</Text>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: 'center', paddingVertical: 5, }}>
                                    <View style={mainStyles.inputBackground}>
                                        <View style={{ flexDirection: 'row', alignItems: "center", paddingHorizontal: 5, }}>
                                            <TextInput
                                                placeholder={"0"}
                                                onChangeText={setNewShotDistance}
                                                value={newShotDistance}
                                                maxLength={3}
                                                keyboardType='numeric'
                                                style={{ padding: 5, fontSize: 20, fontWeight: "800", }}
                                            />
                                            <Text>yds</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingVertical: 20, }}>
                            <View style={{ flex: 1, alignItems: 'center', }}>
                                <TouchableOpacity
                                    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 5, backgroundColor: 'blue', borderRadius: 20, }}
                                    onPress={() => {
                                        handleButtonPress();
                                    }}
                                >
                                    <Text style={[mainStyles.header2, { paddingHorizontal: 5, color: 'white', paddingRight: 10, }]}>Add Shot</Text>
                                    <Feather
                                        style={{}} name="plus-circle" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 6, }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#707070', paddingBottom: 5, }}>
                            <View>
                                <Text style={mainStyles.header3}>Shot Stats for:</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={mainStyles.header2}>{clubSelected}</Text>
                                {renderClubSelectedText()}
                                <Text style={mainStyles.header2}>{selectedLabel}</Text>
                                {/* <Text style={mainStyles.header3}>Shot Type: {selectedLabel}</Text> */}
                            </View>
                        </View>
                        <View style={{ paddingVertical: 10, }}>
                            <FlatList
                                data={ShotData(clubSelected, selectedPower)}
                                renderItem={renderDriverData}
                                // keyExtractor={(item, index) => index.toString()}
                                keyExtractor={(item, index) => index}
                                // horizontal={true}
                                numColumns={4}
                                style={{ flexGrow: 1, }}
                            />
                        </View>
                        {/* <View>
                        {renderClubs()}
                    </View> */}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default MyStatsScreen;