import { StyleSheet, Text, View, TextInput, Dimensions, Pressable } from 'react-native'
import React, { useState } from 'react'
import AntIcon from 'react-native-vector-icons/dist/AntDesign';
import EntIcon from 'react-native-vector-icons/dist/Entypo';
import { colors } from '../../../styles/Colors';
import Sizes from '../../../styles/Size';

interface DestinationSectionProps {

}

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const DestinationSection: React.FC<DestinationSectionProps> = (props) => {
    const [destination, setDestination] = useState("");
    const [startingPoint, setStartingPoint] = useState("");




    
    return (
        <View style={styles.mainContainer}>

            <View style={styles.indicatorContainer}>
                <EntIcon name="dot-single" size={Sizes.size30} color={colors.green} />
                <View style={styles.dashedLine} />
                <EntIcon name="dot-single" size={Sizes.size30} color={colors.green} />
            </View>

            <View>
                <View style={styles.inputSectionWrapper}>
                    <TextInput
                        placeholderTextColor={colors.black}
                        placeholder='Choose starting point.'
                        style={styles.inputStyle}
                        keyboardType='default'
                        onChangeText={(value) => setStartingPoint(value)}
                        value={startingPoint}
                    />
                    {startingPoint.length > 0 ? <Pressable onPress={() => setStartingPoint("")}><AntIcon name="close" size={Sizes.size20} color={colors.black} /></Pressable> : null}
                </View>

                <View style={styles.dividerLine} />
                <View style={styles.inputSectionWrapper}>
                    <TextInput
                        placeholderTextColor={colors.black}
                        style={styles.inputStyle}
                        onChangeText={(value) => setDestination(value)}
                        value={destination}
                        placeholder="Choose destination"
                        keyboardType="default"
                    />
                    {destination.length > 0 ? <Pressable onPress={() => setDestination("")}><AntIcon name="close" size={Sizes.size20} color={colors.black} /></Pressable> : null}
                </View>

            </View>

        </View>
    )
}

export default DestinationSection

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.lavender,
        flexDirection: "row",
        alignItems: "center",
        margin: 20,
        padding: 10,
        borderRadius: 30,
        elevation: 6
    },
    indicatorContainer: {
        alignItems: "center"
    },
    dashedLine: {
        borderColor: colors.primaryPurple,
        height: 40,
        borderLeftWidth: 1,
        borderStyle: 'dashed'
    },
    dividerLine: {
        borderWidth: 0.2,
        borderColor: colors.primaryPurple,
        width: windowWidth / 1.5,
        marginLeft: 12
    },

    inputSectionWrapper: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    inputStyle: {
        height: 40,
        width: "70%",
        margin: 12,
        padding: 10,
        color: colors.primaryPurple

    },
})