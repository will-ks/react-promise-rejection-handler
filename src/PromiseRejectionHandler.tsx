import { Component, PropsWithChildren } from 'react';

class PromiseRejectionError extends Error {
  promise: Promise<unknown>;
  constructor(event: PromiseRejectionEvent) {
    super(`Uncaught (in promise): ${event.reason}`);
    this.name = 'PromiseRejectionError';
    this.promise = event.promise;
  }
}

interface State {
  error?: PromiseRejectionError; // Could be an exception thrown in synchronous code or could be a rejection reason from a Promise, we don't care
}

class PromiseRejectionHandler extends Component<PropsWithChildren> {
  private promiseRejectionHandler = (event: PromiseRejectionEvent) => {
    this.setState({ error: new PromiseRejectionError(event) });
  };

  public state: State = {
    error: undefined,
  };

  componentDidMount() {
    window.addEventListener('unhandledrejection', this.promiseRejectionHandler);
  }

  componentWillUnmount() {
    window.removeEventListener(
      'unhandledrejection',
      this.promiseRejectionHandler
    );
  }
  render() {
    const { children } = this.props;
    const { error } = this.state;
    if (error) {
      throw error;
    }
    return children;
  }
}

export default PromiseRejectionHandler;
