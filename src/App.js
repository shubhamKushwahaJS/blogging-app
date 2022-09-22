import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import NewBlog from './Components/NewBlog';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route path='/Dashboard' element={<Dashboard />}/>
        <Route path='/Newblog' element={<NewBlog />}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
