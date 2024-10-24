import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../../theme/theme";


export default function Match() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select the Game Setup</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.textColor,
        padding: 16,
    }
});