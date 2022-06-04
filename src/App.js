import './App.css'
import Experience from './Components/Experience/Experience';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar';
import { Services } from './Components/Services/Services';
function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Intro></Intro>
     <Services/>
     <Experience/>
    </div>
  );
}

export default App;
