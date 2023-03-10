import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PromiseRejectionHandler from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PromiseRejectionHandler />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
