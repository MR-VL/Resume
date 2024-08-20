import './App.css'
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Home from "./pages/home.tsx";
import Nav from './components/nav';
import About from "./pages/about.tsx";
import Projects from "./pages/projects.tsx";
import Contact from "./pages/contact.tsx";
import Hobbies from "./pages/hobbies.tsx";
function App() {
    const base = "Resume"
    return (
        <>
            <Router>
                <Nav/>
                <Routes>
                    <Route path="/Resume/" element={<Navigate to={`/Home`}/>}/>
                    <Route path={`${base}/Home`} element={<Home/>}/>
                    <Route path={`${base}/About`} element={<About/>}/>
                    <Route path={`${base}/Projects`} element={<Projects/>}/>
                    <Route path={`${base}/Hobbies`} element={<Hobbies/>}/>
                    <Route path={`${base}/Contact`} element={<Contact/>}/>
                </Routes>
            </Router>

        </>
    )
}

export default App
