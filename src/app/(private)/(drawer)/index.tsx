import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import LinkButton from "../../../components/LinkButton";
import { useAuth } from "../../../context/AuthProvider";
import LoadingScreen from "../../../components/LoadingScreen";
import { router } from "expo-router";
import { Theme } from "../../../theme/theme";
import useThemedStyles from "../../../context/ThemeProvider";

export default function Home() {
    const [userLoading, setUserLoading] = useState(true)
    const { user, isLoading } = useAuth();
    const styles = useThemedStyles(getStyles);

    useEffect(() => {
        if (user) {
            setUserLoading(false);
        }
    }, [user]);

    if (isLoading || userLoading) {
        return <LoadingScreen />
    }

    const handleStartMatch = () => {
        router.push('/(private)/match');
    }

    return (
        <SafeAreaView style={styles.container}>
            {user &&
                <>
                    <ScrollView style={styles.contentContainer}>

                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Last Matches</Text>
                            {/* MatchCard */}
                        </View>

                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>Featured Players</Text>
                            {/* PlayerCard or PlayerTabel */}
                        </View>

                        <View style={styles.labelContainer}>
                            <Text style={styles.label}>More Information</Text>
                        </View>


                    </ScrollView>

                    <View style={styles.linkbtn}>
                        <LinkButton
                            title="Start Match"
                            onPress={handleStartMatch}
                            iconName="cards-playing"
                            variant="primary"
                        />
                    </View>
                </>
            }

        </SafeAreaView>
    );
}

const getStyles = (theme: Theme) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.backgroundColor,
    },
    contentContainer: {
        flex: 1,
    },
    labelContainer: {
        justifyContent: 'flex-start',
        padding: 16,
        marginTop: 20,
    },
    label: {
        color: theme.textColor,
        fontSize: 25,
        fontWeight: 'bold',
    },
    linkbtn: {
        position: 'absolute',
        bottom: 50,
        right: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
})