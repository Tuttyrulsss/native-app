// screens/RegisterScreen.tsx
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker, {
    DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    KeyboardAvoidingView,
    Platform,
} from "react-native";

export default function RegisterScreen({ navigation }: any) {
    const [open, setOpen] = useState(false);
    const [gender, setGender] = useState<string | null>(null);
    const [items, setItems] = useState([
        { label: "Мужской", value: "male" },
        { label: "Женский", value: "female" },
    ]);

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [iin, setIin] = useState("");
    const [surname, setSurname] = useState("");
    const [name, setName] = useState("");
    const [patronymic, setPatronymic] = useState("");
    const [birthDate, setBirthDate] = useState<Date | null>(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [region, setRegion] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const handleRegister = () => {
        if (!login || !password || !confirmPassword || !surname || !name) {
            alert("Заполните все обязательные поля");
            return;
        }
        if (password !== confirmPassword) {
            alert("Пароли не совпадают");
            return;
        }
        alert("Регистрация успешна!");
        navigation.goBack();
    };

    const onChangeDate = (event: DateTimePickerEvent, selectedDate?: Date) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setBirthDate(selectedDate);
        }
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ paddingBottom: 100 }}
                keyboardShouldPersistTaps="handled"
            >
                {/* Заголовок */}
                <View style={styles.header}>
                    <Text style={styles.title}>Регистрация</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.link}>У меня уже есть аккаунт  </Text>
                    </TouchableOpacity>
                </View>

                {/* Поля */}
                <Text style={styles.label}>* Логин</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Введите логин"
                    value={login}
                    onChangeText={setLogin}
                />
                <Text style={styles.hint}>
                    Логином может быть ваш ИИН, электронная почта, номер телефона, фамилия
                    имя на латинице
                </Text>

                <Text style={styles.label}>* Пароль</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />

                <Text style={styles.label}>* Повторите пароль</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />

                <Text style={styles.label}>ИИН</Text>
                <TextInput
                    style={styles.input}
                    value={iin}
                    onChangeText={setIin}
                    keyboardType="numeric"
                />

                <Text style={styles.label}>* Фамилия</Text>
                <TextInput
                    style={styles.input}
                    value={surname}
                    onChangeText={setSurname}
                />

                <Text style={styles.label}>* Имя</Text>
                <TextInput style={styles.input} value={name} onChangeText={setName} />

                <Text style={styles.label}>Отчество</Text>
                <TextInput
                    style={styles.input}
                    value={patronymic}
                    onChangeText={setPatronymic}
                />

                <Text style={styles.label}>* Дата рождения</Text>
                <TouchableOpacity
                    style={styles.input}
                    onPress={() => setShowDatePicker(true)}
                >
                    <Text>
                        {birthDate
                            ? birthDate.toLocaleDateString()
                            : "Выберите дату рождения"}
                    </Text>
                </TouchableOpacity>
                {showDatePicker && (
                    <DateTimePicker
                        value={birthDate || new Date()}
                        mode="date"
                        display="default"
                        onChange={onChangeDate}
                    />
                )}

                <Text style={styles.label}>* Пол</Text>
                <DropDownPicker
                    open={open}
                    value={gender}
                    items={items}
                    setOpen={setOpen}
                    setValue={setGender}
                    setItems={setItems}
                    placeholder="Выберите пол"
                    style={{
                        borderColor: "#ccc",
                        borderRadius: 8,
                        height: 45,
                        marginBottom: 15,
                    }}
                    dropDownContainerStyle={{
                        borderColor: "#ccc",
                    }}
                />

                <Text style={styles.label}>* Область</Text>
                <TextInput
                    style={styles.input}
                    value={region}
                    onChangeText={setRegion}
                />

                <Text style={styles.label}>* Адрес</Text>
                <TextInput
                    style={styles.input}
                    value={address}
                    onChangeText={setAddress}
                />

                <Text style={styles.label}>Телефон</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="phone-pad"
                    value={phone}
                    onChangeText={setPhone}
                />

                {/* Кнопка */}
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Запросить код подтверждения</Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
        padding: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25,
        marginTop: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    link: {
        fontSize: 13,
        color: "#3498db",
        marginTop: 7,
        marginBottom: 30,
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 5,
    },
    hint: {
        fontSize: 12,
        color: "#7f8c8d",
        marginBottom: 10,
    },
    input: {
        width: "100%",
        height: 45,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        justifyContent: "center",
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
        marginTop: 20,
        marginBottom: 40,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
