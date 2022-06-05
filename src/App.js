import HomePage from './pages/homePage/homePage'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Details from './components/details/details';
import { QueryProvider } from './contexts/queryContext';

function App() {
  return (
    <div className="App">
      <QueryProvider>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>} ></Route>
          <Route path='/details' element={<Details></Details>} ></Route>
        </Routes>
      </Router>
      </QueryProvider>
    </div>
  );
}

export default App;
