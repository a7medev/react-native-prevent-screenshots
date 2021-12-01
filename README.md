# React Native Prevent Screenshots

Prevent Screenshots in your React Native app when needed. 🦄

## Installation

First, you need to install the package using the command above:

```sh
npm install react-native-prevent-screenshots --save
```

Or if you're using Yarn:

```sh
yarn add react-native-prevent-screenshots
```

### React Native <= 0.59

For React Native <= 0.59, there's no autolinking so you have to link the package using the command below:

```sh
react-native link react-native-prevent-screenshots
```

### Expo Managed Workflow Support

In order to use `react-native-prevent-screenshots` with Expo you have to have native `android` folder in your app, fortunately you can do that easily without ejecting just by using this command:

```sh
expo run:android
```

which will generate the `android` folder for you and allow you to use custom native code for android while still using Expo managed workflow.

> NOTE: you don't have to do the same for iOS because we use the React Native `AppState` JavaScript API on iOS.

## Usage

For iOS support you have to wrap the App component with the `withPreventScreenshots` call like this:

```js
import { withPreventScreenshots } from 'react-native-prevent-screenshots';

function App() {
  // ...
}

export default withPreventScreenshots(App);
```

Now, you can now call `PreventScreenshots.start()` and `PreventScreenshots.stop()` functions anywhere in your app to start/stop preventing screenshots.

```js
import { PreventScreenshots } from 'react-native-prevent-screenshots';

// Prevent Screenshots (returns `Promise<boolean>` of the prevention state)
PreventScreenshots.start();

// Allow Screenshots (returns `Promise<boolean>` of the prevention state)
PreventScreenshots.stop();
```
