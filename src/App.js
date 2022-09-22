import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Programmation from "./pages/Programmation";
import Parcours from "./pages/Parcours";
import Contact from "./pages/Contact";

function App() {
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/programme" element={<Programmation/>} />
          <Route path="/parcours" element={<Parcours/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
