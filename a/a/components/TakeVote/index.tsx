import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { mockPools } from "@/mock/mockData";
import { useRouter, useLocalSearchParams } from "expo-router";
import { RadioButton } from 'react-native-paper';
import Toast from 'react-native-toast-message';

import { PoolInterface } from '@/interfaces';

const pools: PoolInterface[] = mockPools.pools;

export default function TakeVote() {
    const { id } = useLocalSearchParams();
    const [checked, setChecked] = useState('first');

    const router = useRouter();

    const pool = pools.find((pool) => pool.id === id);



    return (
        <>
            <Text style={styles.title}>
                {pool ? pool.title : "Votação não encontrada"}
            </Text>
            <View style={styles.optionContainer}>
                <View style={styles.radioRow}>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                        color='white'
                    />
                    <Text style={styles.voteOption}>Sim</Text>
                </View>
                <View style={styles.radioRow}>
                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                        color='white'
                    />
                    <Text style={styles.voteOption}>Não</Text>
                </View>

                <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={() => {
                        Toast.show({
                            type: 'success',
                            text1: 'Votação realizada com sucesso!',
                            text2: 'Você receberá uma confirmação por e-mail.',
                        });
                        router.back();
                    }}
                >
                    <Text style={styles.submitBtnText}>Votar</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    optionContainer: {
        marginTop: 16,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
    },
    radioRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    voteOption: {
        color: 'white',
        fontSize: 16,
        marginLeft: 4,
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
