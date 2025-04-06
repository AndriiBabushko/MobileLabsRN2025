import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTask } from '@/hooks/useTaskContext';
import { scheduleNotification } from '@/services/notifications';

export default function AddTaskScreen() {
  const { addTask } = useTask();
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [reminderTime, setReminderTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleAddTask = async () => {
    if (!title.trim()) {
      Alert.alert('Помилка', 'Будь ласка, введіть назву задачі');
      return;
    }
    const newTask = {
      id: Date.now().toString(),
      title,
      desc,
      reminderTime,
      notificationId: null,
    };

    const notificationId = await scheduleNotification(newTask);
    newTask.notificationId = notificationId;

    addTask(newTask);
    setTitle('');
    setDesc('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Назва задачі"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, { height: 80 }]}
        placeholder="Опис задачі"
        value={desc}
        onChangeText={setDesc}
        multiline
      />
      <Button
        title="Обрати час нагадування"
        onPress={() => setShowDatePicker(true)}
      />
      <Text style={styles.selectedTime}>
        Обрано: {reminderTime.toLocaleString()}
      </Text>
      <Button title="Додати задачу" onPress={handleAddTask} />
      {showDatePicker && (
        <DateTimePicker
          value={reminderTime}
          mode="time"
          display="default"
          is24Hour
          onChange={(_event, selectedDate) => {
            setShowDatePicker(Platform.OS === 'ios');
            if (selectedDate) {
              setReminderTime(selectedDate);
            }
          }}
        />
      )}
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
  selectedTime: { fontSize: 16, marginBottom: 8, textAlign: 'center' },
});
