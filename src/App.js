import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap'
import Login from './login';
import Landing from './landingpage';
import Dashboard from './dashboard';
import Instructor from './instructor';
import ReportForm from './reportform';
import GradeReport from './gradereport';
import Help from './help';
import Logged from './logged-in';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/logged-in' element={<Logged/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/gradereport' element={<GradeReport/>}/>
            <Route path='/reportform' element={<ReportForm/>}/>
            <Route path='/instructor' element={<Instructor/>}/>
            <Route path='/help' element={<Help/>}/>
          </Routes>
        </Router>
        <div className="content">

        </div>
      </div>
    
  );
}

export default App;