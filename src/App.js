import HomePage from './pages/homePage/homePage'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Details from './components/details/details';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>} ></Route>
          <Route path='/details' element={<Details></Details>} ></Route>
        </Routes>
      </Router>
      {/* <HomePage></HomePage> */}
    </div>
  );
}

export default App;
