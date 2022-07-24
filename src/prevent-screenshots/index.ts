import { NativeModules, Platform } from 'react-native';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const NativePreventScreenshots =
  Platform.OS === 'android'
    ? isTurboModuleEnabled
      ? require('../NativePreventScreenshots').default
      : NativeModules.PreventScreenshots
    : null;

class _PreventScreenshots {
  private _isPrevented = false;

  /**
   * Starts preventing screenshots
   *
   * @returns A boolean indicating wether screenshots are prevented or not
   */
  start(): Promise<boolean> {
    if (Platform.OS === 'ios') {
      this._isPrevented = true;
      return Promise.resolve(true);
    }

    return NativePreventScreenshots.start();
  }

  /**
   * Stops preventing screenshots
   *
   * @returns A boolean indicating wether screenshots are prevented or not
   */
  stop(): Promise<boolean> {
    if (Platform.OS === 'ios') {
      this._isPrevented = false;
      return Promise.resolve(false);
    }

    return NativePreventScreenshots.stop();
  }

  /**
   * @returns A boolean indicating wether screenshots are prevented or not
   */
  isPrevented(): Promise<boolean> {
    if (Platform.OS === 'ios') {
      return Promise.resolve(this._isPrevented);
    }

    return NativePreventScreenshots.isPrevented();
  }
}

export const PreventScreenshots = new _PreventScreenshots();
