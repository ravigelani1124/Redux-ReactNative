import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import styles from './styles';
import {UserDetails, ButtonStrings} from '../../utils/constant';
import {connect} from 'react-redux';
import {userDetailsAction} from '../../redux/action/userDetails';

const ReduxThunkDemoScreen = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [image, setImage] = useState('');

  const addDataInRedux = () => {
    props.addDataInList({
      name: 'dsdsds',
      email: 'dsdsd',
      contact: 'dsdsdsdsds',
    });
  };
  return (
    <View style={styles.vContainer}>
      <Text style={styles.titleText}> User Details </Text>
      <TextInput
        style={styles.input}
        placeholder={UserDetails.userName}
        onChangeText={text => {
          setName(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder={UserDetails.userEmail}
        onChangeText={text => {
          setEmail(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder={UserDetails.userMobile}
        onChangeText={text => {
          setMobile(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder={UserDetails.userImage}
        onChangeText={text => {
          setImage(text);
        }}
      />

      <Pressable style={styles.pContainer} onPress={addDataInRedux}>
        <Text style={styles.tTitle}> {ButtonStrings.btnAdd}</Text>
      </Pressable>

      <Pressable style={styles.pContainer}>
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
  return {
    userList: state?.userDetailsReducer?.userList,
  };
};

export default connect(
  mapStatesToProps,
  mapDispatchToProps,
)(ReduxThunkDemoScreen);
