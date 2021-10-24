import { NativeModules, Platform } from 'react-native';

const { PreventScreenshot: Native } = NativeModules;

class _PreventScreenshot {
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

    return Native.start();
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

    return Native.stop();
  }

  /**
   * @returns A boolean indicating wether screenshots are prevented or not
   */
  isPrevented(): Promise<boolean> {
    if (Platform.OS === 'ios') {
      return Promise.resolve(this._isPrevented);
    }

    return Native.isPrevented();
  }
}

export const PreventScreenshot = new _PreventScreenshot();
