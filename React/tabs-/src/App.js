import React from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Tab from './components/Tab';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      selected: 'Tab1'
    }
  }

  setSelected =(tab)=>{
    this.setState({selected:tab});
  }

  render(){
    return(
      <div className="App mt-4">
        <Tabs tabs={ ['tab1','tab2' , 'tab3']} selected ={this.state.selected} setSelected={this.setSelected}>
        <Tab  isSelected={this.state.selected ==='tab1'} >
          <p> Tab 1 Content  </p>
        </Tab>
        <Tab  isSelected={this.state.selected ==='tab2'} >
        <p> Tab 2 Content  </p>
        </Tab>
        <Tab  isSelected={this.state.selected === 'tab3'} >
        <p> Tab 3 Content  </p>
        </Tab>
        </Tabs>
      </div>
    )
  }
}


export default App;
