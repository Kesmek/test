import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const delay = (timeMs: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeMs));
};

const App = () => {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6]);
  const scrollY = useSharedValue(0);

  const mockAPI = async () => {
    await delay(1000);
    let newItems = [];
    for (let i = 0; i < 3; i++) {
      newItems.push(items.length + i);
    }
    setItems(items.concat(newItems));
  };

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const animatedHeader = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, 150],
      [0, 1],
      Extrapolate.CLAMP,
    );
    return {
      backgroundColor: `rgba(0,0,0,${opacity})`,
    };
  });

  return (
    <GestureHandlerRootView style={styles.flex}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.root}>
          <Animated.FlatList
            data={items}
            onScroll={handleScroll}
            ListHeaderComponent={() => {
              return (
                <Animated.View style={[styles.header, animatedHeader]}>
                  <Text style={styles.headerText}>Header</Text>
                </Animated.View>
              );
            }}
            stickyHeaderIndices={[0]}
            renderItem={(item) => (
              <Text style={styles.itemText}>{item.item}</Text>
            )}
            onEndReached={mockAPI}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: { backgroundColor: 'salmon', height: '100%', width: '100%' },
  flex: { flex: 1 },
  header: { height: 200, borderColor: 'yellow', borderWidth: 2 },
  headerText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
    fontSize: 32,
  },
  itemText: {
    height: 150,
    borderWidth: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
    fontSize: 32,
  },
});

export default App;
