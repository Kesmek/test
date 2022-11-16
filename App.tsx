import { StyleSheet, Text, View } from "react-native";
import {
  BaseButton,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.flex}>
        <View style={[styles.root]}>
          <Text>Base Button</Text>
          <BaseButton
            style={{
              backgroundColor: "navy",
              width: 50,
              height: 50,
              overflow: "visible",
              marginBottom: 50,
            }}
            onPress={() => setValue((old) => old + 1)}
          />
          <Text>Button wrapping another (larger) button</Text>
          <BaseButton
            style={{
              backgroundColor: "blue",
              width: 50,
              height: 50,
              overflow: "visible",
              marginBottom: 50,
            }}
          >
            <BaseButton
              style={{
                width: 100,
                height: 100,
                backgroundColor: "black",
                overflow: "visible",
              }}
              onPress={() => setValue((old) => old + 1)}
            />
          </BaseButton>
          <Text>Nested buttons wrapping a (larger) view</Text>
          <BaseButton
            style={{
              backgroundColor: "blue",
              width: 50,
              height: 50,
              overflow: "visible",
              marginBottom: 50,
            }}
          >
            <BaseButton
              style={{
                width: 100,
                height: 100,
                backgroundColor: "red",
                overflow: "visible",
              }}
              onPress={() => setValue((old) => old + 1)}
            >
              <View
                style={{
                  width: 200,
                  height: 200,
                  backgroundColor: "purple",
                }}
              />
            </BaseButton>
          </BaseButton>
          <Text>value: {value}</Text>
        </View>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
