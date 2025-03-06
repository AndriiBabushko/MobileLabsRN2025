import {ThemedText} from "@/components/ThemedText";
import {SafeAreaView, StyleSheet, View} from "react-native";

export function GeneralLayout(props: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {props.children}
      </View>
      <View style={styles.footer}>
        <ThemedText  style={styles.footer}>Бабушко Андрій Сергійович, ВТ-21-1</ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 66
  },
  content: {
    flex: 1,
  },
  footer: {
    padding: 5,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});