import { StyleSheet, View, Text, SafeAreaView, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { User } from '../data';
import UserCard from '@/components/UserCard';
import useGetUsers from '@/hooks/useGetUsers';

export default function TabTwoScreen() {

  const [error, setError] = useState(false);
  const [users, setUsers] = useState<User[]>();
  const { getUsers } = useGetUsers();

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          List of users
        </Text>
      </View>

      <View style={{ flex: 4 }}>
        {
          error
          ?
          <Text>Hubo un error al procesar la petición.</Text>
          :
          users
          ?
          <FlatList
            data={users}
            renderItem={({ item }) =>
              <UserCard 
                id={item.id}
                email={item.email}
                name={item.name} 
                address={item.address} 
                phone={''}
                website={''}
              />
            }
            keyExtractor={item => item.id.toString()}
          />
          :
          <Text>No se encontraron usuarios en el sistema</Text>
        }
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
  }
});
