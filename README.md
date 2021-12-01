# React Native Prevent Screenshots

Prevent Screenshots in your React Native app when needed. 🦄

## Getting started

`npm install react-native-prevent-screenshots --save`

Or

`yarn add react-native-prevent-screenshots`

### React Native <= 0.59

`react-native link react-native-prevent-screenshots`

### Expo Managed Workflow Support

In order to use `react-native-prevent-screenshots` with Expo you have to have native `android` folder in your app, fortunately you can do that easily without ejecting just by using this command:

```sh
expo run:android
```

which will generate the `android` folder for you and allow you to use custom native code for android while still using Expo managed workflow.

> NOTE: you don't have to do the same for iOS because we use the React Native `AppState` JavaScript API on iOS.

## Usage

For iOS support you have to wrap the App component with `withPreventScreenshots`:

```javascript
import { withPreventScreenshots } from 'react-native-prevent-screenshots';

const App = () => {
  // ...
};

export default withPreventScreenshots(App);
```

You can now call `PreventScreenshots.start()` and `PreventScreenshots.stop()` functions in your app.

```javascript
import { PreventScreenshotss } from 'react-native-prevent-screenshotss';

// Prevent Screenshots (returns `Promise<boolean>` of the prevention state)
PreventScreenshots.start();

// Allow Screenshots (returns `Promise<boolean>` of the prevention state)
PreventScreenshots.stop();
```
