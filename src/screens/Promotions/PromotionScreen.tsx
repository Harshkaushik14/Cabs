import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import HeaderWithBackButton from '../../common/HeaderWithBackButton';
import ExpandableView from './common/ExpandableView';

const PromotionScreen: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderWithBackButton label='Promotions' />
      <ScrollView>
        <ExpandableView title="15% off on all rides" />
        <ExpandableView title="15% off on all rides" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PromotionScreen;

const styles = StyleSheet.create({});
