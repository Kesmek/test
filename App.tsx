import { Alert, StyleSheet, View } from "react-native";
import {
  GestureHandlerRootView,
  RectButton,
  TextInput,
} from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { UNSTABLE_usePreventRemove as usePreventRemove } from "@react-navigation/native";
import { useState } from "react";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={styles.flex}>
        <NavigationContainer>
          <Navigator>
            <Screen name={"Root"} component={Root} />
            <Screen name={"Prevent Back"} component={PreventScreen} />
          </Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

interface RootScreenProps extends RootNavigationProps {}

const Root = ({ navigation }: RootScreenProps) => {
  return (
    <View style={styles.root}>
      <RectButton
        style={{ width: 100, height: 100, backgroundColor: "blue" }}
        onPress={() => navigation.navigate("Prevent Back")}
      />
    </View>
  );
};

interface PreventScreenProps extends PreventBackNavigationProps {}

const PreventScreen = ({ navigation }: PreventScreenProps) => {
  const [text, setText] = useState("");
  const hasUnsavedChanges = Boolean(text);

  usePreventRemove(hasUnsavedChanges, ({ data }) => {
    Alert.alert(
      "Discard changes?",
      "You have unsaved changes. Discard them and leave the screen?",
      [
        {
          text: "Don't leave",
          style: "cancel",
          onPress: () => {},
        },
        {
          text: "Discard",
          style: "destructive",
          onPress: () => navigation.dispatch(data.action),
        },
      ],
    );
  });

  return (
    <TextInput
      value={text}
      placeholder="Type something…"
      onChangeText={setText}
    />
  );
};

type RootStackParamList = {
  Root: undefined;
  "Prevent Back": undefined;
};

type RootNavigationProps = NativeStackScreenProps<RootStackParamList, "Root">;

type PreventBackNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  "Prevent Back"
>;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  root: {
    backgroundColor: "salmon",
    flex: 1,
  },
});

export default App;
