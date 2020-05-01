import React from 'react';
import '../App.css';
import 'rmwc/dist/styles';
import Header from "./Header";
import KegControl from "./KegControl/KegControl"


function App() {
  return (
    <React.Fragment>
      <Header />
      <KegControl />
    </React.Fragment>
  )
}

export default App;
