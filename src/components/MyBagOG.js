// Changing driver100 to driver100Data 6.3.23
import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    Span,
    ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
// import { ButtonGroup, } from '@ui-kitten/components';
//Styles
import mainStyles from '../styles/mainStyles';

// Data
import { clubsInMyBag2 } from '../data/clubsInMyBag';
// import {
//     shotMeanFunction100,
//     shotMean100,
//     shotMean75,
//     shotMean50,
//     shotMean25,
//     setShotMean100,
//     setShotMean75,
//     setShotMean50,
//     setShotMean25,
// } from '../data/Formulas';


const MyBagScreen = ({ navigation,
    // Calculations
    calculateStats, shotMeanFunction100, shotMeanFunction75, shotMean100, shotMean75,
    // Old Calc
    shotWeightedAverage, shotWeightedAverage1, shotWeightedAverage2,
    shotTotalCounter100,
    // New Woods
    //Driver
    driver100Data, driver75Data, setDriver100Data, setDriver75Data,
    //Three Wood
    threeWood100Data, threeWood75Data, setThreeWood100Data, setThreeWood75Data,
    //Five Wood
    fiveWood100Data, fiveWood75Data, setFiveWood100Data, setFiveWood75Data,
    // Seven Wood
    sevenWood100Data, sevenWood75Data, setSevenWood100Data, setSevenWood75Data,
    // Woods
    driver100, driver75, threeWood100, threeWood75, fiveWood100, fiveWood75, sevenWood100, sevenWood75,
    twoHybrid100, twoHybrid75, threeHybrid100, threeHybrid75, fourHybrid100, fourHybrid75,
    fiveHybrid100, fiveHybrid75, sixHybrid100, sixHybrid75, sevenHybrid100, sevenHybrid75,
    // Irons
    twoIron100, twoIron75, twoIron50,
    threeIron100, threeIron75, threeIron50,
    fourIron100, fourIron75, fourIron50,
    fiveIron100, fiveIron75, fiveIron50,
    sixIron100, sixIron75, sixIron50,
    sevenIron100, sevenIron75, sevenIron50,
    eightIron100, eightIron75, eightIron50,
    nineIron100, nineIron75, nineIron50,
    // Wedges
    pWedge100, pWedge75, pWedge50, pWedge25,
    forty8Wedge100, forty8Wedge75, forty8Wedge50, forty8Wedge25,
    fiftyWedge100, fiftyWedge75, fiftyWedge50, fiftyWedge25,
    fifty2Wedge100, fifty2Wedge75, fifty2Wedge50, fifty2Wedge25,
    fifty4Wedge100, fifty4Wedge75, fifty4Wedge50, fifty4Wedge25,
    fifty6Wedge100, fifty6Wedge75, fifty6Wedge50, fifty6Wedge25,
    fifty8Wedge100, fifty8Wedge75, fifty8Wedge50, fifty8Wedge25,
    sixtyWedge100, sixtyWedge75, sixtyWedge50, sixtyWedge25,
    // Club Averages
    driver100Average,

}) => {
    const shotWeightedAverageREAL = (arrayUsed) => {
        if (arrayUsed.length === 0) {
            return 0; // Return 0 if the array is empty to avoid division by zero
        }

        const sum = arrayUsed.reduce((acc, value) => acc + value, 0);
        const average = sum / arrayUsed.length;

        return average;
    };

    // const shotTotalCounter = (arrayPlaceholder) => {
    //     const shotCounter = (arrayPlaceholder.length)
    //     return shotCounter;
    // };

    // Open Expanded View
    const [expandedItems, setExpandedItems] = useState({});
    const openExpandedShotView = (item) => {
        // Toggle the openExpandedView state for the specific item
        setExpandedItems((prevExpandedItems) => {
            const updatedExpandedItems = { ...prevExpandedItems };
            updatedExpandedItems[item.id] = !updatedExpandedItems[item.id];
            return updatedExpandedItems;
        });
    };
    // const selectedShotArray = driver100;

    const minNumOfShots = 1
    // const average100 = 0;
    // const average75 = 0;
    const histAve100 = 0;
    const histAve75 = 0;
    const renderClubItem = ({ item }) => {

        shotFunction100 = () => {
            // Woods
            if (item.value === 'driver' && driver100Data.length > 5) {
                // return shotWeightedAverage(driver100Data);
                return shotMeanFunction100(driver100Data);
            }
            else if (item.value === '3wood' && threeWood100Data.length > minNumOfShots) {
                // return shotWeightedAverage(threeWood100Data);
                return shotMeanFunction100(threeWood100Data);
            }
            else if (item.value === '5wood' && fiveWood100Data.length > minNumOfShots) {
                // return shotWeightedAverage(fiveWood100Data);
                return shotMeanFunction100(fiveWood100Data);
            }
            else if (item.value === '7wood' && sevenWood100Data.length > minNumOfShots) {
                // return shotWeightedAverage(sevenWood100Data);
                return shotMeanFunction100(sevenWood100Data);
            }
            // Hybrids
            else if (item.value === '2hybrid' && twoHybrid100.length > minNumOfShots) {
                // return shotWeightedAverage(twoHybrid100);
                return shotMeanFunction100(twoHybrid100);
            }
            else if (item.value === '3hybrid' && threeHybrid100.length > minNumOfShots) {
                return shotWeightedAverage(threeHybrid100);
            }
            else if (item.value === '4hybrid' && fourHybrid100.length > minNumOfShots) {
                return shotWeightedAverage(fourHybrid100);
            }
            else if (item.value === '5hybrid' && fiveHybrid100.length > minNumOfShots) {
                return shotWeightedAverage(fiveHybrid100);
            }
            else if (item.value === '6hybrid' && sixHybrid100.length > minNumOfShots) {
                return shotWeightedAverage(sixHybrid100);
            }
            else if (item.value === '7hybrid' && sevenHybrid100.length > minNumOfShots) {
                return shotWeightedAverage(sevenHybrid100);
            }
            // Irons
            else if (item.value === '2Iron' && twoIron100.length > minNumOfShots) {
                return shotWeightedAverage(twoIron100);
            }
            else if (item.value === '3Iron' && threeIron100.length > minNumOfShots) {
                return shotWeightedAverage(threeIron100);
            }
            else if (item.value === '4Iron' && fourIron100.length > minNumOfShots) {
                return shotWeightedAverage(fourIron100);
            }
            else if (item.value === '5Iron' && fiveIron100.length > minNumOfShots) {
                return shotWeightedAverage(fiveIron100);
            }
            else if (item.value === '6Iron' && sixIron100.length > minNumOfShots) {
                return shotWeightedAverage(sixIron100);
            }
            else if (item.value === '7Iron' && sevenIron100.length > minNumOfShots) {
                return shotWeightedAverage(sevenIron100);
            }
            else if (item.value === '8Iron' && eightIron100.length > minNumOfShots) {
                return shotWeightedAverage(eightIron100);
            }
            else if (item.value === '9Iron' && nineIron100.length > minNumOfShots) {
                return shotWeightedAverage(nineIron100);
            }
            // Wedge 
            else if (item.value === 'Pwedge' && pWedge100.length > minNumOfShots) {
                return shotWeightedAverage(pWedge100);
            }
            else if (item.value === '48wedge' && forty8Wedge100.length > minNumOfShots) {
                return shotWeightedAverage(forty8Wedge100);
            }
            else if (item.value === '50wedge' && fiftyWedge100.length > minNumOfShots) {
                return shotWeightedAverage(fiftyWedge100);
            }
            else if (item.value === '52wedge' && fifty2Wedge100.length > minNumOfShots) {
                return shotWeightedAverage(fifty2Wedge100);
            }
            else if (item.value === '54wedge' && fifty4Wedge100.length > minNumOfShots) {
                return shotWeightedAverage(fifty4Wedge100);
            }
            else if (item.value === '56wedge' && fifty6Wedge100.length > minNumOfShots) {
                return shotWeightedAverage(fifty6Wedge100);
            }
            else if (item.value === '58wedge' && fifty8Wedge100.length > minNumOfShots) {
                return shotWeightedAverage(fifty8Wedge100)
            }
            else if (item.value === '60wedge' && sixtyWedge100.length > minNumOfShots) {
                return shotWeightedAverage(sixtyWedge100)
            }
            // null
            else {
                return <Text style={[mainStyles.mdText, { fontWeight: 400, fontSize: 11, }]}>not enough data</Text>
            }
        }
        shotFunction75 = () => {
            // Driver
            if (item.value === 'driver' && driver75Data.length > 5) {
                // return shotWeightedAverage(driver75Data);
                return shotMeanFunction75(driver75Data);
            }
            else if (item.value === '3wood' && threeWood75Data.length > 0) {
                // return shotWeightedAverage(threeWood75Data);
                return shotMeanFunction75(threeWood75Data);
            }
            else if (item.value === '5wood' && fiveWood75Data.length > 0) {
                // return shotWeightedAverage(fiveWood75Data);
                return shotMeanFunction75(fiveWood75Data);
            }
            else if (item.value === '7wood' && sevenWood75Data.length > 0) {
                // return shotWeightedAverage(sevenWood75Data);
                return shotMeanFunction75(sevenWood75Data);
            }
            // Hybrids
            else if (item.value === '2hybrid' && twoHybrid75.length > 0) {
                const shotAverage75 = twoHybrid75[0]
                return shotAverage75
            }
            else if (item.value === '3hybrid' && threeHybrid75.length > 0) {
                const shotAverage75 = threeHybrid75[0]
                return shotAverage75
            }
            else if (item.value === '4hybrid' && fourHybrid75.length > 0) {
                const shotAverage100 = fourHybrid75[0]
                return shotAverage100
            }
            else if (item.value === '5hybrid' && fiveHybrid75.length > 0) {
                const shotAverage100 = fiveHybrid75[0]
                return shotAverage100
            }
            else if (item.value === '6hybrid' && sixHybrid75.length > 0) {
                const shotAverage100 = sixHybrid75[0]
                return shotAverage100
            }
            else if (item.value === '7hybrid' && sevenHybrid75.length > 0) {
                const shotAverage100 = sevenHybrid75[0]
                return shotAverage100
            }
            // Irons
            else if (item.value === '2Iron' && twoIron75.length > 0) {
                const shotAverage100 = twoIron75[0]
                return shotAverage100
            }
            else if (item.value === '3Iron' && threeIron75.length > 0) {
                const shotAverage100 = threeIron75[0]
                return shotAverage100
            }
            else if (item.value === '4Iron' && fourIron75.length > 0) {
                const shotAverage100 = fourIron75[0]
                return shotAverage100
            }
            else if (item.value === '5Iron' && fiveIron75.length > 0) {
                const shotAverage100 = fiveIron75[0]
                return shotAverage100
            }
            else if (item.value === '6Iron' && sixIron75.length > 0) {
                const shotAverage100 = sixIron75[0]
                return shotAverage100
            }
            else if (item.value === '7Iron' && sevenIron75.length > 0) {
                const shotAverage100 = sevenIron75[0]
                return shotAverage100
            }
            else if (item.value === '8Iron' && eightIron75.length > 0) {
                const shotAverage100 = eightIron75[0]
                return shotAverage100
            }
            else if (item.value === '9Iron' && nineIron75.length > 0) {
                const shotAverage100 = nineIron75[0]
                return shotAverage100
            }
            // Wedge 
            else if (item.value === 'Pwedge' && pWedge75.length > 0) {
                const shotAverage100 = pWedge75[0]
                return shotAverage100
            }
            else if (item.value === '48wedge' && forty8Wedge75.length > 0) {
                const shotAverage100 = forty8Wedge75[0]
                return shotAverage100
            }
            else if (item.value === '50wedge' && fiftyWedge75.length > 0) {
                const shotAverage100 = fiftyWedge75[0]
                return shotAverage100
            }
            else if (item.value === '52wedge' && fifty2Wedge75.length > 0) {
                const shotAverage100 = fifty2Wedge75[0]
                return shotAverage100
            }
            else if (item.value === '54wedge' && fifty4Wedge75.length > 0) {
                const shotAverage100 = fifty4Wedge75[0]
                return shotAverage100
            }
            else if (item.value === '56wedge' && fifty6Wedge75.length > 0) {
                const shotAverage100 = fifty6Wedge75[0]
                return shotAverage100
            }
            else if (item.value === '58wedge' && fifty8Wedge75.length > 0) {
                const shotAverage100 = fifty8Wedge75[0]
                return shotAverage100
            }
            else if (item.value === '60wedge' && sixtyWedge75.length > 0) {
                const shotAverage100 = sixtyWedge75[0]
                return shotAverage100
            }
            // Else
            else {
                return <Text style={[mainStyles.mdText, { fontWeight: 400, fontSize: 11, }]}>not enough data</Text>
            }
        }
        shotFunction50 = () => {
            // Irons
            if (item.value === '2Iron' && twoIron50.length > 0) {
                const shotAverage100 = twoIron50[0]
                return shotAverage100
            }
            else if (item.value === '3Iron' && threeIron50.length > 0) {
                const shotAverage100 = threeIron50[0]
                return shotAverage100
            }
            else if (item.value === '4Iron' && fourIron50.length > 0) {
                const shotAverage100 = fourIron50[0]
                return shotAverage100
            }
            else if (item.value === '5Iron' && fiveIron50.length > 0) {
                const shotAverage100 = fiveIron50[0]
                return shotAverage100
            }
            else if (item.value === '6Iron' && sixIron50.length > 0) {
                const shotAverage100 = sixIron50[0]
                return shotAverage100
            }
            else if (item.value === '7Iron' && sevenIron50.length > 0) {
                const shotAverage100 = sevenIron50[0]
                return shotAverage100
            }
            else if (item.value === '8Iron' && eightIron50.length > 0) {
                const shotAverage100 = eightIron50[0]
                return shotAverage100
            }
            else if (item.value === '9Iron' && nineIron50.length > 0) {
                const shotAverage100 = nineIron50[0]
                return shotAverage100
            }
            // Wedge 
            else if (item.value === 'Pwedge' && pWedge50.length > 0) {
                const shotAverage100 = pWedge50[0]
                return shotAverage100
            }
            else if (item.value === '48wedge' && forty8Wedge50.length > 0) {
                const shotAverage100 = forty8Wedge50[0]
                return shotAverage100
            }
            else if (item.value === '50wedge' && fiftyWedge50.length > 0) {
                const shotAverage100 = fiftyWedge50[0]
                return shotAverage100
            }
            else if (item.value === '52wedge' && fifty2Wedge50.length > 0) {
                const shotAverage100 = fifty2Wedge50[0]
                return shotAverage100
            }
            else if (item.value === '54wedge' && fifty4Wedge50.length > 0) {
                const shotAverage100 = fifty4Wedge50[0]
                return shotAverage100
            }
            else if (item.value === '56wedge' && fifty6Wedge50.length > 0) {
                const shotAverage100 = fifty6Wedge50[0]
                return shotAverage100
            }
            else if (item.value === '58wedge' && fifty8Wedge50.length > 0) {
                const shotAverage100 = fifty8Wedge50[0]
                return shotAverage100
            }
            else if (item.value === '60wedge' && sixtyWedge50.length > 0) {
                const shotAverage100 = sixtyWedge50[0]
                return shotAverage100
            }
            // Else
            else {
                return <Text style={[mainStyles.mdText, { fontWeight: 400, fontSize: 11, }]}>not enough data</Text>
            }
        }

        shotFunction25 = () => {
            // Wedge 
            if (item.value === 'Pwedge' && pWedge25.length > 0) {
                const shotAverage100 = pWedge25[0]
                return shotAverage100
            }
            else if (item.value === '48wedge' && forty8Wedge25.length > 0) {
                const shotAverage100 = forty8Wedge25[0]
                return shotAverage100
            }
            else if (item.value === '50wedge' && fiftyWedge25.length > 0) {
                const shotAverage100 = fiftyWedge25[0]
                return shotAverage100
            }
            else if (item.value === '52wedge' && fifty2Wedge25.length > 0) {
                const shotAverage100 = fifty2Wedge25[0]
                return shotAverage100
            }
            else if (item.value === '54wedge' && fifty4Wedge25.length > 0) {
                const shotAverage100 = fifty4Wedge25[0]
                return shotAverage100
            }
            else if (item.value === '56wedge' && fifty6Wedge25.length > 0) {
                const shotAverage100 = fifty6Wedge25[0]
                return shotAverage100
            }
            else if (item.value === '58wedge' && fifty8Wedge25.length > 0) {
                const shotAverage100 = fifty8Wedge25[0]
                return shotAverage100
            }
            else if (item.value === '60wedge' && sixtyWedge25.length > 0) {
                const shotAverage100 = sixtyWedge25[0]
                return shotAverage100
            }
            // Else
            else {
                return <Text style={[mainStyles.mdText, { fontWeight: 400, fontSize: 11, }]}>not enough data</Text>
            }
        }
        const average100 = shotFunction100();
        const average75 = shotFunction75();
        const average50 = shotFunction50();
        const average25 = shotFunction25();

        // Full Shot
        const fullShotLabelFunction = () => {
            if (item.clubType === 'wood') {
                // const fullShot = "100%"
                const fullShot = "Full Swing"
                return fullShot
            } else if (item.clubType === "hybrid") {
                const fullShot = "Full Swing"
                // const fullShot = "Full Shot"
                return fullShot
            } else if (item.clubType === "iron" || item.clubType === "wedge") {
                const fullShot = "Full Swing"
                // const fullShot = "Full Shot"
                return fullShot
            }
            else {
                return "Full Shot"
            }
        }
        // 3/4 Swing
        const seventyFiveShotLabelFunction = () => {
            if (item.value === 'driver') {
                const fullShot = "Fairway Finder"
                return fullShot
            }
            else if (item.clubType === 'wood') {
                const fullShot = "Easy Swing"
                return fullShot
            }
            else if (item.clubType === "hybrid") {
                const fullShot = "Easy Swing"
                return fullShot
            }
            else if (item.clubType === "iron") {
                const fullShot = "3/4 Swing"
                return fullShot
            }
            else if (item.clubType === "wedge") {
                const fullShot = "3/4 Swing"
                return fullShot
            }
            else {
                return "3/4"
            }
        }
        // 1/2 Swing
        const fiftyShotLabelFunction = () => {
            if (item.clubType === 'iron') {
                const fullShot = "Punch Shot"
                return fullShot
            }
            else if (item.clubType === 'wedge') {
                const fullShot = "Half Swing"
                return fullShot
            }
            else {
                return "Half Swing"
            }
        }
        // 1/4 Swing
        const twentyFiveShotLabelFunction = () => {
            if (item.clubType === 'wedge') {
                const fullShot = "Quarter Swing"
                return fullShot
            } else {
                return "1/4 Swing"
            }
        }
        const fullShotLabel = fullShotLabelFunction();
        const seventyFiveShotLabel = seventyFiveShotLabelFunction();
        const fiftyShotLabel = fiftyShotLabelFunction();
        const twentyFiveShotLabel = twentyFiveShotLabelFunction();

        if (item.clubType === 'wood' || item.clubType === 'hybrid') {
            return (
                // <Text key={item.id}>{item.club}</Text>
                <TouchableOpacity onPress={() => {
                    console.log(`Pressed ${item.club} & ${item.value}`);
                    openExpandedShotView(item);
                }
                }
                >
                    <View style={[mainStyles.listRow, { padding: 0 }]}>
                        <View style={{ flex: 1, justifyContent: 'center', paddingVertical: 5, backgroundColor: "#d6d6d6", borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                            <View style={{ padding: 10 }}>
                                <Text style={[mainStyles.header1, { color: "blue" }]} key={item.id}>{item.club}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: 'stretch', backgroundColor: '#eee', borderRadius: 10, padding: 10, }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, paddingTop: 5, }}>
                                <Text style={[mainStyles.mdText, { color: '#4d4d4d', }]}>Shot Type</Text>
                                <Text style={[mainStyles.mdText, { color: '#4d4d4d', paddingHorizontal: 5, }]}>Avg. Distance</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'flex-start', paddingHorizontal: 5, paddingBottom: 10, }}>
                                {/* 100% yardage */}
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: .75, borderBottomColor: "gray", }}>
                                    <View style={{ flex: 3, paddingBottom: 3, }}>
                                        <Text style={[mainStyles.header3, { paddingVertical: 2, fontWeight: 800, }]}>{fullShotLabel}</Text>
                                        {/* <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{fullShotLabel}</Text> */}
                                    </View>
                                    <View style={{ flex: 3, alignItems: 'flex-end', paddingBottom: 5, }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'flex-end', padding: 5, borderRadius: 5, paddingHorizontal: 10, }}>
                                            <Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>{shotMean100}</Text>
                                            {/* <Text style={[mainStyles.header4, { color: '#4d4d4d', paddingLeft: 3, }]}>yds</Text> */}
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: .75, borderBottomColor: "gray", }}>
                                    <View style={{ flex: 3, paddingBottom: 3, }}>
                                        <Text style={[mainStyles.header3, { paddingVertical: 2, fontWeight: 800, }]}>{seventyFiveShotLabel}</Text>
                                        {/* <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{fullShotLabel}</Text> */}
                                    </View>
                                    <View style={{ flex: 3, alignItems: 'flex-end', paddingBottom: 5, }}>
                                        <View style={{ alignItems: 'center', padding: 5, borderRadius: 5, paddingHorizontal: 10, }}>
                                            <Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>{shotMean75}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {expandedItems[item.id] && (
                            // {openExpandedView ?
                            //     (

                            <View style={{ paddingVertical: 10, }}>
                                <View style={{ backgroundColor: '#eee', paddingHorizontal: 10, }}>
                                    <Text>Counter 100</Text>
                                    <Text>0</Text>
                                </View>
                                <View style={{ backgroundColor: '#eee', paddingHorizontal: 10, }}>
                                    <Text>Counter 75</Text>
                                    <Text>0</Text>
                                </View>
                            </View>
                        )
                            //  : null
                        }
                    </View>
                </TouchableOpacity>
            );
        } else if ((item.clubType === 'iron')) {
            return (
                <TouchableOpacity onPress={() => {
                    console.log(`Pressed ${item.club} & ${item.value}`)
                    openExpandedShotView(item);
                }
                }
                >
                    <View style={[mainStyles.listRow, { padding: 0 }]}>
                        <View style={{ flex: 1, justifyContent: 'center', paddingVertical: 5, backgroundColor: "#d6d6d6", borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                            <View style={{ padding: 10 }}>
                                <Text style={[mainStyles.header1, { color: "blue" }]} key={item.id}>{item.club}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: 'stretch', backgroundColor: '#eee', borderRadius: 10, padding: 10, }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, paddingTop: 5, }}>
                                <Text style={[mainStyles.mdText, { color: '#4d4d4d', }]}>Shot Type</Text>
                                <Text style={[mainStyles.mdText, { color: '#4d4d4d', paddingHorizontal: 5, }]}>Distance</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'flex-start', paddingHorizontal: 5, paddingBottom: 10, }}>
                                {/* 100% yardage */}
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: .75, borderBottomColor: "gray", }}>
                                    <View style={{ flex: 3, paddingBottom: 3, }}>
                                        <Text style={[mainStyles.header3, { paddingVertical: 2, fontWeight: 800, }]}>{fullShotLabel}</Text>
                                        {/* <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{fullShotLabel}</Text> */}
                                    </View>
                                    <View style={{ flex: 3, alignItems: 'flex-end', paddingBottom: 5, }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'flex-end', padding: 5, borderRadius: 5, paddingHorizontal: 10, }}>
                                            <Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>{average100}</Text>
                                            {/* <Text style={[mainStyles.header4, { color: '#4d4d4d', paddingLeft: 3, }]}>yds</Text> */}
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: .75, borderBottomColor: "gray", }}>
                                    <View style={{ flex: 3, paddingBottom: 3, }}>
                                        <Text style={[mainStyles.header3, { paddingVertical: 2, fontWeight: 800, }]}>{seventyFiveShotLabel}</Text>
                                        {/* <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{fullShotLabel}</Text> */}
                                    </View>
                                    <View style={{ flex: 3, alignItems: 'flex-end', paddingBottom: 5, }}>
                                        <View style={{ alignItems: 'center', padding: 5, borderRadius: 5, paddingHorizontal: 10, }}>
                                            <Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>{average75}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: .75, borderBottomColor: "gray", }}>
                                    <View style={{ flex: 3, paddingBottom: 3, }}>
                                        <Text style={[mainStyles.header3, { paddingVertical: 2, fontWeight: 800, }]}>{fiftyShotLabel}</Text>
                                        {/* <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{fullShotLabel}</Text> */}
                                    </View>
                                    <View style={{ flex: 3, alignItems: 'flex-end', paddingBottom: 5, }}>
                                        <View style={{ alignItems: 'center', padding: 5, borderRadius: 5, paddingHorizontal: 10, }}>
                                            <Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>{average50}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {expandedItems[item.id] && (
                            // {openExpandedView ?
                            //     (

                            <View style={{}}>
                                <View style={{ backgroundColor: '#eee', paddingHorizontal: 10, }}>
                                    <Text>Testing</Text>
                                </View>
                            </View>
                        )
                            //  : null
                        }
                    </View>
                </TouchableOpacity>
            )
        } else if ((item.clubType === 'wedge')) {
            return (                // <Text key={item.id}>{item.club}</Text>
                <TouchableOpacity onPress={() => {
                    console.log(`Pressed ${item.club} & ${item.value}`)
                    openExpandedShotView(item);
                }
                }
                >
                    <View style={[mainStyles.listRow, { padding: 0 }]}>
                        <View style={{ flex: 1, justifyContent: 'center', paddingVertical: 5, backgroundColor: "#d6d6d6", borderTopRightRadius: 10, borderTopLeftRadius: 10, }}>
                            <View style={{ padding: 10 }}>
                                <Text style={[mainStyles.header1, { color: "blue" }]} key={item.id}>{item.club}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: 'stretch', backgroundColor: '#eee', borderRadius: 10, padding: 10, }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5, paddingTop: 5, }}>
                                <Text style={[mainStyles.mdText, { color: '#4d4d4d', }]}>Shot Type</Text>
                                <Text style={[mainStyles.mdText, { color: '#4d4d4d', paddingHorizontal: 5, }]}>Distance</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'flex-start', paddingHorizontal: 5, paddingBottom: 10, }}>
                                {/* 100% yardage */}
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: .75, borderBottomColor: "gray", }}>
                                    <View style={{ flex: 3, paddingBottom: 3, }}>
                                        <Text style={[mainStyles.header3, { paddingVertical: 2, fontWeight: 800, }]}>{fullShotLabel}</Text>
                                        {/* <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{fullShotLabel}</Text> */}
                                    </View>
                                    <View style={{ flex: 3, alignItems: 'flex-end', paddingBottom: 5, }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'flex-end', padding: 5, borderRadius: 5, paddingHorizontal: 10, }}>
                                            <Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>{average100}</Text>
                                            {/* <Text style={[mainStyles.header4, { color: '#4d4d4d', paddingLeft: 3, }]}>yds</Text> */}
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: .75, borderBottomColor: "gray", }}>
                                    <View style={{ flex: 3, paddingBottom: 3, }}>
                                        <Text style={[mainStyles.header3, { paddingVertical: 2, fontWeight: 800, }]}>{seventyFiveShotLabel}</Text>
                                        {/* <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{fullShotLabel}</Text> */}
                                    </View>
                                    <View style={{ flex: 3, alignItems: 'flex-end', paddingBottom: 5, }}>
                                        <View style={{ alignItems: 'center', padding: 5, borderRadius: 5, paddingHorizontal: 10, }}>
                                            <Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>{average75}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: .75, borderBottomColor: "gray", }}>
                                    <View style={{ flex: 3, paddingBottom: 3, }}>
                                        <Text style={[mainStyles.header3, { paddingVertical: 2, fontWeight: 800, }]}>{fiftyShotLabel}</Text>
                                        {/* <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{fullShotLabel}</Text> */}
                                    </View>
                                    <View style={{ flex: 3, alignItems: 'flex-end', paddingBottom: 5, }}>
                                        <View style={{ alignItems: 'center', padding: 5, borderRadius: 5, paddingHorizontal: 10, }}>
                                            <Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>{average50}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', borderBottomWidth: .75, borderBottomColor: "gray", }}>
                                    <View style={{ flex: 3, paddingBottom: 3, }}>
                                        <Text style={[mainStyles.header3, { paddingVertical: 2, fontWeight: 800, }]}>{twentyFiveShotLabel}</Text>
                                        {/* <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{fullShotLabel}</Text> */}
                                    </View>
                                    <View style={{ flex: 3, alignItems: 'flex-end', paddingBottom: 5, }}>
                                        <View style={{ alignItems: 'center', padding: 5, borderRadius: 5, paddingHorizontal: 10, }}>
                                            <Text style={[mainStyles.header1, { color: '#4d4d4d' }]}>{average25}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {expandedItems[item.id] && (
                            // {openExpandedView ?
                            //     (

                            <View style={{}}>
                                <View style={{ backgroundColor: '#eee', paddingHorizontal: 10, }}>
                                    <Text>Testing</Text>
                                </View>
                            </View>
                        )
                            //  : null
                        }
                    </View>
                </TouchableOpacity>
            );
        } else {
            return null
        }
    };


    return (
        <SafeAreaView style={mainStyles.container}>
            <View style={[mainStyles.screenContainer, { paddingBottom: 150, }]}>
                <Text style={[mainStyles.header1, { alignSelf: "center", paddingBottom: 30, fontSize: 30, }]}>My Bag</Text>
                <View style={{ paddingBottom: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", }}>
                    <Text style={mainStyles.header1}>Clubs in my bag:</Text>
                    <TouchableOpacity
                        // onPress={() => console.log("Edit bag button pressed")}
                        onPress={() => navigation.navigate('ClubSelector', console.log("Go club selector"))}
                        style={{ alignItems: "center" }}
                    >
                        <Text style={mainStyles.smallText}>Edit Bag</Text>
                        <Feather name="edit" size={24} color="black" />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={clubsInMyBag2.filter((item) => item.status === 'active')}
                    renderItem={renderClubItem}
                    keyExtractor={(item) => item.id.toString()}
                    style={{}}
                />
            </View>
        </SafeAreaView>
    );
};

// export const MyBag = () => {
//     return (
//         <View>
//             <Text>My bag</Text>
//         </View>
//     );
// };

export default MyBagScreen;