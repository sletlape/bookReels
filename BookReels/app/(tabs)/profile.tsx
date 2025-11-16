import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import users from '../../constants/users.json';
import badges from '../../constants/badges.json';
import Badge from '../../components/shared/Badge';

// Get the first user for demo purposes
const currentUser = users[0];
const overallProgress = currentUser.progress.reduce((sum, p) => sum + p.percentage, 0) / currentUser.progress.length;

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image source={{ uri: currentUser.avatarUrl }} style={styles.avatar} />
        <Text style={styles.username}>{currentUser.username}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{currentUser.streak}</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statValue}>{Math.round(overallProgress)}%</Text>
          <Text style={styles.statLabel}>Overall Progress</Text>
        </View>
      </View>

      <View style={styles.badgesContainer}>
        <Text style={styles.badgesTitle}>Badges</Text>
        <FlatList
          data={badges}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Badge name={item.name} icon={item.icon as any} />}
          numColumns={4}
          contentContainerStyle={styles.badgesList}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#4ECCA3',
  },
  username: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 40,
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
  },
  badgesContainer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 16,
  },
  badgesTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  badgesList: {
    alignItems: 'center',
  },
});
