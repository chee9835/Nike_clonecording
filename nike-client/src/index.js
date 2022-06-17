import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import dummyContents from './data/dummyData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dummyContents={dummyContents} />
  </React.StrictMode>
);

