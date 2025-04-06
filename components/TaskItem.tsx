import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useTask, Task } from '@/hooks/useTaskContext';
import { cancelNotification } from '@/services/notifications';

type Props = {
  task: Task;
};

export default function TaskItem({ task }: Props) {
  const { deleteTask } = useTask();

  const handleDelete = async () => {
    if (task.notificationId) {
      await cancelNotification(task.notificationId);
    }
    deleteTask(task.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      {task.desc ? <Text style={styles.desc}>{task.desc}</Text> : null}
      <Text style={styles.time}>{task.reminderTime.toLocaleString()}</Text>
      <Button title="Видалити" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  desc: { fontSize: 16, color: '#555' },
  time: { fontSize: 14, color: '#333' },
});
