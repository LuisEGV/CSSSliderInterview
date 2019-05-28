import React, {Component} from 'react'
import { Button } from 'semantic-ui-react'
import './App.css';

class Button1 extends Component {
  render() {
    return(
      <Button className="Button">{this.props.name}</Button>
    );
  }
}

export default Button1
