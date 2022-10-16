import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbars from './components/navbar/navbar.component';

function App() {
    return ( 
        <div className = "App" >
            <Routes>
                <Route path="/" element={<Navbars/>} />
            </Routes>
        </div>
    );
}

export default App;