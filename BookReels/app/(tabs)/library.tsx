import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import books from '../../constants/books.json';
import users from '../../constants/users.json';
import BookCard from '../../components/library/BookCard';

// Get the first user for demo purposes
const currentUser = users[0];

export default function LibraryScreen() {
  const getBookProgress = (bookId: string) => {
    const progress = currentUser.progress.find(p => p.bookId === bookId);
    return progress ? progress.percentage : 0;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your Library</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookCard book={item} progress={getBookProgress(item.id)} />
        )}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  list: {
    paddingHorizontal: 16,
  },
});
