import React from 'react';
import { StyleSheet, FlatList, View, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { GeneralLayout } from '@/components/layout/GeneralLayout';

// Example data (replace with your own image URLs)
const imagesData = [
  { id: '1', uri: 'https://via.placeholder.com/200' },
  { id: '2', uri: 'https://via.placeholder.com/200' },
  { id: '3', uri: 'https://via.placeholder.com/200' },
  { id: '4', uri: 'https://via.placeholder.com/200' },
  { id: '5', uri: 'https://via.placeholder.com/200' },
  { id: '6', uri: 'https://via.placeholder.com/200' },
  { id: '7', uri: 'https://via.placeholder.com/200' },
  { id: '8', uri: 'https://via.placeholder.com/200' },
  { id: '9', uri: 'https://via.placeholder.com/200' },
  { id: '10', uri: 'https://via.placeholder.com/200' },
];

export default function PhotoGalleryScreen() {
  return (
    <GeneralLayout>
      <FlatList
        data={imagesData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.uri }}
              style={styles.image}
              contentFit="cover"
            />
          </View>
        )}
      />
    </GeneralLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 16,
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 8,
  },
  card: {
    flex: 1,
    margin: 8,
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
