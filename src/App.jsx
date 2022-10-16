import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbars from './components/navbar/navbar.component';
import FrontPage from './components/landingPage/landingPage.component';

function App() {
    return ( 
        <div >
            <Routes>
                <Route path="/" element={<Navbars/>}>
                    <Route index element={<FrontPage/>} />
                </Route>
                {/* <Route path="/" element={<FrontPage/>}/> */}

            </Routes>
        </div>
    );
}

export default App;