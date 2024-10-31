import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import "./App.css";

function App() {
  // const title = "Welcome to the 3rd Node";
  // const likes = 50;
  // const link = "www.google.com"

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />


      </div>
    </div>
  );
}

export default App;
