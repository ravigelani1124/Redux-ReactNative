import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect, useSelector } from 'react-redux';
import ItemUserList from '../../components/itemUserList';
import styles from '../viewUserList/styles';

const ViewUserListScreen = (prop) => {
    const userList = useSelector((state)=>state?.userDetailsReducer.userList)

    return (
        <SafeAreaView style={styles.ulContainer}>

            <FlatList
                data={userList}
                bounces={false}
                overScrollMode='never'
                showsVerticalScrollIndicator={false}
                renderItem={ItemUserList}
            />
        </SafeAreaView>
    );
}

// const mapStatesToProps = state => {
//     return {
//         userList: state?.userDetailsReducer.userList
//     }
// }
//export default connect(mapStatesToProps)(ViewUserListScreen);
export default ViewUserListScreen;
