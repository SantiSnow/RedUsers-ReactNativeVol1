import { StyleSheet, View, Text, SafeAreaView, FlatList } from 'react-native';
import { Stores } from '../data';
import ListItem from '@/components/ListItem/ListItem';

export default function ListScreen() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          List of stores
        </Text>
      </View>

      <View style={{ flex: 4 }}>
        <FlatList
          data={Stores}
          renderItem={({ item }) =>
            <ListItem
              id={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
              status={item.status}
              employees={item.employees}
              calification={item.calification}
            />}
          keyExtractor={item => item.id.toString()}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 15,
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
