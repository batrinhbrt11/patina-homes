import './App.css';
import NavBar from "./NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Product from "./Product/Product";
import Footer from './Footer';
import Project from './Project/Project';
import ProjectDetail from './Project/ProjectDetail';
import Service from './Service/Service';

function App() {
 

  return (
    <div className="App">
    <Router>
    <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route   path="/product" exact  element={<Product />} />
        <Route path='/project' exact  element={<Project />} />
        <Route path='/service' exact  element={<Service />} />
        <Route  path='/project/:id' exact  element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Router>

  </div>
  );
}

export default App;
