import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { useRouter } from "expo-router";
import { PoolInterface } from '@/interfaces';

interface VoteOptionProps {
    pool: PoolInterface;
}
export default function VoteOption({ pool }: VoteOptionProps) {
    const router = useRouter();

    return (
        <TouchableOpacity
            onPress={() =>
                router.push({
                    pathname: "/(tabs)/(votacao)/votacoes/[id]",
                    params: { id: pool.id },
                })
            }
        >
            <View style={styles.square}>
                <Text style={styles.title}>{pool.title}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    square: {
        width: '100%',
        height: 50,
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
});