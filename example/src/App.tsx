import React, {useState} from 'react';
import {Button, StyleSheet, View, Text} from 'react-native';
import {
  PreventScreenshots,
  withPreventScreenshots,
} from 'react-native-prevent-screenshots';

const App = () => {
  const [isPrevented, setIsPrevented] = useState(false);

  const handleStart = async () => {
    const _isPrevented = await PreventScreenshots.start();
    setIsPrevented(_isPrevented);
  };

  const handleStop = async () => {
    const _isPrevented = await PreventScreenshots.stop();
    setIsPrevented(_isPrevented);
  };

  return (
    <View style={styles.container}>
      {isPrevented ? (
        <>
          <Text style={styles.text}>Screenshots are prevented</Text>
          <Button onPress={handleStop} title="Allow Screenshots" />
        </>
      ) : (
        <>
          <Text style={styles.text}>Screenshots are allowed</Text>
          <Button onPress={handleStart} title="Prevent Screenshots" />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    marginBottom: 20,
    fontSize: 20,
    color: '#333',
  },
});

export default withPreventScreenshots(App);
