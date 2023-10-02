import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import EntIcon from 'react-native-vector-icons/Entypo';
import { colors } from '../../../styles/Colors';
import Sizes from '../../../styles/Size';
import { useNavigation } from '@react-navigation/native';

interface ExpandableViewProps {
  title: string;
}

const ExpandableView: React.FC<ExpandableViewProps> = ({ title }) => {

  const navigation = useNavigation()

  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {expanded ? (
          <EvilIcons name="chevron-up" size={Sizes.size30} color={colors.black} />
        ) : (
          <EvilIcons name="chevron-down" size={Sizes.size30} color={colors.black} />
        )}
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text style={styles.promoText}>Promo code</Text>
        <View style={styles.codeContainer}>
          <Text style={styles.codeText}>P018768</Text>
        </View>
      </View>
      {!expanded ? (
        <Text style={styles.validText}>Valid till 14th October 2023</Text>
      ) : null}
      {expanded && (
        <View style={styles.content}>
          <Text style={styles.expandedText}>
            <EntIcon name="dot-single" size={Sizes.size15} color={colors.primaryPurple} /> Terms &
            Conditions
          </Text>
          <Text style={styles.expandedText}>
            <EntIcon name="dot-single" size={Sizes.size15} color={colors.primaryPurple} /> Only
            applicable for airport drops
          </Text>
          <Text style={styles.expandedText}>
            <EntIcon name="dot-single" size={Sizes.size15} color={colors.primaryPurple} /> Applicable
            between 6 PM to 4 AM IST
          </Text>
          <Text style={styles.expandedText}>
            <EntIcon name="dot-single" size={Sizes.size15} color={colors.primaryPurple} /> SNM Cabs
            reserves right to withdraw the
          </Text>
          <Text style={[styles.expandedText, { marginLeft: 20, marginTop: 5 }]}>offer without prior notice.</Text>
          <TouchableOpacity
            style={styles.redeemButton}
            onPress={() => {
              navigation.goBack()
            }}
          >
            <Text style={styles.redeemButtonText}>Redeem</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 20,
    marginHorizontal: 20,
    elevation: 2,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: Sizes.size18,
    fontWeight: 'bold',
    color: colors.primaryPurple,
  },
  contentContainer: {
    flexDirection: 'row',
    width: '70%',
    backgroundColor: colors.lavender,
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 10,
    alignItems: 'center',
  },
  promoText: {
    fontSize: Sizes.size16,
    fontWeight: 'bold',
    color: colors.primaryPurple,
  },
  codeContainer: {
    backgroundColor: colors.white,
    padding: 8,
    borderRadius: 10,
  },
  codeText: {
    fontSize: Sizes.size16,
    fontWeight: '500',
    color: colors.primaryPurple,
  },
  validText: {
    fontSize: Sizes.size12,
    color: colors.primaryPurple,
    marginTop: 10,
  },
  content: {
    padding: 10,
    backgroundColor: colors.white,
  },
  expandedText: {
    fontSize: Sizes.size14,
    fontWeight: '500',
    marginTop: 10,
    color: colors.black,
  },
  redeemButton: {
    width: '80%',
    backgroundColor: colors.primaryPurple,
    marginHorizontal: 30,
    padding: 20,
    borderRadius: 30,
    marginTop: 30,
    elevation: 6,
  },
  redeemButtonText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: Sizes.size16,
  },
});

export default ExpandableView;
