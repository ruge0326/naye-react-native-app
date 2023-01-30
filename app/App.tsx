/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StatusBar, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View className="flex-1 items-center justify-center bg-blue-300">
      <Text>
        {new Date().toLocaleString()}
        {' Tailwind'}
      </Text>
      <StatusBar />
    </View>
  );
}

export default App;
