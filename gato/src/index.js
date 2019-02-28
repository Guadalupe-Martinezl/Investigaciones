import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled, {css}from 'styled-components'

class Game extends React.Component {
  constructor(props) {
    super(props);
    var num1 = 35,
        num2 = 50,
        num3 = 45,
        result= (num1>num3)?
          num1
          :
          num3;
    var    result2 = (num2>num3)?
        num2
        :
        num3;
    var result3 = (result<result2)?
    result
    :
    result2;

        console.log("el numero de en medio es--->",result3);


  }




  render() {
    return (
      <div>

      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
