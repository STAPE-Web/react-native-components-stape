import { StyleSheet, View, Image } from 'react-native'
import React from 'react'

const Post = ({ image, imgWidth, imgHeight, children, onClick }) => {
    return (
        <View onClick={onClick}>
            <View style={styles.img}>
                <Image source={image} style={{ width: imgWidth, height: imgHeight, borderRadius: 20 }} />
            </View>
            <View>{children}</View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    img: {
        shadowColor: '#fff',
        shadowRadius: 50,
        shadowOpacity: '0.5',
        borderRadius: 20,
        marginBottom: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
})