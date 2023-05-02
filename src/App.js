import './App.css';
import Bookmarks from './components/Bookmarks';
import Header from './components/Header';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        
      </header>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/bookmarks' element={<Bookmarks/>} />
      </Routes>

    </div>
  );
}

export default App;
