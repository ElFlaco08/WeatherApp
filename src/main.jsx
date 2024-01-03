import React from 'react';
import ReactDOM from 'react-dom/client';
import { WheatherApp } from './WheatherApp';

import { ScopedCssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScopedCssBaseline>
      <WheatherApp />
    </ScopedCssBaseline>
  </React.StrictMode>
);
