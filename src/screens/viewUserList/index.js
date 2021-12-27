import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { connect } from 'react-redux';
import ItemUserList from '../../components/itemUserList';
import styles from '../viewUserList/styles';

const ViewUserListScreen = (prop) => {
    return (
        <SafeAreaView style={styles.ulContainer}>

            <FlatList
                data={prop.userList}
                bounces={false}
                overScrollMode='never'
                showsVerticalScrollIndicator={false}
                renderItem={ItemUserList}
            />
        </SafeAreaView>
    );
}

const mapStatesToProps = state => {
    return {
        userList: state?.userDetailsReducer.userList
    }
}
export default connect(mapStatesToProps)(ViewUserListScreen);
