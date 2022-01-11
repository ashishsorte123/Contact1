import React, {useState} from 'react';
import {Text, View} from 'react-native';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';

const Login = () => {
  const [value, onChangeText] = React.useState(' ');
  return (
    <Container>
      <Input
        label="Username"
        placeholder="Enter"
        onChangeText={text => onChangeText(text)}
        value={value}
        iconPosition="right"
      />

      <Input
        label="Password"
        placeholder="Enter"
        onChangeText={text => onChangeText(text)}
        value={value}
        iconPosition="right"
      />
    </Container>
  );
};

export default Login;
