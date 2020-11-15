import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../contants/color'

const NumberContainers = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.contnumberainer}>{props.children}</Text>
        </View>
    )
}

export default NumberContainers

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'        
    },
    number: {
        color: Colors.primary,
        fontSize: 14
    }
})
