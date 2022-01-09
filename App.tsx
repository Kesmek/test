import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return <SafeAreaView style={styles.root} />;
};

const styles = StyleSheet.create({
  root: { backgroundColor: 'salmon', height: '100%', width: '100%' },
});

export default App;
