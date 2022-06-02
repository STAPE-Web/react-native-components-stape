import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const BackGround = ({ source, brightness }) => {
    return (
        <View>
            <Image source={source} style={[styles.backGround, { filter: `brightness(${brightness})` }]} />
        </View>
    )
}

export default BackGround

const styles = StyleSheet.create({
    backGround: {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        zIndex: -1,
        left: 0,
        top: 0,
        backgroundColor: '#000'
    }
})