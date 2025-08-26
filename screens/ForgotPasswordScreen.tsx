import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
} from "react-native";

export default function ForgotPasswordScreen({ navigation }: any) {
    const [identifier, setIdentifier] = useState("");

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    
                    <ScrollView
                        style={{ flex: 1 }}
                        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between", paddingTop: 40, }}
                        keyboardShouldPersistTaps="handled"
                    >
                        <View style={styles.card}>
                            <Text style={styles.title}>Восстановление пароля</Text>
                            <Text style={styles.subtitle}>
                                Пожалуйста, введите ваш ИИН или Email
                            </Text>

                            <TextInput
                                style={styles.input}
                                placeholder="ИИН или Email"
                                value={identifier}
                                onChangeText={setIdentifier}
                                keyboardType="email-address"
                            />

                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Восстановить пароль</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate("Login")}
                                style={{ marginTop: 12 }}
                            >
                                <Text style={styles.link}>Вернуться ко входу</Text>
                            </TouchableOpacity>
                        </View>

                      
                        <View style={styles.middle}>
                            <View style={styles.placeholder}>
                                <Text style={styles.placeholderText}>QR </Text>
                            </View>
                            <View style={styles.placeholder}>
                                <Text style={styles.placeholderText}>ЭЦП</Text>
                            </View>
                        </View>

                        
                        <View style={styles.footer}>
                            <View style={styles.footer}>
                                <Text style={styles.footerText}>Настоящему соглашению пользователь обязуется соблюдать меры по защите персональных данных и врачебной тайны.</Text>
                                <Text style={styles.footerText}>В случае нарушения конфиденциальности и допуска несанкционированного доступа к таким данным, Пользователь несет ответственность в соответствии с законодательством.</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f6f8",
        padding: 20,
    },
    card: {
        backgroundColor: "#fff",
        padding: 24,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        marginTop: 120,
    },
    title: {
        fontSize: 22,
        fontWeight: "600",
        color: "#333",
        textAlign: "center",
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
        marginBottom: 16,
    },
    input: {
        height: 45,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        backgroundColor: "#fff",
        paddingHorizontal: 12,
        marginBottom: 16,
    },
    button: {
        height: 48,
        borderRadius: 8,
        backgroundColor: "#099453",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
    link: { color: "#1976d2", textAlign: "center", fontSize: 14 },
    middle: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
        gap: 10,
    },
    placeholder: {
        flex: 1,
        height: 60,
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: "#ccc",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    placeholderText: { fontSize: 12, color: "#999" },
    footer: {
        marginTop: 30,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
    },
    footerText: {
        fontSize: 12,
        color: "#666",
        textAlign: "justify",
        lineHeight: 16,
        letterSpacing: 0.2,
    },
});
