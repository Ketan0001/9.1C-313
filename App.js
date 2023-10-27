import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './routes/LoginPage';  // Import LoginPage
import SignupPage from './routes/Signup';
import Home from './Home';
import Signout from './SignOut';


function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path='/signup' element={<SignupPage />} />
                    <Route path='/signout' element={<Signout />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
