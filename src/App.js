import React from 'react';
import Starting from './components/Starting/Starting';
import Statics from './components/Statics/Statics';
import Videoplayer from './components/Videoplayer/Videoplayer';
import Center from './components/Center/Center';
import JElement from './components/JElement/JElement';
import Appart from './components/Appart/Appart';
import Last from './components/Last/Last';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Starting />
      <Statics />
      <Videoplayer />
      <Center />
      <JElement />
      <Appart />
      <Last />
      <Footer />
    </div>
  );
}
export default App;
