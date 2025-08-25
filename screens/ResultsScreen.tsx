// ResultsScreen.tsx
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";


const screenWidth = Dimensions.get("window").width;

// ====== Header ======
function Header() {
    return (
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
    );
}

// ====== Bottom Nav ======
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

// ====== Result Item ======
function ResultItem({ date, value }: { date: string; value: string }) {
    return (
        <View style={styles.resultItem}>
            <Text style={styles.resultDate}>{date}</Text>
            <Text style={styles.resultValue}>{value}</Text>
        </View>
    );
}

// ====== Main Screen ======
export default function ResultsScreen() {
    const results = [
        { date: "01 янв 2025    ", value: "120" },
        { date: "05 янв 2025    ", value: "103" },
        { date: "10 янв 2025    ", value: "110" },
        { date: "15 янв 2025    ", value: "106" },
        { date: "20 янв 2025    ", value: "105" },
        { date: "21 янв 2025    ", value: "103" },
        { date: "23 янв 2025    ", value: "102" },
        { date: "25 янв 2025    ", value: "98" },
    ];

    return (
        <View style={styles.container}>
            <Header />

            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                {/* ===== График ===== */}
                <View style={styles.chartContainer}>
                    <Text style={styles.chartTitle}>Динамика анализов</Text>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <LineChart
                            data={{
                                labels: results.map((r) => r.date),
                                datasets: [{ data: results.map((r) => Number(r.value)) }],
                            }}
                            width={results.length * 100} // ширина зависит от количества точек
                            height={220}
                            chartConfig={{
                                backgroundColor: "#ffffff",
                                backgroundGradientFrom: "#ffffff",
                                backgroundGradientTo: "#ffffff",
                                decimalPlaces: 0,
                                color: (opacity = 1) => `rgba(86, 94, 112, ${opacity})`,
                                labelColor: () => "#000",
                                propsForDots: { r: "5", strokeWidth: "2", stroke: "#565E70" },
                            }}
                            bezier
                            style={styles.chart}
                        />
                    </ScrollView>
                </View>


                {/* ===== Список по датам ===== */}
                <View style={styles.resultsList}>
                    <Text style={styles.listTitle}>Результаты по датам</Text>
                    {results.map((item, index) => (
                        <ResultItem key={index} date={item.date} value={item.value} />
                    ))}
                </View>
            </ScrollView>

            <BottomNav />
        </View>
    );
}

// ====== Styles ======
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F4FB",
        paddingTop: 50,
        alignItems: "center",
    },
    scrollContainer: {
        width: "90%",
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
    titleContainer: { marginLeft: 10 },
    mediTrack: { fontSize: 30, fontWeight: "700", color: "#000" },
    tagline: { fontSize: 16, fontWeight: "400", color: "#000", marginTop: -2 },


    chartContainer: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
    },
    chartTitle: { fontSize: 18, fontWeight: "700", marginBottom: 10 },
    chart: { borderRadius: 10 },

    // Results list
    resultsList: {
        backgroundColor: "#fff",
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
    },
    listTitle: { fontSize: 18, fontWeight: "700", marginBottom: 10 },
    resultItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    resultDate: { fontSize: 16, color: "#000" },
    resultValue: { fontSize: 16, fontWeight: "600", color: "#000" },


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
