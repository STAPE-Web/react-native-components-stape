import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Text from './Text'

const Alert = ({ value, theme, time }) => {

    const [hide, setHide] = useState('block')

    useEffect(() => {
        setTimeout(() => {
            setHide('none')
        }, time * 1000)
    })

    return (
        <View style={{ padding: 20, position: 'fixed', left: 0, bottom: 0, width: '100%', display: hide }}>
            {theme == 'white' && (<View style={styles.WhiteAlert}>
                <Text size={18} style={{ color: '#000' }}>{value}</Text>
            </View>)}
            {theme == 'black' && (<View style={styles.BlackAlert}>
                <Text size={18} style={{ color: '#fff' }}>{value}</Text>
            </View>)}
        </View>
    )
}

export default Alert

const styles = StyleSheet.create({
    WhiteAlert: {
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    BlackAlert: {
        backgroundColor: '#000',
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15
    },
})