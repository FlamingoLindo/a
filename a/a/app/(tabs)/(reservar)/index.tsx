import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-toast-message';
import { useRouter } from "expo-router";
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ReservarScreen() {
    const [selectedSpace, setSelectedSpace] = useState('Churrasqueira');
    const [date, setDate] = useState<Date | null>(null);
    const [showPicker, setShowPicker] = useState(false);
    const router = useRouter();

    // Format date as dd/mm/yyyy
    function formatDate(date: Date | null): string {
        if (!date) return '';
        const dd: string = String(date.getDate()).padStart(2, '0');
        const mm: string = String(date.getMonth() + 1).padStart(2, '0');
        const yyyy: number = date.getFullYear();
        return `${dd}/${mm}/${yyyy}`;
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
                
                <View style={styles.pickerWrapper}>
                    <Picker
                        selectedValue={selectedSpace}
                        style={styles.picker}
                        dropdownIconColor="#f3eaff"
                        onValueChange={(itemValue) => setSelectedSpace(itemValue)}
                    >
                        <Picker.Item label="Churrasqueira" value="Churrasqueira" />
                        <Picker.Item label="Salão de Festas" value="Salão de Festas" />
                        <Picker.Item label="Quadra" value="Quadra" />
                        {/* Add more spaces as needed */}
                    </Picker>
                </View>

                <TouchableOpacity
                    style={styles.dateInput}
                    onPress={() => setShowPicker(true)}
                    activeOpacity={0.7}
                >
                    <Text style={{ color: date ? "#fff" : "#f3eaff", fontSize: 16 }}>
                        {date ? formatDate(date) : "dd / mm / yyyy"}
                    </Text>
                    <MaterialCommunityIcons name="calendar-month-outline" size={22} color="#f3eaff" />
                </TouchableOpacity>
                
                {showPicker && (
                    <DateTimePicker
                        value={date || new Date()}
                        mode="date"
                        display={Platform.OS === 'ios' ? "spinner" : "default"}
                        minimumDate={new Date()}
                        onChange={(event, selectedDate) => {
                            setShowPicker(Platform.OS === 'ios'); // iOS: keep open, Android: close after select
                            if (selectedDate) setDate(selectedDate);
                        }}
                    />
                )}

                <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={() => {
                        if (!date) {
                            Toast.show({
                                type: 'error',
                                text1: 'Selecione uma data!',
                            });
                            return;
                        }
                        Toast.show({
                            type: 'success',
                            text1: 'Reserva enviada!',
                            text2: `Espaço: ${selectedSpace}, Data: ${formatDate(date)}`,
                        });
                        router.back();
                    }}
                >
                    <Text style={styles.submitBtnText}>Reservar</Text>
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
    pickerWrapper: {
        backgroundColor: 'rgba(255,255,255,0.13)',
        borderRadius: 8,
        marginBottom: 12,
    },
    picker: {
        color: '#fff',
        width: '100%',
        height: 48,
    },
    dateInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255,255,255,0.13)',
        borderRadius: 8,
        paddingHorizontal: 16,
        height: 48,
        marginBottom: 16,
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
