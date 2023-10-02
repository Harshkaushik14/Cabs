import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { colors } from '../../../styles/Colors'
import Sizes from '../../../styles/Size'


const CarDetailsSection: React.FC = () => {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.carDetailsSection}>
                <Image
                    style={styles.carIconStyles}
                    resizeMode='cover'
                    source={require('../../../assets/Carimg.png')}
                />
                <View style={styles.bottomSection}>
                    <Text style={styles.CarDetailsText}>TATA XPRESS-T EV </Text>
                    <Text style={styles.CarDetailsText}>4 Km</Text>
                    <Text style={styles.promoCodeText}>Promo code applied</Text>
                </View>

                <View style={styles.rightSection}>
                    <Text style={styles.AmountText}>₹150.0</Text>
                    <Text style={styles.AfterPromoAmountText}>₹120.0</Text>
                </View>
            </View>
            <Pressable style={styles.confirmBtn}>
                <Text style={styles.confirmBtnText}>Confirm</Text>
            </Pressable>
        </View>
    )
}

export default CarDetailsSection

const styles = StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        margin: 15,
        justifyContent: "space-between",
    },

    carDetailsSection: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    carIconStyles: {
        width:60,
        height: 40,
    },
    bottomSection: {
        width: "45%",
        padding: 10
    },
    CarDetailsText: {
        color: colors.black,
        fontSize: Sizes.size14
    },
    promoCodeText: {
        color: colors.primaryPurple,
        fontSize: Sizes.size12
    },
    rightSection: {
        width: "30%",
        padding: 10
    },
    AmountText: {
        fontSize: Sizes.size25,
        color: colors.primaryPurple
    },
    AfterPromoAmountText: {
        fontSize: Sizes.size25,
        color: colors.gray,
        textDecorationLine: 'line-through'
    },
    confirmBtn: {
        padding: 20,
        backgroundColor: colors.primaryPurple,
        width: "80%",
        borderRadius: 30,
        alignItems: "center",
        elevation: 6
    },
    confirmBtnText: {
        color: colors.white, fontSize: Sizes.size16
    }
})