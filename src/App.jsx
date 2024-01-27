import './App.css';
import Home from './components/Home';
import MyStory from './components/MyStory';
import Contact from './components/Contact'
import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/MyStory" element={<MyStory/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
    </BrowserRouter>
  );
}
