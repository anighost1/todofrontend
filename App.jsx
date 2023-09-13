
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
enableScreens();


// screens
import SplashScreen from './component/SplashScreen/SplashScreen';
import Login from './Screens/Login/Login';
import Home from './Screens/Home/Home';

const Stack = createNativeStackNavigator();

const App = () => {
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        setTimeout(() => setShowSplash(false), 2000);
    }, []);

    return (
        <View style={{ flex: 1 }}>
            {showSplash ? (
                <SplashScreen />
            ) : (
                <NavigationContainer>
                    <Stack.Navigator >
                        <Stack.Screen
                            name='login'
                            component={Login}
                            options={{
                                headerShown:false
                            }}
                        />
                        <Stack.Screen
                            name='home'
                            component={Home}
                            options={{
                                headerShown:false
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            )}
        </View>
    );
};

export default App;
