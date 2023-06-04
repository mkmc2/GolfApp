import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableWithoutFeedback, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

// Styles
import mainStyles from '../styles/mainStyles';

const ContactUsScreen = ({ navigation }) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleTitleChange = (text) => {
        setTitle(text);
    };

    const handleDescriptionChange = (text) => {
        setDescription(text);
    };

    const handleSubmit = () => {
        // Here, you can implement the logic to submit the form data
        // to your desired endpoint or perform any necessary actions
        // with the provided title and description values.
        // You can access the values through the 'title' and 'description' state variables.
        console.log('Title:', title);
        console.log('Description:', description);
    };

    return (
        <SafeAreaView style={mainStyles.container}>
            <TouchableWithoutFeedback>
                <View style={mainStyles.screenContainer}>
                    <Text style={[mainStyles.header1, { alignSelf: "center", paddingBottom: 25, fontSize: 30, }]}>Contact US</Text>
                    <View>
                        <Text style={[mainStyles.header3, { paddingBottom: 5, }]}>Title of Request:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter title"
                            value={title}
                            onChangeText={handleTitleChange}
                        />

                        <Text style={[mainStyles.header3, { paddingBottom: 5, }]}>How can we help:</Text>
                        <TextInput
                            style={[styles.input, styles.multilineInput]}
                            placeholder="Details of your request"
                            value={description}
                            onChangeText={handleDescriptionChange}
                            multiline={true}
                            numberOfLines={4}
                        />

                        {/* <Button title="Submit" onPress={handleSubmit} /> */}
                        <View style={{ flexDirection: 'row', paddingVertical: 20, }}>
                            <View style={{ flex: 1, alignItems: 'center', }}>
                                <TouchableOpacity
                                    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 25, paddingVertical: 10, backgroundColor: 'blue', borderRadius: 20, }}
                                    onPress={handleSubmit}
                                >
                                    <Text style={[mainStyles.header2, { paddingHorizontal: 5, color: 'white', paddingRight: 10, }]}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    multilineInput: {
        height: 100,
    },
});

export default ContactUsScreen; ContactUsScreen