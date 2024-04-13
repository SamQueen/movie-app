import { useState } from 'react';
import './App.css';
import Advert from './Components/Advert';
import Feed from './Components/Feed';
import Navbar from './Components/Navbar';
import SmokeScreen from './Components/SmokeScreen';

function App() {
  const [showSmokeScreen, setShowSmokeScreen] = useState(false);

  return (
    <div className="App">

      {showSmokeScreen ? <SmokeScreen /> : "" }

      <Navbar />
      <Advert />
      <Feed setShowSmokeScreen={setShowSmokeScreen} />
    </div>
  );
}

export default App;
