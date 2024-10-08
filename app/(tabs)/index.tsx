import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { StyleSheet, View, Text, Button, Alert, TouchableOpacity, Image } from 'react-native';
import { useSession } from '../../ctx';

export default function HomeScreen() {
  const { signOut } = useSession();
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Mi primer pantalla en React Native.
      </Text>
      <TouchableOpacity
        onPress={() => router.push('list')}
        accessibilityLabel='Go to list'
        style={styles.btnList}
      >
        <Text>
          Go to list
        </Text>
        <Ionicons
          size={16}
          name='arrow-forward'
          color='#000'
        />
      </TouchableOpacity>
      

      <TouchableOpacity
        onPress={() => signOut()}
        accessibilityLabel='Go to list'
        style={styles.btnList}
      >
        <Text>
          Logout{" "}
        </Text>
        <Ionicons
          size={16}
          name='log-out-outline'
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
