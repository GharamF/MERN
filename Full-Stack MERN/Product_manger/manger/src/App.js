import './App.css';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="product/"/>
        <Detail path="product/:id" />
        <Update path=":id/edit"/>
      </Router>
    </div>
  );
}

export default App;
