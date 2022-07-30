import React,{useState} from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';


function App() {
  const [mode, setMode] = useState("light");
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#0d2a3d";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
      <Navbar title = "TextUtils" aboutText="About"  toggleMode={toggleMode} mode={mode}/>
      
      <div className="container ">
      <Textform heading="Enter the Text Below " mode={mode}/> 

      {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
