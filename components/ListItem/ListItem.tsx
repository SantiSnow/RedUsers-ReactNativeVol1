import { StyleSheet, View, Text, Image } from 'react-native';
import { Store } from '../../app/data';


const ListItem = (store: Store) => {

    return (
        <View style={styles.storeContainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: store.image }}
                    style={{
                        width: 100,
                        height: 100,
                    }}
                    resizeMode='contain'
                />
            </View>
            <View>
                <Text style={styles.storeTitle}>{store.title}</Text>
                <Text style={styles.storeDescription}>{store.description}</Text>
                <Text style={styles.storeDescription}>Employees: {store.employees.toString()}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

    storeContainer: {
        marginVertical: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        paddingHorizontal: 15,
    },
    storeTitle: {
        fontSize: 18,
    },
    storeDescription: {
        fontSize: 12,
    },
});

export default ListItem;