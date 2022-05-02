import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css' // Bootstrap Css Rules
import DataTable from './DataTable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <DataTable/>
  </React.StrictMode>
);

