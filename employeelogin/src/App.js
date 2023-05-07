import Registration from './Components/Registration';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../src/assets/css/style.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          
          <Route exact path='/' element={<Registration/> } />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
