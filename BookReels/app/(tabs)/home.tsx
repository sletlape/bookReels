import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import books from '../../constants/books.json';
import users from '../../constants/users.json';
import BookReelList from '../../components/home/BookReelList';

// Get the first user for demo purposes
const currentUser = users[0];

export default function HomeScreen() {
  const { bookId } = useLocalSearchParams();

  let bookToShow;

  if (typeof bookId === 'string') {
    // If a bookId is passed, show that book
    bookToShow = books.find(book => book.id === bookId);
  } else {
    // Otherwise, show the user's last read book
    const lastReadProgress = currentUser.progress[0];
    bookToShow = books.find(book => book.id === lastReadProgress.bookId);
  }

  if (!bookToShow) {
    return (
      <View style={[styles.container, styles.centered]}>
        <Text style={styles.title}>Book not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.streakText}>{currentUser.streak} days streak</Text>
        <Text style={styles.bookTitle}>{bookToShow.title}</Text>
      </View>
      <BookReelList sections={bookToShow.sections} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    padding: 16,
    zIndex: 1,
    alignItems: 'center',
  },
  streakText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bookTitle: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
  },
  title: {
    color: 'white',
    fontSize: 20,
  }
});
