import React from 'react';
import { Dimensions, Pressable, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from "react-native-vector-icons/Ionicons";
import RBSheet from 'react-native-raw-bottom-sheet';
import { colors } from '../../styles/Colors';
import Sizes from '../../styles/Size';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



interface MapSectionProps {
  refRBSheet: React.RefObject<RBSheet>;
}

const MapSection: React.FC<MapSectionProps> = ({ refRBSheet }) => {
  const openBottomSheet = () => {
    refRBSheet.current?.open();
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          latitude: 18.5204,
          longitude: 73.8567,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          draggable
          coordinate={{
            latitude: 18.5204,
            longitude: 73.8567,
          }}

        />
      </MapView>
      <Pressable style={styles.backBtn}>
        <Ionicons name="arrow-back" size={Sizes.size25} color={colors.black} />
      </Pressable>

      <View style={styles.bottomCenterButtonContainer}>
        <Pressable
          style={styles.selectBtn}
          onPress={() => openBottomSheet()}
        >
          <Text style={styles.selectBtnText}>Select</Text>
        </Pressable>
      </View>

    </SafeAreaView>
  )
}

export default MapSection


const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: windowHeight,
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bottomCenterButtonContainer: {
    position: 'absolute',
    width: "60%",
    bottom: 60,
    left: '30%',
    transform: [{ translateX: -30 }],
  },
  backBtn: {
    position: "absolute",
    backgroundColor: colors.white,
    width: 60,
    height: 60,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 10,
    elevation: 6
  },
  selectBtn: {
    backgroundColor: colors.primaryPurple,
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  selectBtnText: {
    color: colors.white
  }
})