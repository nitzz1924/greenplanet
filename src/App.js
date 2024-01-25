import "./App.css";
import Navbar from "./components/navbar";
import Herosection from "./components/herosection";
import Whoweare from "./components/whoweare";
import Formnew from "./components/form";
import Newnature from "./components/newnature";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <Whoweare/>
      <Newnature/>
    </div>
  );
}

export default App;
