import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Nav = ({ icons, theme }) => {
    return (
        <View style={styles.box}>
            {theme == 'white' && (
                <View style={styles.WhiteNav}>
                    {icons.map((icon) => (
                        <TouchableOpacity key={icon.id} onPress={icon.onClick}>
                            <icon.icon style={{ width: icon.width, height: icon.height, color: '#fff' }} />
                        </TouchableOpacity>
                    ))}
                </View>
            )}
            {theme == 'black' && (
                <View style={styles.BlackNav}>
                    {icons.map((icon) => (
                        <TouchableOpacity key={icon.id} onPress={icon.onClick}>
                            <icon.icon style={{ width: icon.width, height: icon.height, color: '#fff' }} />
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View >
    )
}

export default Nav

const styles = StyleSheet.create({
    box: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
    },
    WhiteNav: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        backdropFilter: 'blur(8px)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        padding: 30,
        justifyContent: 'space-between',
        border: '2px solid rgba(255, 255, 255, 0.6)'
    },
    BlackNav: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(8px)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        padding: 30,
        justifyContent: 'space-between',
        border: '2px solid rgba(0, 0, 0, 0.6)'
    }
})