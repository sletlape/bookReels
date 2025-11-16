import React from 'react';
import { FlatList, View, StyleSheet, useWindowDimensions } from 'react-native';
import type { Section } from '../../types';
import BookReelItem from './BookReelItem';

interface BookReelListProps {
  sections: Section[];
}

export default function BookReelList({ sections }: BookReelListProps) {
  const { height } = useWindowDimensions();

  return (
    <FlatList
      data={sections}
      renderItem={({ item }) => <BookReelItem section={item} />}
      keyExtractor={(item) => item.id}
      snapToAlignment="start"
      decelerationRate="fast"
      snapToInterval={height}
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
      contentContainerStyle={{ height: height * sections.length }}
    />
  );
}
