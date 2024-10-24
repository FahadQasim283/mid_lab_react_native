import React, { useState } from 'react';
import { Image, View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import CustomButton from '../components/button';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        if (username === 'Maryam Tanveer' && password === '021') {
            console.log("login successfull")
        } else {
            Alert.alert("Invalid username or password");
        }
    };
    return (
        <View style={styles.container}>
            <Image
                source={"https://img.freepik.com/free-vector/gradient-mental-health-logo-template_23-2148820570.jpg?semt=ais_hybrid"}
                style={styles.logo}
            />
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                secureTextEntry
                onChangeText={setPassword}
            />
            <CustomButton text={"Login"} onPress={handleLogin} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    logo: {
        width: 300,
        height: 300,
        marginBottom: 20,
        alignSelf: 'center',
    },
});

export default LoginScreen;
