import React, { Component, useContext, useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../assets/Styles';
import {AuthContext} from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from '../../assets/Styles';

const Login = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const {isLoading, login, error} = useContext(AuthContext);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  useEffect(() => {
    if (error.status) {
      Alert.alert('Invalid Crendetials', error.message, [
        {text: 'Close', onPress: () => error.status = false}
      ])
    }
  });

  return (
    <View style={Styles.container}>
      <Spinner visible={isLoading} />
      <BannerLogin />
      <TextInput
        style={Styles.textInput}
        placeholder='Enter email address'
        onChangeText={text => setEmail(text)}
      />
      <View style={{
          position:'relative'
        }}>
          <TextInput
            style={Styles.textInput}
            placeholder='Enter password'
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity style={{
              position: 'absolute',
              top: 20,
              right: 20
            }}
            onPress={toggleShowPassword}
          >
            <Icon
              name={showPassword ? "eye" : "eye-slash"}
              size={20}
              color="#000000"
            />
          </TouchableOpacity>
      </View>
        <TouchableOpacity
          style={Styles.loginButton}
          onPress={() => {
            login(email, password);
          }}
          >
          <Text style={Styles.submitText}>Login</Text>
        </TouchableOpacity>
        <View style={Styles.row}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SIGNUP")}
          >
            <Text style={{
              color: "#0065e0"
            }}>Sign up</Text>
          </TouchableOpacity> 
        </View>
    </View>
  );
}

class BannerLogin extends Component {
  render() {
    return (
      <View style={Styles.bannerSection}>
        <Image source={{uri: 'https://play-lh.googleusercontent.com/91-qMvusADZofvinlA3QgGEa78s3TYp7u0RUPW5bpORo4Juft-S7sfVXHPR0HZThFA'}} style={Styles.banner}/>
      </View>
    );
  }
}

export default Login