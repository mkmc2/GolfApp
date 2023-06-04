import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    SafeAreaView,
    Image,
} from 'react-native';
import mainStyles from '../styles/mainStyles';

const SignUpScreen = ({
    navigation,
    newUser,
    setNewUser,
    emailAddress,
    setEmailAddress,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone
}) => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // Implement sign-up logic here
    };

    return (
        <SafeAreaView style={mainStyles.container}>
            <View style={[styles.container, { paddingHorizontal: 50, }]}>
                <View style={{ paddingBottom: 20, }}>
                    <Image
                        source={require('../../assets/IconGolf.png')}
                        style={{ width: 100, height: 100, }}
                    />
                </View>
                <Text style={[mainStyles.header1, { alignSelf: "center", paddingBottom: 25, fontSize: 26, }]}>Create Account</Text>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                    placeholder="Enter your full name"
                />
                <Text style={styles.label}>Email Address</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Enter your email address"
                />
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPhone}
                    value={phone}
                    placeholder="Enter your phone number"
                />
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setPassword}
                    value={password}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                />
                {password.length > 0 && password.length < 8 && (
                    <Text style={styles.error}>
                        Password must be at least 8 characters long
                    </Text>
                )}
                {!/\d/.test(password) && (
                    <Text style={styles.error}>Password must contain a number</Text>
                )}
                {!/[A-Z]/.test(password) && (
                    <Text style={styles.error}>
                        Password must contain a capital letter
                    </Text>
                )}
                <TouchableOpacity
                    style={styles.button}
                    // onPress={handleSignUp}
                    onPress={() =>
                        navigation.navigate('ClubSelector',
                            console.log("Choose Clubs"),
                        )}
                    disabled={!(name && email && password.length >= 8 && /\d/.test(password) && /[A-Z]/.test(password))}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    error: {
        color: 'red',
        marginBottom: 5,
        fontSize: 11,
        alignSelf: 'flex-start',
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default SignUpScreen;
