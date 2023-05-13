import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
