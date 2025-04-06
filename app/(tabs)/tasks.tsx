import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { useTask } from '@/hooks/useTaskContext';
import TaskItem from '@/components/TaskItem';

export default function TasksScreen() {
  const { tasks } = useTask();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tasks List</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem task={item} />}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});
