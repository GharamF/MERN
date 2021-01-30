import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: "",
      list: []
    }
  }

  addinput(key, value) {
    this.setState({ [key]: value })
  }
  addtask() {
    const newTask = {
      id: 1 + Math.random(),
      value: this.state.newTask.slice()
    }
    const list = [...this.state.list];
    list.push(newTask);
    this.setState({
      list,
      newTask: ""
    })
  }
  deletTask(id) {
    const list = [...this.state.list];
    const newlist = list.filter(task => task.id !== id);
    this.setState({ list: newlist })

  }

  render() {
    return (
      <div className="App" > <div className="container">
        <div className="jumbotron jumbotron-fluid">

          <h1 class="font-italic">  Add New Task ... </h1>
          <input className="form-control" type="text" placeholder="Type Task here" value={this.state.newTask} onChange={e => this.addinput("newTask", e.target.value)} />
          <button className="btn btn-primary" onClick={() => this.addtask()}> Add Task </button>
          <br />
          <ul  className="list-group" >
            {this.state.list.map(task => {
              return (
                <li className="list-group-item" key={task.id}>
                  {task.value}
                  <button className="btn btn-dark"  onClick={() => this.deletTask(task.id)}> Delete </button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
