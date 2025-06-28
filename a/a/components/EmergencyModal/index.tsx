import { Text, View, StyleSheet, Modal, Button, Dimensions, TouchableOpacity } from "react-native";
import type { AlertModalInterface } from "@/interfaces";

const { width: SCREEN_WIDTH } = Dimensions.get('window');


export default function EmergencyModal({ visible, onClose }: AlertModalInterface) {
    return (
        <View>
            <Modal animationType="fade" transparent={true} visible={visible}>
                <View style={styles.overlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Emergência</Text>
                        </View>

                        <View style={styles.emergencyContainer}>
                            <View style={styles.fireContainer}>
                                <TouchableOpacity onPress={() => console.log('Incêndio Reportado')}>
                                    <Text style={styles.emergencyText}>🚒 Incêndio</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.robberyContainer}>
                                <TouchableOpacity onPress={() => console.log('Roubo Reportado')}>
                                    <Text style={styles.emergencyText}>🚨 Roubo ou intrusão</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.medicalContainer}>
                                <TouchableOpacity onPress={() => console.log('Emergência médica Reportada')}>
                                    <Text style={styles.emergencyText}>🏥 Emergência médica</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.buttonContainer}>
                            <Button title="Fechar" onPress={onClose} color="#464C55" />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: SCREEN_WIDTH,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#fff',
        width: '80%',
        height: '50%',
        position: 'absolute',
        top: '25%',
        left: '10%',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
    },
    titleContainer: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    title: {
        color: '#464C55',
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 10,
        marginTop: 10,
    },
    emergencyContainer: {
        justifyContent: 'flex-start',
        width: '100%',
        padding: 20,
    },
    fireContainer: {
        backgroundColor: 'rgb(208, 71, 118)',
        padding: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    robberyContainer: {
        backgroundColor: 'rgb(202, 150, 76)',
        padding: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    medicalContainer: {
        backgroundColor: 'rgb(62, 162, 135)',
        padding: 20,
        borderRadius: 5,
        marginBottom: 10,
    },
    emergencyText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
});
