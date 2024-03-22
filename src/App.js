import './App.css';
import Advert from './Components/Advert';
import Feed from './Components/Feed';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Advert />
      <Feed />
    </div>
  );
}

export default App;
