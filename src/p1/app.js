
import React from "react"
//import ''
import QuoteComponent from './component/QuoteComponent'



let quoteurl ="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

let arrColor =['#1abc9c','#3498db', '#f1c40f','#ecf0f1','#2c3e50','#7f8c8d','#273c75','#353b48','#487eb0','#485460']

class RandomQoute extends React.Component{

    constructor(){
        super()
         this.handleNewQuote = this.handleNewQuote.bind(this);

        this.state={
        quotes:[], // load quotes insided arr
        bodyQuotes:'',  // a state that hold quotes , and update later 
        color:'#3498db',
        isLoaded:false,
      }
     
    }
     
    componentDidMount(){
       fetch(quoteurl).then(res => res.json())
      .then(res => 
        {
          setTimeout(()=>{ this.setState({
              isLoaded:true,
              quotes:res.quotes,
          
            },this.handleNewQuote)}) // genereate current quote})
    
        },4000)
       
    }
    handleNewQuote =()=>{
      
        var  {quotes}= this.state
           const randomColor = GenerateRandomQuote(arrColor);
            const randomQuote =GenerateRandomQuote(quotes);  // var hold func genereate new quote
            this.setState({color:randomColor,bodyQuotes:GenerateRandomQuote(quotes)}) 
    }
     
 // didin't do any thing for genrateting random Q whe /**[sloved]
 // the probplem the data only  fetch when i click the random btn , not when page load /*[sloved] */
    render(){
  
        const {isLoaded ,color, bodyQuotes} = this.state;
        if(!isLoaded){
            return  <div style={{fontSize:'40px', marginBottom:'-50%',fontWeight:700}}>loading...</div>
        }else{
          return (
              <div>
                  <QuoteComponent CurrentQuote={bodyQuotes} handleNewQuote={this.handleNewQuote} AccentColor={color}/>
              </div>
            )
        }      
       
    }

    
    
}


function GenerateRandomQuote(arr) {
        let random = Math.floor(Math.random() * arr.length ) /// gereate random quote () based on quotes in array 

        console.log(arr[random])
        return arr[random]
};


function Loaded(props) {
  setTimeout((props)=>{
    return <div>{props.load}</div>
  },2000)
  
}
export  default  RandomQoute