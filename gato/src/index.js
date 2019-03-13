import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled, {css}from 'styled-components'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Input = styled.input.attrs(({ size }) => ({
  margin: size || "1em",
  padding: size || "1em"
}))`
  color:black ;
  font-size: 1em;
  border: 2px solid orange;
  border-radius: 3px;
`;



class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    result:'',
    letra:''
   }
   this.handleTexto = this.handleTexto.bind(this);
 }

   handleTexto(e,letra){

     var cadena = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

     var indices = [];
     for(var i = 0; i < cadena.length; i++) {
  	 if (cadena[i].toLowerCase() === letra) indices.push(i);
     var result = indices.length;
  }
    console.log("indices-->",indices.length);
    return result


   }


  render() {

    return (
      <form >
        <div>
          <textarea
          value={this.state.letra}
          onChange={this.handleTexto}
          id="textareabox"
          name="textarea1"
          placeholder="Start here...">
          </textarea>


          <Input
            type="text"
            name="letra"
            value={this.state.result}
            onChange={this.handleTexto}
            />

        </div>
      </form>
    );
  }
}



// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
