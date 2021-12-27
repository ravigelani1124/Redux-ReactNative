import React from 'react'
import { Text, Pressable } from 'react-native'
import styles from './styles'

const ItemDashboard = ({item,index,onPress}) => {
    const handleOnPress=()=>{
        onPress(item)
    }
    return (
        <Pressable style={styles.pContainer} onPress={handleOnPress}>
            <Text style={styles.tTitle}>{item.title}</Text>
        </Pressable>
    )
}

export default ItemDashboard
