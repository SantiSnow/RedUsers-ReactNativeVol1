import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import axios from 'axios';

export default function FormScreen() {
  const url = "http://localhost:3000/messages";
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submit = async () => {
    const options = {
      method: 'post',
      url: url,
      body: {
        name: name,
        message: message
      }
    };
    const response = await axios(options);
    console.log(response);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contactanos
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Su nombre"
          keyboardType="default"
          maxLength={60}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          numberOfLines={5}
          editable
          style={styles.input}
          onChangeText={setMessage}
          value={message}
          placeholder="Su mensaje"
          keyboardType="default"
        />
      </View>
      
      <TouchableOpacity
        onPress={() => submit()}
        accessibilityLabel='Go to list'
        style={styles.btnList}
      >
        <Text>
          Enviar{" "}
        </Text>
        <Ionicons
          size={16}
          name='document-attach'
          color='#000'
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 15,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    padding: 10,
    borderBottomColor: '#f6f6f6',
    borderBottomWidth: 2
  },
  btnList: {
    marginVertical: 15,
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: '#e5e5e5',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
