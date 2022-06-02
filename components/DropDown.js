import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from './Text'

const DropDown = ({ obj, width, textSize, dropDown }) => {
    return (
        <View>
            {dropDown && (
                <View style={[styles.box, { width: width }]}>
                    {obj.map((obj) => (
                        <View key={obj.id}>
                            {obj.active
                                ? <View style={{ padding: 20, backgroundColor: '#D9D9D9', borderRadius: 10 }}>
                                    <Text size={textSize} style={styles.text}>{obj.name}</Text>
                                </View>
                                : <View style={styles.item} >
                                    <Text size={textSize} style={styles.text}>{obj.name}</Text>
                                </View>
                            }
                        </View>
                    ))
                    }
                </View >
            )}
        </View>
    )
}

export default DropDown

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        border: '1px solid #AAAAAA',
        borderRadius: 10
    },
    item: {
        padding: 20
    }
})