import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react';
import UserForm from './Components/UserForm';
import Result from './Components/Result'

function App() {
    const [userinput,setState] = useState({
        firstname : "", lastname : "",email:"",
        password:"", Confrim_pass :""});
       return(
           <div className="App">
               <UserForm  input={userinput} setInputs={setState} />
               <Result data={userinput} />
           </div>
       )
}
export default App;
