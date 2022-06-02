import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { SearchIcon } from 'react-native-heroicons/outline'

const Search = ({ theme, outline, placeholder, placeholderColor, value, onChange }) => {
    return (
        <View>
            {outline
                ? <View>
                    {theme == 'black' && (
                        <View style={styles.OutlineBlack}>
                            <SearchIcon style={{ width: 25, height: 25, color: '#000' }} />
                            <TextInput
                                style={styles.InputBlack}
                                placeholder={placeholder}
                                placeholderTextColor={placeholderColor}
                                value={value}
                                onChange={onChange}
                            />
                        </View>
                    )}
                    {theme == 'white' && (
                        <View style={styles.OutlineWhite}>
                            <SearchIcon style={{ width: 25, height: 25, color: '#fff' }} />
                            <TextInput
                                style={styles.InputWhite}
                                placeholder={placeholder}
                                placeholderTextColor={placeholderColor}
                                value={value}
                                onChange={onChange}
                            />
                        </View>
                    )}
                </View>
                : <View>
                    {theme == 'black' && (
                        <View style={styles.SolidBlack}>
                            <SearchIcon style={{ width: 25, height: 25, color: '#fff' }} />
                            <TextInput
                                style={styles.InputWhite}
                                placeholder={placeholder}
                                placeholderTextColor={placeholderColor}
                                value={value}
                                onChange={onChange}
                            />
                        </View>
                    )}
                    {theme == 'white' && (
                        <View style={styles.SolidWhite}>
                            <SearchIcon style={{ width: 25, height: 25, color: '#000' }} />
                            <TextInput
                                style={styles.InputBlack}
                                placeholder={placeholder}
                                placeholderTextColor={placeholderColor}
                                value={value}
                                onChange={onChange}
                            />
                        </View>
                    )}
                </View>
            }
        </View >
    )
}

export default Search

const styles = StyleSheet.create({
    InputBlack: {
        outlineStyle: 'none',
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 18,
    },
    InputWhite: {
        outlineStyle: 'none',
        backgroundColor: 'transparent',
        color: '#fff',
        fontSize: 18,
    },
    OutlineWhite: {
        width: '100%',
        border: '3px solid #fff',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#fff',
        shadowRadius: 50,
        shadowOpacity: '0.5',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    OutlineBlack: {
        width: '100%',
        border: '3px solid #000',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowRadius: 50,
        shadowOpacity: '0.5',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    SolidBlack: {
        width: '100%',
        borderRadius: 20,
        padding: 20,
        backgroundColor: '#000',
        shadowColor: '#000',
        shadowRadius: 50,
        shadowOpacity: '0.5',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    SolidWhite: {
        width: '100%',
        borderRadius: 20,
        padding: 20,
        backgroundColor: '#fff',
        shadowColor: '#fff',
        shadowRadius: 50,
        shadowOpacity: '0.5',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    }
});
