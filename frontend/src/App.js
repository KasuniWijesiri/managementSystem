import './App.css';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/CounterFunction';
import Header from './components/header'; 
import AddStudent from './components/AddStudent';
import AllStudents from './components/AllStudents';
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
     
    <div>
      <BrowserRouter>
       <Header/>
       <Routes>
       <Route path="/add" exact  element={<AddStudent />} />
       </Routes>
       <Routes> 
       <Route path="/" exact element={<AllStudents />}/>
       </Routes>
       
       </BrowserRouter>
    </div>
    
  ); 
}

export default App;

