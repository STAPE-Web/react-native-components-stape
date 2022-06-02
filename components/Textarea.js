import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Textarea = ({ theme, outline, placeholder, placeholderColor, height, value, onChange }) => {
    return (
        <View>
            {outline
                ? <View>
                    {theme == 'black' && (
                        <TextInput
                            style={[styles.OutlineBlackTextArea, { height: height }]}
                            placeholder={placeholder}
                            placeholderTextColor={placeholderColor}
                            multiline
                            value={value}
                            onChange={onChange}
                        />
                    )}
                    {theme == 'white' && (
                        <TextInput
                            style={[styles.OutlineWhiteTextArea, { height: height }]}
                            placeholder={placeholder}
                            placeholderTextColor={placeholderColor}
                            multiline
                            value={value}
                            onChange={onChange}
                        />
                    )}
                </View>
                : <View>
                    {theme == 'black' && (
                        <TextInput
                            style={[styles.SolidBlackTextArea, { height: height }]}
                            placeholder={placeholder}
                            placeholderTextColor={placeholderColor}
                            multiline
                            value={value}
                            onChange={onChange}
                        />
                    )}
                    {theme == 'white' && (
                        <TextInput
                            style={[styles.SolidWhiteTextArea, { height: height }]}
                            placeholder={placeholder}
                            placeholderTextColor={placeholderColor}
                            multiline
                            value={value}
                            onChange={onChange}
                        />
                    )}
                </View>
            }
        </View >
    )
}

export default Textarea

const styles = StyleSheet.create({
    OutlineWhiteTextArea: {
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
    OutlineBlackTextArea: {
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
    SolidBlackTextArea: {
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
    SolidWhiteTextArea: {
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
