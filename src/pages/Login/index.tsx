import React, { Component, useContext, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../assets/Styles';
import { useNavigation } from '@react-navigation/native';
import {AuthContext} from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

const Login = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, login} = useContext(AuthContext);
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
            secureTextEntry
          />
          <TouchableOpacity style={{
            position: 'absolute',
            top: 20,
            right: 20
          }}>
            <Icon name="eye" size={20} color="#000000" />
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
      <TouchableOpacity
          style={Styles.createNewAccountButton}
          onPress={() => navigation.navigate("SIGNUP")}
      >
          <Text style={Styles.submitText}>Create new account</Text>
      </TouchableOpacity>
    </View>
  );
}

class BannerLogin extends Component {
  render() {
    return (
      <View style={Styles.bannerSection}>
        <Image source={{uri: 'https://z-m-static.xx.fbcdn.net/rsrc.php/v3/yD/r/5D8s-GsHJlJ.png'}} style={Styles.banner}/>
      </View>
    );
  }
}

export default Login