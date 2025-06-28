import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-toast-message';
import { useRouter } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import DateTimePicker from '@react-native-community/datetimepicker';



export default function VisitantesScreen() {
    const router = useRouter();

    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const [showTimePicker, setShowTimePicker] = useState(false);
    const [selectedTime, setSelectedTime] = useState<Date | null>(null);

    function formatDate(date: Date | null): string {
        if (!date) return 'dd / mm / yyyy';
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day} / ${month} / ${year}`;
    }

    function formatTime(date: Date | null): string {
        if (!date) return '--:--';
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }

    return (
        <LinearGradient
            colors={['#5e6eff', '#a142e4']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <View style={styles.card}>
                <Text style={styles.title}>Visitantes</Text>
                <TextInput
                    placeholder="Nome do visitante"
                    placeholderTextColor="#f3eaff"
                    style={styles.input}
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
                    style={styles.dateInput}
                    onPress={() => setShowTimePicker(true)}
                    activeOpacity={0.8}
                >
                    <Text style={styles.dateInputText}>
                        {formatTime(selectedTime)}
                    </Text>
                    <AntDesign name="clockcircleo" size={22} color="#fff" style={styles.calendarIcon} />
                </TouchableOpacity>
                {showTimePicker && (
                    <DateTimePicker
                        value={selectedTime || new Date()}
                        mode="time"
                        is24Hour={true}
                        display="default"
                        onChange={(event, date) => {
                            setShowTimePicker(false);
                            if (date) setSelectedTime(date);
                        }}
                    />
                )}

                <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={() => {
                        Toast.show({
                            type: 'success',
                            text1: 'Visita agendada!',
                            text2: 'Sua visita foi agendada com sucesso..',
                        });
                        router.push('../');
                    }}
                >
                    <Text style={styles.submitBtnText}>Agendar Visita</Text>
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
    input: {
        backgroundColor: 'rgba(255,255,255,0.13)',
        color: '#fff',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        marginBottom: 12,
    },
    textarea: {
        minHeight: 70,
        textAlignVertical: 'top',
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
});
