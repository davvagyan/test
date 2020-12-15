// import logo from './logo.svg';
import './App.css';
import React from 'react'
import GradientContainer from './gradientItem/gradientItem';
import GradientFormContainer from './gradientsFormContainer';


class App extends React.Component{
  render() {
   return <div className="AppWrapper">
     <div> 
      <GradientFormContainer/>
      </div>   
      <div className='GradientContainer'> 
      <GradientContainer/>
      </div>   
   </div>
  };
}

export default App;

