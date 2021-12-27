import React from 'react'
import { View, Text, Button, FlatList, SafeAreaView } from 'react-native'
import ItemDashboard from '../../components/itemdashboard'
import { DashboardList } from '../../utils/constant'
import styles from './styles'

const DashboardScreen = ({ navigation }) => {

    const handleNavigaiton = (item) => {
        navigation.navigate(item.navigation)
    }

    const renderDashboardItem = (props) => {
        return (<ItemDashboard {...props} onPress={handleNavigaiton} />)
    }

    return (
        <SafeAreaView style={styles.saContainer}>
            <FlatList
                data={DashboardList}
                bounces={false}
                overScrollMode='never'
                showsVerticalScrollIndicator={false}
                renderItem={renderDashboardItem} />
        </SafeAreaView>
    )
}

export default DashboardScreen
