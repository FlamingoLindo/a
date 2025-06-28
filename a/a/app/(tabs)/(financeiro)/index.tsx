import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FinancialInterface } from '@/interfaces';
import { mockFinances } from '@/mock/mockData';
import FinancialDisplay from '@/components/FinancialDisplay';

const finances: FinancialInterface[] = mockFinances.finances;
const { height } = Dimensions.get('window');

export default function FinanceiroScreen() {
    return (
        <LinearGradient
            colors={['#5e6eff', '#a142e4']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <View style={styles.card}>
                <Text style={styles.title}>Financeiro</Text>
                <ScrollView>
                    {finances.length === 0 ? (
                        <Text style={{ color: '#fff', textAlign: 'center', marginTop: 32 }}>
                            Não há nenhuma informação disponível no momento.
                        </Text>
                    ) : (
                        finances.map(finance => (
                            <FinancialDisplay key={finance.id} finance={finance} />
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
