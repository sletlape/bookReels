import React, { useState } from 'react';
import { View, Text, StyleSheet, useWindowDimensions, Pressable } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import type { Section } from '../../types';
import CommentOverlay from './CommentOverlay';

interface BookReelItemProps {
  section: Section;
}

export default function BookReelItem({ section }: BookReelItemProps) {
  const { height } = useWindowDimensions();
  const [commentsVisible, setCommentsVisible] = useState(false);

  const handleLike = () => {
    console.log('Liked section:', section.id);
  };

  const handleBookmark = () => {
    console.log('Bookmarked section:', section.id);
  };

  return (
    <>
      <View style={[styles.container, { height }]}>
        <Text style={styles.sectionText}>{section.content}</Text>
        <View style={styles.interactionBar}>
          <Pressable onPress={handleLike}>
            <FontAwesome name="heart-o" size={24} color="white" style={styles.icon} />
          </Pressable>
          <Pressable onPress={() => setCommentsVisible(true)}>
            <FontAwesome name="comment-o" size={24} color="white" style={styles.icon} />
          </Pressable>
          <Pressable onPress={handleBookmark}>
            <FontAwesome name="bookmark-o" size={24} color="white" style={styles.icon} />
          </Pressable>
        </View>
      </View>
      <CommentOverlay
        sectionId={section.id}
        visible={commentsVisible}
        onClose={() => setCommentsVisible(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 24,
  },
  sectionText: {
    color: '#fff',
    fontSize: 22,
    lineHeight: 32,
    textAlign: 'center',
  },
  interactionBar: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    alignItems: 'center',
  },
  icon: {
    marginVertical: 15,
  },
});
