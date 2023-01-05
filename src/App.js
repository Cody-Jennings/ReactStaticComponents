import logo from './logo.svg';
import './App.css';
import Averagerating from './components/Averagerating';
import Reviews from './components/Reviews';
import Sentimentanalysis from './components/Sentimentanalysis';
import Sidebar from './components/Sidebar';
import Websitevisitors from './components/Websitevisitors';

function App() {
  return (
    <div className="App">
      <div className="main">
        <Sidebar />
        <div className="container1">
          <div className="container2">
            <Reviews />
            <Averagerating />
            <Sentimentanalysis />
            </div>
            <Websitevisitors />
          
        </div>
      </div>
    </div>
  );
}

export default App;
