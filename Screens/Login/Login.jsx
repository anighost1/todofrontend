
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Stack, Button, Snackbar } from "@react-native-material/core";

const Login = ({ navigation }) => {

    const [formData, setFormData] = useState({})
    const [isError, setIsError] = useState(false)
    const [errorData, setErrorData] = useState('')

    const handleChange = (name, text) => {
        setFormData((state) => ({
            ...state,
            [name]: text
        }))
    }

    const handleSubmit = () => {
        // console.log(formData)
        if (formData.username === undefined || formData.username === '') {
            setErrorData('Please enter username');
            setIsError(true)
            return
        }
        if (formData.password === undefined || formData.password === '') {
            setErrorData('Please enter password');
            setIsError(true)
            return
        }
        console.log('logged in')
        navigation.replace('home')
    }

    useEffect(()=>{
        setTimeout(()=>{
            setIsError(false)
        },2000)
    },[isError])


    return (
        <View style={styles.container}>
            {isError && <Snackbar
                message={errorData}
                action={<Button variant="text" title="Dismiss" color="#BB86FC" compact onPress={()=>{setIsError(false)}} />}
                style={{ position: "absolute", start: 16, end: 16, bottom: 16 }}
            />}
            <Text
                variant='h4'
                style={{
                    fontWeight: 600,
                    color: '#4682A9'
                }}
            >
                LOGIN
            </Text>
            <Stack
                // border={1}
                spacing={20}
                style={{
                    width: '100%',
                    padding: 15,
                    marginTop: 50
                }}
            >
                <TextInput
                    label='Username'
                    variant="outlined"
                    backgroundColor='#F6F4EB'
                    onChangeText={(text) => { handleChange('username', text) }}
                />
                <TextInput
                    label='Password'
                    variant="outlined"
                    backgroundColor='#F6F4EB'
                    onChangeText={(text) => { handleChange('password', text) }}
                />
                <Button
                    title='Login'
                    onPress={handleSubmit}
                />
            </Stack>
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

export default Login;
