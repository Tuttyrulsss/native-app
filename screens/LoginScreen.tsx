// screens/LoginScreen.tsx
import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App"; // 👈 важно, импортируй типы из App.tsx

type LoginScreenProps = {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    
};

// Определяем тип для навигации
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "Login">;

export default function LoginScreen({ setIsLoggedIn }: LoginScreenProps) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigation = useNavigation<LoginScreenNavigationProp>(); // ✅ теперь доступен navigation

    const handleLogin = () => {
        if (username.trim() === "") {
            Alert.alert("Ошибка", "Введите логин");
            return;
        }
        if (password === "1234") {
            setIsLoggedIn(true);
        } else {
            Alert.alert("Ошибка", "Неверный пароль. Попробуйте ещё раз.");
        }
    };

    return (
        <View style={styles.container}>
            {/* Шапка */}
            <View style={styles.header}>
                <Image source={require("../assets/media.png")} style={styles.logo} />
                <View>
                    <Text style={styles.companyName}>MediTrack</Text>
                    <Text style={styles.subTitle}>жизнь без границ</Text>
                </View>
            </View>

            {/* Заголовок */}
            <Text style={styles.title}>Войти</Text>

            {/* Основная часть (форма) */}
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Логин"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Пароль"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Войти</Text>
                </TouchableOpacity>

                {/* Ссылки */}
                <View style={styles.links}>
                    <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                        <Text style={styles.linkText}>Забыли пароль? </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={styles.linkText}>Зарегистрироваться </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        paddingHorizontal: 20,
        paddingTop: 90,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 40,
        marginTop: 80,
    },
    logo: {
        width: 50,
        height: 50,
        marginRight: 10,
        borderRadius: 8,
    },
    companyName: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#2c3e50",
    },
    subTitle: {
        fontSize: 14,
        color: "#7f8c8d",
    },
    title: {
        fontSize: 22,
        fontWeight: "600",
        marginBottom: 30,
        color: "#000",
    },
    form: {
        flex: 1,
        justifyContent: "flex-start",
    },
    input: {
        width: "100%",
        height: 50,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        backgroundColor: "#fff",
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: "#27ae60",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
    links: {
        paddingTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
    },
    linkText: {
        fontSize: 14,
        color: "#7f8c8d",
    },
});
