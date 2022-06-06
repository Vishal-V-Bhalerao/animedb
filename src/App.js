import HomePage from './pages/homePage/homePage'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Details from './components/details/details';
import { QueryProvider } from './contexts/queryContext';
import CardList from './components/cardList/cardList';
import CommonLayout from './layouts/layout';

function App() {
  return (
    <div className="App">
      <QueryProvider>
      <Router>
        <Routes>
          <Route path='/' element={<CommonLayout><HomePage/></CommonLayout>} ></Route>
          <Route path='/details/:id' element={<CommonLayout><Details/></CommonLayout>}></Route>
          <Route path='/list/:sortType' element={<CommonLayout><CardList/></CommonLayout>}></Route>
        </Routes>
      </Router>
      </QueryProvider>
    </div>
  );
}

export default App;
