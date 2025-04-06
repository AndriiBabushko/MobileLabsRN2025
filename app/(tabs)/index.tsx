import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import {
  Directions,
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { useGame } from '@/hooks/useGameContext';

export default function HomeScreen() {
  const { score, setScore, tasks, setTasks } = useGame();

  const [singleTapCount, setSingleTapCount] = useState(0);
  const [doubleTapCount, setDoubleTapCount] = useState(0);
  const [longPressCount, setLongPressCount] = useState(0);
  const [swipeLeftCount, setSwipeLeftCount] = useState(0);
  const [swipeRightCount, setSwipeRightCount] = useState(0);
  const [isPanComplete, setIsPanComplete] = useState(false);
  const [pinchCompleted, setPinchCompleted] = useState(false);

  const panX = useRef(new Animated.Value(0)).current;
  const panY = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (!tasks[0].completed && singleTapCount >= 10) markTaskCompleted(1);
    if (!tasks[1].completed && doubleTapCount >= 5) markTaskCompleted(2);
    if (!tasks[2].completed && longPressCount >= 1) markTaskCompleted(3);
    if (!tasks[3].completed && isPanComplete) markTaskCompleted(4);
    if (!tasks[4].completed && swipeRightCount >= 1) markTaskCompleted(5);
    if (!tasks[5].completed && swipeLeftCount >= 1) markTaskCompleted(6);
    if (!tasks[6].completed && pinchCompleted) markTaskCompleted(7);
    if (!tasks[7].completed && score >= 100) markTaskCompleted(8);
  }, [
    singleTapCount,
    doubleTapCount,
    longPressCount,
    swipeRightCount,
    swipeLeftCount,
    pinchCompleted,
    isPanComplete,
    score,
  ]);

  const markTaskCompleted = (taskId: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === taskId ? { ...task, completed: true } : task))
    );
  };

  const tap = Gesture.Tap()
    .maxDelay(250)
    .onEnd(() => {
      setScore(s => s + 1);
      setSingleTapCount(c => c + 1);
    })
    .runOnJS(true);

  // Подвійний тап
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      setScore(s => s + 2);
      setDoubleTapCount(c => c + 1);
    })
    .runOnJS(true);

  const longPress = Gesture.LongPress()
    .minDuration(800)
    .onStart(() => {
      setScore(s => s + 5);
      setLongPressCount(c => c + 1);
    })
    .runOnJS(true);

  const panGesture = Gesture.Pan()
    .onUpdate(e => {
      panX.setValue(e.translationX);
      panY.setValue(e.translationY);
    })
    .onEnd(() => {
      Animated.spring(panX, { toValue: 0, useNativeDriver: false }).start();
      Animated.spring(panY, { toValue: 0, useNativeDriver: false }).start();
      setIsPanComplete(true);
    })
    .runOnJS(true);

  const pinchGesture = Gesture.Pinch()
    .onUpdate(e => {
      scale.setValue(e.scale);
    })
    .onEnd(() => {
      setPinchCompleted(true);
    })
    .runOnJS(true);

  const flingLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .onStart(() => {
      const randomPoints = Math.floor(Math.random() * 10) + 1;
      setScore(prev => prev + randomPoints);
      setSwipeLeftCount(c => c + 1);
    })
    .runOnJS(true);

  const flingRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onStart(() => {
      const randomPoints = Math.floor(Math.random() * 10) + 1;
      setScore(prev => prev + randomPoints);
      setSwipeRightCount(c => c + 1);
    })
    .runOnJS(true);

  const composedGesture = Gesture.Simultaneous(
    Gesture.Exclusive(doubleTap, tap),
    longPress,
    panGesture,
    pinchGesture,
    flingLeft,
    flingRight
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.scoreText}>Score: {score}</Text>
        <GestureDetector gesture={composedGesture}>
          <Animated.View
            style={[
              styles.box,
              { transform: [{ translateX: panX }, { translateY: panY }, { scale: scale }] },
            ]}>
            <Text style={styles.tapText}>Tap me!</Text>
          </Animated.View>
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  scoreText: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  box: {
    width: 200,
    height: 200,
    backgroundColor: '#9a1616',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  tapText: { fontSize: 18, color: '#fff', fontWeight: 'bold' },
});
