# React Native Prevent Screenshot

Prevent Screenshots in your React Native app when needed. 🦄

## Getting started

`npm install react-native-prevent-screenshot --save`

Or

`yarn add react-native-prevent-screenshot`

### React Native <= 0.59

`react-native link react-native-prevent-screenshot`

## Usage

For iOS support you have to wrap the App component with `withPreventScreenshot`:

```javascript
import { withPreventScreenshot } from 'react-native-prevent-screenshot';

const App = () => {
  // ...
};

export default withPreventScreenshot(App);
```

You can now call `PreventScreenshot.start()` and `PreventScreenshot.stop()` functions in your app.

```javascript
import { PreventScreenshots } from 'react-native-prevent-screenshots';

// Prevent Screenshots (returns `Promise<boolean>` of the prevention state)
PreventScreenshot.start();

// Allow Screenshots (returns `Promise<boolean>` of the prevention state)
PreventScreenshot.stop();
```
