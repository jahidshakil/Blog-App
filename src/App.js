
import './App.css';
import Home from './Components/pages/home/Home';
import SinglePage from './Components/pages/singlepage/SinglePage';
import Write from './Components/pages/write/Write';
import Topbar from './Components/TopBar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      {/* <Home/> */}
      {/* <SinglePage/> */}
      <Write/>
    </div>
  );
}

export default App;
