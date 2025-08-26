# MediTrack - Backend Documentation

## Описание
MediTrack — мобильное приложение для пациентов, позволяющее хранить и отслеживать медицинские данные: аллергии, анализы, результаты измерений, профиль пациента.

## Экраны и поля

### 1. LoginScreen
- **login**: string (обязательный)
- **password**: string (обязательный)
- **setIsLoggedIn**: function (функция изменения состояния логина)

### 2. RegisterScreen
Обязательные поля:
- login: string
- password: string
- confirmPassword: string
- surname: string
- name: string
- birthDate: Date
- gender: "male" | "female"
- region: string
- address: string

Необязательные:
- iin: string
- patronymic: string
- phone: string

### 3. ForgotPasswordScreen
- identifier: string (ИИН или Email)

### 4. HomeScreen
- patient:
  - name: string
  - iin: string
  - bloodType: string
  - insulinDependency: boolean
  - bloodPressure: { systolic: number, diastolic: number, status: string, date: string }

### 5. AllergiesScreen
- allergies: Array<{ name: string, date: string, status: "Да" | "Нет" }>

### 6. LabResultsScreen
- labResults: Array<{
    title: string,
    date: string,
    status: string
  }>
- Клик по "Гемоглобин" переходит в ResultsScreen

### 7. ResultsScreen
- results: Array<{ date: string, value: string }>
- Динамика анализов строится на основе этих данных

## Типы данных
- String: текстовые поля (имя, фамилия, адрес)
- Number: числовые значения анализов и давления
- Boolean: зависимости (например, insulinDependency)
- Date: даты рождения и анализов
- Enum: gender ("male" | "female"), allergyStatus ("Да" | "Нет")

## Навигация
- React Navigation Stack
- Экраны:
  - Login, Register, ForgotPassword
  - Home, Allergies, LabResults, Results
- isLoggedIn управляет доступом к приватным экранам

## Примечания
- Все даты хранятся в формате `DD MMM YYYY` (например, `01 янв 2025`)
- Для графиков используется LineChart, данные передаются массивом чисел
- Нижняя навигация — иконки, без функционала на текущий момент


