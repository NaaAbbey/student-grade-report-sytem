import './App.css';
import Login from './login';
import Home from './home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path='/home' element={<Home/>}/>
          </Routes>
        </Router>
        <div className="content">

        </div>
      </div>
    
  );
}

export default App;