import React from 'react';
import {Image, Text, View} from 'react-native';
import Logo from '../../assets/logo.png';
import styles from '../pages/styles';

export default function Header({title}) {
  return (
    <View style={styles.header}>
      <Image source={Logo} />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}
