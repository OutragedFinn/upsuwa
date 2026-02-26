import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Sponsors, Contact, Events, Resources } from "./pages"
import ScrollToTop from "./setup/ScrollToTop";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/Our-Sponsors" element={<Sponsors />}/>    
              <Route exact path="/Resources" element={<Resources />}/>    
              <Route exact path="/Events" element={<Events />}/>    
              <Route exact path="/Contact-Us" element={<Contact />}/>              
            </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
    