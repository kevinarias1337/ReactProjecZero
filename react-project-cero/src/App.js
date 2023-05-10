import './App.css';
import Header from './components/Header.js'
import Content from './components/Content';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

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
