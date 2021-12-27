import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './styles';
import { UserDetails, ButtonStrings } from '../../utils/constant';
import { connect } from 'react-redux';
import { userDetailsAction } from '../../redux/action/userDetails';
import { useNavigation } from '@react-navigation/core';
import Routes from '../../navigator/route';


const ReduxThunkDemoScreen = props => {

  const navigation = useNavigation()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [image, setImage] = useState('');

  const addDataInRedux = () => {
    props.addDataInList({
      name: name,
      email: email,
      mobile: mobile,
      image: image
    });

    setName('')
    setEmail('')
    setMobile('')
    setImage(' ')
    alert('User added successfully')
  };

  const viewAllUser = () => {
    navigation.navigate(Routes.ViewUserList)
  }

  return (
    <View style={styles.vContainer}>
      <Text style={styles.titleText}> User Details </Text>
      <TextInput
        style={styles.input}
        keyboardType={'default'}
        value={name}
        placeholder={UserDetails.userName}
        onChangeText={text => {
          setName(text);
        }}
      />
      <TextInput
        value={email}
        style={styles.input}
        keyboardType={'email-address'}
        placeholder={UserDetails.userEmail}
        onChangeText={text => {
          setEmail(text);
        }}
      />
      <TextInput
        value={mobile}
        style={styles.input}
        keyboardType={'phone-pad'}
        placeholder={UserDetails.userMobile}
        onChangeText={text => {
          setMobile(text);
        }}
      />
      <TextInput
        value={image}
        style={styles.input}
        keyboardType={'default'}
        placeholder={UserDetails.userImage}
        onChangeText={text => {
          setImage(text);
        }}
      />

      <Pressable style={styles.pContainer} onPress={addDataInRedux}>
        <Text style={styles.tTitle}> {ButtonStrings.btnAdd}</Text>
      </Pressable>

      <Pressable style={styles.pContainer} onPress={viewAllUser}>
        <Text style={styles.tTitle}> {ButtonStrings.btnViewAll}</Text>
      </Pressable>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addDataInList: userDetail => {
      dispatch(userDetailsAction(userDetail));
    },
  };
};

const mapStatesToProps = state => {
  console.log(state.userList)
  return {
    userList: state?.userDetailsReducer?.userList
  };
};

export default connect(
  mapStatesToProps,
  mapDispatchToProps,
)(ReduxThunkDemoScreen);
