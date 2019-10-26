import React from 'react';
import './index.css';

class InputNumber extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  get controlled() {
    return 'value' in this.props
  }
  get value() {
    if(this.controlled) {
      return this.props.value
    } else {
      return this.state.value
    }
  }
  handleClick(e) {
    if(!this.controlled) {
      this.setState({ value: e.target.value })
    }; 
    this.props.onChange(e)
  }
  componentDidMount() {
    if(!this.controlled) {
      this.setState({
        value: this.props.defaultValue
      })
    } 
  }
  render() {
    return (
      <input type="number" className="input-number" value={this.value} onChange={ (e) => { this.handleClick(e) } }>
      </input>
    );
  }
}

export default InputNumber
