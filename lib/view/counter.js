import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import CustomButton from '../components/button';
const Counter = () => {
    const [count, setCount] = useState(0);
    const [isEven, setIsEven] = useState(true);

    useEffect(() => {
        setIsEven(count % 2 === 0);
    }, [count]);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter</Text>
            <Text style={styles.countText}>Count: {count}</Text>
            <Text style={[styles.evenText, { color: isEven ? '#4CAF50' : '#F44336' }]}>
                The count is {isEven ? 'Even' : 'Odd'}
            </Text>
            <CustomButton text="Increase" onPress={() => setCount(count + 1)} />
            <CustomButton text="Decrease" onPress={() => setCount(count - 1)} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#BB86FC',
        marginBottom: 20,
    },
    countText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'teal',
        marginBottom: 10,
    },
    evenText: {
        fontSize: 18,
        marginBottom: 30,
    },
});
export default Counter;
