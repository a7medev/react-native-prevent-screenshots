import React, { useEffect, useRef, useState } from 'react';
import { AppState, Animated, StyleSheet, View } from 'react-native';

import { PreventScreenshot } from '../prevent-screenshot';

export function withPreventScreenshot<P = {}>(App: React.FC<P>): React.FC<P> {
  return (props) => {
    const [showOverlay, setShowOverlay] = useState(false);

    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(opacity, {
        toValue: showOverlay ? 1 : 0,
        duration: 250,
        useNativeDriver: true,
      }).start();
    }, [showOverlay, opacity]);

    useEffect(() => {
      const { remove } = AppState.addEventListener('change', async (state) => {
        const isPrevented = await PreventScreenshot.isPrevented();
        if (isPrevented) {
          return setShowOverlay(state !== 'active');
        }

        if (!showOverlay) {
          setShowOverlay(false);
        }
      });

      return () => remove();
    }, []);

    return (
      <View style={styles.container}>
        <App {...props} />
        <Animated.View
          style={[StyleSheet.absoluteFill, styles.overlay, { opacity }]}
          pointerEvents={showOverlay ? 'auto' : 'none'}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    backgroundColor: 'black',
  },
});
