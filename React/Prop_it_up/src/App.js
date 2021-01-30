import logo from './logo.svg';
import './App.css';
import PersonCard from './Components/PersonCard';
import { render } from '@testing-library/react';

function App() {
  const person1 = { firstName: "Jane", lastname: "Doe" , age: 45, hairColor : "Black"};
  const person2 = { firstName: "John", lastname: "Smith" , age : 88, hairColor : "Brown"};
  const person3 = { firstName: "Millard", lastname: "Fillmore" , age: 50, hairColor : "Brown"};
  const person4 = { firstName: "Maria", lastname: "Smith" , age: 62, hairColor: "Brown"};
  
  
  
  return (
    <div>
      <PersonCard person={person1}/> 
      <PersonCard person={person2}/>
      <PersonCard person={person3}/>
      <PersonCard person={person4}/>
    </div>
    );
  }


export default App;
