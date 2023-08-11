import React from 'react';
import BasicGrid from './Page';
import TemporaryDrawer from './Sidebar';

function App() {
  return (
    <div>
      <TemporaryDrawer />
      <BasicGrid />
    </div>
  );
}

export default App;