import { View } from 'react-native'
import React from 'react'

const Contact = ({ style, children }) => {
    return (
        <View style={style}>
            {children}
        </View>
    )
}

export default Contact