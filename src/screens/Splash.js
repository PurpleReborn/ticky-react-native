/* eslint-disable react-hooks/exhaustive-deps */
import React, {Component} from 'react';
import {useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {useSelector} from 'react-redux';

import bg1 from '../images/bg1.jpg';

const Splash = ({navigation}) => {
  const {token} = useSelector(state => state.auth);
  useEffect(() => {
    console.log(token);
    if (token !== null) {
      setTimeout(() => {
        navigation.replace('home');
      }, 2000);
    } else {
      setTimeout(() => {
        navigation.replace('welcome');
      }, 1500);
    }
  }, []);
  return (
    <View style={styles.parent}>
      <Image style={styles.img1} source={bg1} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#7ECFC0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img1: {
    height: 250,
    width: 250,
    borderRadius: 250,
  },
});
