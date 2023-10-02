import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import IonIcons from 'react-native-vector-icons/dist/Ionicons';
import { colors } from '../styles/Colors';
import Sizes from '../styles/Size';
import { useNavigation } from '@react-navigation/native';

interface HeaderWithBackButtonProps {
  label: string;
}

const HeaderWithBackButton: React.FC<HeaderWithBackButtonProps> = ({ label }) => {

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBackPress} >
        <IonIcons name="arrow-back" size={Sizes.size20} color={colors.black} />
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.lightGray,
  },

  backButtonText: {
    fontSize: Sizes.size18,
    fontWeight: 'bold',
  },
  label: {
    fontSize: Sizes.size18,
    color: colors.black,
    fontWeight: 'bold',
    marginLeft: 20
  },
});

export default HeaderWithBackButton;
