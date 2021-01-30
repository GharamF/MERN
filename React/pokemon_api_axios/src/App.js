import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Pokemon from './Components/Pokemon'



function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="jumbotron">
        <Pokemon />
        </div>
      </div>
    </div>
  );
}

export default App;
