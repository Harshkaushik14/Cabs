import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import AntIcon from 'react-native-vector-icons/dist/AntDesign';
import FIcon from 'react-native-vector-icons/dist/FontAwesome';
import FoundtionIcon from 'react-native-vector-icons/dist/Foundation';
import { colors } from '../../../styles/Colors';
import Sizes from '../../../styles/Size';
import { useNavigation } from '@react-navigation/native';


interface TabSectionProps {
    closeBottomSheet: () => void;
}



const TabSection: React.FC<TabSectionProps> = ({ closeBottomSheet }) => {
    const navigation = useNavigation()


    const handleNavigation = (screenName: string) => {
        navigation.navigate(screenName as never),
            closeBottomSheet();
    }


    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            justifyContent: "space-between",
        }}>
            <View style={styles.tabSectionWrapper}>
                <Pressable onPress={() => handleNavigation("PickUp")} style={styles.tabSections}>
                    <AntIcon name="calendar" size={Sizes.size20} color={colors.primaryPurple} />
                    <Text style={styles.tabSectionsText}>Date</Text>
                    <AntIcon name="right" size={Sizes.size15} color={colors.black} />
                </Pressable>
                <Pressable style={styles.tabSections}>
                    <FIcon name="money" size={Sizes.size20} color={colors.primaryPurple} />
                    <Text style={styles.tabSectionsText}>Online</Text>
                    <AntIcon name="right" size={Sizes.size15} color={colors.black} />
                </Pressable>
            </View>
            <View style={styles.tabSectionWrapper}>

                <Pressable onPress={() => handleNavigation("Promotions")} style={styles.tabSections}>
                    <AntIcon name="gift" size={Sizes.size20} color={colors.primaryPurple} />
                    <Text style={styles.tabSectionsText}>PUNE202</Text>
                    <AntIcon name="right" size={Sizes.size15} color={colors.black} />
                </Pressable>
                <Pressable style={styles.tabSections}>
                    <FoundtionIcon name="clipboard-notes" size={Sizes.size20} color={colors.primaryPurple} />
                    <Text style={styles.tabSectionsText}>Add Notes</Text>
                    <AntIcon name="right" size={Sizes.size15} color={colors.black} />
                </Pressable>
            </View>
        </View>
    )
}

export default TabSection

const styles = StyleSheet.create({
    tabSectionWrapper: {
        width: "50%",
    },
    tabSections: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10
    },
    tabSectionsText: {
        color: colors.primaryPurple,
        fontSize: Sizes.size14,
        fontWeight: "400"
    }
})