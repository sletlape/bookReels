import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import type { Book } from '../../types';

interface BookCardProps {
  book: Book;
  progress: number;
}

export default function BookCard({ book, progress }: BookCardProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: '/(tabs)/home',
      params: { bookId: book.id },
    });
  };

  return (
    <Pressable onPress={handlePress} style={styles.container}>
      <Image source={{ uri: book.coverUrl }} style={styles.coverImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.progressText}>{progress}% Complete</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1C1C1E',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  coverImage: {
    width: 80,
    height: 120,
    borderRadius: 4,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 4,
  },
  progressContainer: {
    height: 8,
    backgroundColor: '#333',
    borderRadius: 4,
    marginTop: 12,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4ECCA3',
  },
  progressText: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 4,
  },
});
