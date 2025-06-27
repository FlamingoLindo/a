import { RelativePathString } from "@/.expo/types/router";
import Ionicons from "@expo/vector-icons/build/Ionicons";

export interface MenuButton {
    title: string;
    iconName: React.ComponentProps<typeof Ionicons>['name'];
    path?: RelativePathString;
    onPress?: () => void;
}  