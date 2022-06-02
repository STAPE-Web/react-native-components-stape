import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Modal = ({ modal, children, theme, setModal }) => {
    return (
        <View>
            {theme == 'black' && (<View>
                {modal && (<View style={styles.BlackModal} blurRadius={4} onClick={() => setModal(false)}>
                    <View onClick={(e) => e.stopPropagation()}>
                        {children}
                    </View>
                </View>)
                }
            </View>)
            }
            {
                theme == 'white' && (<View>
                    {modal && (<View style={styles.WhiteModal} blurRadius={90} onClick={() => setModal(false)}>
                        <View onClick={(e) => e.stopPropagation()}>
                            {children}
                        </View>
                    </View>)
                    }
                </View>)
            }
        </View >
    )
}

export default Modal

const styles = StyleSheet.create({
    WhiteModal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(8px)',
    },
    BlackModal: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(8px)',
    }
})