
import './App.css';
import Home from './Components/pages/home/Home';
import Login from './Components/pages/login/Login';
import Register from './Components/pages/register/Register';
import Settings from './Components/pages/settings/Settings';
import SinglePage from './Components/pages/singlepage/SinglePage';
import Write from './Components/pages/write/Write';
import Topbar from './Components/TopBar/Topbar';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function App() {
  const user = false;
  return (
    <Router>
    <div className="App">
      <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={user ? <Home/> : < Register />} />
          <Route path="/login" element={user ? <Home/> : <Login />} />
          <Route path="/write" element={user ? <Write/> : <Register/>} />
          <Route path="/settings" element={user ? <Settings /> : <Register/>} />
          <Route path="/post/:postId" element={<SinglePage/>} />
        </Routes>
      </div>
      </Router>
  );
}

export default App;
