// LabResultsScreen.tsx
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

// Типизация навигации
type NavigationProp = StackNavigationProp<RootStackParamList, "LabResults">;

// Общий Header
function Header() {
    return (
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

    );
}

// Профиль пациента
function PatientProfile() {
    return (
        <View style={styles.patientProfile}>
            <Text style={styles.patientName}>Серик Аман</Text>
            <Text style={styles.patientInfo}>690512333555 | A2 R+</Text>

        </View>
    );
}

interface ResultCardProps {
    title: string;
    date: string;
    status: string;
    onPress?: () => void;
}

// Карточка результата
function ResultCard({ title, date, status, onPress }: ResultCardProps) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={styles.resultCard}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.resultName}>{title}</Text>
                    <Text style={styles.resultDate}>{date}</Text>
                </View>
                {/* Объединяем value + arrow в один блок */}
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.value}>{status}</Text>
                    <Text style={styles.arrow}>›</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

// Нижняя навигация
function BottomNav() {
    return (
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
    );
}

export default function LabResultsScreen() {
    const navigation = useNavigation<NavigationProp>();

    const results = [
        { title: "Гемоглобин", date: "05 янв 2025", status: "98" },
        { title: "Белок общий", date: "06 янв 2025", status: "70" },
        { title: "Билирубин", date: "07 янв 2025", status: "10" },
        { title: "Креатинин", date: "10 янв 2025", status: "" },
        { title: "Лейкоциты", date: "10 янв 2025", status: "200" },
        { title: "Тромбоциты", date: "10 янв 2025", status: "200" },
        { title: "СОЭ", date: "10 янв 2025", status: "15" },
        { title: "Эритроциты", date: "10 янв 2025", status: "70" },
    ];

    return (
        <View style={styles.container}>
            <Header />

            <ScrollView
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                <PatientProfile />

                {/* Панель результатов */}
                <View style={styles.resultPanel}>
                    <Text style={styles.resultTitle}>Результаты анализов</Text>

                    {results.map((item, index) => (
                        <ResultCard
                            key={index}
                            title={item.title}
                            date={item.date}
                            status={item.status}
                            onPress={() => {
                                if (item.title === "Гемоглобин") {
                                    navigation.navigate("Results");
                                }
                            }}
                        />
                    ))}
                </View>
            </ScrollView>

            <BottomNav />
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
    // Header
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
    mediTrack: { fontSize: 30, fontWeight: "700", color: "#000" },
    tagline: { fontSize: 16, fontWeight: "400", color: "#000", marginTop: -2 },

    scrollContainer: { width: "90%" },

    // Профиль пациента
    patientProfile: {
        paddingVertical: 5,
        alignItems: "flex-start",
        marginBottom: 20,
    },
    patientName: { fontSize: 24, fontWeight: "700", color: "#000" },
    patientInfo: { fontSize: 18, fontWeight: "400", color: "#000", marginTop: 2 },

    // Панель результатов
    resultPanel: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
    },
    resultTitle: { fontSize: 18, fontWeight: "700", marginBottom: 10 },

    // Карточка результата
    resultCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    resultName: { fontSize: 18, fontWeight: "600", color: "#000" },
    resultDate: { fontSize: 12, color: "#777" },
    resultStatus: { fontSize: 16, fontWeight: "600", marginHorizontal: 12 },
    arrow: { fontSize: 22, color: "#999" },

    value: {
        fontSize: 20,
        fontWeight: "600",
        color: "#000", // обычный чёрный
        marginRight: 8,
    },

    // BottomNav
    bottomNav: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        paddingVertical: 12,
        borderTopWidth: 1,
        borderColor: "#ddd",
        backgroundColor: "#fff",
    },
    navIcon: {
        width: 30,
        height: 28,
        resizeMode: "contain",

    },
});
