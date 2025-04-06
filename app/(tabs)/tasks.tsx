import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useGame } from '@/hooks/useGameContext';

export default function TasksScreen() {
  const { tasks } = useGame();

  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.taskItem}>
        <Text style={styles.taskTitle}>{item.title}</Text>
        <Text style={[styles.status, { color: item.completed ? 'green' : 'red' }]}>
          {item.completed ? 'Виконано' : 'Не виконано'}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Завдання</Text>
      <FlatList data={tasks} keyExtractor={item => item.id.toString()} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  taskTitle: {
    fontSize: 16,
  },
  status: {
    fontSize: 16,
  },
});
