import React, { Component, useContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  Image,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Alert
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
    const {isLoading, signup, error} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    const passwordValidation = (text) => {
        console.log(text);
        if (password != text) {
            setErrorMessage("Passwords do not match");
        } else {
            setErrorMessage('');
        }
    }

    useEffect(() => {
        if (error.status) {
          Alert.alert('Sign up failed', error.message, [
            {text: 'Close', onPress: () => error.status = false}
          ])
        }
      });

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
                    secureTextEntry={!showPassword}
                />
                <TouchableOpacity style={{
                        position: 'absolute',
                        top: 20,
                        right: 20
                    }}
                    onPress={toggleShowPassword}
                >
                    <Icon name={
                        showPassword ? "eye" : "eye-slash"
                    } size={20} color="#000000" />
                </TouchableOpacity>
            </View>
            <View style={{
                position:'relative'
            }}>
                <TextInput
                    style={Styles.textInput}
                    placeholder='Confirmation password'
                    value={passwordConfirm}
                    onChangeText={text => passwordValidation(text)}
                    secureTextEntry={!showConfirmPassword}
                />
                <TouchableOpacity style={{
                        position: 'absolute',
                        top: 20,
                        right: 20
                    }}
                    onPress={toggleShowConfirmPassword}
                >
                <Icon name={
                        showConfirmPassword ? "eye" : "eye-slash"
                    } size={20} color="#000000" />
                </TouchableOpacity>
                {
                    errorMessage ? <Text style={{
                        color:"#f22c3d",
                        fontSize: 12,
                        marginTop:6
                    }}>Password do not match</Text> : null
                }
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
            <View style={Styles.row}>
                <Text>Already have an account?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("LOGIN")}
                >
                    <Text style={{
                    color: "#0065e0"
                    }}>Login</Text>
                </TouchableOpacity> 
            </View>
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
