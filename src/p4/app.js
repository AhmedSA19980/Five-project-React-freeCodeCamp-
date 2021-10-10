import React from 'react';
import Number from './component/number';
import Display from "./component/display";

import Switch from 'react-bootstrap/esm/Switch';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
import { Prev } from 'react-bootstrap/esm/PageItem';




const isOperator = /[*/+‑]/, // *  match one of  operator in group
 endsWithOperator = /[*+-/]$/, // * num ends with operator
  endsWithNegativeSign = /\d[*/+‑]{1}-$/,
  IsNumber = /[0-9]/;

class Calculater extends React.Component{
    constructor(props){
        super(props)
        this.state=({
           currentValue:'0',
           preValue:"",
           formula:"",
            
           
       
        });
      
        this.handleNumber = this.handleNumber.bind(this);
        this.handleClear =this.handleClear.bind(this);
        this.handleOperator =  this.handleOperator.bind(this);
        this.handleDecimal =  this.handleDecimal.bind(this);
        this.handleEquals = this.handleEquals.bind(this);
    }
    
    
    handleClear() {
		  this.setState({ currentValue:'0',preValue:'0' ,formula: "",});
	}
     
   

	handleEquals(num) {	
    console.log(this.state.currentValue)
	 console.log(num.target.name)
   let state = this.state.formula
   const resultOp = Math.round(1000000000000 * eval(state)) / 1000000000000;
    
   if(this.state.formula){
        this.setState({ 
           currentValue:resultOp,
           preValue:resultOp,
           formula:state +'=' +resultOp,
          });
        }
        else if (this.state.formula===''){
          this.setState({ 
           currentValue:'None',
           preValue:'',
           formula:'',
          });
          setTimeout(() => {
            this.handleClear()
          }, 1000);

        }
     
       
}

	

	handleDecimal(e) {
	
      const regex =  /^[/*-+]?[0-9]+\.[^0-9]+$/ 
	     const regex1 = /[^+1-9.]+[/*-+]$/g
     if(this.state.currentValue === '0' && !this.state.formula.includes('.')){
        this.setState({
         currentValue:'0.',
         formula:!this.state.formula.includes('0') ?this.state.formula.concat('0.'):this.state.formula.concat('.')
       });    
     
    
   }//  Use else if to specify a new condition to test, if the first condition is false

   else if(!this.state.currentValue.includes('.') ){
        if(isNaN(this.state.formula) && endsWithOperator.test(this.state.formula)){
          this.setState({
            currentValue:'0.',
            formula:this.state.formula.concat('0.') 
          });
      }
   } 
    
   
   
  
 }
    

    
     

    
     
     //** When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.  */
   
     
  
	 handleNumber(num) {
	  var formula = this.state.formula; 
      var currentValue =  this.state.currentValue;
      var preValue =  this.state.preValue
      if(currentValue !==''){

        this.setState({
           formula:formula+ num,
           currentValue: num,
            preValue:formula + num})

        if(!endsWithOperator.test(formula) && formula.includes('=')) {
          this.setState({formula: num,
             currentValue: num })
      }else {

         this.setState({formula:formula ==='0'?num: formula+num , 
          currentValue: num})
      }
    } 
  }  

	// * write down all operator scenario , states
   
	handleOperator(operator) {
	 
	 if(this.state.currentValue){
    const {formula ,  currentValue ,preValue}  =  this.state;
     // this.setState({currentValue:operator})
    /*if(this.state !=='' && formula.includes('=')){
      this.setState({formula:currentValue + operator})
    }*/
     if(!endsWithOperator.test(formula) ){ //* if not end  with these match operator ! add operators 
     // 
        this.setState({
          preValue: formula,
             formula:preValue +operator
     
        })
		}
    else if(!endsWithNegativeSign.test(formula)){

			this.setState({
        formula:(endsWithNegativeSign.test(formula + operator)?formula:preValue)
         + operator})
    }
  }
  }
	  

  

    

    render(){
       
        const {formula, currentValue} =  this.state;
        return(
          <div className={'wrapper'}>
            <div className={'displayMain'} id='display'>
                  <div className={'action'}>
                <Display display={formula} />
                <Display display={currentValue}  />
                </div>
                <Number 
                handleNumber={e =>this.handleNumber(e)}
                handleOperator={e => this.handleOperator(e)}
                handleEqual={this.handleEquals}
                handleClear={this.handleClear}
              handleDecimal={this.handleDecimal}
                />
          </div>
        </div>
        )
    }

}






export default Calculater