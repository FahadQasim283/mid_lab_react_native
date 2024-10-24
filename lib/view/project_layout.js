import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const ProjectLayout = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={"https://img.freepik.com/free-vector/gradient-mental-health-logo-template_23-2148820570.jpg?semt=ais_hybrid"}
                style={styles.logo}
            />
            {/* <Image
                source={"https://static.vecteezy.com/system/resources/previews/011/401/355/non_2x/job-finder-logo-vector.jpg"}
                style={styles.logo}
            /> */}
            <Text style={styles.title}>Mental Health and Emotion Detection</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    logo: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
});

export default ProjectLayout;
