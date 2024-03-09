import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

var name = "Honda";
const Motor = () =>  {
    return (
        <View>
            <Text>
            Hi I'm a Motor
            </Text>
            <Text>Hi aku motor {name}</Text>
            <Text>Tipe motor = {types.type}</Text>
            <Text>mode motor {types.model}</Text>
            <Text>Harga Motor = {types.harga}</Text>
        </View>
    );
}

const types = {
    type: "Matic",
    model : "vario",
    harga : 1500
}

const styles = StyleSheet.create({})

export default Motor;
