import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import CarDetailsSection from './CarDetailsSection';
import TabSection from './TabSection';
import { colors } from '../../../styles/Colors';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

interface DetailsSectionProps {
    closeBottomSheet: () => void;
  }
  

const DetailsSection:React.FC<DetailsSectionProps> = ({closeBottomSheet}) => {
    return (
        <View style={styles.mainContainer}>
            <TabSection closeBottomSheet={closeBottomSheet}/>
            <CarDetailsSection />
        </View>
    )
}
export default DetailsSection
const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.offWhite,
        marginHorizontal: 20,
        borderRadius:30,
        elevation:5
    }
})