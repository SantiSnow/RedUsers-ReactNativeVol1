import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useSession } from '../ctx';
import { useState } from 'react';

export default function Register({ stateChanger }: any) {
    const { register } = useSession();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = async () => {
        if (!name || !email || !password)
        {
            setError("Please, fill all the fields.");
            return false;
        }

        if (password.length<8)
        {
            setError("Password must be at least 8 characters long.");
            return false;
        }

        const authResult = await register(name, email, password);
        if (authResult) router.replace('/');
    }

    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.title}>
                    Register a new account
                </Text>

                <View style={styles.formContainer}>

                    <TextInput
                        placeholder='Your name'
                        style={styles.input}
                        value={name}
                        onChangeText={setName}
                        maxLength={50}
                    />

                    <TextInput
                        placeholder='Your email'
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        maxLength={50}
                    />

                    <TextInput
                        placeholder='Your password'
                        secureTextEntry={true}
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        maxLength={50}
                    />
                </View>

                {
                    error !== ""
                    &&
                    <Text>
                        {error}
                    </Text>
                }

            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    registerUser()
                }}>
                <Text
                    style={styles.buttonText}
                >
                    Register
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => stateChanger(false)}>
                <Text>
                    Already have an account?
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    buttonText: {
        color: '#000',
    },
    button: {
        padding: 15,
        marginVertical: 15,
        backgroundColor: '#e5e5e5',
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        color: '#000',
        marginVertical: 25,
    },
    formContainer: {
        marginVertical: 15,
    },
    input: {
        paddingVertical: 5,
        paddingHorizontal: 2,
        marginVertical: 5,
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
    }
});