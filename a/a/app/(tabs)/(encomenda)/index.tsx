import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { OrderInterface } from '@/interfaces';
import { mockOrders } from '@/mock/mockData';
import OrderDisplay from '@/components/OrderDisplay';

const orders: OrderInterface[] = mockOrders.orders;
const { height } = Dimensions.get('window');

export default function EncomendaScreen() {
    return (
        <LinearGradient
            colors={['#5e6eff', '#a142e4']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <View style={styles.card}>
                <Text style={styles.title}>Encomendas</Text>
                <ScrollView>
                    {orders.length === 0 ? (
                        <Text style={{ color: '#fff', textAlign: 'center', marginTop: 32 }}>
                            Não há nenhuma encomenda.
                        </Text>
                    ) : (
                        orders.map(order => (
                            <OrderDisplay key={order.id} order={order} />
                        ))
                    )}
                </ScrollView>

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
        maxHeight: height * 0.75,
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
});
