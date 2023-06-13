// Changing all driver100 to Driver100Data and importing it. 

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, FlatList, Keyboard, TouchableWithoutFeedback, ScrollView, Touchable } from 'react-native';
import PickerSelect from 'react-native-picker-select';
// import Picker from 'react-native-picker';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
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
    // New Shot Arrays
    driver100Data, driver75Data, threeWood100Data, threeWood75Data, fiveWood100Data, fiveWood75Data, sevenWood100Data, sevenWood75Data,
    // Set New Shot Arrays
    setDriver100Data, setDriver75Data, setThreeWood100Data, setThreeWood75Data, setFiveWood100Data, setFiveWood75Data, setSevenWood100Data, setSevenWood75Data,
    // Hybrids
    // Two Hybrid
    twoHybrid100Data, setTwoHybrid100Data, twoHybrid75Data, setTwoHybrid75Data,
    // Three Hybrid
    threeHybrid100Data, setThreeHybrid100Data, threeHybrid75Data, setThreeHybrid75Data,
    // Four Hybrid
    fourHybrid100Data, setFourHybrid100Data, fourHybrid75Data, setFourHybrid75Data,
    // Five Hybrid
    fiveHybrid100Data, setFiveHybrid100Data, fiveHybrid75Data, setFiveHybrid75Data,
    // Six Hybrid
    sixHybrid100Data, setSixHybrid100Data, sixHybrid75Data, setSixHybrid75Data,
    // Seven Hybrid
    sevenHybrid100Data, setSevenHybrid100Data, sevenHybrid75Data, setSevenHybrid75Data,
    // Irons
    // Two Iron
    twoIron100Data, setTwoIron100Data, twoIron75Data, setTwoIron75Data, twoIron50Data, setTwoIron50Data, twoIron25Data, setTwoIron25Data,
    // Three Iron
    threeIron100Data, setThreeIron100Data, threeIron75Data, setThreeIron75Data, threeIron50Data, setThreeIron50Data, threeIron25Data, setThreeIron25Data,
    // Four Iron
    fourIron100Data, setFourIron100Data, fourIron75Data, setFourIron75Data, fourIron50Data, setFourIron50Data, fourIron25Data, setFourIron25Data,
    // Five Iron
    fiveIron100Data, setFiveIron100Data, fiveIron75Data, setFiveIron75Data, fiveIron50Data, setFiveIron50Data, fiveIron25Data, setFiveIron25Data,
    // Six Iron
    sixIron100Data, setSixIron100Data, sixIron75Data, setSixIron75Data, sixIron50Data, setSixIron50Data, sixIron25Data, setSixIron25Data,
    // Seven Iron
    sevenIron100Data, setSevenIron100Data, sevenIron75Data, setSevenIron75Data, sevenIron50Data, setSevenIron50Data, sevenIron25Data, setSevenIron25Data,
    // Eight Iron
    eightIron100Data, setEightIron100Data, eightIron75Data, setEightIron75Data, eightIron50Data, setEightIron50Data, eightIron25Data, setEightIron25Data,
    // Nine Iron
    nineIron100Data, setNineIron100Data, nineIron75Data, setNineIron75Data, nineIron50Data, setNineIron50Data, nineIron25Data, setNineIron25Data,
    // Wedge
    // P Wedge
    pWedge100Data, setPWedge100Data, pWedge75Data, setPWedge75Data, pWedge50Data, setPWedge50Data, pWedge25Data, setPWedge25Data,
    // Forty8 Wedge
    forty8Wedge100Data, setForty8Wedge100Data, forty8Wedge75Data, setForty8Wedge75Data, forty8Wedge50Data, setForty8Wedge50Data, forty8Wedge25Data, setForty8Wedge25Data,
    // Fifty Wedge
    fiftyWedge100Data, setFiftyWedge100Data, fiftyWedge75Data, setFiftyWedge75Data, fiftyWedge50Data, setFiftyWedge50Data, fiftyWedge25Data, setFiftyWedge25Data,
    // Fifty2 Wedge
    fifty2Wedge100Data, setFifty2Wedge100Data, fifty2Wedge75Data, setFifty2Wedge75Data, fifty2Wedge50Data, setFifty2Wedge50Data, fifty2Wedge25Data, setFifty2Wedge25Data,
    // Fifty4 Wedge
    fifty4Wedge100Data, setFifty4Wedge100Data, fifty4Wedge75Data, setFifty4Wedge75Data, fifty4Wedge50Data, setFifty4Wedge50Data, fifty4Wedge25Data, setFifty4Wedge25Data,
    // Fifty6 Wedge
    fifty6Wedge100Data, setFifty6Wedge100Data, fifty6Wedge75Data, setFifty6Wedge75Data, fifty6Wedge50Data, setFifty6Wedge50Data, fifty6Wedge25Data, setFifty6Wedge25Data,
    // Fifty8 Wedge
    fifty8Wedge100Data, setFifty8Wedge100Data, fifty8Wedge75Data, setFifty8Wedge75Data, fifty8Wedge50Data, setFifty8Wedge50Data, fifty8Wedge25Data, setFifty8Wedge25Data,
    // Sixty Wedge
    sixtyWedge100Data, setSixtyWedge100Data, sixtyWedge75Data, setSixtyWedge75Data, sixtyWedge50Data, setSixtyWedge50Data, sixtyWedge25Data, setSixtyWedge25Data,


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
    // render function
    // function renderClubs() {
    //     return clubsInMyBag.map((item) => (
    //         <Text key={item.id}>{item.club}</Text>
    //     ));
    // }

    const ShotData = (clubSelected, selectedPower, selectedLabel) => {
        // Woods
        if (clubSelected === 'Driver' && selectedPower === 100) {
            const shotArray = driver100Data;
            console.log('Returned array:', shotArray, shotArray.distance);
            return shotArray;
            // const shotArray = driver100Data;
            // const setShotArray = setDriver100Data;
            // console.log('Returned array:', shotArray, shotArray.distance);
            // return [shotArray, setShotArray];
        } else if (clubSelected === 'Driver' && selectedPower === 75) {
            const shotArray = driver75Data;
            console.log('Returned array:', shotArray, shotArray.distance);
            return shotArray;
        }
        else if (clubSelected === '3 Wood' && selectedPower === 100) {
            const shotArray = threeWood100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '3 Wood' && selectedPower === 75) {
            const shotArray = threeWood75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '5 Wood' && selectedPower === 100) {
            const shotArray = fiveWood100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '5 Wood' && selectedPower === 75) {
            const shotArray = fiveWood75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '7 Wood' && selectedPower === 100) {
            const shotArray = sevenWood100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '7 Wood' && selectedPower === 75) {
            const shotArray = sevenWood75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // Hybrids
        else if (clubSelected === '2 Hybrid' && selectedPower === 100) {
            const shotArray = twoHybrid100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '2 Hybrid' && selectedPower === 75) {
            const shotArray = twoHybrid75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '3 Hybrid' && selectedPower === 100) {
            const shotArray = threeHybrid100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '3 Hybrid' && selectedPower === 75) {
            const shotArray = threeHybrid75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '4 Hybrid' && selectedPower === 100) {
            const shotArray = fourHybrid100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '4 Hybrid' && selectedPower === 75) {
            const shotArray = fourHybrid75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '5 Hybrid' && selectedPower === 100) {
            const shotArray = fiveHybrid100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '5 Hybrid' && selectedPower === 75) {
            const shotArray = fiveHybrid75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '6 Hybrid' && selectedPower === 100) {
            const shotArray = sixHybrid100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '6 Hybrid' && selectedPower === 75) {
            const shotArray = sixHybrid75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '7 Hybrid' && selectedPower === 100) {
            const shotArray = sevenHybrid100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '7 Hybrid' && selectedPower === 75) {
            const shotArray = sevenHybrid75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // Irons
        // 2 Iron
        else if (clubSelected === '2 Iron' && selectedPower === 100) {
            const shotArray = twoIron100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '2 Iron' && selectedPower === 75) {
            const shotArray = twoIron75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '2 Iron' && selectedPower === 50) {
            const shotArray = twoIron50Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '2 Iron' && selectedPower === 25) {
            const shotArray = twoIron25Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 3 Iron
        else if (clubSelected === '3 Iron' && selectedPower === 100) {
            const shotArray = threeIron100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '3 Iron' && selectedPower === 75) {
            const shotArray = threeIron75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '3 Iron' && selectedPower === 50) {
            const shotArray = threeIron50Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '3 Iron' && selectedPower === 25) {
            const shotArray = threeIron25Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 4 Iron
        else if (clubSelected === '4 Iron' && selectedPower === 100) {
            const shotArray = fourIron100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '4 Iron' && selectedPower === 75) {
            const shotArray = fourIron75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '4 Iron' && selectedPower === 50) {
            const shotArray = fourIron50Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '4 Iron' && selectedPower === 25) {
            const shotArray = fourIron25Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 5 Iron
        else if (clubSelected === '5 Iron' && selectedPower === 100) {
            const shotArray = fiveIron100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '5 Iron' && selectedPower === 75) {
            const shotArray = fiveIron75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '5 Iron' && selectedPower === 50) {
            const shotArray = fiveIron50Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '6 Iron' && selectedPower === 25) {
            const shotArray = fiveIron25Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 6 Iron
        else if (clubSelected === '6 Iron' && selectedPower === 100) {
            const shotArray = sixIron100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '6 Iron' && selectedPower === 75) {
            const shotArray = sixIron75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '6 Iron' && selectedPower === 50) {
            const shotArray = sixIron50Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '6 Iron' && selectedPower === 25) {
            const shotArray = sixIron25Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 7 Iron
        else if (clubSelected === '7 Iron' && selectedPower === 100) {
            const shotArray = sevenIron100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '7 Iron' && selectedPower === 75) {
            const shotArray = sevenIron75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '7 Iron' && selectedPower === 50) {
            const shotArray = sevenIron50Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '7 Iron' && selectedPower === 25) {
            const shotArray = sevenIron25Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 8 Iron
        else if (clubSelected === '8 Iron' && selectedPower === 100) {
            const shotArray = eightIron100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '8 Iron' && selectedPower === 75) {
            const shotArray = eightIron75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '8 Iron' && selectedPower === 50) {
            const shotArray = eightIron50Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '8 Iron' && selectedPower === 25) {
            const shotArray = eightIron25Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 9 Iron
        else if (clubSelected === '9 Iron' && selectedPower === 100) {
            const shotArray = nineIron100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '9 Iron' && selectedPower === 75) {
            const shotArray = nineIron75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '9 Iron' && selectedPower === 50) {
            const shotArray = nineIron50Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '9 Iron' && selectedPower === 25) {
            const shotArray = nineIron25Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // PW
        else if (clubSelected === 'PW' && selectedPower === 100) {
            const shotArray = pWedge100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === 'PW' && selectedPower === 75) {
            const shotArray = pWedge75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === 'PW' && selectedPower === 50) {
            const shotArray = pWedge50Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === 'PW' && selectedPower === 25) {
            const shotArray = pWedge25Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 48 Wedge
        else if (clubSelected === '48 Wedge' && selectedPower === 100) {
            const shotArray = forty8Wedge100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '48 Wedge' && selectedPower === 75) {
            const shotArray = forty8Wedge75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '48 Wedge' && selectedPower === 50) {
            const shotArray = forty8Wedge50Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '48 Wedge' && selectedPower === 25) {
            const shotArray = forty8Wedge25Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 50 Wedge
        else if (clubSelected === '50 Wedge' && selectedPower === 100) {
            const shotArray = fiftyWedge100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '50 Wedge' && selectedPower === 75) {
            const shotArray = fiftyWedge75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '50 Wedge' && selectedPower === 50) {
            const shotArray = fiftyWedge50Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '50 Wedge' && selectedPower === 25) {
            const shotArray = fiftyWedge25Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 52 Wedge
        else if (clubSelected === '52 Wedge' && selectedPower === 100) {
            const shotArray = fifty2Wedge100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '52 Wedge' && selectedPower === 75) {
            const shotArray = fifty2Wedge75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '52 Wedge' && selectedPower === 50) {
            const shotArray = fifty2Wedge50Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '52 Wedge' && selectedPower === 25) {
            const shotArray = fifty2Wedge25Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 54 Wedge
        else if (clubSelected === '54 Wedge' && selectedPower === 100) {
            const shotArray = fifty4Wedge100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '54 Wedge' && selectedPower === 75) {
            const shotArray = fifty4Wedge75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '54 Wedge' && selectedPower === 50) {
            const shotArray = fifty4Wedge50Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '54 Wedge' && selectedPower === 25) {
            const shotArray = fifty4Wedge25Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 56 Wedge
        else if (clubSelected === '56 Wedge' && selectedPower === 100) {
            const shotArray = fifty6Wedge100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '56 Wedge' && selectedPower === 75) {
            const shotArray = fifty6Wedge75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '56 Wedge' && selectedPower === 50) {
            const shotArray = fifty6Wedge50Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '56 Wedge' && selectedPower === 25) {
            const shotArray = fifty6Wedge25Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 58 Wedge
        else if (clubSelected === '58 Wedge' && selectedPower === 100) {
            const shotArray = fifty8Wedge100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '58 Wedge' && selectedPower === 75) {
            const shotArray = fifty8Wedge75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '58 Wedge' && selectedPower === 50) {
            const shotArray = fifty8Wedge50Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '58 Wedge' && selectedPower === 25) {
            const shotArray = fifty8Wedge25Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        // 60 Wedge
        else if (clubSelected === '60 Wedge' && selectedPower === 100) {
            const shotArray = sixtyWedge100Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '60 Wedge' && selectedPower === 75) {
            const shotArray = sixtyWedge75Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '60 Wedge' && selectedPower === 50) {
            const shotArray = sixtyWedge50Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else if (clubSelected === '60 Wedge' && selectedPower === 25) {
            const shotArray = sixtyWedge25Data;
            console.log('Returned array:', shotArray);
            return shotArray;
        }
        else
            return <Text>Select shot</Text>
    };

    const handleButtonPress = () => {
        if (newShotDistance !== '') {
            const distance = parseInt(newShotDistance);
            let updatedArray;
            //Adding this:
            let updatedData;
            // Woods
            if (clubSelected === 'Driver' && selectedPower === 100) {
                // updatedArray = [distance, ...driver100Data];
                // setDriver100Data(updatedArray);
                updatedArray = [{ distance, key: driver100Data.length + 1 }, ...driver100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setDriver100Data(updatedData);
                console.log(driver100Data)
            }
            else if (clubSelected === 'Driver' && selectedPower === 75) {
                // updatedArray = [distance, ...driver75Data];
                // setDriver75Data(updatedArray);
                updatedArray = [{ distance, key: driver75Data.length + 1 }, ...driver75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setDriver75Data(updatedData);
                console.log(driver75Data)
            }
            else if (clubSelected === '3 Wood' && selectedPower === 100) {
                // updatedArray = [distance, ...threeWood100Data];
                // setThreeWood100Data(updatedArray);
                updatedArray = [{ distance, key: threeWood100Data.length + 1 }, ...threeWood100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setThreeWood100Data(updatedData);
                console.log(threeWood100Data)
            }
            else if (clubSelected === '3 Wood' && selectedPower === 75) {
                // updatedArray = [distance, ...threeWood75Data];
                // setThreeWood75Data(updatedArray);
                updatedArray = [{ distance, key: threeWood75Data.length + 1 }, ...threeWood75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setThreeWood75Data(updatedData);
                console.log(threeWood75Data)
            }
            else if (clubSelected === '5 Wood' && selectedPower === 100) {
                // updatedArray = [distance, ...fiveWood100Data];
                // setFiveWood100Data(updatedArray);
                updatedArray = [{ distance, key: fiveWood100Data.length + 1 }, ...fiveWood100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFiveWood100Data(updatedData);
                console.log(fiveWood100Data)

            }
            else if (clubSelected === '5 Wood' && selectedPower === 75) {
                // updatedArray = [distance, ...fiveWood75Data];
                // setFiveWood75Data(updatedArray);
                updatedArray = [{ distance, key: fiveWood75Data.length + 1 }, ...fiveWood75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFiveWood75Data(updatedData);
                console.log(fiveWood75Data)
            }
            else if (clubSelected === '7 Wood' && selectedPower === 100) {
                // updatedArray = [distance, ...sevenWood100Data];
                // setSevenWood100Data(updatedArray);
                updatedArray = [{ distance, key: sevenWood100Data.length + 1 }, ...sevenWood100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setSevenWood100Data(updatedData);
                console.log(sevenWood100Data)
            }
            else if (clubSelected === '7 Wood' && selectedPower === 75) {
                // updatedArray = [distance, ...sevenWood75Data];
                // setSevenWood75Data(updatedArray);
                updatedArray = [{ distance, key: sevenWood75Data.length + 1 }, ...sevenWood75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setSevenWood75Data(updatedData);
                console.log(sevenWood75Data)
            }
            // Hybrids
            else if (clubSelected === '2 Hybrid' && selectedPower === 100) {
                updatedArray = [{ distance, key: twoHybrid100Data.length + 1 }, ...twoHybrid100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setTwoHybrid100Data(updatedData);
                console.log(twoHybrid100Data)
            }
            else if (clubSelected === '2 Hybrid' && selectedPower === 75) {
                updatedArray = [{ distance, key: twoHybrid75Data.length + 1 }, ...twoHybrid75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setTwoHybrid75Data(updatedData);
                console.log(twoHybrid75Data)
            }
            // else if (clubSelected === '2 Hybrid' && selectedPower === 50) {
            //     updatedArray = [distance, ...twoHybrid50];
            //     setTwoHybrid50(updatedArray);
            // }
            else if (clubSelected === '3 Hybrid' && selectedPower === 100) {
                updatedArray = [{ distance, key: threeHybrid100Data.length + 1 }, ...threeHybrid100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setThreeHybrid100Data(updatedData);
                console.log(threeHybrid100Data)
            }
            else if (clubSelected === '3 Hybrid' && selectedPower === 75) {
                updatedArray = [{ distance, key: threeHybrid75Data.length + 1 }, ...threeHybrid75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setThreeHybrid75Data(updatedData);
                console.log(threeHybrid75Data)
            }
            // else if (clubSelected === '3 Hybrid' && selectedPower === 50) {
            //     updatedArray = [distance, ...threeHybrid50];
            //     setThreeHybrid50(updatedArray);
            // }
            else if (clubSelected === '4 Hybrid' && selectedPower === 100) {
                updatedArray = [{ distance, key: fourHybrid100Data.length + 1 }, ...fourHybrid100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFourHybrid100Data(updatedData);
                console.log(fourHybrid100Data)
            }
            else if (clubSelected === '4 Hybrid' && selectedPower === 75) {
                updatedArray = [{ distance, key: fourHybrid75Data.length + 1 }, ...fourHybrid75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFourHybrid75Data(updatedData);
                console.log(fourHybrid75Data)
            }
            // else if (clubSelected === '4 Hybrid' && selectedPower === 50) {
            //     updatedArray = [distance, ...fourHybrid50];
            //     setFourHybrid50(updatedArray);
            // }
            else if (clubSelected === '5 Hybrid' && selectedPower === 100) {
                updatedArray = [{ distance, key: fiveHybrid100Data.length + 1 }, ...fiveHybrid100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFiveHybrid100Data(updatedData);
                console.log(fiveHybrid100Data)
            }
            else if (clubSelected === '5 Hybrid' && selectedPower === 75) {
                updatedArray = [{ distance, key: fiveHybrid75Data.length + 1 }, ...fiveHybrid75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFiveHybrid75Data(updatedData);
                console.log(fiveHybrid75Data)
            }
            // else if (clubSelected === '5 Hybrid' && selectedPower === 50) {
            //     updatedArray = [distance, ...fiveHybrid50];
            //     setFiveHybrid50(updatedArray);
            // }
            else if (clubSelected === '6 Hybrid' && selectedPower === 100) {
                updatedArray = [{ distance, key: sixHybrid100Data.length + 1 }, ...sixHybrid100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setSixHybrid100Data(updatedData);
                console.log(sixHybrid100Data)
            }
            else if (clubSelected === '6 Hybrid' && selectedPower === 75) {
                updatedArray = [{ distance, key: sixHybrid75Data.length + 1 }, ...sixHybrid75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setSixHybrid75Data(updatedData);
                console.log(sixHybrid75Data)
            }
            // else if (clubSelected === '6 Hybrid' && selectedPower === 50) {
            //     updatedArray = [distance, ...sixHybrid50];
            //     setSixHybrid50(updatedArray);
            // }
            else if (clubSelected === '7 Hybrid' && selectedPower === 100) {
                updatedArray = [{ distance, key: sevenHybrid100Data.length + 1 }, ...sevenHybrid100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setSevenHybrid100Data(updatedData);
                console.log(sevenHybrid100Data)
            }
            else if (clubSelected === '7 Hybrid' && selectedPower === 75) {
                updatedArray = [{ distance, key: sevenHybrid75Data.length + 1 }, ...sevenHybrid75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setSevenHybrid75Data(updatedData);
                console.log(sevenHybrid75Data)
            }
            // else if (clubSelected === '7 Hybrid' && selectedPower === 50) {
            //     updatedArray = [distance, ...sevenHybrid50];
            //     setSevenHybrid50(updatedArray);
            // }
            // Irons
            else if (clubSelected === '2 Iron' && selectedPower === 100) {
                updatedArray = [{ distance, key: twoIron100Data.length + 1 }, ...twoIron100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setTwoIron100Data(updatedData);
                console.log(twoIron100Data)
            }
            else if (clubSelected === '2 Iron' && selectedPower === 75) {
                updatedArray = [{ distance, key: twoIron75Data.length + 1 }, ...twoIron75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setTwoIron75Data(updatedData);
                console.log(twoIron75Data)
            }
            else if (clubSelected === '2 Iron' && selectedPower === 50) {
                updatedArray = [{ distance, key: twoIron50Data.length + 1 }, ...twoIron50Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setTwoIron50Data(updatedData);
                console.log(twoIron50Data)
            }
            else if (clubSelected === '3 Iron' && selectedPower === 100) {
                updatedArray = [{ distance, key: threeIron100Data.length + 1 }, ...threeIron100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setThreeIron100Data(updatedData);
                console.log(threeIron100Data);
            }
            else if (clubSelected === '3 Iron' && selectedPower === 75) {
                updatedArray = [{ distance, key: threeIron75Data.length + 1 }, ...threeIron75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setThreeIron75Data(updatedData);
                console.log(threeIron75Data);
            }
            else if (clubSelected === '3 Iron' && selectedPower === 50) {
                updatedArray = [{ distance, key: threeIron50Data.length + 1 }, ...threeIron50Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setThreeIron50Data(updatedData);
                console.log(threeIron50Data);
            }
            else if (clubSelected === '4 Iron' && selectedPower === 100) {
                updatedArray = [{ distance, key: fourIron100Data.length + 1 }, ...fourIron100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFourIron100Data(updatedData);
                console.log(fourIron100Data);
            }
            else if (clubSelected === '4 Iron' && selectedPower === 75) {
                updatedArray = [{ distance, key: fourIron75Data.length + 1 }, ...fourIron75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFourIron75Data(updatedData);
                console.log(fourIron75Data);
            }
            else if (clubSelected === '4 Iron' && selectedPower === 50) {
                updatedArray = [{ distance, key: fourIron50Data.length + 1 }, ...fourIron50Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFourIron50Data(updatedData);
                console.log(fourIron50Data);
            }
            else if (clubSelected === '5 Iron' && selectedPower === 100) {
                updatedArray = [{ distance, key: fiveIron100Data.length + 1 }, ...fiveIron100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFiveIron100Data(updatedData);
                console.log(fiveIron100Data);
            }
            else if (clubSelected === '5 Iron' && selectedPower === 75) {
                updatedArray = [{ distance, key: fiveIron75Data.length + 1 }, ...fiveIron75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFiveIron75Data(updatedData);
                console.log(fiveIron75Data);
            }
            else if (clubSelected === '5 Iron' && selectedPower === 50) {
                updatedArray = [{ distance, key: fiveIron50Data.length + 1 }, ...fiveIron50Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFiveIron50Data(updatedData);
                console.log(fiveIron50Data);
            }
            else if (clubSelected === '6 Iron' && selectedPower === 100) {
                updatedArray = [{ distance, key: sixIron100Data.length + 1 }, ...sixIron100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setSixIron100Data(updatedData);
                console.log(sixIron100Data);
            }
            else if (clubSelected === '6 Iron' && selectedPower === 75) {
                updatedArray = [{ distance, key: sixIron75Data.length + 1 }, ...sixIron75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setSixIron75Data(updatedData);
                console.log(sixIron75Data);
            }
            else if (clubSelected === '6 Iron' && selectedPower === 50) {
                updatedArray = [{ distance, key: sixIron50Data.length + 1 }, ...sixIron50Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setSixIron50Data(updatedData);
                console.log(sixIron50Data);
            }
            else if (clubSelected === '7 Iron' && selectedPower === 100) {
                updatedArray = [{ distance, key: sevenIron100Data.length + 1 }, ...sevenIron100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setSevenIron100Data(updatedData);
                console.log(sevenIron100Data);
            }
            else if (clubSelected === '7 Iron' && selectedPower === 75) {
                updatedArray = [{ distance, key: sevenIron75Data.length + 1 }, ...sevenIron75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setSevenIron75Data(updatedData);
                console.log(sevenIron75Data);
            }
            else if (clubSelected === '7 Iron' && selectedPower === 50) {
                updatedArray = [{ distance, key: sevenIron50Data.length + 1 }, ...sevenIron50Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setSevenIron50Data(updatedData);
                console.log(sevenIron50Data);
            }
            else if (clubSelected === '8 Iron' && selectedPower === 100) {
                updatedArray = [{ distance, key: eightIron100Data.length + 1 }, ...eightIron100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setEightIron100Data(updatedData);
                console.log(eightIron100Data);
            }
            else if (clubSelected === '8 Iron' && selectedPower === 75) {
                updatedArray = [{ distance, key: eightIron75Data.length + 1 }, ...eightIron75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setEightIron75Data(updatedData);
                console.log(eightIron75Data);
            }
            else if (clubSelected === '8 Iron' && selectedPower === 50) {
                updatedArray = [{ distance, key: eightIron50Data.length + 1 }, ...eightIron50Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setEightIron50Data(updatedData);
                console.log(eightIron50Data);
            }
            else if (clubSelected === '9 Iron' && selectedPower === 100) {
                updatedArray = [{ distance, key: nineIron100Data.length + 1 }, ...nineIron100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setNineIron100Data(updatedData);
                console.log(nineIron100Data);
            }
            else if (clubSelected === '9 Iron' && selectedPower === 75) {
                updatedArray = [{ distance, key: nineIron75Data.length + 1 }, ...nineIron75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setNineIron75Data(updatedData);
                console.log(nineIron75Data);
            }
            else if (clubSelected === '9 Iron' && selectedPower === 50) {
                updatedArray = [{ distance, key: nineIron50Data.length + 1 }, ...nineIron50Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setNineIron50Data(updatedData);
                console.log(nineIron50Data);
            }

            // Wedges
            else if (clubSelected === 'PW' && selectedPower === 100) {
                updatedArray = [{ distance, key: pWedge100Data.length + 1 }, ...pWedge100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setPWedge100Data(updatedData);
                console.log(pWedge100Data);
            }
            else if (clubSelected === 'PW' && selectedPower === 75) {
                updatedArray = [{ distance, key: pWedge75Data.length + 1 }, ...pWedge75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setPWedge75Data(updatedData);
                console.log(pWedge75Data);
            }
            else if (clubSelected === 'PW' && selectedPower === 50) {
                updatedArray = [{ distance, key: pWedge50Data.length + 1 }, ...pWedge50Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setPWedge50Data(updatedData);
                console.log(pWedge50Data);
            }
            else if (clubSelected === 'PW' && selectedPower === 25) {
                updatedArray = [{ distance, key: pWedge25Data.length + 1 }, ...pWedge25Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setPWedge25Data(updatedData);
                console.log(pWedge25Data);
            }
            else if (clubSelected === '48 Wedge' && selectedPower === 100) {
                updatedArray = [{ distance, key: forty8Wedge100Data.length + 1 }, ...forty8Wedge100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setForty8Wedge100Data(updatedData);
                console.log(forty8Wedge100Data);
            }
            else if (clubSelected === '48 Wedge' && selectedPower === 75) {
                updatedArray = [{ distance, key: forty8Wedge75Data.length + 1 }, ...forty8Wedge75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setForty8Wedge75Data(updatedData);
                console.log(forty8Wedge75Data);
            }
            else if (clubSelected === '48 Wedge' && selectedPower === 50) {
                updatedArray = [{ distance, key: forty8Wedge50Data.length + 1 }, ...forty8Wedge50Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setForty8Wedge50Data(updatedData);
                console.log(forty8Wedge50Data);
            }
            else if (clubSelected === '48 Wedge' && selectedPower === 25) {
                updatedArray = [{ distance, key: forty8Wedge25Data.length + 1 }, ...forty8Wedge25Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setForty8Wedge25Data(updatedData);
                console.log(forty8Wedge25Data);
            }
            else if (clubSelected === '50 Wedge' && selectedPower === 100) {
                updatedArray = [{ distance, key: fiftyWedge100Data.length + 1 }, ...fiftyWedge100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFiftyWedge100Data(updatedData);
                console.log(fiftyWedge100Data);
            }
            else if (clubSelected === '50 Wedge' && selectedPower === 75) {
                updatedArray = [{ distance, key: fiftyWedge75Data.length + 1 }, ...fiftyWedge75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFiftyWedge75Data(updatedData);
                console.log(fiftyWedge75Data);
            }
            else if (clubSelected === '50 Wedge' && selectedPower === 50) {
                updatedArray = [{ distance, key: fiftyWedge50Data.length + 1 }, ...fiftyWedge50Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFiftyWedge50Data(updatedData);
                console.log(fiftyWedge50Data);
            }
            else if (clubSelected === '50 Wedge' && selectedPower === 25) {
                updatedArray = [{ distance, key: fiftyWedge25Data.length + 1 }, ...fiftyWedge25Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFiftyWedge25Data(updatedData);
                console.log(fiftyWedge25Data);
            }
            else if (clubSelected === '52 Wedge' && selectedPower === 100) {
                updatedArray = [{ distance, key: fifty2Wedge100Data.length + 1 }, ...fifty2Wedge100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFifty2Wedge100Data(updatedData);
                console.log(fifty2Wedge100Data);
            }
            else if (clubSelected === '52 Wedge' && selectedPower === 75) {
                updatedArray = [{ distance, key: fifty2Wedge75Data.length + 1 }, ...fifty2Wedge75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFifty2Wedge75Data(updatedData);
                console.log(fifty2Wedge75Data);
            }
            else if (clubSelected === '52 Wedge' && selectedPower === 50) {
                updatedArray = [{ distance, key: fifty2Wedge50Data.length + 1 }, ...fifty2Wedge50Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFifty2Wedge50Data(updatedData);
                console.log(fifty2Wedge50Data);
            }
            else if (clubSelected === '52 Wedge' && selectedPower === 25) {
                updatedArray = [{ distance, key: fifty2Wedge25Data.length + 1 }, ...fifty2Wedge25Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFifty2Wedge25Data(updatedData);
                console.log(fifty2Wedge25Data);
            }
            else if (clubSelected === '54 Wedge' && selectedPower === 100) {
                updatedArray = [{ distance, key: fifty4Wedge100Data.length + 1 }, ...fifty4Wedge100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFifty4Wedge100Data(updatedData);
                console.log(fifty4Wedge100Data);
            }
            else if (clubSelected === '54 Wedge' && selectedPower === 75) {
                updatedArray = [{ distance, key: fifty4Wedge75Data.length + 1 }, ...fifty4Wedge75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFifty4Wedge75Data(updatedData);
                console.log(fifty4Wedge75Data);
            }
            else if (clubSelected === '54 Wedge' && selectedPower === 50) {
                updatedArray = [{ distance, key: fifty4Wedge50Data.length + 1 }, ...fifty4Wedge50Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFifty4Wedge50Data(updatedData);
                console.log(fifty4Wedge50Data);
            }
            else if (clubSelected === '54 Wedge' && selectedPower === 25) {
                updatedArray = [{ distance, key: fifty4Wedge25Data.length + 1 }, ...fifty4Wedge25Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFifty4Wedge25Data(updatedData);
                console.log(fifty4Wedge25Data);
            }
            else if (clubSelected === '56 Wedge' && selectedPower === 100) {
                updatedArray = [{ distance, key: fifty6Wedge100Data.length + 1 }, ...fifty6Wedge100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFifty6Wedge100Data(updatedData);
                console.log(fifty6Wedge100Data);
            }
            else if (clubSelected === '56 Wedge' && selectedPower === 75) {
                updatedArray = [{ distance, key: fifty6Wedge75Data.length + 1 }, ...fifty6Wedge75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFifty6Wedge75Data(updatedData);
                console.log(fifty6Wedge75Data);
            }
            else if (clubSelected === '56 Wedge' && selectedPower === 50) {
                updatedArray = [{ distance, key: fifty6Wedge50Data.length + 1 }, ...fifty6Wedge50Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFifty6Wedge50Data(updatedData);
                console.log(fifty6Wedge50Data);
            }
            else if (clubSelected === '56 Wedge' && selectedPower === 25) {
                updatedArray = [{ distance, key: fifty6Wedge25Data.length + 1 }, ...fifty6Wedge25Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFifty6Wedge25Data(updatedData);
                console.log(fifty6Wedge25Data);
            }
            else if (clubSelected === '58 Wedge' && selectedPower === 100) {
                updatedArray = [{ distance, key: fifty8Wedge100Data.length + 1 }, ...fifty8Wedge100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFifty8Wedge100Data(updatedData);
                console.log(fifty8Wedge100Data);
            }
            else if (clubSelected === '58 Wedge' && selectedPower === 75) {
                updatedArray = [{ distance, key: fifty8Wedge75Data.length + 1 }, ...fifty8Wedge75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFifty8Wedge75Data(updatedData);
                console.log(fifty8Wedge75Data);
            }
            else if (clubSelected === '58 Wedge' && selectedPower === 50) {
                updatedArray = [{ distance, key: fifty8Wedge50Data.length + 1 }, ...fifty8Wedge50Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFifty8Wedge50Data(updatedData);
                console.log(fifty8Wedge50Data);
            }
            else if (clubSelected === '58 Wedge' && selectedPower === 25) {
                updatedArray = [{ distance, key: fifty8Wedge25Data.length + 1 }, ...fifty8Wedge25Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setFifty8Wedge25Data(updatedData);
                console.log(fifty8Wedge25Data);
            }
            else if (clubSelected === '60 Wedge' && selectedPower === 100) {
                updatedArray = [{ distance, key: sixtyWedge100Data.length + 1 }, ...sixtyWedge100Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setSixtyWedge100Data(updatedData);
                console.log(sixtyWedge100Data);
            }
            else if (clubSelected === '60 Wedge' && selectedPower === 75) {
                updatedArray = [{ distance, key: sixtyWedge75Data.length + 1 }, ...sixtyWedge75Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setSixtyWedge75Data(updatedData);
                console.log(sixtyWedge75Data);
            }
            else if (clubSelected === '60 Wedge' && selectedPower === 50) {
                updatedArray = [{ distance, key: sixtyWedge50Data.length + 1 }, ...sixtyWedge50Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setSixtyWedge50Data(updatedData);
                console.log(sixtyWedge50Data);
            }
            else if (clubSelected === '60 Wedge' && selectedPower === 25) {
                updatedArray = [{ distance, key: sixtyWedge25Data.length + 1 }, ...sixtyWedge25Data];
                updatedData = updatedArray.map((item, index) => ({ ...item, key: index + 1 }));
                setSixtyWedge25Data(updatedData);
                console.log(sixtyWedge25Data);
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
            console.log(driver75Data)
            console.log(driver100Data)
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

    //rework 
    // function renderDriverData({ item }) {
    //     return (
    //         <TouchableOpacity style={{
    //             padding: 10,
    //             // justifyContent: 'center',
    //             // alignItems: 'center',
    //             // flex: 1,
    //             // borderRadius: 5,
    //             // borderWidth: 1,
    //             // borderColor: '#707070',
    //             // backgroundColor: 'red',
    //         }}>
    //             <View style={{}}>
    //                 <Text style={[mainStyles.header3, {
    //                     // // backgroundColor: 'green',
    //                     // lineHeight: 28,
    //                     borderRadius: 5,
    //                     borderWidth: 1,
    //                     borderColor: '#707070',
    //                     paddingVertical: 10,
    //                     paddingHorizontal: 10,
    //                 }]}>
    //                     {/* {item} */}

    //                     {item.distance}{item.key}
    //                 </Text>
    //             </View>
    //         </TouchableOpacity>
    //     );
    // }
    // const [arrayUsed, setArrayUsed] = ShotData(clubSelected, selectedPower, selectedLabel);

    function removeItem(key) {
        const updatedData = shotArray.filter(item => item.key !== key);
        setShotArray(updatedData);
    }
    // const handleDeleteButton = (value) => {
    //     setSelectedPower(value);
    //     const selected = shotTypeList().find(item => item.value === value);
    //     setSelectedLabel(selected ? selected.label : '');
    // };
    function renderDriverData({ item }) {

        return (
            <TouchableOpacity style={{
                padding: 10,
                borderBottomWidth: .25,
                borderBottomColor: '#707070',
            }}>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={{ flex: 3, flexDirection: 'row', alignItems: 'center', }}>
                        <Text style={mainStyles.header2}>{item.key}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                        <Text style={[mainStyles.header1, {
                        }]}>
                            {item.distance}
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                console.log(`Array: ${shotArray} | Club Selected: ${clubSelected}`);
                            }}
                        // onPress={() => removeItem(item.key)}
                        >
                            <MaterialIcons name="highlight-remove" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

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
                                                onValueChange={handleValueChange}
                                                items={shotTypeDropdownList}
                                                value={selectedPower}
                                            />
                                        </View>
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
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, }}>
                                <View style={{ flex: 3 }}>
                                    <Text style={[mainStyles.smallText, { fontSize: 12 }]}>Shot Number</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={[mainStyles.smallText, { fontSize: 12 }]}>Distance</Text>
                                    <Text style={[mainStyles.smallText, { fontSize: 12 }]}>Edit</Text>
                                </View>
                            </View>
                            <FlatList
                                data={ShotData(clubSelected, selectedPower)}
                                renderItem={renderDriverData}
                                // keyExtractor={(item, index) => index.toString()}
                                keyExtractor={(item, index) => index}
                                // horizontal={true}
                                numColumns={1}
                                // numColumns={4}
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