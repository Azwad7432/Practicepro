// =========CRUDPROJECT======
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Register from './Component/Register';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Read from './Component/Read';
import Update from './Component/Update';
import View from './Component/layout/View';
import Update1 from './Component/Update1';
import DependencyList from './pages/DependencyList';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/read" element={<Read/>}/>
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/update1" element={<Update1/>}/>
        <Route path="*" element={<Pagenotfound/>}/>
        <Route path="/view/:id" element={<View/>}/>
        <Route path="/dependencyList" element={<DependencyList/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>

    </div>
  );
}

export default App;
