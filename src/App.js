import logo from './logo.svg';
import './menu.css';
import './style.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Main />
        <Footer />
      </header>
    </div>
  );
}

export default App;
