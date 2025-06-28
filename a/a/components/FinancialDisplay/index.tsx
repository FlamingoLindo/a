import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { FinancialInterface } from '@/interfaces';

interface FinancialDisplayProps {
    finance: FinancialInterface;
}
export default function FinancialDisplay({ finance }: FinancialDisplayProps) {
    return (
        <TouchableOpacity onPress={() => { console.log(`Finance selected: ${finance.title}`); }}>
            <View style={styles.square}>
                <Text style={styles.title}>{finance.title}</Text>
                {finance.price !== undefined && (
                    <Text style={styles.price}>R$ {finance.price.toFixed(2)}</Text>
                )}
                <Text style={styles.date}>{finance.date}</Text>
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