import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';
import Form from './components/form';
import People from './components/people';
import Planets from './components/planets';



function App() {
  return (
    <div className="container">
      <h1>API-walker</h1>
      <Form />
      <Router>
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
      </Router>
    </div>
  );
}

export default App;