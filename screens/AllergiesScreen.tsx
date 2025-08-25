import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image, 
} from "react-native";

export default function HomeScreen() {
    const allergies = [
        { name: "Артикаин", date: "01 янв 2025", status: "Да" },
        { name: "Анальгин", date: "01 янв 2025", status: "Да" },
        { name: "Аспирин", date: "01 янв 2025", status: "Да" },
        { name: "Диклофенак", date: "01 янв 2025", status: "Нет" },
        { name: "Ибупрофен", date: "01 янв 2025", status: "Да" },
        { name: "Новокаин", date: "01 янв 2025", status: "Да" },
        { name: "Убестизин", date: "01 янв 2025", status: "Да" },
    ];

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
                    <Text style={styles.tagline}>жизнь без границ</Text>
                </View>
            </View>

            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                {/* Профиль пациента */}
                <View style={styles.patientProfile}>
                    <Text style={styles.patientName}>Серик Аман</Text>
                    <Text style={styles.patientInfo}>690512333555 | A2 R+</Text>
                </View>

                {/* Аллергии */}
                <View style={styles.allergyPanel}>
                    <Text style={styles.allergyTitle}>Аллергии</Text>

                    {allergies.map((item, index) => (
                        <View key={index} style={styles.allergyCard}>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.allergyName}>{item.name}</Text>
                                <Text style={styles.allergyDate}>{item.date}</Text>
                            </View>

                            <Text
                                style={[
                                    styles.allergyStatus,
                                    { color: item.status === "Да" ? "#000" : "#03A05F" },
                                ]}
                            >
                                {item.status}
                            </Text>

                            <Text style={styles.arrow}>›</Text>
                        </View>
                    ))}
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
        borderRadius: 10,
        resizeMode: "contain", 
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
        marginBottom: 20,
    },
    patientName: { fontSize: 24, fontWeight: "700", color: "#000" },
    patientInfo: { fontSize: 18, fontWeight: "400", color: "#000", marginTop: 2 },

    allergyPanel: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
    },
    allergyTitle: { fontSize: 18, fontWeight: "700", marginBottom: 10 },
    allergyCard: {
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
    allergyName: { fontSize: 16, fontWeight: "600", color: "#000" },
    allergyDate: { fontSize: 12, color: "#777" },
    allergyStatus: {
        fontSize: 16,
        fontWeight: "600",
        marginHorizontal: 12,
    },
    arrow: { fontSize: 22, color: "#999" },

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
