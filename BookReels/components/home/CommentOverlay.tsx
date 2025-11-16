import React from 'react';
import { View, Text, StyleSheet, Modal, Pressable, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import comments from '../../constants/comments.json';
import users from '../../constants/users.json';
import type { Comment } from '../../types';

interface CommentOverlayProps {
  sectionId: string;
  visible: boolean;
  onClose: () => void;
}

const getCommentWithUser = (comment: Comment) => {
  const user = users.find(u => u.id === comment.userId);
  return { ...comment, user };
};

export default function CommentOverlay({ sectionId, visible, onClose }: CommentOverlayProps) {
  const sectionComments = comments
    .filter(c => c.sectionId === sectionId)
    .map(getCommentWithUser);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.container}>
          <Text style={styles.title}>Comments ({sectionComments.length})</Text>
          <FlatList
            data={sectionComments}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.commentContainer}>
                <Text style={styles.commentUser}>{item.user?.username || 'Unknown'}</Text>
                <Text style={styles.commentContent}>{item.content}</Text>
              </View>
            )}
          />
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    backgroundColor: '#1C1C1E', // Dark mode background
    height: '50%', // Partial overlay
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  commentContainer: {
    marginBottom: 12,
  },
  commentUser: {
    fontWeight: 'bold',
    color: '#fff',
  },
  commentContent: {
    color: '#ddd',
    marginTop: 4,
  },
});
