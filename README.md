# react-promise-rejection-handler

In React, an [Error Boundary](https://reactjs.org/docs/error-boundaries.html) captures and handles unhandled exceptions. They are a great way to centralize error handling.

Error Boundaries work great for synchronous code. However, they can't catch unhandled rejections thrown by asynchronous code involving Promises.
This makes errors in asynchronous code harder to spot and leaves the user none-the-wiser that anything has gone wrong.

`react-promise-rejection-handler` is a simple component that captures unhandled Promise rejections and forwards them to your Error Boundary, so you can handle them as you do any other error.

## Installation

`yarn add react-promise-rejection-handler`

## Usage

Import the `PromiseRejectionHandler` component and nest it directly underneath your Error Boundary:

```jsx
import PromiseRejectionHandler from 'react-promise-rejection-handler';

const App = () => (
  <ErrorBoundary>
    <PromiseRejectionHandler>
      {/*... rest of your app*/}
    </PromiseRejectionHandler>
  </ErrorBoundary>
);
```

That's it, now unhandled promise rejections will be caught by your Error Boundary.
