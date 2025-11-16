import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface BadgeProps {
  name: string;
  icon: React.ComponentProps<typeof FontAwesome>['name'];
}

export default function Badge({ name, icon }: BadgeProps) {
  return (
    <View style={styles.container}>
      <FontAwesome name={icon} size={32} color="#4ECCA3" />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
    width: 80,
  },
  name: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },
});
