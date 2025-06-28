import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { OrderInterface } from '@/interfaces';

interface OrderDisplayProps {
    order: OrderInterface;
}
export default function OrderDisplay({ order }: OrderDisplayProps) {
    return (
        <TouchableOpacity onPress={() => { console.log(`Order selected: ${order.title}`); }}>
            <View style={styles.square}>
                <Text style={styles.title}>{order.title}</Text>
                <Text style={styles.price}>Status: {order.status}</Text>
                {order.receivedAt && <Text style={styles.date}>Recebido em: {order.receivedAt}</Text>}
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    square: {
        width: '100%',
        height: 'auto',
        paddingHorizontal: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        marginBottom: 10,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 5,
    },
    price: {
        fontSize: 13,
        color: 'white',
        marginTop: 4,
    },
    date: {
        fontSize: 12,
        color: '#ccc',
        marginTop: 2,
    },
});