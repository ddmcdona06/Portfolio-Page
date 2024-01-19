import './App.css';
import Home from './components/Home';
import logo3 from './img/cropped port.png'
import PortDrawer from './components/Drawer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home/>
        <img src={logo3} className="App-logo" alt="logo" />
        <PortDrawer/>
      </header>
    </div>
  );
}

export default App;
