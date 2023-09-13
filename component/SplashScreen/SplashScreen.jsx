
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from "@react-native-material/core";

const SplashScreen = () => {

    return (
        <View style={styles.container}>
            <Text
                variant='h6'
                style={{
                    fontWeight: 600,
                    color:'#749BC2'
                }}
            >
                <Text
                    variant='h4'
                    style={{ fontWeight: 800, color: '#4682A9' }}
                >
                    ToDo
                </Text>
                {' '}By{' '}
                <Text
                    variant='h4'
                    style={{ fontWeight: 800, color: '#4682A9' }}
                >
                    AT
                </Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F4EB'
    },
});

export default SplashScreen;
