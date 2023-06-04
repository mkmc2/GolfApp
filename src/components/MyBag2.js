import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Feather } from '@expo/vector-icons';
//Styles
import mainStyles from '../styles/mainStyles';

// Data
import { clubsInMyBag2 } from '../data/clubsInMyBag';
import DriverRowComponent from './clubDataComponents/DriverRowComponent';
import { twoHybrid75 } from '../data/shotData/MyShots';


const MyBagScreen = ({ navigation, driver100, driver75, threeWood100, threeWood75, fiveWood100, fiveWood75, sevenWood100, sevenWood75,
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
    sixtyWedge100, sixtyWedge75, sixtyWedge50, sixtyWedge25
}) => {

    const selectedShotArray = driver100;
    // const average = calculateAverage(driver100);

    const calculateAverage = () => {
        // const selectedShotArray = driver100;
        const sum = selectedShotArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const average = sum / selectedShotArray.length;
        return average;
    };
    function weightedAverage() {
        return (
            ((selectedShotArray[0] * 10) + (selectedShotArray[1] * 10) + (selectedShotArray[2] * 10) + (selectedShotArray[3] * 10) +
                (selectedShotArray[4] * 10) + (selectedShotArray[5] * 10) + (selectedShotArray[6] * 10) + (selectedShotArray[7] * 10) +
                (selectedShotArray[8] * 10) + (selectedShotArray[9] * 10) + (selectedShotArray[10] * 10) +
                (selectedShotArray[11] * 6) + (selectedShotArray[12] * 6) + (selectedShotArray[13] * 6) +
                (selectedShotArray[14] * 6) + (selectedShotArray[15] * 6) + (selectedShotArray[16] * 6) +
                (selectedShotArray[17] * 6) + (selectedShotArray[18] * 6) + (selectedShotArray[19] * 6) + (selectedShotArray[20] * 6)
            ) /
            (10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 10 + 6 + 6 + 6 + 6 + 6 + 6 + 6 + 6 + 6 + 6)
        );
    }


    const renderClubItem = ({ item, distance100, distance75, title100, title75, itemClub, itemId }) => {

        shotFunction100 = () => {
            // Woods
            if (item.value === 'driver' && driver100.length > 0) {
                const shotAverage100 = driver100[0]
                return shotAverage100
            }
            else if (item.value === '3wood' && threeWood100.length > 0) {
                const shotAverage100 = threeWood100[0]
                return shotAverage100
            }
            else if (item.value === '5wood' && fiveWood100.length > 0) {
                const shotAverage100 = fiveWood100[0]
                return shotAverage100
            }
            else if (item.value === '7wood' && sevenWood100.length > 0) {
                const shotAverage100 = sevenWood100[0]
                return shotAverage100
            }
            // Hybrids
            else if (item.value === '2hybrid' && twoHybrid100.length > 0) {
                const shotAverage100 = twoHybrid100[0]
                return shotAverage100
            }
            else if (item.value === '3hybrid' && threeHybrid100.length > 0) {
                const shotAverage100 = threeHybrid100[0]
                return shotAverage100
            }
            else if (item.value === '4hybrid' && fourHybrid100.length > 0) {
                const shotAverage100 = fourHybrid100[0]
                return shotAverage100
            }
            else if (item.value === '5hybrid' && fiveHybrid100.length > 0) {
                const shotAverage100 = fiveHybrid100[0]
                return shotAverage100
            }
            else if (item.value === '6hybrid' && sixHybrid100.length > 0) {
                const shotAverage100 = sixHybrid100[0]
                return shotAverage100
            }
            else if (item.value === '7hybrid' && sevenHybrid100.length > 0) {
                const shotAverage100 = sevenHybrid100[0]
                return shotAverage100
            }
            // Irons
            else if (item.value === '2Iron' && twoIron100.length > 0) {
                const shotAverage100 = twoIron100[0]
                return shotAverage100
            }
            else if (item.value === '3Iron' && threeIron100.length > 0) {
                const shotAverage100 = threeIron100[0]
                return shotAverage100
            }
            else if (item.value === '4Iron' && fourIron100.length > 0) {
                const shotAverage100 = fourIron100[0]
                return shotAverage100
            }
            else if (item.value === '5Iron' && fiveIron100.length > 0) {
                const shotAverage100 = fiveIron100[0]
                return shotAverage100
            }
            else if (item.value === '6Iron' && sixIron100.length > 0) {
                const shotAverage100 = sixIron100[0]
                return shotAverage100
            }
            else if (item.value === '7Iron' && sevenIron100.length > 0) {
                const shotAverage100 = sevenIron100[0]
                return shotAverage100
            }
            else if (item.value === '8Iron' && eightIron100.length > 0) {
                const shotAverage100 = eightIron100[0]
                return shotAverage100
            }
            else if (item.value === '9Iron' && nineIron100.length > 0) {
                const shotAverage100 = nineIron100[0]
                return shotAverage100
            }
            // Wedge 
            else if (item.value === 'Pwedge' && pWedge100.length > 0) {
                const shotAverage100 = pWedge100[0]
                return shotAverage100
            }
            else if (item.value === '48wedge' && forty8Wedge100.length > 0) {
                const shotAverage100 = forty8Wedge100[0]
                return shotAverage100
            }
            else if (item.value === '50wedge' && fiftyWedge100.length > 0) {
                const shotAverage100 = fiftyWedge100[0]
                return shotAverage100
            }
            else if (item.value === '52wedge' && fifty2Wedge100.length > 0) {
                const shotAverage100 = fifty2Wedge100[0]
                return shotAverage100
            }
            else if (item.value === '54wedge' && fifty4Wedge100.length > 0) {
                const shotAverage100 = fifty4Wedge100[0]
                return shotAverage100
            }
            else if (item.value === '56wedge' && fifty6Wedge100.length > 0) {
                const shotAverage100 = fifty6Wedge100[0]
                return shotAverage100
            }
            else if (item.value === '58wedge' && fifty8Wedge100.length > 0) {
                const shotAverage100 = fifty8Wedge100[0]
                return shotAverage100
            }
            else if (item.value === '60wedge' && sixtyWedge100.length > 0) {
                const shotAverage100 = sixtyWedge100[0]
                return shotAverage100
            }
            // null
            else {
                return 'null'
            }
        }
        shotFunction75 = () => {
            // Driver
            if (item.value === 'driver' && driver75.length > 0) {
                const shotAverage75 = driver75[0]
                return shotAverage75
            }
            else if (item.value === '3wood' && threeWood75.length > 0) {
                const shotAverage75 = threeWood75[0]
                return shotAverage75
            }
            else if (item.value === '5wood' && fiveWood75.length > 0) {
                const shotAverage75 = fiveWood75[0]
                return shotAverage75
            }
            else if (item.value === '7wood' && sevenWood75.length > 0) {
                const shotAverage75 = sevenWood75[0]
                return shotAverage75
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
                return 'null'
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
                return 'null'
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
                return 'null'
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
                const fullShot = "Full"
                return fullShot
            } else if (item.clubType === "hybrid") {
                const fullShot = "Full"
                // const fullShot = "Full Shot"
                return fullShot
            } else if (item.clubType === "iron" || item.clubType === "wedge") {
                const fullShot = "Full"
                // const fullShot = "Full Shot"
                return fullShot
            }
            else {
                return "Full"
            }
        }
        // 3/4 Swing
        const seventyFiveShotLabelFunction = () => {
            if (item.value === 'driver') {
                const fullShot = "Fwy Finder"
                return fullShot
            }
            else if (item.clubType === 'wood') {
                const fullShot = "Easy Swing"
                return fullShot
            }
            else if (item.clubType === "hybrid") {
                const fullShot = "3/4"
                return fullShot
            }
            else if (item.clubType === "iron") {
                const fullShot = "3/4"
                return fullShot
            }
            else {
                return "3/4"
            }
        }
        // 1/2 Swing
        const fiftyShotLabelFunction = () => {
            if (item.clubType === 'iron' || item.clubType === "wedge") {
                const fullShot = "1/2"
                return fullShot
            } else {
                return "1/2"
            }
        }
        // 1/4 Swing
        const twentyFiveShotLabelFunction = () => {
            if (item.clubType === 'iron') {
                const fullShot = "Half Swing"
                return fullShot
            }
            else if (item.clubType === 'wood') {
                const fullShot = "Easy Swing"
                return fullShot
            }
            else if (item.clubType === "hybrid") {
                const fullShot = "Easy Swing"
                return fullShot
            } else {
                return "1/4"
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
                    console.log(`Pressed ${item.club} & ${item.value}`)
                }
                }
                >
                    <View style={[mainStyles.listRow, {}]}>
                        <View style={[mainStyles.row, { flex: 1, alignItems: 'stretch', }]}>
                            <View style={{ flex: 1, justifyContent: 'center', }}>
                                {/* Club Row */}
                                <View style={{}}>
                                    <Text style={[mainStyles.header2, { color: "blue" }]} key={item.id}>{item.club}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'space-around', }}>
                                {/* 100% yardage */}
                                <View style={{ alignItems: "center", }}>
                                    <View style={[mainStyles.pillBackground100, {}]}>
                                        {/* Swing Percent */}
                                        <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{fullShotLabel}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingTop: 5, }}>
                                        <View style={{ alignItems: "center", paddingHorizontal: 4, }}>
                                            <Text style={mainStyles.smallText}>yards</Text>
                                            {/* Shot distance */}
                                            <Text style={mainStyles.header2}>{average100}</Text>
                                            {/* <Text style={mainStyles.header2}>{item.power}</Text> */}
                                        </View>
                                        {/* Shot standard deviation */}
                                        {/* <View style={{ alignItems: "center", paddingHorizontal: 4, borderLeftWidth: 1, borderLeftColor: "#707070" }}>
                                            <Text style={mainStyles.smallText}>+/-</Text>
                                            <Text style={mainStyles.header2}>{driver100Deviation}</Text>
                                        </View> */}
                                    </View>
                                </View>
                                {/* 75% yardage */}
                                <View style={{ alignItems: "center", paddingHorizontal: 10, }}>
                                    <View style={[mainStyles.pillBackground75, {}]}>
                                        {/* Swing Percent */}
                                        <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{seventyFiveShotLabel}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingTop: 5, }}>
                                        <View style={{ alignItems: "center", paddingHorizontal: 4, }}>
                                            <Text style={mainStyles.smallText}>yards</Text>
                                            {/* Shot distance */}
                                            <Text style={mainStyles.header2}>{average75}</Text>
                                            {/* <Text style={mainStyles.header2}>{item.power}</Text> */}
                                        </View>
                                        {/* Shot standard deviation */}
                                        {/* <View style={{ alignItems: "center", paddingHorizontal: 4, borderLeftWidth: 1, borderLeftColor: "#707070" }}>
                                            <Text style={mainStyles.smallText}>+/-</Text>
                                            <Text style={mainStyles.header2}>{driver100Deviation}</Text>
                                        </View> */}
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                // <DriverRowComponent
                //     distance100="TBD"
                //     distance75="333"
                //     title100="100%"
                //     title75="75%"
                //     itemClub={item.club}
                //     itemId={item.id}
                // />
            );
        } else if ((item.clubType === 'iron')) {
            return (
                // <Text key={item.id}>{item.club}</Text>
                <TouchableOpacity onPress={() => console.log(`Pressed ${item.club} & ${item.value}`)}>
                    <View style={[mainStyles.listRow, {}]}>
                        <View style={[mainStyles.row, { flex: 1, alignItems: 'stretch', }]}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                {/* Club Row */}
                                <View style={{}}>
                                    <Text style={[mainStyles.header2, { color: "blue" }]} key={item.id}>{item.club}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'space-around', }}>
                                {/* 100% yardage */}
                                <View style={{ alignItems: "center", paddingHorizontal: 10, }}>
                                    <View style={[mainStyles.pillBackground100, {}]}>
                                        {/* Swing Percent */}
                                        <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{fullShotLabel}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingTop: 5, }}>
                                        <View style={{ alignItems: "center", paddingHorizontal: 4, }}>
                                            <Text style={mainStyles.smallText}>yards</Text>
                                            {/* Shot distance */}
                                            <Text style={mainStyles.header2}>{average100}</Text>
                                            {/* <Text style={mainStyles.header2}>{item.power}</Text> */}
                                        </View>
                                        {/* Shot standard deviation */}
                                        {/* <View style={{ alignItems: "center", paddingHorizontal: 4, borderLeftWidth: 1, borderLeftColor: "#707070" }}>
                                                        <Text style={mainStyles.smallText}>+/-</Text>
                                                        <Text style={mainStyles.header2}>{driver100Deviation}</Text>
                                                    </View> */}
                                    </View>
                                </View>
                                {/* 75% yardage */}
                                <View style={{ alignItems: "center", paddingHorizontal: 10, }}>
                                    <View style={[mainStyles.pillBackground75, {}]}>
                                        {/* Swing Percent */}
                                        <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{seventyFiveShotLabel}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingTop: 5, }}>
                                        <View style={{ alignItems: "center", paddingHorizontal: 4, }}>
                                            <Text style={mainStyles.smallText}>yards</Text>
                                            {/* Shot distance */}
                                            <Text style={mainStyles.header2}>{average75}</Text>
                                            {/* <Text style={mainStyles.header2}>{item.power}</Text> */}
                                        </View>
                                        {/* Shot standard deviation */}
                                        {/* <View style={{ alignItems: "center", paddingHorizontal: 4, borderLeftWidth: 1, borderLeftColor: "#707070" }}>
                                                        <Text style={mainStyles.smallText}>+/-</Text>
                                                        <Text style={mainStyles.header2}>{driver100Deviation}</Text>
                                                    </View> */}
                                    </View>
                                </View>
                                {/* 50% yardage */}
                                <View style={{ alignItems: "center", paddingHorizontal: 10, }}>
                                    <View style={[mainStyles.pillBackground50, {}]}>
                                        {/* Swing Percent */}
                                        <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{fiftyShotLabel}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingTop: 5, }}>
                                        <View style={{ alignItems: "center", paddingHorizontal: 4, }}>
                                            <Text style={mainStyles.smallText}>yards</Text>
                                            {/* Shot distance */}
                                            <Text style={mainStyles.header2}>{average50}</Text>
                                            {/* <Text style={mainStyles.header2}>{item.power}</Text> */}
                                        </View>
                                        {/* Shot standard deviation */}
                                        {/* <View style={{ alignItems: "center", paddingHorizontal: 4, borderLeftWidth: 1, borderLeftColor: "#707070" }}>
                                                        <Text style={mainStyles.smallText}>+/-</Text>
                                                        <Text style={mainStyles.header2}>{driver100Deviation}</Text>
                                                    </View> */}
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        } else if ((item.clubType === 'wedge')) {
            return (                // <Text key={item.id}>{item.club}</Text>
                <TouchableOpacity onPress={() => console.log(`Pressed ${item.club} & ${item.value}`)}>
                    <View style={[mainStyles.listRow, {}]}>
                        <View style={[mainStyles.row, { flex: 1, alignItems: 'stretch', }]}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                {/* Club Row */}
                                <View style={{}}>
                                    <Text style={[mainStyles.header2, { color: "blue" }]} key={item.id}>{item.club}</Text>
                                </View>
                            </View>
                            <View style={{ flex: 4, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, }}>
                                {/* 100% yardage */}
                                <View style={{ alignItems: "center", }}>
                                    <View style={[mainStyles.pillBackground100, {}]}>
                                        {/* Swing Percent */}
                                        <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{fullShotLabel}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingTop: 5, }}>
                                        <View style={{ alignItems: "center", paddingHorizontal: 4, }}>
                                            <Text style={mainStyles.smallText}>yards</Text>
                                            {/* Shot distance */}
                                            <Text style={mainStyles.header2}>{average100}</Text>
                                            {/* <Text style={mainStyles.header2}>{item.power}</Text> */}
                                        </View>
                                        {/* Shot standard deviation */}
                                        {/* <View style={{ alignItems: "center", paddingHorizontal: 4, borderLeftWidth: 1, borderLeftColor: "#707070" }}>
                                        <Text style={mainStyles.smallText}>+/-</Text>
                                        <Text style={mainStyles.header2}>{driver100Deviation}</Text>
                                    </View> */}
                                    </View>
                                </View>
                                {/* 75% yardage */}
                                <View style={{ alignItems: "center", }}>
                                    <View style={[mainStyles.pillBackground75, {}]}>
                                        {/* Swing Percent */}
                                        <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{seventyFiveShotLabel}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingTop: 5, }}>
                                        <View style={{ alignItems: "center", paddingHorizontal: 4, }}>
                                            <Text style={mainStyles.smallText}>yards</Text>
                                            {/* Shot distance */}
                                            <Text style={mainStyles.header2}>{average75}</Text>
                                            {/* <Text style={mainStyles.header2}>{item.power}</Text> */}
                                        </View>
                                        {/* Shot standard deviation */}
                                        {/* <View style={{ alignItems: "center", paddingHorizontal: 4, borderLeftWidth: 1, borderLeftColor: "#707070" }}>
                                        <Text style={mainStyles.smallText}>+/-</Text>
                                        <Text style={mainStyles.header2}>{driver100Deviation}</Text>
                                    </View> */}
                                    </View>
                                </View>
                                {/* 50% yardage */}
                                <View style={{ alignItems: "center", }}>
                                    <View style={[mainStyles.pillBackground50, {}]}>
                                        {/* Swing Percent */}
                                        <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{fiftyShotLabel}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingTop: 5, }}>
                                        <View style={{ alignItems: "center", paddingHorizontal: 4, }}>
                                            <Text style={mainStyles.smallText}>yards</Text>
                                            {/* Shot distance */}
                                            <Text style={mainStyles.header2}>{average50}</Text>
                                            {/* <Text style={mainStyles.header2}>{item.power}</Text> */}
                                        </View>
                                        {/* Shot standard deviation */}
                                        {/* <View style={{ alignItems: "center", paddingHorizontal: 4, borderLeftWidth: 1, borderLeftColor: "#707070" }}>
                                        <Text style={mainStyles.smallText}>+/-</Text>
                                        <Text style={mainStyles.header2}>{driver100Deviation}</Text>
                                    </View> */}
                                    </View>
                                </View>
                                {/* 25% yardage */}
                                <View style={{ alignItems: "center", }}>
                                    <View style={[mainStyles.pillBackground25, {}]}>
                                        {/* Swing Percent */}
                                        <Text style={[mainStyles.mdText, { paddingVertical: 2, paddingHorizontal: 10, fontWeight: 800, color: 'white', }]}>{twentyFiveShotLabel}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', paddingTop: 5, }}>
                                        <View style={{ alignItems: "center", paddingHorizontal: 4, }}>
                                            <Text style={mainStyles.smallText}>yards</Text>
                                            {/* Shot distance */}
                                            <Text style={mainStyles.header2}>{average25}</Text>
                                            {/* <Text style={mainStyles.header2}>{item.power}</Text> */}
                                        </View>
                                        {/* Shot standard deviation */}
                                        {/* <View style={{ alignItems: "center", paddingHorizontal: 4, borderLeftWidth: 1, borderLeftColor: "#707070" }}>
                                        <Text style={mainStyles.smallText}>+/-</Text>
                                        <Text style={mainStyles.header2}>{driver100Deviation}</Text>
                                    </View> */}
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>);
        } else {
            return null
        }
    };


    return (
        <SafeAreaView style={mainStyles.container}>
            <View style={[mainStyles.screenContainer, { paddingBottom: 110, }]}>
                <Text style={[mainStyles.header1, { alignSelf: "center", paddingBottom: 30, fontSize: 30, }]}>My Bag</Text>
                <View style={{ paddingBottom: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
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
                {/* <FlatList
                    data={clubsInMyBag}
                    renderItem={renderClubItem}
                    keyExtractor={(item) => item.id.toString()}
                /> */}
                {/* <FlatList
                    data={clubsInMyBag2}
                    renderItem={renderClubItem}
                    keyExtractor={(item) => {
                        if (item.status === 'active') {
                            return item.id.toString();
                        }
                        return '';
                    }}
                /> */}
                <FlatList
                    data={clubsInMyBag2.filter((item) => item.status === 'active')}
                    renderItem={renderClubItem}
                    keyExtractor={(item) => item.id.toString()}
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