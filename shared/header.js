import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Header({ title, navigation }) {

    const openMenu = () => {
        navigation.openDrawer();
    }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <View style={styles.header}>
                <Ionicons name="ios-menu" size={30} onPress={openMenu} style={styles.icon} />
                <View style={styles.headerTitle}>
                    <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                    <Text style={styles.headerText}>{title}</Text>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 16,
    },
    headerTitle: {
        flexDirection: 'row'
    },
    headerImage: {
        width: 30,
        height: 30,
        marginHorizontal: 10
    },
});