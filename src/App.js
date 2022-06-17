import './App.css';
import 'tachyons';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Users from './components/Users/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
