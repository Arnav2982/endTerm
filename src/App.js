
import './App.css';
import Home from './pages/home'
import Added from './pages/Added'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import About from './pages/about';
import Contact from './pages/contact';
import Navbar from './components/Navbar';
import Thank from './pages/thanks';
import SignIn from './pages/signin';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>        
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/thank' element={<Thank/>}></Route>
        <Route path='/added' element={<Added/>}></Route>
        <Route path='/signin' element={<SignIn/>}></Route>
      </Routes>
    </Router>

      
    </div>
  );
}

export default App;
