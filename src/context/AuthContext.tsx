import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import {BASE_URL} from '../config';
import { Alert } from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);
    const [error, setError] = useState({
        status: false,
        message: ''
    });

    const signup = ( firstName, lastName, email, password ) => {
        setIsLoading(true);
        
        let data = {
            name : firstName+" "+lastName,
            username: email,
            password: password
        }
        axios
        .post(`${BASE_URL}/users`, data)
        .then(res => {
            let userInfo = res.data.data;
            login(email, password);
            setIsLoading(false);
            console.log(userInfo);
        })
        .catch(e => {
            console.log(`login error ${e}`);
            setError({
                status: true,
                message: 'Please check input field'
            });
            setIsLoading(false);
        });
    }

    const login = (username, password) => {
        setIsLoading(true);
        let data = {
            username: username,
            password: password
        }
        axios
        .post(`${BASE_URL}/auth/login`, data)
        .then(res => {
            let userInfo = res.data.data;
            console.log(userInfo);
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
        })
        .catch(e => {
            console.log(`login error ${e}`);
            setError({
                status: true,
                message: 'Username or Password invalid'
            });
            setIsLoading(false);
        });
    }

    const logout = () => {
        setIsLoading(true);
    
        axios
          .post(
            `${BASE_URL}/auth/logout`,
            {},
            {
              headers: {"X-API-TOKEN": `${userInfo.token}`},
            },
          )
          .then(res => {
            console.log(res.data);
            AsyncStorage.removeItem('userInfo');
            setUserInfo({});
            setIsLoading(false);
          })
          .catch(e => {
            console.log(`logout error ${e}`);
            setIsLoading(false);
          });
      };


    return (
        <AuthContext.Provider
        value={{
            isLoading,
            userInfo,
            splashLoading,
            signup,
            login,
            error
        }}>
            {children}
        </AuthContext.Provider>
    )
}