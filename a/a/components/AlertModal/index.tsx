import { Text, View, StyleSheet, Modal, Button, Dimensions, ScrollView } from "react-native";
import type { AlertModalInterface } from "@/interfaces";
import { mockData } from "@/mock/mockData";

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const notifications = mockData.notifications;

export default function AlertModal({ visible, onClose }: AlertModalInterface) {
    return (
        <View>
            <Modal animationType="fade" transparent={true} visible={visible}>
                <View style={styles.overlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Notificações</Text>
                        </View>

                        <ScrollView style={styles.notificationContainer}>
                            {notifications.map((item, idx) => (
                                <View style={styles.notificationItem} key={idx}>
                                    <Text style={styles.notificationText}>• {item}</Text>
                                </View>
                            ))}
                        </ScrollView>

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
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 10,
        marginTop: 10,
    },
    notificationContainer: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10,
        maxHeight: 220,
    },
    notificationItem: {
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    notificationText: {
        fontSize: 15,
        color: '#222',
    },
});
