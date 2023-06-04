import React from 'react';
import { View, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';

// Styles
import mainStyles from '../styles/mainStyles';

const HelpScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={mainStyles.container}>
            <TouchableWithoutFeedback>
                <View style={mainStyles.screenContainer}>
                    <Text style={[mainStyles.header1, { alignSelf: "center", paddingBottom: 25, fontSize: 30, }]}>Help</Text>
                    <View>
                        <Text>Glossary</Text>
                        <View style={{ flexDirection: 'row', }}>
                            <Text>The term</Text>
                            <Text>
                                definition of term
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default HelpScreen;