import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  GestureHandlerRootView,
  RectButton,
} from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const { Navigator, Screen } = createNativeStackNavigator();

const FirstScreen = ({ navigation }: FirstScreenNavigationProp) => {
  return (
    <View style={styles.root}>
      <RectButton
        style={styles.button}
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SecondScreen = ({ navigation }: SecondScreenNavigationProp) => {
  return <View style={styles.root} />;
};

const App = () => {
  return (
    <GestureHandlerRootView style={styles.flex}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Navigator>
            <Screen name="First" component={FirstScreen} />
            <Screen name="Second" component={SecondScreen} />
          </Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  root: { backgroundColor: 'salmon', height: '100%', width: '100%' },
  button: { backgroundColor: 'blue', height: 100, width: 200 },
  flex: { flex: 1 },
});

type RootStackParamList = {
  First: undefined;
  Second: undefined;
};
type FirstScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'First'
>;
type SecondScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'Second'
>;

export default App;
