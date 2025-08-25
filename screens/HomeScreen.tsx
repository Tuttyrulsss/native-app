import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Image,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App"; 

type HomeScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    "Home"
>;

export default function HomeScreen({
    navigation,
}: {
    navigation: HomeScreenNavigationProp;
}) {
    return (
        <View style={styles.container}>
            {/* Верхняя панель */}
            <View style={styles.topBar}>
                <Image
                    source={require("../assets/media.png")}
                    style={styles.logo}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.mediTrack}>MediTrack</Text>
                    <Text style={styles.tagline}>Жизнь без границ</Text>
                </View>
            </View>

            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={{ gap: 20 }}
            >
                {/* Карточка пациента */}
                <View style={styles.patientProfile}>
                    <Text style={styles.patientName}>Серик Аман</Text>
                    <Text style={styles.patientInfo}>690512333555 | A2 R+</Text>
                </View>

                {/* Панели здоровья */}
                <View style={styles.healthPanels}>
                    <TouchableOpacity
                        style={styles.panel}
                        onPress={() => navigation.navigate("Allergies")}
                    >
                        <Text style={styles.panelText}>Аллергии</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.panel}
                        onPress={() => navigation.navigate("LabResults")}
                    >
                        <Text style={styles.panelText}>Результаты анализов</Text>
                    </TouchableOpacity>

                    <View style={styles.panel}>
                        <Text style={styles.panelText}>Зависимость от инсулина: Да</Text>
                    </View>

                    <View style={styles.bloodPressurePanel}>
                        <Text style={styles.panelTitle}>Давление</Text>
                        <Text style={styles.pressure}>
                            140/50 <Text style={styles.mmHg}>мм рт.ст.</Text>
                        </Text>
                        <Text style={styles.date}>27 апр 2025</Text>
                        <View style={styles.pressureStatus}>
                            <Text style={styles.statusText}>Повышенное</Text>
                        </View>
                    </View>
                </View>

                {/* Последние результаты */}
                <View style={styles.lastResults}>
                    <Text style={styles.lastResultsTitle}>Последние результаты</Text>

                    <View style={styles.resultItem}>
                        <View style={styles.resultIcon}></View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.resultTitle}>Инсулин</Text>
                            <Text style={styles.resultDate}>15 марта 2024</Text>
                        </View>
                    </View>

                    <View style={styles.resultItem}>
                        <View style={styles.resultIcon}></View>
                        <Text style={styles.resultText}>Хронические заболевания</Text>
                    </View>

                    <View style={styles.resultItem}>
                        <View style={styles.resultIcon}></View>
                        <Text style={styles.resultText}>Принимаемые лекарства</Text>
                    </View>
                </View>
            </ScrollView>

            {/* Нижняя навигация */}
            <View style={styles.bottomNav}>
                <TouchableOpacity>
                    <Image
                        source={require("../image/main.png")}
                        style={styles.navIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require("../image/time.png")}
                        style={styles.navIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require("../image/add.png")}
                        style={styles.navIcon}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require("../image/profile.png")}
                        style={styles.navIcon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F4FB",
        paddingTop: 50,
        alignItems: "center",
    },
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    logo: {
        width: 48,
        height: 48,
        resizeMode: "contain",
        borderRadius: 10,
    },
    titleContainer: {
        flexDirection: "column",
        marginLeft: 10,
    },
    mediTrack: {
        fontSize: 30,
        fontWeight: "700",
        color: "#000",
    },
    tagline: {
        fontSize: 16,
        fontWeight: "400",
        color: "#000",
        marginTop: -2,
    },
    scrollContainer: {
        width: "90%",
    },
    patientProfile: {
        paddingVertical: 5,
        alignItems: "flex-start",
    },
    patientName: { fontSize: 30, fontWeight: "700", color: "#000" },
    patientInfo: { fontSize: 20, fontWeight: "400", color: "#000", marginTop: 2 },

    healthPanels: { gap: 10, marginBottom: 1 },
    panel: {
        backgroundColor: "#fff",
        borderRadius: 36,
        padding: 15,
    },
    bloodPressurePanel: {
        backgroundColor: "#fff",
        borderRadius: 36,
        padding: 15,
        position: "relative",
    },
    panelTitle: { fontSize: 16, fontWeight: "500", color: "#000" },
    pressure: { fontSize: 30, fontWeight: "700", color: "#03A05F" },
    mmHg: { fontSize: 18, fontWeight: "400", color: "#000" },
    date: { fontSize: 18, color: "#000" },
    pressureStatus: {
        position: "absolute",
        right: 10,
        top: 25,
        backgroundColor: "#E5F8F0",
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
    },
    statusText: { fontSize: 13, fontWeight: "700", color: "#03A05F" },

    lastResults: {
        backgroundColor: "#fff",
        borderRadius: 36,
        padding: 20,
        marginBottom: 20,
    },
    lastResultsTitle: { fontSize: 16, fontWeight: "700", marginBottom: 10 },
    resultItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 10,
        flexWrap: "wrap",
    },
    resultIcon: {
        width: 42,
        height: 42,
        backgroundColor: "#F1F2F2",
        borderRadius: 21,
    },
    resultText: {
        fontSize: 14,
        color: "#000",
        flexShrink: 1,
        flexWrap: "wrap",
        flex: 1,
    },
    resultTitle: { fontWeight: "700" },
    resultDate: { fontWeight: "400" },

    panelText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#000",
    },

    // --- нижняя навигация ---
    bottomNav: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 12,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: "100%",
        position: "absolute",
        bottom: 0,
    },
    navIcon: {
        width: 30,
        height: 28,
        resizeMode: "contain",

    },
});
