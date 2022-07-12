import React from 'react'
import Header from './Header';
import KegControl from './KegControl/KegControl';
function App() {
  return (
    <React.Fragment>
      <div className="App">
      <Header/>
      <KegControl/>
      </div>
    </React.Fragment>
  );
}

export default App;
