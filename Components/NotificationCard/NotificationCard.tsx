import { TouchableOpacity, View, Text } from "react-native";
import styles from "./Styles";

function NotificationCard({ children, onPress }: any) {
    return(
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.cardTitle}>Good!</Text>
                <Text style={styles.cardText}>{children}</Text>
            </View>
            <TouchableOpacity onPress={onPress} style={styles.okContainer}>
                <Text style={styles.okText}>OK</Text>
            </TouchableOpacity>
        </View>
    );
}

export default NotificationCard;