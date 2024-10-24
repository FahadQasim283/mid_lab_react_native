import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CustomFlatList = ({ data }) => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.list}
        />
    );
};
const styles = StyleSheet.create({
    list: {
        padding: 10,
    },
    item: {
        padding: 15,
        marginVertical: 8,
        backgroundColor: 'black',
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
        color:'white'
    },
});
export default CustomFlatList;
