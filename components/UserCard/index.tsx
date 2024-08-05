import { StyleSheet, View, Text } from 'react-native';
import { User } from '../../app/data';

const UserCard = (user: User) => {

    return (
        <View style={styles.storeContainer}>
            <View>
                <Text style={styles.storeTitle}>{user.name}</Text>
                <Text style={styles.storeDescription}>{user.email}</Text>
                <Text style={styles.storeDescription}>Address: {user.address.city}</Text>
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

export default UserCard;