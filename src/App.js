import React,{useState} from 'react';
import './App.css';
import Alert from './Components/Alert';

// import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#0d2a3d";
      showAlert("Dark Mode is Enabled ","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode is Enabled ","success");
    }
  }

  const showAlert=(message,type)=>{
      setAlert({
          msg:message,
          type:type

  })
  setTimeout(() => {
    setAlert(null);
  }, 1000);
  }
  return (
    <>
      <Navbar title = "TextUtils" aboutText="About"  toggleMode={toggleMode} mode={mode}/>
      <Alert  alert={alert}/>
      
      <div className="container ">
      <Textform heading="Enter the Text Below " showAlert={showAlert} mode={mode}/> 

      {/* <About/> */}
      </div>
      
    </>
  );
}

export default App;
