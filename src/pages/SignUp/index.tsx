import React, { Component, useContext, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  Image,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../assets/Styles';
import {AuthContext} from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay';

const SignUp = ({navigation}) => {
    const [password, setPassword] = useState(null);
    const [passwordConfirm, setPasswordConfirm] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const {isLoading, signup} = useContext(AuthContext);

    return (
        <View style={Styles.container}>
            <Spinner visible={isLoading} />
            <Header />
            <View style={Styles.row}>
            <TextInput
                style={Styles.formInput}
                placeholder='First name'
                value={firstName}
                onChangeText={text => setFirstName(text)}
            />
            <TextInput
                style={Styles.formInput}
                placeholder='Last name'
                value={lastName}
                onChangeText={text => setLastName(text)}
            />
            </View>
            <View style={Styles.column}>
            <TextInput
                style={Styles.textInput}
                placeholder='Email address'
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <View style={{
                position:'relative'
            }}>
                <TextInput
                    style={Styles.textInput}
                    placeholder='New password'
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
            <View style={{
                position:'relative'
            }}>
                <TextInput
                    style={Styles.textInput}
                    placeholder='Confirmation password'
                    value={passwordConfirm}
                    onChangeText={text => setPasswordConfirm(text)}
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
            </View>
            <TouchableOpacity
                style={Styles.nextButton}
                onPress={() => {
                    signup(firstName, lastName, email, password)
                }}
            >
                <Text style={Styles.submitText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={Styles.createNewAccountButton}
                onPress={() => navigation.navigate("LOGIN")}
            >
                <Text style={Styles.submitText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

class Header extends Component {
    render() {
      return (
        <View>
          <Text style={Styles.textHeader}>What's your name?</Text>
          <Text style={Styles.textDefault}>Enter the name you use in real life.</Text>
        </View>
      );
    }
  }

export default SignUp;
