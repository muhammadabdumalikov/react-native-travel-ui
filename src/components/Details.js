import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    Alert,
} from "react-native";
import { Feather, Entypo } from "react-native-vector-icons";

import colors from "../../assets/colors/colorsData";

const Details = ({ route, navigation }) => {
    const { item } = route.params;
    const [liked, setLiked] = useState(false);

    return (
        <View style={styles.container}>
            <ImageBackground
                source={item.imageBig}
                style={styles.backgroundImage}
            >
                <TouchableOpacity
                    style={styles.backIcon}
                    onPress={() => navigation.goBack()}
                >
                    <Entypo
                        name="chevron-left"
                        size={32}
                        color={colors.white}
                    />
                </TouchableOpacity>
                <View style={styles.itemTitleWrapper}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={styles.itemLocationWrapper}>
                        <Entypo
                            name="location-pin"
                            size={24}
                            color={colors.white}
                        />
                        <Text style={styles.itemLocationText}>
                            {item.location}
                        </Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.descriptionWrapper}>
                <View style={styles.heartWrapper}>
                    <TouchableOpacity style={styles.heartPressable} onPress={() => setLiked(!liked)}>
                        <Entypo
                            name="heart"
                            color={liked ? colors.orange : colors.gray}
                            size={34}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.descriptionTextWrapper}>
                    <Text style={styles.descriptionTitle}>Description</Text>
                    <Text style={styles.descriptionText}>
                        {item.description}
                    </Text>
                </View>

                <View style={styles.infoWrapper}>
                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>PRICE</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>${item.price}</Text>
                            <Text style={styles.infoTextSecond}>/person</Text>
                        </View>
                    </View>

                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>RATING</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>{item.rating}</Text>
                            <Text style={styles.infoTextSecond}>/5</Text>
                        </View>
                    </View>

                    <View style={styles.infoItem}>
                        <Text style={styles.infoTitle}>DURATION</Text>
                        <View style={styles.infoTextWrapper}>
                            <Text style={styles.infoText}>{item.duration}</Text>
                            <Text style={styles.infoTextSecond}> hours</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.bookWrapper}>
                    <View style={styles.bookButton}>
                        <TouchableOpacity style={styles.buttonPressable} onPress={()=> Alert.alert("You booked a trip!")}>
                            <Text style={styles.bookText}>Book Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    area: {
        marginVertical: 10,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    backgroundImage: {
        height: Dimensions.get("window").height * 0.6,
        justifyContent: "space-between",
    },
    descriptionWrapper: {
        flex: 1,
        backgroundColor: colors.white,
        marginTop: -20,
        borderRadius: 25,
    },
    backIcon: {
        width: 32,
        marginLeft: 25,
        marginTop: 45,
    },
    itemTitleWrapper: {
        marginHorizontal: 20,
    },
    itemTitle: {
        color: colors.white,
        fontSize: 32,
        fontWeight: "800",
    },
    itemLocationWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 50,
        marginVertical: 7,
    },
    itemLocationText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "400",
    },
    heartWrapper: {
        position: "absolute",
        height: 64,
        width: 64,
        borderRadius: 64,
        right: 40,
        top: -30,
        backgroundColor: colors.white,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    heartPressable: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    descriptionTextWrapper: {
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    descriptionTitle: {
        fontSize: 24,
        marginLeft: 10
    },
    descriptionText: {
        marginTop: 20,
        fontSize: 16,
        color: colors.gray,
        height: 100
    },
    infoWrapper: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    infoItem: {
        // marginRight: 52
    },
    infoTitle: {
        fontSize: 12,
        color: colors.gray,
    },
    infoTextWrapper: {
        flexDirection: "row",
        marginTop: 5,
        alignItems: "baseline",
    },
    infoText: {
        color: colors.orange,
        fontSize: 24,
    },
    infoTextSecond: {
        fontSize: 14,
        color: colors.gray,
    },
    bookWrapper: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 34,
    },
    bookButton: {
        justifyContent: "center",
        backgroundColor: colors.orange,
        width: 320,
        height: 50,
        borderRadius: 10
    },
    buttonPressable: {
        width:  "100%",
        alignItems: "center",

    },
    bookText: {
        color: colors.white,
        fontSize: 18
    },
});

export default Details;
