import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MenuBtn from '@/components/MenuBtn';
import AlertModal from '@/components/AlertModal';
import EmergencyModal from '@/components/EmergencyModal';
import DocumentModal from '@/components/DocumentsModal';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [emergencyModalVisible, setEmergencyModalVisible] = useState(false);
  const [documentModalVisible, setDocumentModalVisible] = useState(false);

  return (
    <LinearGradient
      colors={['#5e6eff', '#a142e4']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>CondoConnect</Text>
      <View style={styles.btnContainer}>
        <MenuBtn
          title='Notificações'
          iconName='notifications'
          onPress={() => setModalVisible(true)}
        />
        <MenuBtn
          title='Relatar'
          iconName='clipboard'
          path='./(relatar)'
        />
        <MenuBtn
          title='Reservar'
          iconName='calendar'
          path='./(reservar)'
        />
        <MenuBtn
          title='Votação'
          iconName='archive'
          path='./(votacao)'
        />
        <MenuBtn
          title='Serviços'
          iconName='briefcase'
          path='./(servicos)'
        />
        <MenuBtn
          title='Emergência'
          iconName='alarm'
          onPress={() => setEmergencyModalVisible(true)}
        />
        <MenuBtn
          title='Financeiro'
          iconName='cash'
          path='./(financeiro)'
        />
        <MenuBtn
          title='Documentos'
          iconName='file-tray'
          onPress={() => setDocumentModalVisible(true)}

        />
        <MenuBtn
          title='Encomendas'
          iconName='cube'
          path='./(encomenda)'
        />
        <MenuBtn
          title='Visitantes'
          iconName='people'
          path='./(visitantes)'
        />

      </View>
      <AlertModal visible={modalVisible} onClose={() => setModalVisible(false)} />
      <EmergencyModal visible={emergencyModalVisible} onClose={() => setEmergencyModalVisible(false)} />
      <DocumentModal visible={documentModalVisible} onClose={() => setDocumentModalVisible(false)} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#fff',
  },
  btnContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
