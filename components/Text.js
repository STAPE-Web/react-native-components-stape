import { Text, View } from 'react-native'
import React from 'react'

const text = ({ children, size, style }) => {
    return (
        <View>
            <Text style={[style, { fontSize: size }]}>{children}</Text>
        </View>
    )
}

export default text