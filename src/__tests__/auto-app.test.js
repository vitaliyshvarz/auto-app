import React from 'react';
import ReactDOM from 'react-dom';
import AutoApp from '../AutoApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AutoApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
