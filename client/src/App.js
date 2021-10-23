
import './App.css';
import {Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import Login from './component/Login';
import About from './component/About';
import Sginup from './component/Sginup';
import Home from './component/Home';
function App() {
  return (
    <div >
     <Navbar/>
     <Route exact path='/'>
       <Home/>
       </Route>

       <Route path='/login'>    
       <Login/>
       </Route>

       <Route path='/about'>
       <About/>
       </Route>

       <Route path ='/sginup'>
       <Sginup/>
       </Route>
    </div>
  );
}

export default App;
