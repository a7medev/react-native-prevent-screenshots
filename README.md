# React Native Prevent Screenshots

Prevent Screenshots in your React Native app when needed. 🦄

## Getting started

`npm install react-native-prevent-screenshots --save`

Or

`yarn add react-native-prevent-screenshots`

### React Native <= 0.59

`react-native link react-native-prevent-screenshots`

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
