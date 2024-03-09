import React, { Component } from 'react';
import {View, StyleSheet,Text} from 'react-native';

class Car extends Component {
    constructor(props){
            super(props);
            this.state = {
                merek: "Toyota",
                types:{
                    type: "Matic",
                    model: "calya ADS"
                }
            }
        }




    render() {
        return (
            <View>
               <Text>Hello World!</Text> 
               <Text>Merek Car = {this.state.merek}</Text>
               <Text>Tipe Car = {this.state.types.type}</Text>
               <Text>Model Car = {this.state.types.model}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({})

export default Car;
