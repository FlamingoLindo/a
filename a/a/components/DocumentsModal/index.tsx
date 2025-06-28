import { Text, View, StyleSheet, Modal, Button, Dimensions, TouchableOpacity, Linking } from "react-native";
import type { AlertModalInterface } from "@/interfaces";

const { width: SCREEN_WIDTH } = Dimensions.get('window');


export default function DocumentModal({ visible, onClose }: AlertModalInterface) {
    return (
        <View>
            <Modal animationType="fade" transparent={true} visible={visible}>
                <View style={styles.overlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Documentos</Text>
                        </View>

                        <View style={styles.documentContainer}>
                            <View style={styles.docButtonContainer}>
                                <TouchableOpacity onPress={() => Linking.openURL('https://media.discordapp.net/attachments/1264329016744083477/1387226547605209188/0MOFY.png?ex=68608766&is=685f35e6&hm=3c19ceae74bdf8d262131a8e7ea6745fde4ac35414e64c49a6319061eaa9d644&=&format=webp&quality=lossless&width=1540&height=505')}>
                                    <Text style={styles.documentText}>Regulamento Interno.pdf</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.docButtonContainer}>
                                <TouchableOpacity onPress={() => Linking.openURL('https://media.discordapp.net/attachments/1264329016744083477/1360321364543672511/VdeodoWhatsAppde2025-04-11s14.42.17_b08b818e-ezgif.com-video-to-gif-converter.gif?ex=686034fe&is=685ee37e&hm=f267d83cc6f260ec4b40a2c705fed8afc660ded8e229350d487eb4b4a751f39f&=&width=160&height=160')}>
                                    <Text style={styles.documentText}>Ata da Última Reunião.pdf</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.docButtonContainer}>
                                <TouchableOpacity onPress={() => Linking.openURL('https://media.discordapp.net/attachments/1264329016744083477/1336872374011957269/image.png?ex=686097eb&is=685f466b&hm=b0759fea909d3bdbfc1a5c867753cce2a190d892db53b0bb7f558570980e460d&=&format=webp&quality=lossless&width=1079&height=688')}>
                                    <Text style={styles.documentText}>Contrato de Prestação de Serviços.pdf</Text>
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
    documentContainer: {
        justifyContent: 'flex-start',
        width: '100%',
        padding: 20,
    },
    docButtonContainer:{
        backgroundColor: '#464C55',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    documentText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
});
