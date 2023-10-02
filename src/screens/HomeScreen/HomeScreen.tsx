import React, { useEffect, useRef } from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import DestinationSection from '../BottomSheet/components/DestinationSection';
import DetailsSection from '../BottomSheet/components/DetailsSection';
import MapSection from '../Map/MapSection';
import { useFocusEffect } from '@react-navigation/native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');




const HomeScreen: React.FC = () => {
    const refRBSheet = useRef<RBSheet | null>(null);





    useFocusEffect(() => {
        refRBSheet.current?.open()
    })

    const closeBottomSheet = () => {
        refRBSheet.current?.close();
    };




    return (
        <View style={styles.mainContainer}>
            <MapSection refRBSheet={refRBSheet} />
            <RBSheet
                ref={refRBSheet}
                closeDuration={500}
                openDuration={500}
                closeOnDragDown={false}
                height={windowHeight / 1.4}
                customStyles={{
                    container: {
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                        elevation: 6,
                        overflow: "hidden",
                    },
                }}
            >
                <ScrollView style={{ flex: 1 }}>
                    <DestinationSection />
                    <DetailsSection closeBottomSheet={closeBottomSheet} />
                    <View style={{ height: 20 }} />
                </ScrollView>
            </RBSheet>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },

})