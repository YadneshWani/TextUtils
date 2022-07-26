import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
      <Navbar title = "TextUtils" aboutText="About"/>
      
      <div className="container">
      <Textform heading="Enter the Text Below "/>
      </div>
      
    </>
  );
}

export default App;
