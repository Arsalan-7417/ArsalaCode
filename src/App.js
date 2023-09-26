import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
//import About from './components/About';
import React, {useSate} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";



function App() {
  // const[mode2,setMode2]=useState('light')
  // const toggleMode2=()=>
  // {
  //   if(mode2 === 'light')
  //   {
  //     setMode=('dark')
  //     document.body.style.backgroundColor= 'red'
  //   }
  //   else{
  //     setMode2('light')
  //     document.body.style.backgroundColor= 'white'
  //   }
  // }
  const [mode,setMode]=useState("light")
  const [alert, setAlert] = useState(null);
  const [counter, setCounter]=useState(0);

  const addValue=()=>
  {
    if(counter<20){
    setCounter(counter+1);
    }
  }
  const removeValue=()=>
  {
    if(counter>0)
    setCounter(counter-1);
    
  
  
}
  
  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      type:type,
    })
  
  setTimeout(() => {
    setAlert(null);
  }, 2000);
}
  const toggleMode=()=>
  {
    if(mode=== 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#172e59'
      showAlert('Dark Mode Has Been Enabled', "Success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
     showAlert('Light Mode Has Been Enabled', "Success")
    }
  }
  return (
    <>
    
 <Navbar tittle="textutiles" AboutText="About textutiles" mode={mode} toggleMode={toggleMode}/>
<Alert alert= {alert}/>
{/* <router> */}  
  {/* <Navbar Tittle="Textuties" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>  */}
<div className ="container">
 {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route  exact path="/"> */}
           {<TextForm showAlert={showAlert} heading="Enter your Text to analyze Below"/> }
          {/* </Route>
        </Switch> */          }
    </div>       
    {/* </router> */}
    <>
      <h3>Quantity</h3>
      <h4>counter value:{counter}</h4>
     
      <button type="button" className="btn btn-secondary  mx-1"onClick={addValue}>Add Value</button>
      <button type="button" class="btn btn-secondary  mx-1" onClick={removeValue}>Remove Value</button>
      
    </>
    </>
  );
}

export default App;
