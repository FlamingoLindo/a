import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-toast-message';
import { useRouter } from "expo-router";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';

const data = [
    { label: 'Churrasqueira', value: '1' },
    { label: 'Salão de Festas', value: '2' },
    { label: 'Piscina', value: '3' },
    { label: 'Academia', value: '4' },
    { label: 'Playground', value: '5' },
    { label: 'Garagem', value: '6' },
    { label: 'Área Verde', value: '7' },
    { label: 'Salão de Jogos', value: '8' },
];

export default function ReservarScreen() {
    const router = useRouter();
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null); // null means no date picked

    function formatDate(date: Date | null): string {
        if (!date) return 'dd / mm / yyyy';
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day} / ${month} / ${year}`;
    }

    return (
        <LinearGradient
            colors={['#5e6eff', '#a142e4']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <View style={styles.card}>
                <Text style={styles.title}>Reserva de Espaços</Text>

                <Dropdown
                    // style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    style={[styles.dropdown]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    containerStyle={styles.dropdownContainer}
                    itemContainerStyle={styles.dropdownItemContainer}
                    iconStyle={styles.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Selecione um espaço' : '...'}
                    searchPlaceholder="Pesquisar..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                    renderLeftIcon={() => (
                        <AntDesign
                            style={styles.icon}
                            color={isFocus ? 'black' : 'black'}
                            name="home"
                            size={20}
                        />
                    )}
                />

                <TouchableOpacity
                    style={styles.dateInput}
                    onPress={() => setShowDatePicker(true)}
                    activeOpacity={0.8}
                >
                    <Text style={styles.dateInputText}>
                        {formatDate(selectedDate)}
                    </Text>
                    <AntDesign name="calendar" size={22} color="#fff" style={styles.calendarIcon} />
                </TouchableOpacity>
                {showDatePicker && (
                    <DateTimePicker
                        value={selectedDate || new Date()}
                        mode="date"
                        is24Hour={true}
                        display="default"
                        onChange={(event, date) => {
                            setShowDatePicker(false);
                            if (date) setSelectedDate(date);
                        }}
                    />
                )}

                <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={() => {
                        Toast.show({
                            type: 'success',
                            text1: 'Reserva feita com sucesso!',
                            text2: 'Você receberá uma confirmação por e-mail.',
                        });
                        router.push('../');
                    }}
                >
                    <Text style={styles.submitBtnText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '90%',
        backgroundColor: 'rgba(185, 133, 255, 0.35)',
        padding: 20,
        borderRadius: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 18,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: 'rgb(242, 234, 255)',
        marginBottom: 16,
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'rgb(0, 0, 0)',
    },
    selectedTextStyle: {
        fontSize: 16,
        color: '#333'
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    dropdownContainer: {
        backgroundColor: 'rgba(185, 133, 255, 0.95)', // panel background
        borderRadius: 8,
    },
    dropdownItemContainer: {
        backgroundColor: 'rgba(185, 133, 255, 0.15)', // item background
        borderRadius: 8,
    },
    dateInput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#a142e4', // your purple
        borderRadius: 8,
        paddingHorizontal: 14,
        height: 48,
        marginBottom: 18,
        justifyContent: 'space-between',
    },
    dateInputText: {
        color: '#fff',
        fontSize: 18,
        letterSpacing: 1,
    },
    calendarIcon: {
        marginLeft: 10,
    },
    submitBtn: {
        backgroundColor: 'rgba(94, 110, 255, 0.96)',
        borderRadius: 8,
        paddingVertical: 13,
        marginTop: 6,
        alignItems: 'center',
    },
    submitBtnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
