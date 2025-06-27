import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import type { MenuButton } from "@/interfaces";
import { useRouter } from "expo-router";

export default function MenuBtn({ title, iconName, path, onPress }: MenuButton) {
  const router = useRouter();

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
    if (path) {
      router.push(path);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.square}>
        <Ionicons name={iconName} size={30} color="white" />
        <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 5,
    },
});