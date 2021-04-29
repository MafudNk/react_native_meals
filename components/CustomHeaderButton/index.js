import React from 'react'
import {HeaderButtons} from 'react-navigation-header-buttons';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomHeaderButton = (props) => {
    return (
        <HeaderButtons {...props} IconComponent={Ionicons} iconSize={23} color='red' />
    )
}

export default CustomHeaderButton 

const styles = StyleSheet.create({})
