
import './App.css';
import Navbar from './Navbar';

function App() {

  let headerInfo={
    email:"murari@eltcorporate.com",
    phone:'9354998515'
  }
  return (
    <div className="App">
      <p className='p'>Welcome to my world</p>
      <header/>
      <Navbar headerInfo={headerInfo}>
        <h1>Welcome to navbar section</h1>
      </Navbar>
      
    </div>
  );
}

export default App;
