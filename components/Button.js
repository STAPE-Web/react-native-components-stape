import { View, StyleSheet, Text } from 'react-native'
import React from 'react'

const Button = ({ theme, outline, value, children, onClick, width }) => {
    return (
        <View style={{ width: width }}>
            {outline
                ? <View>
                    {theme == 'black' && (
                        <View style={styles.OutlineBlackButton} onClick={onClick}>
                            {children
                                ? children
                                : <Text style={styles.BlackButtonText}>{value}</Text>
                            }
                        </View>
                    )}
                    {theme == 'white' && (
                        <View style={styles.OutlineWhiteButton} onClick={onClick}>
                            {children
                                ? children
                                : <Text style={styles.WhiteButtonText}>{value}</Text>
                            }
                        </View>
                    )}
                </View>
                : <View>
                    {theme == 'black' && (
                        <View style={styles.SolidBlackButton} onClick={onClick}>
                            {children
                                ? children
                                : <Text style={styles.WhiteButtonText}>{value}</Text>
                            }
                        </View>
                    )}
                    {theme == 'white' && (
                        <View style={styles.SolidWhiteButton} onClick={onClick}>
                            {children
                                ? children
                                : <Text style={styles.BlackButtonText}>{value}</Text>
                            }
                        </View>
                    )}
                </View>
            }
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    BlackButtonText: {
        color: '#000',
        fontSize: 18,
    },
    WhiteButtonText: {
        color: '#fff',
        fontSize: 18,
    },
    OutlineWhiteButton: {
        width: '100%',
        border: '3px solid #fff',
        borderRadius: 20,
        paddingVertical: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        outlineStyle: 'none',
        shadowColor: '#fff',
        shadowRadius: 50,
        shadowOpacity: '0.5',
    },
    OutlineBlackButton: {
        width: '100%',
        border: '3px solid #000',
        borderRadius: 20,
        paddingVertical: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        outlineStyle: 'none',
        shadowColor: '#000',
        shadowRadius: 50,
        shadowOpacity: '0.5',
    },
    SolidBlackButton: {
        width: '100%',
        borderRadius: 20,
        paddingVertical: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        outlineStyle: 'none',
        shadowColor: '#000',
        shadowRadius: 50,
        shadowOpacity: '0.5',
    },
    SolidWhiteButton: {
        width: '100%',
        borderRadius: 20,
        paddingVertical: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        outlineStyle: 'none',
        shadowColor: '#fff',
        shadowRadius: 50,
        shadowOpacity: '0.5',
    }
});
