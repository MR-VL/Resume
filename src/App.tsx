import './App.css'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Home from "./pages/home.tsx";
import Nav from './components/nav';

function App() {
    const base = "Resume"
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/Resume/" element={<Navigate to={`/Home`} />} />
          <Route path={`${base}/Home`} element={<Home/>} />

        </Routes>
      </Router>

    </>
  )
}

export default App
