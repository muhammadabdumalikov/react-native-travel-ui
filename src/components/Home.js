import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Image,
    FlatList,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import * as Font from "expo-font";
import { Feather, Entypo } from "react-native-vector-icons";

import colors from "../../assets/colors/colorsData";
import activitiesData from "../../assets/data/activiesData";
import profile from "../../assets/images/person.png";
import discoverData from "../../assets/data/dataDiscovery";
import learnMoreData from "../../assets/data/learnMoreData";

const Home = ({ navigation }) => {
    const renderDiscoverItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Details", { item });
                    
                }}
            >
                <ImageBackground
                    source={item.image}
                    style={styles.discoverItem}
                    imageStyle={[
                        styles.discoverItemImage,
                        { marginLeft: item.id === "discover-1" ? 10 : 0 },
                    ]}
                >
                    <Text style={styles.discoverItemTitle}>{item.title}</Text>
                    <View style={styles.discoverItemLocationWrapper}>
                        <Entypo
                            name="location-pin"
                            size={18}
                            color={colors.white}
                        />
                        <Text style={styles.discoverItemLocationText}>
                            {item.location}
                        </Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    };

    const renderActiviesItem = ({ item }) => {
        return (
            <View style={styles.activityItem}>
                <Image source={item.image} style={styles.activityItemImage} />
                <Text style={styles.activityItemText}>{item.title}</Text>
            </View>
        );
    };

    const renderLearnMoreItem = ({ item }) => {
        return (
            <ImageBackground
                style={[
                    styles.learnMoreItem,
                    { marginLeft: item.id === "learnMore-1" ? 20 : 0 },
                ]}
                source={item.image}
                imageStyle={styles.learnMoreItemImage}
            >
                <Text style={styles.learnMoreItemText}>{item.title}</Text>
            </ImageBackground>
        );
    };

    return (
        <SafeAreaView style={styles.area}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    {/* Header */}
                    <View style={styles.menuWrapper}>
                        <Feather
                            name="menu"
                            size={32}
                            color={colors.black}
                            style={styles.menuIcon}
                        />
                        <Image source={profile} style={styles.profileImg} />
                    </View>

                    {/* Discover */}
                    <View style={styles.discoverWrapper}>
                        <Text style={styles.dicoverTitle}>Discover</Text>
                        <View style={styles.discoverCategories}>
                            <Text
                                style={{
                                    ...styles.discoverCategoriesText,
                                    color: colors.orange,
                                }}
                            >
                                All
                            </Text>
                            <Text style={styles.discoverCategoriesText}>
                                Cities
                            </Text>
                            <Text style={styles.discoverCategoriesText}>
                                Destinations
                            </Text>
                            <Text style={styles.discoverCategoriesText}>
                                Experiences
                            </Text>
                        </View>
                        <View style={styles.discoverItemWrapper}>
                            <FlatList
                                data={discoverData}
                                renderItem={renderDiscoverItem}
                                keyExtractor={(item) => item.id}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>

                        {/* Activies */}
                        <View style={styles.activiesWrapper}>
                            <Text style={styles.activiesText}>Activities</Text>
                            <View style={styles.activiesItemWrapper}>
                                <FlatList
                                    data={activitiesData}
                                    renderItem={renderActiviesItem}
                                    keyExtractor={(item) => item.id}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        </View>

                        {/* Learn More */}
                        <View style={styles.learnMoreWrapper}>
                            <Text style={styles.learnMoreTitle}>
                                Learn More
                            </Text>
                            <View style={styles.learnMoreItemsWrapper}>
                                <FlatList
                                    data={learnMoreData}
                                    renderItem={renderLearnMoreItem}
                                    keyExtractor={(item) => item.id}
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    area: {
        padding: 10,
        paddingBottom: 20,
        // margin: 10
    },
    container: {
        flex: 1,
        color: colors.white,
    },
    menuWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 40,
    },
    profileImg: {
        width: 52,
        height: 52,
        borderRadius: 10,
    },
    discoverWrapper: {
        marginTop: 20,
    },
    dicoverTitle: {
        fontSize: 32,
        fontWeight: "bold",
        marginHorizontal: 15,
    },
    discoverCategories: {
        flexDirection: "row",
        marginTop: 20,
        marginHorizontal: 5,
    },
    discoverCategoriesText: {
        marginRight: 30,
        color: colors.gray,
    },
    discoverItemWrapper: {
        paddingVertical: 20,
    },
    discoverItem: {
        width: 170,
        height: 250,
        justifyContent: "flex-end",
        marginRight: 30,
    },
    discoverItemImage: {
        borderRadius: 20,
    },
    discoverItemTitle: {
        fontSize: 18,
        color: colors.white,
        marginHorizontal: 15,
        marginVertical: 10,
    },
    discoverItemLocationWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15,
        marginBottom: 15,
    },
    discoverItemLocationText: {
        marginLeft: 5,
        fontSize: 14,
        color: colors.white,
    },
    activiesWrapper: {
        marginTop: 10,
    },
    activiesText: {
        marginHorizontal: 15,
        fontSize: 24,
        fontWeight: "bold",
        color: colors.black,
    },
    activiesItemWrapper: {
        paddingVertical: 15,
    },
    activityItem: {
        justifyContent: "flex-end",
        alignItems: "center",
        marginRight: 20,
    },
    activityItemImage: {
        width: 36,
        resizeMode: "contain",
    },
    activityItemText: {
        marginTop: 5,
        fontSize: 14,
        color: colors.gray,
    },
    learnMoreWrapper: {
        marginTop: 10,
    },
    learnMoreTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 20,
        marginHorizontal: 15,
    },
    learnMoreItem: {
        width: 170,
        height: 180,
        justifyContent: "flex-end",
        marginRight: 20,
    },
    learnMoreItemImage: {
        borderRadius: 20,
    },
    learnMoreItemText: {
        fontSize: 18,
        color: colors.white,
        marginHorizontal: 10,
        marginVertical: 20,
    },
});

export default Home;
