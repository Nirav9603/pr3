import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Container/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
