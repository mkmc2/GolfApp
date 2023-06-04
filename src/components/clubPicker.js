import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import mainStyles from '../styles/mainStyles';

export const ClubPickerScreen = ({ shotWeightedAverage }) => {

    // Add into the code if a distance is further than you can reach, suggest two clubs to hit to get to that spot. 

    const [distance, setDistance] = useState("0");

    // Create a function that says if distance === driver100
    return (
        <SafeAreaView style={mainStyles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={[mainStyles.screenContainer, { flex: 1 }]}>
                    <Text style={[mainStyles.header1, { alignSelf: "center", paddingBottom: 30, fontSize: 30, }]}>Club Suggestions</Text>
                    <View style={{ flex: 2, alignItems: "center", }}>
                        <View style={{ flexDirection: 'row', alignItems: "center", }}>
                            <Text style={[mainStyles.header1, { paddingRight: 5 }]}>Distance:</Text>
                            <View style={mainStyles.inputBackground}>
                                <View style={{ flexDirection: 'row', alignItems: "center", paddingHorizontal: 5, }}>
                                    <TextInput
                                        placeholder={distance}
                                        maxLength={3}
                                        keyboardType='numeric'
                                        style={{ padding: 10, paddingHorizontal: 10, fontSize: 20, fontWeight: "800", }}
                                        onChangeText={text => setDistance(text)}
                                    />
                                    <Text style={mainStyles.header2}>yds</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingTop: 10, }}>
                            <Text style={[mainStyles.smallText, { fontSize: 12, }]}>How far are you from the target?</Text>
                        </View>
                    </View>
                    <View style={{ flex: 8, }}>
                        <View>
                            <Text style={mainStyles.header1}>Suggested shots to hit:</Text>
                        </View>
                        <View>
                            <Text>This will show all the clubs that you could use to hit it to your target</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default ClubPickerScreen;