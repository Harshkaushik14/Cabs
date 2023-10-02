import { StyleSheet, Text, Dimensions, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import AntIcon from 'react-native-vector-icons/dist/AntDesign';
import { colors } from '../../styles/Colors';
import Sizes from '../../styles/Size';
import HeaderWithBackButton from '../../common/HeaderWithBackButton';
import { useNavigation } from '@react-navigation/native';


interface picUpData {
    id: number;
    date: number;
    dayOfWeek: string
}


const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const startHour = 1;
const endHour = 12;

const timings = Array.from({ length: endHour - startHour + 1 }, (_, i) => ({
    id: i + 1,
    time: `${i + startHour}:00`,
}));


const PickUp: React.FC = () => {

    const navigation = useNavigation()


    const [activedate, setActiveDate] = useState({
        id: 1,
        date: 1,
        dayOfWeek: 'Sun',
        currentDay: "Today"
    })
    const [activeTime, setActiveTime] = useState({
        id: 1,
        time: "1:00"
    })
    const [activeAmPm, setActiveAmPm] = useState("PM")

    const amPmOptions: string[] = ['AM', 'PM'];

    const dateData = [
        {
            id: 1,
            date: 2,
            dayOfWeek: 'Mon',
            currentDay: "Today"
        },
        {
            id: 2,
            date: 3,
            dayOfWeek: 'Tue',
            currentDay: "Tomorrow"
        },
        {
            id: 3,
            date: 4,
            dayOfWeek: 'Wed',
            currentDay: "Day After Tomorrow"
        },
    ];



    const updateTheData = (id: number, date: number, dayOfWeek: string, currentDay: string) => {
        setActiveDate({
            id: id,
            date: date,
            dayOfWeek: dayOfWeek,
            currentDay: currentDay
        })
    }

    const updateTheTime = (id: number, time: string) => {
        setActiveTime({
            id: id,
            time: time
        })
    }


    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <HeaderWithBackButton label='Pick-up time' />
            <View style={{ flex: 1, alignItems: "center", elevation: 2, backgroundColor: "#fff", borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
                <View style={styles.pickUpDetailsWrapper}>
                    <Text style={styles.selectPickupText}>Select Pickup time</Text>
                    <Text style={styles.largeText}>{activedate.currentDay}</Text>
                    <Text style={styles.smallText}>{activedate.dayOfWeek + ", " + activedate.date + " "}October</Text>
                    <Text style={styles.smallText}>{activeTime.time + " "}{activeAmPm}</Text>
                </View>
                <View style={{ height: 40 }} />
                <View style={styles.dateTabsWrapper}>
                    {dateData.map((item) => (
                        <TouchableOpacity onPress={() => updateTheData(item.id, item.date, item.dayOfWeek, item.currentDay)} key={item.id} style={[activedate.id === item.id ? styles.dateTabsActive : styles.dateTabsInsctive]}>
                            <Text style={[activedate.id === item.id ? styles.dateTabsActiveText : styles.dateTabsInactiveText]}>{item.dayOfWeek}</Text>
                            <Text style={[activedate.id === item.id ? styles.dateTabsActiveText : styles.dateTabsInactiveText]}>{item.date}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <View style={styles.Divider} />
                <View style={styles.timeSlotsWrapper}>
                    <ScrollView contentContainerStyle={styles.contentContainerStyle} showsVerticalScrollIndicator={false} style={styles.scrollViewStyles}>
                        {timings.map((item) => (
                            <TouchableOpacity onPress={() => updateTheTime(item.id, item.time)} key={item.id} style={[activeTime.id === item.id ? styles.selectedTab : styles.defaultTab]}>
                                <Text style={[activeTime.id === item.id ? styles.selectedTabText : styles.defaultTabText]}>{item.time}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                    <View style={styles.amPmTabsWrapper} >
                        <TouchableOpacity onPress={() => setActiveAmPm("AM")} style={[activeAmPm === "AM" ? styles.amPmActiveTab : styles.amPmInactiveTab]}>
                            <Text style={[activeAmPm === "AM" ? styles.amPmAcitveTabText : styles.amPmInactiveTabText]}>AM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setActiveAmPm("PM")} style={[activeAmPm === "PM" ? styles.amPmActiveTab : styles.amPmInactiveTab]}>
                            <Text style={[activeAmPm === "PM" ? styles.amPmAcitveTabText : styles.amPmInactiveTabText]}>PM</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Divider} />
                <View style={{ height: 40 }} />
                <TouchableOpacity onPress={() => navigation.navigate("HomeScreen" as never)} style={styles.confirmBtn}>
                    <AntIcon name="calendar" size={20} color={colors.white} />
                    <Text style={styles.confirmBtnText}>Confirm time</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default PickUp

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: colors.lightGray
    },
    pickUpDetailsWrapper: {
        marginTop: 20,
        alignItems: "center"
    },
    selectPickupText: {
        color: colors.black,
        fontSize: Sizes.size16,
        fontWeight: "500",
        margin: 10
    },
    largeText: {
        fontSize: Sizes.size25,
        color: colors.primaryPurple,
        fontWeight: "500",
        margin: 10
    },
    smallText: {
        fontSize: Sizes.size16,
        color: colors.primaryPurple,
        fontWeight: "300",
        textAlign: "center",
    },
    dateTabsWrapper: {
        flexDirection: "row",
        height: "20%"
    },
    dateTabsInsctive: {
        height: 120,
        width: 70,
        backgroundColor: colors.white,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    },
    dateTabsActive: {
        height: 120,
        width: 70,
        backgroundColor: colors.lavender,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    },
    dateTabsInactiveText: {
        fontSize: Sizes.size18,
        color: colors.black,
        fontWeight: "500"
    },
    dateTabsActiveText: {
        fontSize: Sizes.size18,
        color: colors.primaryPurple,
        fontWeight: "500"
    },
    Divider: {
        height: 1,
        backgroundColor: colors.primaryPurple,
        borderColor: colors.primaryPurple,
        width: windowWidth / 1.2,
        margin: 10
    },
    timeSlotsWrapper: {
        flexDirection: "row",
        width: "60%",
        height: "20%",
        alignItems: "center",
        justifyContent: "space-between"
    },
    scrollViewStyles: {
        maxHeight: "90%",
        maxWidth: "90%",
    },
    contentContainerStyle: {
        alignItems: "center"
    },
    selectedTab: {
        height: 50, width: 90,
        backgroundColor: colors.lavender,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    },
    defaultTab: {
        height: 50, width: 90,
        backgroundColor: colors.white,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    },
    selectedTabText: {
        fontSize: Sizes.size16,
        color: colors.primaryPurple,
        fontWeight: "500"
    },
    defaultTabText: {
        fontSize: Sizes.size16,
        color: colors.black,
        fontWeight: "500"
    },
    amPmTabsWrapper: {

    },
    amPmActiveTab: {
        padding: 10,
        backgroundColor: colors.lavender,
        borderRadius: 10
    },
    amPmInactiveTab: {
        padding: 10, borderRadius: 10
    },
    amPmAcitveTabText: {
        fontSize: Sizes.size16,
        color: colors.primaryPurple
    },
    amPmInactiveTabText: {
        fontSize: Sizes.size16,
        color: colors.black
    },
    confirmBtn: {
        flexDirection: "row",
        backgroundColor: colors.primaryPurple,
        width: "50%",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 15,
        borderRadius: 30
    },
    confirmBtnText: {
        color: colors.white,
        fontSize: Sizes.size16,
    }

})