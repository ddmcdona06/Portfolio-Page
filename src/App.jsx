import './App.css';
import Home from './components/Home';
import MyStory from './components/MyStory';
import Projects from './components/Projects';
import Resume from './components/Resume'
import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/MyStory" element={<MyStory/>} />
          <Route path="/Projects" element={<Projects/>} />
          <Route path="/Resume" element={<Resume/>} />
        </Routes>
    </BrowserRouter>
  );
}
