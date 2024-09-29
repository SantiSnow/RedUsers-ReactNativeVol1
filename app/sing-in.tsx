import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useSession } from '../ctx';
import { useState } from 'react';

export default function SignIn() {
  const { signIn } = useSession();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    const authResult = await signIn(email, password);
    if (authResult) router.replace('/');
    else setError("Credentials do not match our records");
  }

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.title}>
          Access to your account
        </Text>

        <View style={styles.formContainer}>
          <TextInput
            placeholder='Your email'
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            placeholder='Your password'
            secureTextEntry={true}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {
          error!==""
          && 
            <Text>
              {error}
            </Text>
        }

      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          loginUser()
        }}>
        <Text
          style={styles.buttonText}
        >
          Sign In
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