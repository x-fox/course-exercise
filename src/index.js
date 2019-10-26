import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import InputNumber from './inputNumber'
import confirm from './confirm'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: 100,
      defaultValue: 200
    }
  }

  render() {
    return(
      <div>
        <InputNumber value={this.state.value} onChange={(e) => {this.setState({ value: e.target.value});console.log(this.state)}} /><br />
        <InputNumber defaultValue={this.state.defaultValue} onChange={(e) => { console.log(this.state) }} />
      </div>
    )
  }

  async componentDidMount(){
    let res = await confirm()
    console.log('functional component', res)
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
