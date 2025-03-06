import { StyleSheet, View, FlatList } from 'react-native';
import { Image } from 'expo-image';

import { ThemedText } from '@/components/ThemedText';
import {GeneralLayout} from "@/components/layout/GeneralLayout";

const newsData = [
  { id: '1', title: 'Заголовок новини', date: 'Дата новини', text: 'Короткий текст новини' },
  { id: '2', title: 'Заголовок новини', date: 'Дата новини', text: 'Короткий текст новини' },
  { id: '3', title: 'Заголовок новини', date: 'Дата новини', text: 'Короткий текст новини' },
  { id: '4', title: 'Заголовок новини', date: 'Дата новини', text: 'Короткий текст новини' },
  { id: '5', title: 'Заголовок новини', date: 'Дата новини', text: 'Короткий текст новини' },
];

export default function HomeScreen() {
  return (
    <GeneralLayout>
        <FlatList
          ListHeaderComponent={() => {
            return  <ThemedText type="title" style={styles.header}>
              Новини
            </ThemedText>
          }}
          data={newsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.newsItem}>
              <Image
                source={require('@/assets/images/img.png')}
                contentFit={'contain'}
                style={styles.image}
              />
              <View style={styles.textContainer}>
                <ThemedText type="subtitle">{item.title}</ThemedText>
                <ThemedText type="defaultSemiBold" style={styles.date}>
                  {item.date}
                </ThemedText>
                <ThemedText type="default">{item.text}</ThemedText>
              </View>
            </View>
          )}
          contentContainerStyle={styles.listContainer}
        />
    </GeneralLayout>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20, // Відступ, щоб не перекривати футер
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
  newsItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginBottom: 2,
  },
  footer: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    fontStyle: 'italic',
  },
});
