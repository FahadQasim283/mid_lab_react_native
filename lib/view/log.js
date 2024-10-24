import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Image } from "react-native";
import CustomButton from "../components/button";

const logo = "https://img.freepik.com/free-vector/gradient-mental-health-logo-template_23-2148820570.jpg?semt=ais_hybrid";

const SignupScreen = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleSignup = () => {
        console.log("Signup successful");
    };
    return (
        <View>
            <Image source={logo} style={{ width: 300, height: 300 }} />
            <TextInput
                style={styles.textfield}
                placeholder="Full Name"
                value={fullName}
                onChangeText={setFullName}
            />
            <TextInput style={styles.textfield} placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput
                style={styles.textfield}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TextInput
                style={styles.textfield}
                placeholder="Confirm Password"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
            <CustomButton text="Sign Up" onPress={handleSignup} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textfield: {
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 8,
        margin: 10,
    }

});
export default SignupScreen;