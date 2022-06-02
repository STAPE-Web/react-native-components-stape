import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Input = ({ theme, outline, placeholder, placeholderColor, value, onChange }) => {
    return (
        <View>
            {outline
                ? <View>
                    {theme == 'black' && (
                        <TextInput
                            style={styles.OutlineBlackInput}
                            placeholder={placeholder}
                            placeholderTextColor={placeholderColor}
                            value={value}
                            onChange={onChange}
                        />
                    )}
                    {theme == 'white' && (
                        <TextInput
                            style={styles.OutlineWhiteInput}
                            placeholder={placeholder}
                            placeholderTextColor={placeholderColor}
                            value={value}
                            onChange={onChange}
                        />
                    )}
                </View>
                : <View>
                    {theme == 'black' && (
                        <TextInput
                            style={styles.SolidBlackInput}
                            placeholder={placeholder}
                            placeholderTextColor={placeholderColor}
                            value={value}
                            onChange={onChange}
                        />
                    )}
                    {theme == 'white' && (
                        <TextInput
                            style={styles.SolidWhiteInput}
                            placeholder={placeholder}
                            placeholderTextColor={placeholderColor}
                            value={value}
                            onChange={onChange}
                        />
                    )}
                </View>
            }
        </View >
    )
}

export default Input

const styles = StyleSheet.create({
    OutlineWhiteInput: {
        width: '100%',
        border: '3px solid #fff',
        borderRadius: 20,
        padding: 20,
        backgroundColor: 'transparent',
        outlineStyle: 'none',
        color: '#fff',
        fontSize: 18,
        shadowColor: '#fff',
        shadowRadius: 50,
        shadowOpacity: '0.5',
    },
    OutlineBlackInput: {
        width: '100%',
        border: '3px solid #000',
        borderRadius: 20,
        padding: 20,
        backgroundColor: 'transparent',
        outlineStyle: 'none',
        color: '#000',
        fontSize: 18,
        shadowColor: '#000',
        shadowRadius: 50,
        shadowOpacity: '0.5',
    },
    SolidBlackInput: {
        width: '100%',
        borderRadius: 20,
        padding: 20,
        backgroundColor: '#000',
        outlineStyle: 'none',
        color: '#fff',
        fontSize: 18,
        shadowColor: '#000',
        shadowRadius: 50,
        shadowOpacity: '0.5',
    },
    SolidWhiteInput: {
        width: '100%',
        borderRadius: 20,
        padding: 20,
        backgroundColor: '#fff',
        outlineStyle: 'none',
        color: '#000',
        fontSize: 18,
        shadowColor: '#fff',
        shadowRadius: 50,
        shadowOpacity: '0.5',
    }
});
