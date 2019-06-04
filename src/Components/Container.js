import React,{Component} from 'react';
import QuoteBox from '../Components/QuoteBox';

class Container extends Component{
  constructor(){
    super()

    this.state = {
      quotes:[],
      quote:{}
    }
  }

  componentDidMount(){
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(res => res.json())
    .then(data => this.setState({quotes:data}, ()=>{
      this.setState({quote: this.getRandomQuotes()})
    }));
  };

  getRandomQuotes = () =>{
    let min = null;
    let max = this.state.quotes.length;
    let index = Math.floor(Math.random()*(max -min)) + min;
    return this.state.quotes[index];
  };

  handleNewQuote = () =>{
    this.setState ({quote: this.getRandomQuotes()});
  };

  render(){
    const quote = this.state.quote;

    return(
      <div> 
      <QuoteBox handleNewQuote = {this.handleNewQuote} quote = {quote}/>
      </div>
    )
  }
}
export default Container;
