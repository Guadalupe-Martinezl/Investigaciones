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


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    result:'',
    li:''
   }
   this.handleComparativa = this.handleComparativa.bind(this);
   // this.handleSubmit = this.handleSubmit.bind(this);
   // this.handleInputChange = this.handleInputChange.bind(this);
 }

   handleComparativa(e,result){

    // console.log("evento-->",e);
    // console.log("target o input--->",e.target.value);
     var abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q',
      'R','S','T','U','V','W','X','Y','Z',e.keyUp==26];
      var p = e.target.value.split('');
      console.log("p-->",p);
      p.forEach((element)=>{




      })

     abecedario.forEach((element, index)=> {

     letra abc ? (index==26) letra:abecedario[0] : l1:abecedario[index+1]

       if(e.target.value == element){
         console.log("primer validacion-->");
         if(index==26) {
           this.setState({
             letra:abecedario[0]
           })
          // console.log("segunda validacion-->");
          // console.log(abecedario[0]);
         return
       }
          this.setState({
            result:e.onChange,
            l1:abecedario[index+1]
          });

          console.log(abecedario[index+1]);

     }

     // if (e.keyUp==8){
     //
     // }

     });



   }

   // handleSubmit(e) {
   //     e.preventDefault();
   //     this.setState({
   //       result:''
   //     });
   //   }


   //   handleInputChange(e) {
   //     const {value, name} = e.target;
   //     // console.log(value, name);
   //     this.setState({
   //       [name]: value
   //     });
   // }


  render() {

    return (
      <form >
      <div>
      <textarea value={this.state.result} onChange={this.handleComparativa}id="textareabox" name="textarea1" placeholder="Start here..."></textarea>


      <input
        type="text"
        name="num3"
        value={this.state.l1}
        onChange={this.handleComparativa}
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
