import {useRoute} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
import {Text, View} from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';
import LoginComponent from '../../components/Login';
import {GlobalContext} from '../../context/Provider';

const Login = () => {
  const [form, setForm] = useState({});
  const [justSignedUp, setJustSignedUp] = useState(false);
  const {params} = useRoute();

  React.useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true);
      setForm({...form, userName: params.data.username});
    }
  }, [params]);

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.userName && form.password) {
      loginUser(form)(authDispatch);
    }
  };

  const onChange = ({name, value}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});
  };
  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
};

export default Login;
